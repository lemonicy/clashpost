/**
 * hasNotification {Boolean} 是否发布通知，如果填 false 则视为不发布，前端不再运行通知相关的代码，可节省性能。
 * notificationCount {Number} 通知角标显示的数字，默认为 1，只有当同时发布多条通知时才需要修改这个值。
 * currentNotificationId {Number} 当前通知的 ID，前端需要用这个值区分接收到的是全新通知还是以前发布过的通知。发布新通知时请将这个值 +1
 * notificationHTML {String} 通知内容，可使用 HTML 代码。如果发布多条通知，通常使用 <hr> 标签分割。
 */
export const notificationInfo = {
    "hasNotification": true,
    "notificationCount": 1,
    "currentNotificationId": 16,
    "notificationTitle": "关于部落驿站后续维护安排的公告",
    "notificationHTML": "<p>由于网站长期缺少稳定维护人员，我们决定停止维护部落驿站的主体内容。</p>" +
        "<p>后续除“安装包下载”版块外，网站其他内容原则上不再更新，也不再保证资料的时效性和准确性。“安装包下载”版块会尽量继续保留和更新，方便仍有需要的玩家使用。</p>" +
        "<p>虽然内容不再更新，但" +
        "   <a href='https://github.com/lemonicy/clashpost' target='_blank' rel='nofollow noreferrer'>Github 仓库</a>" +
        "   将作为档案数据保留，前人整理、记录和思考过的东西仍会留在这里，供有需要的人下载及查看。</p>" +
        "<p>最后说个小事，网站的老用户可能还记得 cocservice.top 这个域名，这个域名十月份到期后就不再续了，仍然有需要的用户需要改一下书签。</p>" +
        "<p>感谢大家一直以来的支持！</p>"
}

/**
 * 全局升级数据状态，会在进入升级数据页面的时候调用
 * 
 * availableTempUnits 目前可以训练的临时兵种
 * availableCraftedBuildings 目前可以使用的精工防御
 */
export const availableTempUnits = [];
export const availableCraftedBuildings = [];

/**
 * 全局文章状态，会在文章加载的时候调用
 * 
 * invalidatedPosts 已废弃的文章 ID
 * oldBuilderBasePosts 夜世界 2.0 之前的文章
 */
export const invalidatedPosts = [20, 66, 268, 295, 559, 596, 689, 756, 801, 1642, 2754, 2922, 3048, 4801, 5434];
export const oldBuilderBasePosts = [349, 848, 1200, 1250, 2763];