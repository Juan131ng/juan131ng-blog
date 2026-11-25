import { defineSageConfig } from "astro-sage";

export default defineSageConfig({
  site: {
    url: "https://juan131ng.zeroarea.top/",
    title: "Juan131ng",
    description:
      "在结构与美之间，搭一座安静的桥。记录学习笔记、摄影与自我相处的方式。",
    author: "Juan131ng",
    profile: "https://github.com/Juan131ng",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  home: {
    title: "在结构与美之间，搭一座安静的桥。",
    intro:
      "Hola，这里卷饼，大二在校生与摄影爱好者。热爱把知识酿成清晰的系统，用文字记录那些抵达前的微光与耐心。一切都在路上：摄影、代码、与自我相处的方式。",
  },
  // GitHub-backed comments; works on any static host. Needs the utterances
  // app installed on the repo: https://github.com/apps/utterances
  comments: {
    provider: "utterances",
    repo: "chintak/astro-sage",
    label: "comments",
  },
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
  // shareLinks: defaults to X, LinkedIn, Bluesky, Reddit, Hacker News and email.
});
