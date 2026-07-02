import type { Article, ArticleFrontmatter } from "./types";
import { parseFrontmatter } from "./utils/frontmatter";

const files = import.meta.glob<string>("/content/*.md", {
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

export const articles: Article[] = Object.entries(files)
	.filter(([path]) => !path.split("/").pop()?.startsWith("_"))
	.map(([, raw]) => {
		const { meta, body } = parseFrontmatter(raw);
		return { fm: meta as unknown as ArticleFrontmatter, body };
	})
	.filter(({ fm }) => fm.published)
	.map(({ fm, body }) => ({
		id: fm.id,
		category: fm.category,
		publishedAt: fm.publishedAt,
		updatedAt: fm.updatedAt,
		translations: {
			ja: { title: fm.title, excerpt: toExcerpt(body), body },
			en: { title: fm.title, excerpt: toExcerpt(body), body },
		},
	}));
