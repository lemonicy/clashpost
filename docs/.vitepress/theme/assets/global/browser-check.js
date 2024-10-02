import { inBrowser } from "vitepress";

/**
 * 通过 navigator.userAgentData API 获取浏览器型号和版本
 * 
 * @returns JSON 对象
 */
function getBrowserInfo() {
    let brand = null;
    let version = 0;

    const brands = navigator.userAgentData.brands;
    brands.forEach(function(brandObj) {
        // 获取浏览器内核和内核版本
        switch (brandObj.brand) {
            case "Chromium":
                // Chromium 系浏览器都会走到这个分支
                // 由于目前只有 Chromium 系浏览器支持 userAgentData API，所以这个函数没有进一步的判断
                brand = "Chromium";
                version = brandObj.version;
                break;
        }
    });

    return {"brand": brand, "version": version};
}

/**
 * 根据 userAgent 字符串确定 Safari 版本
 * 如果不是 iOS 端的浏览器，则返回 null
 * 
 * @param {String} userAgent
 */
export function getSafariVersionFromUA(userAgent) {
    let version = null;
    if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
        const bracketIndex1 = userAgent.indexOf("(");
        const bracketIndex2 = userAgent.indexOf(")");
        const strInBrackets = userAgent.substring(bracketIndex1 + 1, bracketIndex2 - bracketIndex1 - 1);
        const uaPartArray = strInBrackets.split(" ");
        const versionPart = uaPartArray.filter(str => str.match(/^[0-9]{1,}_[0-9]{1,}/));
        const versionStr = versionPart[0].replaceAll("_", ".");
        version = parseFloat(versionStr);
    } else if (userAgent.includes("Macintosh") && userAgent.includes("Version/")) {
        // 如果 userAgent 中只有 Macintosh 但没有 Version，则为 Mac 端的其他浏览器，不是 Safari
        const uaPartArray = userAgent.split(" ");
        const versionPart = uaPartArray.filter(str => str.startsWith("Version/"));
        const versionStr = versionPart[0].substring(8);
        version = parseFloat(versionStr);
    }
    return version;
}

/**
 * 比较两个 Safari 版本的大小，如果前者大于后者则返回 1，小于则返回 -1，一样大返回 0
 * 比较大小时不应该将版本视为数字，17.10 版本应该大于 17.9 版本
 */
function versionComparison(version1, version2) {
    const version1_split = version1.toString().split(".");
    const version2_split = version2.toString().split(".");
    const version1_1 = parseInt(version1_split[0]);
    const version2_1 = parseInt(version2_split[0]);
    // 如果小数点后的数字不存在，则认为小版本号为零
    const version1_2 = version1_split.length === 1 ? 0 : parseInt(version1_split[1]);
    const version2_2 = version2_split.length === 1 ? 0 : parseInt(version2_split[1]);

    // 先判断大版本号
    if (version1_1 > version2_1) {
        return 1;
    } else if (version1_1 < version2_1) {
        return -1;
    } else {
        // 大版本号相同，判断小版本号
        if (version1_2 > version2_2) {
            return 1;
        } else if (version1_2 < version2_2) {
            return -1;
        } else {
            return 0;
        }
    }
}

/**
 * 确定用户的浏览器版本是否过低。
 * 这是新的 userAgentData 方案，也是谷歌目前主推的方案，但除了高版本 Chromium 系浏览器之外都不支持。
 * 对于不支持的浏览器，需要使用下方的 browserTooOldCheckLegacy() 函数。
 */
function browserTooOldCheck(minChromeVer, minFirefoxVer, minSafariVer) {

    // 判断用户使用的浏览器型号和版本
    const browserInfo = getBrowserInfo();
    const brand = browserInfo.brand;
    const version = browserInfo.version;
    if (brand === "Chromium") {
        return version < minChromeVer;
    } else {
        // 如果不是常见的浏览器型号，则直接认为用户的浏览器不是太旧，避免误杀
        return false;
    }
}

/**
 * 确定用户的浏览器版本是否过低。
 * 这是传统的 userAgent 方案，没有谷歌主推的 userAgentData API 准确，
 * 因此 Chromium 系浏览器使用上方的 browserTooOldCheck() 函数，这个函数作为 Fallback.
 * 网站的浏览器版本要求见：https://clashpost.com/p/1828
 * 
 * 各浏览器的 UA：
 * Chrome (Windows): Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36
 * Chrome (Android): Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36
 * Chrome (iPhone): Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.51 Mobile/15E148 Safari/604.1
 * Chrome (Linux): Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36
 * Firefox (Windows): Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0
 * Firefox (Android): Mozilla/5.0 (Android 14; Mobile; rv:126.0) Gecko/126.0 Firefox/126.0
 * Firefox (Linux): Mozilla/5.0 (X11; Linux x86_64; rv:126.0) Gecko/20100101 Firefox/126.0
 * Safari (iPhone): Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1
 * Safari (iPad/MacOS): Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15
 * 
 * 另：
 * parseInt(125.0.0.0) => 125
 * parseFloat(17.5.1) => 17.1
 */
function browserTooOldCheckLegacy(minChromeVer, minFirefoxVer, minSafariVer) {
    const userAgent = navigator.userAgent;
    const uaPartArray = userAgent.split(" ");
    
    if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("Macintosh")) {
        // 由于苹果公司强制所有软件使用系统自带的浏览器内核，而浏览器也属于软件，
        // 因此在 iPhone 和 iPad 中，浏览器支持的功能是跟随系统版本的，下方的代码应该判断系统版本，而非浏览器版本。
        // 网站中已有现成的封装函数，可直接使用。
        const version = getSafariVersionFromUA(userAgent);
        return versionComparison(version, minSafariVer) < 0;
    } else if (userAgent.includes("Chrome")) {
        // Chromium 系列
        const versionPart = uaPartArray.filter(str => str.startsWith("Chrome/"));
        const versionStr = versionPart[0].substring(7);
        const version = parseInt(versionStr);
        return version < minChromeVer;
    } else if (userAgent.includes("Firefox")) {
        // Firefox
        const versionPart = uaPartArray.filter(str => str.startsWith("Firefox/"));
        const versionStr = versionPart[0].substring(8);
        const version = parseInt(versionStr);
        return version < minFirefoxVer;
    } else {
        // 未在上方列出的浏览器不作额外处理，以免误判
        return false;
    }
}

/**
 * 确定用户的浏览器版本是否过低的总函数，外部调用的是这个。
 */
export function addOldBrowserTip() {
    if (!inBrowser) return;

    const minChromeVer = 88;
    const minFirefoxVer = 78;
    const minSafariVer = 14.1;

    // 判断浏览器版本是否过低
    let browserTooOldFlag;
    if (navigator.userAgentData) {
        // 对于支持 userAgentData API 的浏览器（Chrome 90+）使用新方案
        browserTooOldFlag = browserTooOldCheck(minChromeVer, minFirefoxVer, minSafariVer);
    } else {
        // 对于不支持 userAgentData API 的浏览器使用传统的 userAgent 方案
        browserTooOldFlag = browserTooOldCheckLegacy(minChromeVer, minFirefoxVer, minSafariVer);
    }

    // 判断浏览器版本过低的提示是否已存在，如果已存在则不进行任何操作
    const existedDom = document.querySelector(".cp-callout.cp-callout-old-browser");

    // 如果符合条件则添加一个 div
    if (browserTooOldFlag && !existedDom) {
        const oldBrowserTopDom = document.createElement("div");
        oldBrowserTopDom.setAttribute("class", "cp-callout cp-callout-warning cp-callout-old-browser");
        oldBrowserTopDom.innerHTML = "<div class=\"cp-callout-icon\">⚠️</div>" +
            "<div class=\"cp-callout-content\">" +
            "您的浏览器版本过低，网站已不再兼容。这意味着在升级浏览器之前，您无法正常使用网站的部分功能。详见：" +
            "<a href=\"/p/1828\">网站的系统和浏览器要求</a>。" +
            "</div>";
        const parentNode = document.querySelector("main");
        const referenceNode = parentNode.firstChild;
        parentNode.insertBefore(oldBrowserTopDom, referenceNode);
    }
}