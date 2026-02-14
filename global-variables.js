/**
 * hasNotification {Boolean} 是否发布通知，如果填 false 则视为不发布，前端不再运行通知相关的代码，可节省性能。
 * notificationCount {Number} 通知角标显示的数字，默认为 1，只有当同时发布多条通知时才需要修改这个值。
 * currentNotificationId {Number} 当前通知的 ID，前端需要用这个值区分接收到的是全新通知还是以前发布过的通知。发布新通知时请将这个值 +1
 * notificationHTML {String} 通知内容，可使用 HTML 代码。如果发布多条通知，通常使用 <hr> 标签分割。
 */
export const notificationInfo = {
    "hasNotification": false,
    "notificationCount": 1,
    "currentNotificationId": 15,
    "notificationHTML": ""
}

/**
 * 全局升级数据状态，会在进入升级数据页面的时候调用
 * 
 * availableTempUnits 目前可以训练的临时兵种
 * availableCraftedBuildings 目前可以使用的精工防御
 */
export const availableTempUnits = ["0e08", "0e0e", "0e0f"];
export const availableCraftedBuildings = ["0903", "0904", "0905"];

/**
 * 全局文章状态，会在文章加载的时候调用
 * 
 * invalidatedPosts 已废弃的文章 ID
 * oldBuilderBasePosts 夜世界 2.0 之前的文章
 * maintenancePosts 维护中的文章
 */
export const invalidatedPosts = [20, 66, 268, 295, 559, 596, 689, 756, 801, 1642, 2754, 2922, 3048, 4801, 5434];
export const oldBuilderBasePosts = [349, 848, 1200, 1250, 2763];
export const maintenancePosts = [6540];