<script>
// 定义一个全局变量，保存起来备用
let scrollTop;

export function showOverlay(sidebar) {
    // 防止滚动弹窗时，遮罩后面的内容也被滚动
    // 现在的浏览器都支持 document.documentElement.scrollTop，无需额外兼容
    const body = document.body;
    scrollTop = document.documentElement.scrollTop;
    // 这里用两句 style，而不用 setAttribute，这是为了方便以后添加新代码
    body.style.position = "fixed";
    body.style.top = (-scrollTop) + "px";

    // 如果指明了是显示侧边栏时启用遮罩，则额外添加一个 class，这两个 class 也用来判断网页缩放后网页是否仍然需要显示侧边栏
    if (sidebar === "sidebar-left") {
        body.classList.add("cp-dialog-sidebar-left");
    } else if (sidebar === "sidebar-right") {
        body.classList.add("cp-dialog-sidebar-right");
    }

    // 给 body 添加一个 class，主要是在打开窗口时去掉毛玻璃效果
    body.classList.add("cp-dialog-show");
    // 不播放动画，防止关闭遮罩后有个滚动的动画
    document.documentElement.style.scrollBehavior = "auto";
}

/*
 * 在下方的 hideOverlay() 和 hideOverlayOnly() 函数中，我给 scrollTop 套了一个定时器，而不是直接设置 scrollTop
 * 这是为了让 Safari 正确读取新的 scrollTop 值，避免读取到 0 这个结果，从而导致 Safari 从页面顶部开始播放动画。
 * 定时器的延时还不能太低，否则又会被自作聪明的 Safari “优化” 掉，下方给一个延时的变量，方便以后修改。
 */
const delay = 10;

export function hideOverlay(clickedLinkType, clickedDom, isSidebarRightShowing = true) {
    // 关闭弹窗时恢复页面滚动
    const body = document.body;
    body.style.position = "";
    body.style.top = "";

    // 如果用户手动点开了目录后才点击的链接（移动端，isSidebarRightShowing === true），则先恢复刚才保存的 scrollTop 值，再关闭遮罩，最后跳转到对应的位置
    // 如果用户没有手动点开目录后就点击了链接（PC 端，isSidebarRightShowing === false），则直接跳转到对应的位置
    // isSidebarRightShowing 默认为 true 是因为点击除目录之外的链接不传入这个参数，此时有极大可能在在切换页面，
    // 因此应该走完整的判断流程，避免切换页面时没有关闭遮罩
    if (isSidebarRightShowing) {
        document.documentElement.scrollTop = scrollTop;
        body.classList.remove("cp-dialog-sidebar-left");
        body.classList.remove("cp-dialog-sidebar-right");
        body.classList.remove("cp-dialog-show");
        
        if (clickedLinkType === "scrollTopBtn") {
            // 遮罩已关闭，可以播放动画了
            document.documentElement.style.scrollBehavior = "";
            // 如果点击的是返回顶部按钮，则 scrollTop 为零
            setTimeout(() => {
                document.documentElement.scrollTop = 0;
            }, delay);
        } else if (clickedLinkType === "tocLink") {
            document.documentElement.style.scrollBehavior = "";
            // 如果点击的是目录中的链接，则 scrollTop 为对应元素的 Top 值
            setTimeout(() => {
                const linkId = clickedDom.getAttribute("id");
                const targetDomId = linkId.replace("cp-toc-", "cp-title-");
                const targetDom = document.querySelector("main").querySelector("#" + targetDomId);
                if (targetDom) {
                    const newScrollTop = targetDom.offsetTop;
                    document.documentElement.scrollTop = newScrollTop;
                }
            }, delay);
        } else if (clickedLinkType === "sidebarLeftLink") {
            // 如果点击的是左侧侧边栏的链接，则滚动到顶部
            setTimeout(() => {
                document.documentElement.scrollTop = 0;
                document.documentElement.style.scrollBehavior = "";
            }, delay);
        } else {
            setTimeout(() => {
                document.documentElement.style.scrollBehavior = "";
            }, delay);
        }
    } else {
        if (clickedLinkType === "scrollTopBtn") {
            document.documentElement.scrollTop = 0;
        } else if (clickedLinkType === "tocLink") {
            const linkId = clickedDom.getAttribute("id");
            const targetDomId = linkId.replace("cp-toc-", "cp-title-");
            const targetDom = document.querySelector("main").querySelector("#" + targetDomId);
            if (targetDom) {
                const newScrollTop = targetDom.offsetTop;
                document.documentElement.scrollTop = newScrollTop;
            }
        } else if (clickedLinkType === "sidebarLeftLink") {
            // 动画需要延时解锁，因此这里仍然需要 setTimeout
            setTimeout(() => {
                document.documentElement.scrollTop = 0;
                document.documentElement.style.scrollBehavior = "";
            }, delay);
        }
    }
}

// 仅关闭遮罩，不重置 scrollTop
export function hideOverlayOnly() {
    // 去取消 fixed 布局
    const body = document.body;
    body.style.position = "";
    body.style.top = "";

    // 取消遮罩
    body.classList.remove("cp-dialog-sidebar-left");
    body.classList.remove("cp-dialog-sidebar-right");
    body.classList.remove("cp-dialog-show");

    // 恢复之前的滚动位置
    setTimeout(() => {
        const newScrollTop = 0 - parseInt(body.style.top);
        document.documentElement.scrollTop = newScrollTop;
    }, delay);
}
</script>

<script setup>
// 点击遮罩后关闭两侧菜单栏，并关闭弹窗
// 这里不直接调用 hideSidebarLeft()、hideSidebarRight()、hideAllDialogs() 是为了避免循环导入
function clickOverlayEvent(event) {
    const tDom = event.target;
    const sidebarLeft = document.getElementById("cp-sidebar-left");
    if (sidebarLeft) {
        if (tDom !== sidebarLeft && !tDom.contains(sidebarLeft)) {
            // 等同于 hideSidebarLeft()
            sidebarLeft.style.left = "";
        }
    }
    const sidebarRight = document.getElementById("cp-sidebar-right");
    if (sidebarRight) {
        if (tDom !== sidebarRight && !tDom.contains(sidebarRight)) {
            // 等同于 hideSidebarRight()
            sidebarRight.style.right = "";
        }
    }
    // 等同于 hideAllDialogs();
    document.querySelectorAll(".cp-dialog-background").forEach(el => {
        el.classList.remove("cp-dialog-active");
    });
    hideOverlay();
}
</script>

<template>
    <div id="cp-dialog-overlay" @click="event => clickOverlayEvent(event)"></div>
</template>

<style lang="scss">
#cp-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(0.5rem); /* 给窗口背景添加毛玻璃效果 */
    z-index: 1999;
}

body.cp-dialog-show #cp-dialog-overlay {
    display: block;
}

body.cp-dialog-sidebar-left, body.cp-dialog-sidebar-right {
    #cp-dialog-overlay {
        top: 4rem;
        z-index: 950;
    }
}
</style>