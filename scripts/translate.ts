import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import Anthropic from "@anthropic-ai/sdk";

const constantsContent = readFileSync("src/constants.ts", "utf-8");
const flagMatch = constantsContent.match(
	/ENABLE_MULTILINGUAL\s*=\s*(true|false)/,
);
if (flagMatch?.[1] !== "true") {
	console.log("ENABLE_MULTILINGUAL is false. Skipping translation.");
	process.exit(0);
}

const cachePath = "scripts/translate-cache.json";
const cache: Record<string, string> = existsSync(cachePath)
	? JSON.parse(readFileSync(cachePath, "utf-8"))
	: {};

const client = new Anthropic();

if (!existsSync("content/en")) {
	mkdirSync("content/en", { recursive: true });
}

const files = readdirSync("content/ja").filter(
	(f) => f.endsWith(".md") && !f.startsWith("_"),
);

for (const filename of files) {
	const raw = readFileSync(`content/ja/${filename}`, "utf-8");
	const hash = createHash("sha256").update(raw).digest("hex");

	if (cache[filename] === hash) {
		console.log(`Skipping ${filename} (no changes)`);
		continue;
	}

	const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!fmMatch) {
		console.log(`Skipping ${filename} (no frontmatter)`);
		continue;
	}

	const frontmatter = fmMatch[1];
	const body = fmMatch[2].trim();

	if (!frontmatter.includes("published: true")) {
		console.log(`Skipping ${filename} (not published)`);
		continue;
	}

	const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
	const jaTitle = titleMatch?.[1]?.trim() ?? "";

	console.log(`Translating ${filename}...`);

	const titleRes = await client.messages.create({
		model: "claude-haiku-4-5-20251001",
		max_tokens: 200,
		messages: [
			{
				role: "user",
				content: `Translate this Japanese article title to English. Output only the translated title.\n\n${jaTitle}`,
			},
		],
	});
	const enTitle = (titleRes.content[0] as { text: string }).text.trim();

	const bodyRes = await client.messages.create({
		model: "claude-haiku-4-5-20251001",
		max_tokens: 4096,
		messages: [
			{
				role: "user",
				content: `Translate the following Japanese Markdown article to English. Preserve all Markdown formatting. Output only the translated content.\n\n${body}`,
			},
		],
	});
	const enBody = (bodyRes.content[0] as { text: string }).text.trim();

	const enFrontmatter = frontmatter.replace(
		/^title:\s*.+$/m,
		`title: ${enTitle}`,
	);
	writeFileSync(
		`content/en/${filename}`,
		`---\n${enFrontmatter}\n---\n${enBody}\n`,
		"utf-8",
	);

	cache[filename] = hash;
	console.log(`Done: ${filename}`);
}

writeFileSync(cachePath, JSON.stringify(cache, null, 2), "utf-8");
console.log("Translation complete.");
