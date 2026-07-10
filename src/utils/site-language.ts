import {
	DEFAULT_LANGUAGE,
	ENABLED_LANGUAGES,
	getLanguagePrefix,
	getLanguageShortLabel,
	type EnabledLanguageCode,
	normalizeSiteLanguage,
} from "../config/languageConfig.ts";
import { SITE_LANG } from "../config/siteConfig.ts";

export function getCurrentSiteLanguage(): EnabledLanguageCode {
	return SITE_LANG;
}

export function getRootLanguageRedirectTarget(savedLanguage?: string): string {
	const normalizedLanguage = normalizeSiteLanguage(
		savedLanguage || DEFAULT_LANGUAGE,
	);

	return `${getLanguagePrefix(normalizedLanguage)}/`;
}

export function buildLanguageMenuState(
	currentLanguage: EnabledLanguageCode,
	targets: Partial<Record<EnabledLanguageCode, string | null>>,
) {
	return ENABLED_LANGUAGES.map((language) => ({
		code: language.code,
		displayName: language.displayName,
		shortLabel: getLanguageShortLabel(language.code),
		href: targets[language.code] ?? null,
		active: language.code === currentLanguage,
		available: Boolean(targets[language.code]),
	}));
}
