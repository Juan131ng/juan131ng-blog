import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://juan131ng.zeroarea.top/",
    title: "Juan131ng",
    description:
      "这里存放一部分我",
    author: "Juan131ng",
    profile: "https://github.com/Juan131ng",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  home: {
    title: "你好，我是卷饼",
    intro:
      "这里存放一部分我。",
  },
  comments: { provider: false },
  shareLinks: [],
  posts: { perPage: 8, perIndex: 6, scheduledPostMargin: 15 * 60 * 1000 },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: {
      enabled: true,
      url: "https://github.com/chintak/astro-sage/edit/main/apps/demo/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/Juan131ng" },
    { name: "x", url: "https://x.com/danny131ng" },
    { name: "mail", url: "mailto:juan131ng@outlook.com" },
  ],
});
