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

/**
 * hasNotification {Boolean} 是否发布通知，如果填 false 则视为不发布，前端不再运行通知相关的代码，可节省性能。
 * notificationCount {Number} 通知角标显示的数字，默认为 1，只有当同时发布多条通知时才需要修改这个值。
 * currentNotificationId {Number} 当前通知的 ID，前端需要用这个值区分接收到的是全新通知还是以前发布过的通知。发布新通知时请将这个值 +1
 * notificationHTML {String} 通知内容，可使用 HTML 代码。如果发布多条通知，通常使用 <hr> 标签分割。
 */
export const notificationInfo = {
    "hasNotification": true,
    "notificationCount": 1,
    "currentNotificationId": 13,
    "notificationHTML": "关于 coc 本次更新的内容，网站的同步情况如下：<br><br>" +
        "1. 重做后的隐形弹簧（已完成）。另外，由于重做后的隐形弹簧需要判断英雄、战宠和攻城机器的人口数，为了方便大家判断，我们在英雄、战宠和攻城机器页面添加了占用人口属性。<br>" +
        "2. 14 本额外解锁的 5 级英雄（已完成）<br>" +
        "3. 移除 12 - 15 本的大本武器等级（已完成）<br>" +
        "4. 老玩家劳动贬值，也即提速降费部分（进度 50%）<br>"+
        "5. 这次更新涉及到的攻略区文章，如护盾、掠夺机制（进度 0%）<br><br>"+
        "后续进度更新不会推送新通知，感兴趣的玩家点击铃铛图标就能看到了。"
}