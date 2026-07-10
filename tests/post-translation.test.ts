import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
	buildTranslationIndex,
	findTranslatedPost,
	getAlternateLanguageTargets,
	getTranslationAvailability,
} from "../src/utils/post-translation.ts";

const entries = [
	{
		id: "zh_CN/guide/index",
		data: { lang: "zh_CN", translationKey: "guide-index", draft: false },
	},
	{
		id: "en/guide/index",
		data: { lang: "en", translationKey: "guide-index", draft: false },
	},
	{
		id: "zh_CN/markdown-tutorial",
		data: {
			lang: "zh_CN",
			translationKey: "markdown-tutorial",
			draft: false,
		},
	},
] as const;

describe("post translations", () => {
	it("indexes translations by translationKey and language", () => {
		const index = buildTranslationIndex(entries);

		assert.equal(index.get("guide-index")?.en?.id, "en/guide/index");
		assert.equal(index.get("guide-index")?.zh_CN?.id, "zh_CN/guide/index");
	});

	it("finds a translated post and reports missing variants", () => {
		const index = buildTranslationIndex(entries);

		assert.equal(
			findTranslatedPost(index, "guide-index", "en")?.id,
			"en/guide/index",
		);
		assert.equal(findTranslatedPost(index, "markdown-tutorial", "en"), null);
		assert.deepEqual(getTranslationAvailability(index, "markdown-tutorial"), {
			zh_CN: true,
			en: false,
		});
	});

	it("builds alternate language targets for the same translated post", () => {
		const index = buildTranslationIndex(entries);

		assert.deepEqual(
			getAlternateLanguageTargets(index, {
				id: "zh_CN/guide/index",
				data: {
					lang: "zh_CN",
					translationKey: "guide-index",
					draft: false,
				},
			}),
			{
				zh_CN: "/zh/posts/guide/index/",
				en: "/en/posts/guide/index/",
			},
		);
	});
});
