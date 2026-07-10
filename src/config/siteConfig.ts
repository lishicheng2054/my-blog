import type { SiteConfig } from "../types/config";
import { DEFAULT_LANGUAGE } from "./languageConfig.ts";

const SITE_LANG = DEFAULT_LANGUAGE;

export const siteConfig: SiteConfig = {
	title: "Mizuki",
	subtitle: "一个简洁的中文个人博客",
	siteURL: "https://mizuki.mysqil.com/",
	siteStartDate: "2025-01-01",

	lang: SITE_LANG,

	themeColor: {
		hue: 240,
		fixed: false,
	},

	featurePages: {
		anime: true,
		diary: true,
		friends: true,
		projects: true,
		skills: true,
		timeline: true,
		albums: true,
		devices: true,
		aiTools: true,
	},

	navbarTitle: {
		mode: "text-icon",
		text: "Mizuki 博客",
		icon: "assets/home/home.webp",
		logo: "assets/home/default-logo.webp",
	},

	languageSwitch: {
		enable: false,
	},

	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},

	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false,
	},

	bilibili: {
		vmid: "your-bilibili-vmid",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},

	anime: {
		mode: "local",
	},

	diaryApiUrl: "",

	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},

	tagStyle: {
		useNewStyle: false,
	},

	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},

	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
			],
		},

		position: "center",

		carousel: {
			enable: true,
			interval: 3,
			switchable: true,
		},

		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
			switchable: true,
		},

		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},

		homeText: {
			enable: true,
			title: "记录生活与灵感",
			switchable: true,
			subtitle: [
				"把学习、项目和日常慢慢写下来。",
				"这里会持续更新我的想法、作品和记录。",
				"做一个耐看、好用、能长期维护的个人博客。",
				"不着急堆功能，先把内容和体验打磨好。",
				"欢迎来到我的小站，希望你能看到一些有意思的东西。",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},

		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},

		navbar: {
			transparentMode: "semifull",
		},
	},

	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: true,
	},

	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],

	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},

	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},

	card: {
		border: true,
		followTheme: false,
	},

	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com"],
	},
};

export { SITE_LANG };
