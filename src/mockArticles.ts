import type { Article } from "./types";

export const mockArticles: Article[] = [
	{
		id: "1",
		category: "ai",
		publishedAt: "2026-06-20",
		translations: {
			ja: {
				title: "AIモデルとは",
				excerpt:
					"「モデル」という言葉の由来から、AIモデルの正体までを解説します。",
				body: "...",
			},
			en: {
				title: "What is an AI Model",
				excerpt:
					'From the origin of the word "model" to what an AI model actually is.',
				body: "...",
			},
		},
	},
	{
		id: "2",
		category: "frontend",
		publishedAt: "2026-06-22",
		translations: {
			ja: {
				title: "Gitとは何か",
				excerpt:
					"バージョン管理の仕組みを、料理のレシピ履歴に例えて説明します。",
				body: "...",
			},
			en: {
				title: "What is Git",
				excerpt: "Explaining version control using a recipe history analogy.",
				body: "...",
			},
		},
	},
	{
		id: "3",
		category: "security",
		publishedAt: "2026-06-24",
		translations: {
			ja: {
				title: "二段階認証とは",
				excerpt: "パスワードだけでは足りない理由と、二段階認証の仕組み。",
				body: "...",
			},
			en: {
				title: "What is Two-Factor Authentication",
				excerpt: "Why passwords alone aren't enough, and how 2FA works.",
				body: "...",
			},
		},
	},
];
