import { load } from "js-yaml";

interface ParsedFrontmatter {
	meta: Record<string, unknown>;
	body: string;
}

export function parseFrontmatter(raw: string): ParsedFrontmatter {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) {
		return { meta: {}, body: raw };
	}
	try {
		const meta = (load(match[1]) as Record<string, unknown>) ?? {};
		return { meta, body: match[2] };
	} catch {
		return { meta: {}, body: raw };
	}
}
