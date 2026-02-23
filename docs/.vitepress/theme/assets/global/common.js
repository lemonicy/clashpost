import { inBrowser } from "vitepress";
import { getCookie, setCookie, getRemValue } from "@/assets/global/utils.js";
import { getSafariVersionFromUA } from "@/assets/global/browser-check.js";
import { hideOverlayOnly } from "@/components/dialog/Overlay.vue";
import { hideSidebarLeft } from "@/composables/sidebar/SidebarLeft.vue";
import { hideSidebarRight } from "@/composables/sidebar/SidebarRight.vue";
import { generateToast } from "@/components/dialog/Toast.vue";

/*
 * 让表头保持冻结状态
 */
let stickyTheadTick = false; // requestAnimationFrame 的触发锁

export function stickyTheadWhenScrolling() {
    if (!stickyTheadTick) {
        requestAnimationFrame(stickyThead);
        stickyTheadTick = true;
    }
}

export function stickyThead() {
    const tables = document.querySelectorAll("table");
    const dialogShowing = document.body.classList.contains("cp-dialog-show");

    // 仅当网页中存在表格，且弹窗未显示时才执行以下代码，避免无用的性能损耗。
    // 当弹窗关闭时，由于要恢复之前的滚动位置，会有一次由 js 执行的滚动操作，到时候这个冻结表头的事件自然会触发。
    if (tables.length !== 0 && !dialogShowing) {
        const remValue = getRemValue(); // parseInt 可以自动去掉字体大小后面的 px
    
        tables.forEach(table => {
            const thead = table.querySelector("thead");
            // 如果没有 thead，则不做处理
            if (thead) {
                const bodyTop = table.getBoundingClientRect().top;
                const tableHeightStr = window.getComputedStyle(table).getPropertyValue("height");
                const tableHeight = parseFloat(tableHeightStr);
                // 网页头部占 4rem，需要减去
                let theadTranslateY = bodyTop - 4 * remValue;
                // 如果页面中存在切换选项卡，为了防止挡住选项卡，需要让 thead 往下 3rem，往下 3ren 就是少偏移 3rem，也即偏移 -3rem
                if (document.querySelector(".cp-sticky-tabs") != null) {
                    theadTranslateY -= 3 * remValue;
                }
                // 给 thead 设置偏移值
                const theadTopValue = -theadTranslateY; // thead 的 top 值是 theadTranslateY 的相反数
                const allTh = thead.querySelectorAll("th");
                // 这里必须循环每个 th，不能直接设置 thead，否则 Safari 不生效。
                // 这里必须使用 transform 属性，不能使用 position: relative 配合 top 值做偏移，否则 Safari 还是不生效。
                if (theadTopValue > 0 && tableHeight - theadTopValue > 0) {
                    allTh.forEach(th => th.style.transform = "translateY(" + theadTopValue + "px)");
                } else {
                    // 如果表头不在屏幕上方，或者表头的偏移量超过了表格的总高度（也即表格整体都在视野范围外），则不设置偏移
                    allTh.forEach(th => th.style.transform = "none");
                }
            }
        });
    }
    // 解除运行锁，方便下次执行
    stickyTheadTick = false;
}

/**
 * 切换页面时更换 header 中的内容
 */
export function changeHeader(robotsMetaValue, canonicalLink) {
    // 先修改 meta 相关
    if (robotsMetaValue) {
        // 如果页面没有 robots 信息，则更新为现有的信息
        let robotsMeta = null;
        document.head.querySelectorAll("meta").forEach(el => {
            if (el.getAttribute("name") === "robots") {
                robotsMeta = el;
                return; // 跳出循环
            }
        });
        // 如果循环中没找到 robots 的 meta，则添加一个，否则替换已有的
        if (robotsMeta === null) {
            const newMeta = document.createElement("meta");
            newMeta.setAttribute("name", "robots");
            newMeta.setAttribute("content", robotsMetaValue);
            document.head.appendChild(newMeta);
        } else {
            robotsMeta.setAttribute("content", robotsMetaValue);
        }
    } else {
        // 如果页面没有 robots 信息，则移除现有的
        document.head.querySelectorAll("meta").forEach(el => {
            if (el.getAttribute("name") === "robots") {
                el.parentNode.removeChild(el);
            }
        });
    }

    // 修改规范链接
    if (canonicalLink) {
        // 确定完整的规范链接
        let canonicalLinkFull;
        if (canonicalLink === "/") {
            canonicalLinkFull = "https://clashpost.com";
        } else {
            canonicalLinkFull = "https://clashpost.com" + canonicalLink;
        }
        // 查找网页 head 中规范链接所在的 link
        let canonicalLinkHead = null;
        document.head.querySelectorAll("link").forEach(el => {
            if (el.getAttribute("rel") === "canonical") {
                canonicalLinkHead = el;
                return;
            }
        });
        // 修改规范链接
        if (canonicalLinkHead === null) {
            const newDom = document.createElement("link");
            newDom.setAttribute("rel", "canonical");
            newDom.setAttribute("content", canonicalLinkFull);
            document.head.appendChild(newDom);
        } else {
            canonicalLinkHead.setAttribute("content", canonicalLinkFull);
        }
    } else {
        document.head.querySelectorAll("link").forEach(el => {
            if (el.getAttribute("rel") === "canonical") {
                el.parentNode.removeChild(el);
            }
        });
    }
}

/**
 * 判断侧边栏是否显示
 * 指的是用户手动点开，不是屏幕够宽时自动显示出来
 */
function sidebarLeftShowing() {
    const bodyClassList = document.body.classList;
    const sidebarLeft = document.getElementById("cp-sidebar-left");
    let sidebarLeftShowing = false;
    if (sidebarLeft) {
        const sidebarLeftOffset = window.getComputedStyle(sidebarLeft).getPropertyValue("left");
        // 选择 -50 只是留一些余量，没有特别的意义
        sidebarLeftShowing = parseFloat(sidebarLeftOffset) > -50 && bodyClassList.contains("cp-dialog-sidebar-left");
    }
    return sidebarLeftShowing;
}

export function sidebarRightShowing() {
    const bodyClassList = document.body.classList;
    const sidebarRight = document.getElementById("cp-sidebar-right");
    let sidebarRightShowing = false;
    if (sidebarRight) {
        const sidebarRightOffset = window.getComputedStyle(sidebarRight).getPropertyValue("right");
        sidebarRightShowing = parseFloat(sidebarRightOffset) > -50 && bodyClassList.contains("cp-dialog-sidebar-right");
    }
    return sidebarRightShowing;
}

/**
 * 根据屏幕宽度重新设置侧边栏展示状态
 */
export function resetSidebars() {
    const isSidebarLeftShowing = sidebarLeftShowing();
    const isSidebarRightShowing = sidebarRightShowing();
    const width = window.innerWidth;

    // 隐藏侧边栏
    if (isSidebarLeftShowing && width >= 768) {
        hideSidebarLeft();
        hideOverlayOnly();
    } else if (isSidebarRightShowing && width >= 1280) {
        hideSidebarRight();
        hideOverlayOnly();
    }
}

/**
 * 点击空白处收缩弹窗、下拉框等元素
 */
export function bodyClickEvent(event) {
    const clickedDom = event.target;
    // 隐藏下拉框
    document.querySelectorAll(".cp-select").forEach(selectDom => {
        if (selectDom !== clickedDom && !selectDom.contains(clickedDom)) {
            selectDom.classList.remove("cp-select-expand");
        }
    })
}

/**
 * 如果用户没访问过网站，则弹出网站会使用 Cookie 的提示
 */
export function showCookieTip() {
    // 只有在浏览器环境下才运行，node 环境不运行
    if (inBrowser) {
        const cookieUsed = getCookie("cp-cookie-setting");
        if (!cookieUsed) {
            generateToast("网站使用 Cookie 分析访问数据及保存设置，继续访问网站即代表您同意我们使用 Cookie。");
            setCookie("cp-cookie-setting", "1", "10", "years");
        }
    }
}

/**
 * 如果浏览器对 dvh 的支持不正确，则重新设定 dvh 的大小，让各浏览器的体验更统一
 */
export function resetDvhValue() {
    // 如果不在浏览器环境，则不做处理
    if (!inBrowser) {
        return;
    }

    // 判断浏览器是否支持 dvh，如果支持，再判断是否是 Safari 15.6 - 16.0 版本，这几个版本对 dvh 的支持有 bug
    const supportDvh = CSS.supports("height", "1dvh");
    let hasDvhBug = false;
    if (supportDvh) {
        // 如果浏览器支持 userAgentData API，则一定没有 dvh bug
        // 这里加这么个判断是为了防止支持 userAgentData API 的浏览器在控制台打印 userAgent 的警告
        const supportUserAgentDataAPI = navigator.userAgentData !== null;
        if (!supportUserAgentDataAPI) {
            const safariVersion = getSafariVersionFromUA(navigator.userAgent);
            hasDvhBug = safariVersion >= 15.6 && safariVersion <= 16;
        }
    }

    if (!supportDvh || hasDvhBug) {
        const vhValue = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--dvh", vhValue + "px");
    }
}

/**
 * 当 iOS 的输入法键盘弹出和收起时重新定位 fix 内容
 * 
 * @param {Object} DOM 要重新定位的 DOM 结构
 */
export function resetFixedPosition(DOM, originalFixedOffset) {
    if (!DOM) return;
    const computedStyles = window.getComputedStyle(DOM);
    const isFixedDom = computedStyles.getPropertyValue("position") === "fixed";
    const isAppleMobileDevice = /iPhone|iPad|iPod/.test(window.navigator.userAgent);

    // 因为键盘弹出和收起需要时间，因此设置一个延时，让程序获取改变后的状态。
    // 只针对 iOS 设备的 fixed 元素
    if (isFixedDom && isAppleMobileDevice) {
        const keyboardHeight = window.innerHeight - window.visualViewport.height;
        const pageYOffset = window.scrollY;

        // 要防止 iOS 的回弹效果导致的 pageYOffset 变化，这里额外做个判断
        if (keyboardHeight > 0 && pageYOffset < keyboardHeight) {
            const DOMClassList = DOM.classList;
            if (DOMClassList.contains("cp-fixed-top")) {
                const newHeight = pageYOffset + originalFixedOffset;
                DOM.style.setProperty("top", newHeight + "px");
            } else {
                // 默认固定到底部
                const newHeight = keyboardHeight + originalFixedOffset - pageYOffset;
                DOM.style.setProperty("bottom", newHeight + "px");
            }
        } else {
            // keyboardHeight 小于 0 代表键盘收回
            DOM.style.setProperty("top", "");
            DOM.style.setProperty("bottom", "");
        }
    }
}

export function resetToastPosition() {
    const toastContainer = document.querySelector(".cp-toast-container");
    if (toastContainer) {
        const DOMClassList = toastContainer.classList;
        const remValue = getRemValue();

        let originalFixedOffset;
        if (DOMClassList.contains("cp-fixed-top")) {
            originalFixedOffset = 4.5 * remValue;
        } else {
            originalFixedOffset = 1.5 * remValue;
        }
        resetFixedPosition(toastContainer, originalFixedOffset);
    }
}

/**
 * 判断是否为升级数据的详情页
 * 
 * @param {String} link 页面的规范链接
 */
export function isUpgradeDetails(link) {
    if (link && link.startsWith("/upgrade/")) {
        const unitId = link.substring(9, 13);
        return unitId.match(/^[0-9a-f]{4}$/);
    }
    return false;
}

/**
 * 判断是否为单个文章的页面
 * 
 * @param {String} link 页面的规范链接
 * @returns 
 */
export function isSinglePost(link) {
    return link && link.match("/p/\d*");
};