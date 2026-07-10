import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
	DEFAULT_LANGUAGE,
	getEnabledLanguageCodes,
	getLanguagePrefix,
	getLanguageShortLabel,
	normalizeSiteLanguage,
} from "../src/config/languageConfig.ts";
import { getRootLanguageRedirectTarget } from "../src/utils/site-language.ts";

describe("language config", () => {
	it("normalizes supported languages and falls back to zh_CN", () => {
		assert.equal(normalizeSiteLanguage("en"), "en");
		assert.equal(normalizeSiteLanguage("zh_CN"), "zh_CN");
		assert.equal(normalizeSiteLanguage("EN"), "en");
		assert.equal(normalizeSiteLanguage("unknown"), DEFAULT_LANGUAGE);
	});

	it("returns stable prefixes and short labels", () => {
		assert.equal(getLanguagePrefix("zh_CN"), "/zh");
		assert.equal(getLanguagePrefix("en"), "/en");
		assert.equal(getLanguageShortLabel("zh_CN"), "中");
		assert.equal(getLanguageShortLabel("en"), "EN");
		assert.deepEqual(getEnabledLanguageCodes(), ["zh_CN", "en"]);
	});

	it("builds the root redirect target for a stored language", () => {
		assert.equal(getRootLanguageRedirectTarget("en"), "/en/");
		assert.equal(getRootLanguageRedirectTarget("zh_CN"), "/zh/");
		assert.equal(getRootLanguageRedirectTarget("bad-value"), "/zh/");
	});
});
