import { createContentLoader } from "vitepress";

const currentTime = new Date().getTime();

// 如果文章的最后创建时间或最后修改时间不存在，则使用当前时间
function getShownLastCreated(rawLastCreated) {
    return rawLastCreated ? rawLastCreated : currentTime;
}

function getShownLastUpdated(rawLastUpdated) {
    return rawLastUpdated ? rawLastUpdated : currentTime;
}

export default createContentLoader("p/*.md", {
    includeSrc: true, 
    frontmatter: true,
    render: false,
    excerpt: true,
    transform(rawData) {
        return rawData.map(page => ({
            ID: parseInt(page.url.replace("/p/", "")), // 就是链接中 /p/ 后面的数字
            url: page.url,
            title: page.frontmatter.title,
            excerpt: page.frontmatter.description,
            authorId: page.frontmatter.authorId,
            category: page.frontmatter.module ? page.frontmatter.module.replace("posts-", "") : null,
            featuredImg: page.frontmatter.featuredImg,
            featuredImgConvertWebp: page.frontmatter.featuredImgConvertWebp,
            lastCreated: getShownLastCreated(page.frontmatter.lastCreated),
            lastUpdated: getShownLastUpdated(page.frontmatter.lastUpdated)
        })).sort((a, b) => {
            // 首先按照最后修改时间排序，最后修改时间一样时按 ID 排序
            return b.lastUpdated - a.lastUpdated || b.ID - a.ID;
        });
    }
});