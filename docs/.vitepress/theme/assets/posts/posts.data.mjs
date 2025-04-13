import pMap from "p-map";
import { createContentLoader } from "vitepress";

const loader = createContentLoader('p/*.md', {
    frontmatter: true,
    excerpt: true,
    page: true,
    async transform(rawData) {
        const data = await pMap(
            rawData.map(({ url, frontmatter }) => ({
                featuredImg: frontmatter.featuredImg,
                featuredImgConvertWebp: frontmatter.featuredImgConvertWebp,
                lastCreated: frontmatter.lastCreated,
                lastUpdated: frontmatter.lastUpdated,
                url,
                title: frontmatter.title,
                excerpt: frontmatter.description,
                authorId: frontmatter.authorId,
                category: frontmatter.module ? frontmatter.module.replace("posts-", "") : null
            })),
            async (item) => {
                // 文章的基本信息
                const url = item.url;
                const ID = parseInt(url.replace("/p/", "")); // 就是链接中 /p/ 后面的数字

                // 当前时间
                const currentTime = new Date().getTime();

                // 如果文章创建时间或最近更新时间不存在，则使用当前时间
                let lastCreated = item.lastCreated;
                if (!lastCreated) {
                    lastCreated = currentTime;
                }
                let lastUpdated = item.lastUpdated;
                if (!lastUpdated) {
                    lastUpdated = currentTime;
                }
                
                return {
                    ID,
                    title: item.title,
                    excerpt: item.excerpt,
                    authorId: item.authorId,
                    category: item.category,
                    featuredImg: item.featuredImg,
                    featuredImgConvertWebp: item.featuredImgConvertWebp,
                    lastCreated,
                    lastUpdated,
                };
            }
        );
        data.sort((a, b) => {
            // 首先按照最后修改时间排序，最后修改时间一样时按 ID 排序
            return b.lastUpdated - a.lastUpdated || b.ID - a.ID;
        });
        return data;
    }
});

export const data = await loader.load();
export default loader;