import { getISOTimeStr } from '@/assets/global/datetime.js';
import { authors } from '@/assets/posts/author.js';
import { data as postsInfoArr } from '@/assets/posts/posts.data.mjs';

/**
 * 使用动态导入功能获取完整文章列表
 * 
 * @returns {Array} 完整文章列表
 */
function getFullPostList() {
    const currentPostList = [];
    for (let i = 0; i < postsInfoArr.length; i++) {
        const currentPost = postsInfoArr[i];

        // 是否将特色图片转化为 webp
        let featuredImgConvertWebp;
        if (currentPost.featuredImgConvertWebp === undefined) {
            featuredImgConvertWebp = true;
        } else {
            featuredImgConvertWebp = currentPost.featuredImgConvertWebp == true;
        }

        // 文章发布事件和最近更新时间
        const lastCreated = currentPost.lastCreated;
        const lastUpdated = currentPost.lastUpdated;
        const lastUpdatedISO = getISOTimeStr(lastUpdated);

        // 作者信息
        const authorInfo = getAuthorInfo(currentPost.authorId);

        // 获取文章的其他信息
        const postId = currentPost.ID
        const url = "/p/" + postId;

        const post = {
            "ID": postId,
            "featuredImg": currentPost.featuredImg,
            "featuredImgConvertWebp": featuredImgConvertWebp,
            "lastCreated": lastCreated,
            "lastUpdated": lastUpdated,
            "lastUpdatedISO": lastUpdatedISO,
            url,
            "tags": [],
            "title": currentPost.title,
            "excerpt": currentPost.excerpt,
            "author": authorInfo,
            "category": currentPost.category
        };

        currentPostList.push(post);
    }
    return currentPostList;
}

/**
 * 根据完整文章列表获取当前页面的文章
 * 
 * @param {Number} currentPage 当前页码（每页固定 20 篇文章）
 * @param {Function} filter 筛选条件，是一个 JSON Object
 * @returns 筛选后的文章列表
 */
export function getPostList(currentPage, filter = null) {
    const currentPagePostList = [];
    const maxPostsPerPage = 20;
    const minIndex = maxPostsPerPage * (currentPage - 1);
    const maxIndex = maxPostsPerPage * currentPage - 1;
    let currentPostIndex = 0;
    // 如果页数过大，超出了 posts 的大小，则不输出文章

    const fullPostList = getFullPostList();
    for (let i = 0; i < fullPostList.length; i++) {
        const currentPost = fullPostList[i];
        const postId = currentPost.ID;
        const url = "/p/" + postId;

        const post = {
            "ID": postId,
            "featuredImg": currentPost.featuredImg,
            "featuredImgConvertWebp": currentPost.featuredImgConvertWebp,
            "lastCreated": currentPost.lastCreated,
            "lastUpdated": currentPost.lastUpdated,
            "lastUpdatedISO": currentPost.lastUpdatedISO,
            url,
            "tags": [],
            "title": currentPost.title,
            "excerpt": currentPost.excerpt,
            "author": currentPost.author,
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
                    if (currentIndexValid) currentPagePostList.push(post);
                }
            } else if (filter.tag) {
                // 标签
                if (post.tags.includes(tag)) {
                    currentPostIndex++;
                    if (currentIndexValid) currentPagePostList.push(post);
                }
            } else if (filter.author) {
                // 作者
                if (post.author && post.author.id === filter.author) {
                    currentPostIndex++;
                    if (currentIndexValid) currentPagePostList.push(post);
                }
            }
        } else {
            // 如果不传入 filter 参数，则只筛选数组大小
            currentPostIndex++;
            if (currentIndexValid) currentPagePostList.push(post);
        }
    };
    return currentPagePostList;
}

/**
 * 获取符合条件的文章数量
 */
export function getPostCount(filter = null) {
    const fullPostList = getFullPostList();
    if (filter) {
        let count = 0;
        fullPostList.forEach(post => {
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
        return fullPostList.length;
    }
}

/**
 * 获取文章信息
 */
export function getPostInfo(postId) {
    const fullPostList = getFullPostList();
    return fullPostList.find(post => post.ID === postId);
}

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