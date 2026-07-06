import type { Locale } from "./types";

// Also update <title> in index.html when changing this
export const SITE_NAME = "cast-pub";

export const ENABLE_MULTILINGUAL = false;

export const LOCALE_JA: Locale = "ja";
export const LOCALE_EN: Locale = "en";

export const LOCALES: { code: Locale; label: string }[] = [
	{ code: "ja", label: "日本語" },
	{ code: "en", label: "English" },
];
