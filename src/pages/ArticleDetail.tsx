import { useIntl } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { categories } from "../categories";
import { articles } from "../articles";
import type { Locale } from "../types";

const ArticleDetail = () => {
	const intl = useIntl();
	const { id, lang } = useParams<{ id: string; lang?: string }>();
	const displayLocale: Locale =
		lang === "ja" || lang === "en" ? lang : (intl.locale as Locale);

	const article = articles.find((a) => a.id === id);

	if (!article) {
		return (
			<div className="mx-auto max-w-2xl px-4 py-8">
				<p className="text-foreground/60">
					{intl.formatMessage({ id: "article.notFound" })}
				</p>
			</div>
		);
	}

	const content = article.translations[displayLocale];
	const categoryLabel =
		categories.find((c) => c.slug === article.category)?.label[displayLocale] ??
		article.category;

	return (
		<div className="mx-auto max-w-2xl px-4 py-8">
			<h1 className="text-xl font-medium">{content.title}</h1>
			<div className="mt-1 text-sm text-foreground/60">
				{article.publishedAt} ・ {categoryLabel}
			</div>

			<div className="mt-2">
				{displayLocale === "ja" ? (
					<Link
						to={`/articles/${article.id}/en`}
						className="text-sm hover:text-accent"
					>
						{intl.formatMessage({ id: "article.readInEnglish" })}
					</Link>
				) : (
					<Link
						to={`/articles/${article.id}/ja`}
						className="text-sm hover:text-accent"
					>
						{intl.formatMessage({ id: "article.readInJapanese" })}
					</Link>
				)}
			</div>

			<div className="mt-6 space-y-4">
				{content.body.split("\n\n").map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</div>
	);
};

export default ArticleDetail;
