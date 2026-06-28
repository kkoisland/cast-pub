export type Locale = "ja" | "en";
export interface ArticleContent {
	title: string;
	excerpt: string;
	body: string;
}

export interface Article {
	id: string;
	category: string; // slug from categories.ts, not a display label
	publishedAt: string;
	updatedAt?: string; // set only when content is added or edited after publishing
	translations: Record<Locale, ArticleContent>;
}
