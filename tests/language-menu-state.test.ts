import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { buildLanguageMenuState } from "../src/utils/site-language.ts";

describe("language menu state", () => {
	it("marks the active language and disables unavailable translations", () => {
		const state = buildLanguageMenuState("zh_CN", {
			zh_CN: "/zh/posts/guide/",
			en: null,
		});

		assert.deepEqual(state, [
			{
				code: "zh_CN",
				displayName: "简体中文",
				shortLabel: "中",
				href: "/zh/posts/guide/",
				active: true,
				available: true,
			},
			{
				code: "en",
				displayName: "English",
				shortLabel: "EN",
				href: null,
				active: false,
				available: false,
			},
		]);
	});
});
