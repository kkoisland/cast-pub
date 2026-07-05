import type { Article, ArticleFrontmatter } from "./types";
import { parseFrontmatter } from "./utils/frontmatter";

const jaFiles = import.meta.glob<string>("/content/ja/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

const enFiles = import.meta.glob<string>("/content/en/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
});

function toExcerpt(body: string): string {
	return body
		.replace(/^#+\s.*/gm, "")
		.trim()
		.slice(0, 100);
}

export const articles: Article[] = Object.entries(jaFiles)
	.filter(([path]) => !path.split("/").pop()?.startsWith("_"))
	.map(([path, raw]) => {
		const { meta, body } = parseFrontmatter(raw);
		const filename = path.split("/").pop() ?? "";
		const enRaw = enFiles[`/content/en/${filename}`];
		const enParsed = enRaw ? parseFrontmatter(enRaw) : null;
		const enBody = enParsed?.body ?? body;
		const enTitle = enParsed
			? (enParsed.meta as unknown as ArticleFrontmatter).title
			: (meta as unknown as ArticleFrontmatter).title;
		return { fm: meta as unknown as ArticleFrontmatter, body, enBody, enTitle };
	})
	.filter(({ fm }) => fm.published)
	.map(({ fm, body, enBody, enTitle }) => ({
		id: fm.id,
		category: fm.category,
		publishedAt: fm.publishedAt,
		updatedAt: fm.updatedAt,
		translations: {
			ja: { title: fm.title, excerpt: toExcerpt(body), body },
			en: { title: enTitle, excerpt: toExcerpt(enBody), body: enBody },
		},
	}));
