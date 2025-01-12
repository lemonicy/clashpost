/**
 * 传入时间戳，返回 ISO 8601 日期格式
 * @param {Number | String} timestamp 时间戳（单位毫秒）或日期字符串
 */
export function getISOTimeStr(timestamp) {
    // 时间为 0 代表当前时间，时间不存在返回 null
    if (timestamp) {
        return new Date(timestamp).toISOString();
    } else if (timestamp === 0) {
        return new Date().toISOString();
    } else {
        return null;
    }
}

/**
 * 通过时间戳确定更新时间的文字
 * @param {Number | String} timestamp 时间戳（单位毫秒）或日期字符串
 */
function getTimeStrFull(datetime) {
    const datetimePost = new Date(datetime);
    const timezoneOffset = -datetimePost.getTimezoneOffset() / 60;
    datetimePost.setUTCHours(datetimePost.getUTCHours() + timezoneOffset);

    const year = datetimePost.getUTCFullYear();
    const month = ("" + (datetimePost.getUTCMonth() + 1)).padStart(2, "0"); // <= 月份的下标是从 0 开始的
    const day = ("" + datetimePost.getUTCDate()).padStart(2, "0");
    const hours = ("" + datetimePost.getUTCHours()).padStart(2, "0");
    const minutes = ("" + datetimePost.getUTCMinutes()).padStart(2, "0");
    
    return year + "/" + month + "/" + day + " " + hours + ":" + minutes;
}

/**
 * 通过时间戳确定更新时间的精简版文字
 * @param {Number} datetime 文章发布或修改时间，可以被 js 识别的日期格式均可
 */
export function getTimeStr(datetime) {

    // 获取发布时间与当前时间的差值，单位为秒
    const timeNow = new Date();
    const timestampNow = timeNow.getTime();
    const timestampPost = new Date(datetime).getTime();
    const timeDiff = (timestampNow - timestampPost) / 1000;

    // 获取当前时间和文章发布时间的日期差值
    const dateStrPostFull = getTimeStrFull(timestampPost);
    const dateStrPost = dateStrPostFull.substring(0, 10);
    const dateStrNow = getTimeStrFull(timestampNow).substring(0, 10);
    const dateDiffMills = new Date(dateStrNow).getTime() - new Date(dateStrPost).getTime();
    const dateDiff = dateDiffMills / (24 * 60 * 60 * 1000);

    // 获取小时和分钟
    const timeStr = dateStrPostFull.substring(11, 16);

    let timePost;
    if (timeDiff < -300) {
        // 显示刚刚，但在控制台打印警告
        timePost = "刚刚";
        console.warn("警告：我们发现一个来自未来的人发布或修改了文章，我们所处的时空可能已经扭曲，请不惜一切代价生存下去！")
    } else if (timeDiff < 60) {
        // 如果文章发布时间小于一分钟，则显示刚刚
        timePost = "刚刚";
    } else if (timeDiff < 3600) {
        // 如果文章发布时间小于一小时，则显示多少分钟前
        const minutes = Math.floor(timeDiff / 60);
        timePost = minutes + " 分钟前";
    } else if (timeDiff < 86400) {
        // 如果文章发布时间小于 24 小时，则显示多少小时前
        const hours = Math.floor(timeDiff / 3600);
        timePost = hours + " 小时前";
    } else if (dateDiff < 3) {
        // 如果文章发布时间大于 24 小时，且日期差距小于 3 天，则显示昨天或前天几点几分发布

        if (dateDiff === 1) {
            timePost = "昨天 " + timeStr + " ";
        } else if (dateDiff === 2) {
            timePost = "前天 " + timeStr + " ";
        } else {
            timePost = dateStrPostFull;
        }
    } else {
        // 如果发布的日期比三天前更久，则直接显示日期
        timePost = dateStrPost + " ";
    }

    return timePost;
}