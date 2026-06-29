import type { Article } from "./types";

export const mockArticles: Article[] = [
	{
		id: "what-is-an-ai-model",
		category: "ai",
		publishedAt: "2026-06-20",
		translations: {
			ja: {
				title: "AIモデルとは",
				excerpt:
					"「モデル」という言葉の由来から、AIモデルの正体までを解説します。",
				body: "「モデル」という言葉は、もともと統計学や物理学で使われてきた言葉で、「現実を簡略化して表した仕組み」を指します。天気予報の数式モデルや、経済の予測モデルと同じように、AIモデルも「入力に対してどう出力するか」を表現したものです。\n\nAIモデルの場合、その仕組みは大量のデータから学習されたパラメータ（数値の集まり）でできています。学習を終えたモデルは、新しい入力（文章や画像など）を受け取ると、学習時に見つけたパターンに基づいて出力を返します。「知能を持っている」わけではなく、「パターンを真似する仕組み」だと捉えると分かりやすくなります。",
			},
			en: {
				title: "What is an AI Model",
				excerpt:
					'From the origin of the word "model" to what an AI model actually is.',
				body: 'The word "model" originally comes from statistics and physics, where it means a simplified representation of how something works. A weather forecasting model or an economic model works the same way — it describes how an output is produced from an input. An AI model is no different.\n\nThat mechanism is made of parameters (a large set of numbers) learned from huge amounts of data. Once trained, the model takes a new input (text, an image, etc.) and produces an output based on the patterns it found during training. It\'s easier to understand if you think of it not as "having intelligence" but as "a mechanism that mimics patterns."',
			},
		},
	},
	{
		id: "what-is-git",
		category: "frontend",
		publishedAt: "2026-06-22",
		translations: {
			ja: {
				title: "Gitとは何か",
				excerpt:
					"バージョン管理の仕組みを、料理のレシピ履歴に例えて説明します。",
				body: "Gitは「バージョン管理システム」と呼ばれるツールで、ファイルの変更履歴を記録していくものです。料理のレシピを少しずつ改良していく過程を、すべてメモに残しておくイメージに近いです。\n\n「いつ」「何を」「なぜ」変えたかを記録しておけるので、後から前のレシピに戻したい場合も簡単に戻せますし、複数人で同時に同じレシピを改良していても、誰が何を変えたかが分かります。",
			},
			en: {
				title: "What is Git",
				excerpt: "Explaining version control using a recipe history analogy.",
				body: 'Git is a tool called a "version control system" — it records the history of changes to files over time. Think of it like keeping a note of every small improvement you make to a recipe, step by step.\n\nBecause it records what changed, when, and why, you can easily go back to an earlier version of the recipe if needed. It also lets multiple people improve the same recipe at the same time while keeping track of who changed what.',
			},
		},
	},
	{
		id: "what-is-two-factor-authentication",
		category: "security",
		publishedAt: "2026-06-24",
		translations: {
			ja: {
				title: "二段階認証とは",
				excerpt: "パスワードだけでは足りない理由と、二段階認証の仕組み。",
				body: "パスワードだけでログインを守る仕組みには限界があります。同じパスワードを他のサービスでも使っていたり、パスワードが流出してしまったりすると、知らない誰かに簡単にログインされてしまう可能性があります。\n\n二段階認証は、パスワード（知っているもの）に加えて、スマートフォンに送られるコードや認証アプリ（持っているもの）など、もう一つの確認手段を組み合わせる仕組みです。片方が漏れても、もう片方が無ければログインできないため、安全性が大きく上がります。",
			},
			en: {
				title: "What is Two-Factor Authentication",
				excerpt: "Why passwords alone aren't enough, and how 2FA works.",
				body: "Protecting a login with just a password has its limits. If you reuse the same password across services, or if it leaks, someone else could log in without much trouble.\n\nTwo-factor authentication adds a second check on top of the password (something you know) — for example, a code sent to your phone or an authenticator app (something you have). Even if one factor is leaked, the other is still needed to log in, which makes things much safer.",
			},
		},
	},
];
