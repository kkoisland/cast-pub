import { createContext, useContext, useEffect, useState } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import type { ReactNode } from "react";
import type { Locale } from "../types";
import { ENABLE_MULTILINGUAL, LOCALE_JA } from "../constants";
import en from "./en";
import ja from "./ja";

export type { Locale } from "../types";

export const SUPPORTED_LOCALES: readonly Locale[] = ["ja", "en"] as const;

const messages: Record<Locale, Record<string, string>> = { ja, en };

const STORAGE_KEY = "cast-pub:locale";

type LocaleContextValue = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export const useLocaleContext = () => {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocaleContext must be used within IntlProvider");
	}
	return context;
};

const getInitialLocale = (): Locale => {
	if (!ENABLE_MULTILINGUAL) return LOCALE_JA;
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === "ja" || saved === "en") return saved;
	return navigator.language.startsWith("ja") ? "ja" : "en";
};

type IntlProviderProps = {
	children: ReactNode;
};

export const IntlProvider = ({ children }: IntlProviderProps) => {
	const [locale, setLocale] = useState<Locale>(getInitialLocale);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, locale);
	}, [locale]);

	return (
		<LocaleContext.Provider value={{ locale, setLocale }}>
			<ReactIntlProvider locale={locale} messages={messages[locale]}>
				{children}
			</ReactIntlProvider>
		</LocaleContext.Provider>
	);
};
