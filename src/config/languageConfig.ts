export const DEFAULT_LANGUAGE = "zh_CN" as const;

export const ENABLED_LANGUAGES = [
	{
		code: "zh_CN",
		prefix: "/zh",
		displayName: "简体中文",
		shortLabel: "中",
		ogLocale: "zh_CN",
	},
	{
		code: "en",
		prefix: "/en",
		displayName: "English",
		shortLabel: "EN",
		ogLocale: "en_US",
	},
] as const;

export type EnabledLanguageCode = (typeof ENABLED_LANGUAGES)[number]["code"];

const languageMap = new Map(
	ENABLED_LANGUAGES.map((language) => [language.code.toLowerCase(), language]),
);

export function normalizeSiteLanguage(
	value: string | undefined,
): EnabledLanguageCode {
	if (!value) {
		return DEFAULT_LANGUAGE;
	}

	return (
		languageMap.get(value.toLowerCase())?.code ?? DEFAULT_LANGUAGE
	) as EnabledLanguageCode;
}

export function getEnabledLanguageCodes(): EnabledLanguageCode[] {
	return ENABLED_LANGUAGES.map((language) => language.code);
}

export function getLanguagePrefix(lang: EnabledLanguageCode): string {
	return ENABLED_LANGUAGES.find((language) => language.code === lang)?.prefix
		?? "/zh";
}

export function getLanguageShortLabel(lang: EnabledLanguageCode): string {
	return ENABLED_LANGUAGES.find((language) => language.code === lang)
		?.shortLabel ?? "中";
}

export function getLanguageDisplayNameByCode(lang: string): string {
	return ENABLED_LANGUAGES.find((language) => language.code === lang)
		?.displayName ?? lang;
}
