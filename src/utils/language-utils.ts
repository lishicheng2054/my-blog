import { getLanguageDisplayNameByCode } from "../config/languageConfig.ts";

/**
 * Return a human-readable language name for built-in or external language codes.
 */
export function getLanguageDisplayName(langCode: string): string {
	const externalLanguageNames: Record<string, string> = {
		chinese_simplified: "简体中文",
		chinese_traditional: "繁體中文",
		english: "English",
		japanese: "日本語",
		korean: "한국어",
		spanish: "Español",
		thai: "ไทย",
		vietnamese: "Tiếng Việt",
		turkish: "Türkçe",
		indonesian: "Bahasa Indonesia",
		french: "Français",
		german: "Deutsch",
		russian: "Русский",
		arabic: "العربية",
	};

	return externalLanguageNames[langCode]
		?? getLanguageDisplayNameByCode(langCode);
}
