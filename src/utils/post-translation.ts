import type { EnabledLanguageCode } from "../config/languageConfig.ts";
import { getLocalizedPathname, getPostPathWithoutLanguage } from "./localized-url.ts";

type PostTranslationData = {
	lang: EnabledLanguageCode;
	translationKey: string;
	draft?: boolean;
};

type PostTranslationEntry = {
	id: string;
	data: PostTranslationData;
};

export type TranslationIndexEntry<TEntry extends PostTranslationEntry> = Partial<
	Record<EnabledLanguageCode, TEntry>
>;

export type TranslationIndex<TEntry extends PostTranslationEntry> = Map<
	string,
	TranslationIndexEntry<TEntry>
>;

export function buildTranslationIndex<TEntry extends PostTranslationEntry>(
	entries: readonly TEntry[],
): TranslationIndex<TEntry> {
	const index: TranslationIndex<TEntry> = new Map();

	for (const entry of entries) {
		const key = entry.data.translationKey;
		const bucket = index.get(key) ?? {};
		bucket[entry.data.lang] = entry;
		index.set(key, bucket);
	}

	return index;
}

export function findTranslatedPost<TEntry extends PostTranslationEntry>(
	index: TranslationIndex<TEntry>,
	translationKey: string,
	lang: EnabledLanguageCode,
): TEntry | null {
	return index.get(translationKey)?.[lang] ?? null;
}

export function getTranslationAvailability<TEntry extends PostTranslationEntry>(
	index: TranslationIndex<TEntry>,
	translationKey: string,
): Record<EnabledLanguageCode, boolean> {
	return {
		zh_CN: Boolean(index.get(translationKey)?.zh_CN),
		en: Boolean(index.get(translationKey)?.en),
	};
}

export function getAlternateLanguageTargets<TEntry extends PostTranslationEntry>(
	index: TranslationIndex<TEntry>,
	entry: TEntry,
): Partial<Record<EnabledLanguageCode, string | null>> {
	const matches = index.get(entry.data.translationKey);

	if (!matches) {
		return {};
	}

	return {
		zh_CN: matches.zh_CN
			? getLocalizedPathname(
					"zh_CN",
					`/posts/${getPostPathWithoutLanguage(matches.zh_CN.id)}/`,
				)
			: null,
		en: matches.en
			? getLocalizedPathname(
					"en",
					`/posts/${getPostPathWithoutLanguage(matches.en.id)}/`,
				)
			: null,
	};
}
