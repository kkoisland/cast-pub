import { useIntl } from "react-intl";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../categories";
import { articles } from "../articles";
import type { Locale } from "../types";

const ArticleList = () => {
	const intl = useIntl();
	const locale = intl.locale as Locale;
	const [searchParams, setSearchParams] = useSearchParams();
	const selectedCategory = searchParams.get("category");

	const filteredArticles = selectedCategory
		? articles.filter((article) => article.category === selectedCategory)
		: articles;

	const handleSelectCategory = (slug: string | null) => {
		setSearchParams(slug ? { category: slug } : {});
	};

	return (
		<div className="px-4 py-8">
			<div className="mx-auto mb-6 flex max-w-4xl flex-wrap gap-2">
				<button
					type="button"
					onClick={() => handleSelectCategory(null)}
					className={`rounded-full px-3 py-1 text-sm ${
						selectedCategory === null
							? "bg-accent text-white"
							: "bg-foreground/10"
					}`}
				>
					{intl.formatMessage({ id: "article.all" })}
				</button>
				{categories.map((category) => (
					<button
						type="button"
						key={category.slug}
						onClick={() => handleSelectCategory(category.slug)}
						className={`rounded-full px-3 py-1 text-sm ${
							selectedCategory === category.slug
								? "bg-accent text-white"
								: "bg-foreground/10"
						}`}
					>
						{category.label[locale]}
					</button>
				))}
			</div>

			<div className="mx-auto max-w-2xl">
				{filteredArticles.length === 0 ? (
					<p className="text-foreground/60">
						{intl.formatMessage({ id: "article.empty" })}
					</p>
				) : (
					<ul>
						{filteredArticles.map((article) => {
							const content = article.translations[locale];
							const categoryLabel =
								categories.find((c) => c.slug === article.category)?.label[
									locale
								] ?? article.category;
							return (
								<li key={article.id} className="py-2">
									<Link
										to={`/articles/${article.id}`}
										className="font-medium hover:text-accent"
									>
										{content.title}
									</Link>
									<div className="text-sm text-foreground/60">
										{article.publishedAt} ・ {categoryLabel}
									</div>
									<p className="text-sm text-foreground/80">
										{content.excerpt}
									</p>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default ArticleList;
