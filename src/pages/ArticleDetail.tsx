import { useIntl } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { categories } from "../categories";
import { articles } from "../articles";
import { ENABLE_MULTILINGUAL, LOCALE_EN, LOCALE_JA } from "../constants";
import type { Locale } from "../types";

const ArticleDetail = () => {
	const intl = useIntl();
	const { id, lang } = useParams<{ id: string; lang?: string }>();
	const displayLocale: Locale =
		lang === LOCALE_JA || lang === LOCALE_EN ? lang : (intl.locale as Locale);

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

			{ENABLE_MULTILINGUAL && (
				<div className="mt-2">
					{displayLocale === LOCALE_JA ? (
						<Link
							to={`/articles/${article.id}/${LOCALE_EN}`}
							className="text-sm hover:text-accent"
						>
							{intl.formatMessage({ id: "article.readInEnglish" })}
						</Link>
					) : (
						<Link
							to={`/articles/${article.id}/${LOCALE_JA}`}
							className="text-sm hover:text-accent"
						>
							{intl.formatMessage({ id: "article.readInJapanese" })}
						</Link>
					)}
				</div>
			)}

			<div className="mt-6 space-y-4">
				{content.body.split("\n\n").map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</div>
	);
};

export default ArticleDetail;
