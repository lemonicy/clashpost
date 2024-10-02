import { getISOTimeStr } from '@/assets/global/datetime.js';
import { data as postsRawData } from '@/assets/posts/all.data.mjs';
import { authors } from '@/assets/posts/author.js';

/**
 * 给出作者 ID，获取作者的详细信息
 */
export function getAuthorInfo(authorId) {
    if (!authorId) return;
    const authorRawData = authors[authorId];
    if (!authorRawData) {
        console.error("[clashpost error] 作者信息不存在，请检查作者 ID (" + authorId + ") 是否正确。");
        return;
    }

    // 如果没有设置头像，则使用默认头像
    const avatarSm = authorRawData.avatarSm;
    const avatarMd = authorRawData.avatarMd;
    let avatarUrlSm, avatarUrlMd;
    if (avatarSm && avatarSm !== "") {
        avatarUrlSm = "https://static.clashpost.com/p/author/" + authorId + "/" + avatarSm;
    } else {
        avatarUrlSm = "https://static.clashpost.com/p/author/default.png";
    }
    if (avatarMd && avatarMd !== "") {
        avatarUrlMd = "https://static.clashpost.com/p/author/" + authorId + "/" + avatarSm;
    } else {
        avatarUrlMd = "https://static.clashpost.com/p/author/default.png";
    }

    // 作者的其他信息
    const authorLink = "/p/author/" + authorId;
    const nickName = authorRawData.nickName ? authorRawData.nickName : authorId;

    // 将结果合并到一个 JSON 对象中
    const author = {
        id: authorId,
        avatarSm: avatarUrlSm,
        avatarMd: avatarUrlMd,
        link: authorLink,
        nickName: nickName,
        signature: authorRawData.signature
    };
    return author;
}

/**
 * 将 all.data.js 中的源数据转化为网站文章列表需要的格式
 * 
 * @param {Number} currentPage 当前页码（每页固定 20 篇文章）
 * @param {Function} filter 筛选条件，是一个函数
 * @returns 筛选后的文章列表
 */
export function getPostList(currentPage, filter = null) {
    const posts = [];
    const maxNumInPage = 20;
    const minIndex = maxNumInPage * (currentPage - 1);
    const maxIndex = maxNumInPage * currentPage - 1;
    let currentPostIndex = 0;
    // 如果页数过大，超出了 posts 的大小，则不输出文章
    
    for (let i = 0; i < postsRawData.length; i++) {
        // postsRawData 也即从 all.data.js 获取的数据，在文件上方已经导入
        const currentPost = postsRawData[i];

        // 是否将特色图片转化为 webp
        let featuredImgConvertWebp;
        if (currentPost.featuredImgConvertWebp === undefined) {
            featuredImgConvertWebp = true;
        } else {
            featuredImgConvertWebp = currentPost.featuredImgConvertWebp == true;
        }

        // 最近更新时间
        const updateTime = currentPost.lastUpdated;
        const updateTimeISO = getISOTimeStr(updateTime);
        const authorInfo = getAuthorInfo(currentPost.authorId);

        // 获取文章的其他信息
        const postId = currentPost.ID
        const url = "/p/" + postId;

        const post = {
            "featuredImg": currentPost.featuredImg,
            "featuredImgConvertWebp": featuredImgConvertWebp,
            "tags": [],
            "updateTimeISO": updateTimeISO,
            url,
            "title": currentPost.title,
            "excerpt": currentPost.excerpt,
            "author": authorInfo,
            "category": currentPost.category
        };

        const currentIndexValid = currentPostIndex >= minIndex && currentPostIndex <= maxIndex;
        if (filter) {
            // 如果传入了 filter 参数，则根据 json 的 key 确定筛选类型
            if (filter.category) {
                // 分类
                if (post.category === filter.category) {
                    // 只有在下标合格时才写入数组，但只要符合筛选条件，index 必然加一
                    currentPostIndex++;
                    if (currentIndexValid) posts.push(post);
                }
            } else if (filter.tag) {
                // 标签
                if (post.tags.includes(tag)) {
                    currentPostIndex++;
                    if (currentIndexValid) posts.push(post);
                }
            } else if (filter.author) {
                // 作者
                if (post.author && post.author.id === filter.author) {
                    currentPostIndex++;
                    if (currentIndexValid) posts.push(post);
                }
            }
        } else {
            // 如果不传入 filter 参数，则只筛选数组大小
            currentPostIndex++;
            if (currentIndexValid) posts.push(post);
        }
    }
    return posts;
}

/**
 * 获取符合条件的文章数量
 */
export function getPostCount(filter = null) {
    if (filter) {
        let count = 0;
        postsRawData.forEach(post => {
            if (filter.category) {
                if (post.category === filter.category) {
                    count++;
                }
            } else if (filter.tag) {
                if (post.tags.includes(tag)) {
                    count++;
                }
            } else if (filter.author) {
                if (post.authorId === filter.author) {
                    count++;
                }
            }
        });
        return count;
    } else {
        return postsRawData.length;
    }
}

/**
 * 获取文章信息
 */
export function getPostInfo(postId) {
    return postsRawData.find(post => post.ID === postId);
}