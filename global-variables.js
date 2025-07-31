/**
 * 全局文章状态，会在文章加载的时候调用
 * 
 * invalidatedPosts 已废弃的文章 ID
 * oldBuilderBasePosts 夜世界 2.0 之前的文章
 * maintenancePosts 维护中的文章
 */
export const invalidatedPosts = [20, 66, 268, 295, 559, 596, 689, 756, 801, 1642, 2754, 2922, 3048, 4801, 5434];
export const oldBuilderBasePosts = [349, 848, 1200, 1250, 2763];
export const maintenancePosts = [];

/**
 * hasNotification {Boolean} 是否发布通知，如果填 false 则视为不发布，前端不再运行通知相关的代码，可节省性能。
 * notificationCount {Number} 通知角标显示的数字，默认为 1，只有当同时发布多条通知时才需要修改这个值。
 * currentNotificationId {Number} 当前通知的 ID，前端需要用这个值区分接收到的是全新通知还是以前发布过的通知。发布新通知时请将这个值 +1
 * notificationHTML {String} 通知内容，可使用 HTML 代码。如果发布多条通知，通常使用 <hr> 标签分割。
 */
export const notificationInfo = {
    "hasNotification": true,
    "notificationCount": 2,
    "currentNotificationId": 10,
    "notificationHTML": "1. 由于目前网站的维护人员均已退游，我们已无法保证更新，如果你有心为项目出一份力，请前往 " +
        "<a href='https://github.com/lemonicy/clashpost' target='_blank' rel='nofollow noreferrer noopener'>Github 开源地址</a>。" +
        "如果你阅读项目介绍后还有疑问，可发邮件说明，或者加入我们的 Discord 群，具体联系方式见“联系我们”版块。<strong>先定个小目标，让网站撑过 2025 年。</strong><br><br>" +
        "2. 即日起，建筑工人小屋将归类为“防御建筑”，而非“其他建筑”，查数据时务必注意。"
}