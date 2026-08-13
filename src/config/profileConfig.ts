import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.png",

	// 名字
	name: "早川智将",

	// 个人签名
	bio: "少年,如果没有奇迹,那就自己去创造奇迹就好。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Jesse5800-2",
			showName: false,
		},
		{
			name: "Twitter / X",
			icon: "fa7-brands:twitter",
			url: "https://x.com/@NobitaZhen22128",
			showName: false,
		},
		{
			name: "bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3493291999890101",
			showName: false,
		},
		{
			name: "steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/profiles/76561199519013034/",
			showName: false,
		},
		{
			name: "pixiv",
			icon: "fa7-brands:pixiv",
			url: "https://www.pixiv.net/users/108076015",
			showName: false,
		},
		{
			name: "project1",
			icon: "fa7-solid:gamepad",
			url: "https://rpg.blue/home.php?mod=space&uid=2748767",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:zhengnobita2589@163.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};