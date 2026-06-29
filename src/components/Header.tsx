import { useLocaleContext } from "../i18n";
import type { Locale } from "../i18n";
import SiteName from "./SiteName";

const LOCALES: { code: Locale; label: string }[] = [
	{ code: "ja", label: "日本語" },
	{ code: "en", label: "English" },
];

const Header = () => {
	const { locale, setLocale } = useLocaleContext();

	return (
		<header className="px-4 py-6">
			<div className="mx-auto flex max-w-4xl items-center justify-between">
				<SiteName />
				<select
					value={locale}
					onChange={(e) => setLocale(e.target.value as Locale)}
					className="rounded border border-foreground/20 bg-background px-2 py-1 text-sm"
				>
					{LOCALES.map((l) => (
						<option key={l.code} value={l.code}>
							{l.label}
						</option>
					))}
				</select>
			</div>
		</header>
	);
};

export default Header;
