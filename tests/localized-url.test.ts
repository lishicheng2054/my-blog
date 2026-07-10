import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
	getLocalizedPathname,
	getPostPathWithoutLanguage,
	stripLanguagePrefixFromPath,
} from "../src/utils/localized-url.ts";

describe("localized urls", () => {
	it("prefixes site paths with a language base", () => {
		assert.equal(getLocalizedPathname("zh_CN", "/archive/"), "/zh/archive/");
		assert.equal(getLocalizedPathname("en", "/posts/guide/"), "/en/posts/guide/");
	});

	it("removes the language directory from localized post ids", () => {
		assert.equal(getPostPathWithoutLanguage("zh_CN/guide/index"), "guide/index");
		assert.equal(getPostPathWithoutLanguage("en/markdown-tutorial"), "markdown-tutorial");
		assert.equal(getPostPathWithoutLanguage("guide/index"), "guide/index");
	});

	it("removes language prefixes from current page paths", () => {
		assert.equal(stripLanguagePrefixFromPath("/zh/about/"), "/about/");
		assert.equal(stripLanguagePrefixFromPath("/en/posts/guide/"), "/posts/guide/");
		assert.equal(stripLanguagePrefixFromPath("/archive/"), "/archive/");
	});
});
