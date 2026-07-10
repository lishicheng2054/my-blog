import {
	getLanguagePrefix,
	type EnabledLanguageCode,
} from "../config/languageConfig.ts";

export function getLocalizedPathname(
	lang: EnabledLanguageCode,
	path: string,
): string {
	const prefix = getLanguagePrefix(lang);
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;

	return `${prefix}${normalizedPath}`.replace(/\/+/g, "/");
}

export function getPostPathWithoutLanguage(postId: string): string {
	return postId.replace(/^(zh_CN|en)\//, "");
}

export function stripLanguagePrefixFromPath(path: string): string {
	return path.replace(/^\/(zh|en)(?=\/|$)/, "") || "/";
}
