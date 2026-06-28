import type { Locale } from "./types";

export const categories: { slug: string; label: Record<Locale, string> }[] = [
	{ slug: "ai", label: { ja: "AI", en: "AI" } },
	{
		slug: "cloud-infra",
		label: { ja: "クラウド・インフラ", en: "Cloud & Infrastructure" },
	},
	{ slug: "frontend", label: { ja: "フロントエンド技術", en: "Frontend" } },
	{ slug: "security", label: { ja: "セキュリティ", en: "Security" } },
	{
		slug: "people-history",
		label: { ja: "人物・歴史", en: "People & History" },
	},
];
