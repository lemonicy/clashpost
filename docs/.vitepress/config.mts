import { defineConfig, HeadConfig } from "vitepress";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "部落驿站",
    description: "部落冲突玩家的必备助手，coc 的中文百科全书。",
    lang: "zh-Hans-CN",
    cleanUrls: true,
    ignoreDeadLinks: true,
    head: [
        ["meta", { name: "format-detection", content: "telephone=no"}],
        ["link", { rel: "preconnect", href: "https://www.googletagmanager.com" }],
        ["link", { rel: "icon", href: "https://static.clashpost.com/favicon.ico" }],
        ["link", { rel: "icon", href: "https://static.clashpost.com/favicon.svg", type: "image/svg+xml" }],
        ["link", { rel: "apple-touch-icon", href: "https://static.clashpost.com/apple-touch-icon.png"}],
        ["link", { rel: "manifest", href: "https://static.clashpost.com/manifest.webmanifest"}],
        ['script', { defer: "", src: "https://static.clashpost.com/global/very-old-browser-check-v11.min.js"}],
        ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-HB8QGTVX7H"}],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HB8QGTVX7H');`
        ],
    ],
    transformHead: ({ pageData }) => {
        const head: HeadConfig[] = [];
        if (pageData.frontmatter.robots) {
            head.push(["meta", { name: "robots", content: pageData.frontmatter.robots }]);
        }
        const canonical = pageData.frontmatter.canonical;
        if (canonical === "/") {
            head.push(["link", { rel: "canonical", content: "https://clashpost.com" }]);
        } else {
            head.push(["link", { rel: "canonical", content: "https://clashpost.com" + canonical }]);
        }
        return head;
    },
    markdown: {
        math: true,
        image: {
            lazyLoading: true
        },
        externalLinks: {
            target: "_blank",
            rel: "noopener noreferrer"
        }
    },
    sitemap: {
        hostname: "https://clashpost.com",
        transformItems: (items) => {
            const excludedUrls = [
                "/faq",
                "/settings",
                "p/260",
                "p/1828",
            ]
            const filteredItems = items.filter(item => {
                const itemUrl = item.url;
                const notExcluded = !excludedUrls.includes(itemUrl);
                const notPostCollection = !itemUrl.match(/(p\/category|p\/author|p\/page)/g);
                return notExcluded && notPostCollection;
            });
            return filteredItems;
        }
    },
    vite: {
        build: {
            target: ["es2020", "chrome71", "edge79", "firefox75", "safari13"]
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./theme")
            }
        }
    }
});