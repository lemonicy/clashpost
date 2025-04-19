<script>
export function showSidebarLeft() {
    document.getElementById("cp-sidebar-left").style.left = "0rem";
}

export function hideSidebarLeft() {
    document.getElementById("cp-sidebar-left").style.left = "";
}

/**
 * 获取用户点击的 moduleId
 */
function getClickedModuleId(clickedDom) {
    const sidebarLeftContents = document.querySelector("#cp-sidebar-left-contents");
    let listItemDom = clickedDom;
    while (listItemDom.parentNode !== sidebarLeftContents) {
        listItemDom = listItemDom.parentNode;
    }
    const moduleDom = listItemDom.querySelector(".cp-module-item");
    return moduleDom.getAttribute("id");
}

/**
 * 判断用户点击的是否为箭头
 */
function isArrowClicked(arrowList, clickedDom) {
    let arrowClicked = false;
    arrowList.forEach(arrow => {
        if (arrow === clickedDom || arrow.contains(clickedDom)) {
            arrowClicked = true;
        }
    });
    return arrowClicked;
}

/**
 * 展开或折叠指定列表
 */
function expandModuleList(moduleId) {
    const moduleToExpand = document.getElementById(moduleId).parentNode;
    if (moduleToExpand.classList.contains("cp-module-sublist-expanded")) {
        moduleToExpand.classList.remove("cp-module-sublist-expanded");
    } else {
        moduleToExpand.classList.add("cp-module-sublist-expanded");
    }
}

/**
 * 判断某个元素是否为侧边栏的链接，如果是，则隐藏侧边栏
 * 这里必须直接监听 sidebar，因为这是单页面应用，如果只给链接添加事件，则切换页面后新页面的链接就没绑定事件
 */
function clickSidebarLeftLinkEvent(event) {
    const tDom = event.target;
    const cDom = document.getElementById("cp-sidebar-left");
    const ArrowList = cDom.querySelectorAll(".cp-sidebar-left-arrow");
    if (isArrowClicked(ArrowList, tDom)) {
        // 如果点击的是箭头，则不跳转链接，只展开或折叠模块列表
        const moduleId = getClickedModuleId(tDom);
        expandModuleList(moduleId);
    } else if (tDom !== cDom) {
        // 如果点击的是链接，则关闭弹窗并隐藏左侧侧边栏
        let executed = false; // 防止重复执行
        cDom.querySelectorAll(".cp-module-item").forEach(el => {
            if (cDom.contains(el) && !executed) {
                hideOverlay("sidebarLeftLink");
                hideSidebarLeft();
                executed = true;
            }
        });
    }
}

/**
 * 刷新左侧菜单栏
 */
 function refreshSidebar(module) {
    // 给对应的模块添加激活标记
    const allModules = document.querySelectorAll(".cp-sidebar-left-list .cp-module-item");
    const moduleId = "cp-module-" + module;
    allModules.forEach(moduleDom => {
        if (moduleDom.getAttribute("id") === moduleId) {
            moduleDom.classList.add("cp-module-item-active");
        } else {
            moduleDom.classList.remove("cp-module-item-active");
        }
    });
}

/**
 * 确定左侧菜单栏哪些列表展开，哪些折叠
 */
function setSublistStatus(module) {
    if (module) {
        const upgradeListDom = document.getElementById("cp-module-upgrade").parentNode;
        const postsListDom = document.getElementById("cp-module-posts").parentNode;
        if (module.indexOf("posts") >= 0) {
            upgradeListDom.classList.remove("cp-module-sublist-expanded")
            postsListDom.classList.add("cp-module-sublist-expanded")
        } else {
            upgradeListDom.classList.add("cp-module-sublist-expanded")
            postsListDom.classList.remove("cp-module-sublist-expanded")
        }
    }
}

/**
 * 获取模块名称
 * 
 * @param {String} frontmatterValue frontmatter 中的 module 值
 * @param {String} path 文件所在的路径
 */
function getModule(frontmatterModule, path) {
    if (frontmatterModule === "posts-categories") {
        // 如果 frontmatter 中的模块为 posts-categories，说明需要根据路径确定具体的模块
        const moduleInFact = path.split(/[\/\.]/)[2];
        switch (moduleInFact) {
            case "starter":
            case "advanced":
            case "knowledge":
            case "material":
            case "defense":
            case "bh":
            case "capital":
            case "storm":
            case "archive":
            case "uncategorized":
                return "posts-" + moduleInFact;
        }
    } else {
        // 如果 frontmatter 中的模块不为 posts-categories，则直接返回具体的模块
        return frontmatterModule;
    }
}
</script>

<script setup>
import { watch, nextTick } from 'vue'
import { useData, useRouter, inBrowser } from 'vitepress';
import { hideOverlay } from '@/components/dialog/Overlay.vue';
import Arrow from '@/components/icon/Arrow.vue';

const { frontmatter } = useData();
const router = useRouter();

const module = getModule(frontmatter.value.module, router.route.data.relativePath);
let upgradeListClass, postsListClass;
// 设定默认展开哪一组
if (module && module.indexOf("posts") >= 0) {
    postsListClass = "cp-module-sublist-expanded";
} else {
    upgradeListClass = "cp-module-sublist-expanded";
}

if (inBrowser) {
    // 当链接变化时刷新左边的导航，需第一次加载时就执行
    watch(() => router.route.data.relativePath, (path) => {
        nextTick(() => {
            const module = getModule(frontmatter.value.module, router.route.data.relativePath);
            refreshSidebar(module);
        });
    }, { immediate: true });
    // 设置默认展开哪一组，第一次加载时不执行，防止跟上方重复
    watch(() => router.route.data.relativePath, (path) => {
        nextTick(() => {
            const module = getModule(frontmatter.value.module, router.route.data.relativePath);
            setSublistStatus(module);
        });
    }, { immediate: false });
}
</script>

<template>
    <div id="cp-sidebar-left" @click="event => clickSidebarLeftLinkEvent(event)">
        <ul id="cp-sidebar-left-contents" class='cp-sidebar-left-list'>
            <li>
                <a id="cp-module-home" class="cp-module-item" href="/">首页</a>
            </li>
            <li>
                <a id="cp-module-apk" class="cp-module-item" href="/apk">安装包下载</a>
            </li>
            <li :class="upgradeListClass">
                <div id="cp-module-upgrade" class="cp-module-item cp-module-item-with-arrow">
                    <a href="/upgrade">升级数据</a>
                    <div class="cp-sidebar-left-arrow"><Arrow /></div>
                </div>
                <ul>
                    <li>
                        <a id="cp-module-upgrade-home" class="cp-module-item" href="/upgrade/category/home">家乡</a>
                    </li>
                    <li>
                        <a id="cp-module-upgrade-bh" class="cp-module-item" href="/upgrade/category/bh">夜世界</a>
                    </li>
                    <li>
                        <a id="cp-module-upgrade-capital" class="cp-module-item" href="/upgrade/category/capital">都城</a>
                    </li>
                    <li>
                        <a id="cp-module-upgrade-temp" class="cp-module-item" href="/upgrade/category/temp">临时单位</a>
                    </li>
                    <li>
                        <a id="cp-module-upgrade-level" class="cp-module-item" href="/upgrade/category/level">按大本等级分类</a>
                    </li>
                </ul>
            </li>
            <li :class="postsListClass">
                <div id="cp-module-posts" class="cp-module-item cp-module-item-with-arrow">
                    <a href="/p">攻略教程</a>
                    <div class="cp-sidebar-left-arrow"><Arrow /></div>
                </div>
                <ul>
                    <li>
                        <a id="cp-module-posts-starter" class="cp-module-item" href="/p/category/starter">新手入门</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-advanced" class="cp-module-item" href="/p/category/advanced">进阶攻略</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-knowledge" class="cp-module-item" href="/p/category/knowledge">游戏机制</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-material" class="cp-module-item" href="/p/category/material">游戏素材</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-defense" class="cp-module-item" href="/p/category/defense">布阵和防守</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-bh" class="cp-module-item" href="/p/category/bh">夜世界</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-capital" class="cp-module-item" href="/p/category/capital">都城</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-storm" class="cp-module-item" href="/p/category/storm">风暴之后</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-archive" class="cp-module-item" href="/p/category/archive">历史档案</a>
                    </li>
                    <li>
                        <a id="cp-module-posts-uncategorized" class="cp-module-item" href="/p/category/uncategorized">未分类</a>
                    </li>
                </ul>
            </li>
            <li>
                <a id="cp-module-faq" class="cp-module-item" href="/faq">联系我们</a>
            </li>
        </ul>
        <ul id="cp-sidebar-left-settings" class='cp-sidebar-left-list'>
            <li>
                <a id="cp-module-settings" class="cp-module-item" href="/settings">设置</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

/* 左侧菜单栏的整体样式 */
#cp-sidebar-left {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0.5rem 0 0.5rem;
    width: 240px;
    position: fixed;
    left: -240px;
    top: 4rem;
    height: calc(var(--dvh) * 100 - 4rem);
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1000;
    scrollbar-gutter: stable;
    background-color: var(--cp-page-bg-light);
    transition: left 0.3s cubic-bezier(0, 0, 0.3, 1);
}

.cp-theme-dark #cp-sidebar-left{
    background-color: var(--cp-page-bg-dark);
}

@media (min-width: $cp-col-tablat) {
    #cp-sidebar-left {
        left: 0;
    }
}

/* 当屏幕宽度大于 $cp-col-tablat 时，左侧边默认显示，而右侧边隐藏。为了避免打开遮罩时遮罩盖不住左侧边，这里修改一下 z-index */
@media (min-width: $cp-col-tablat) {
    #cp-sidebar-left {
        z-index: 900;
    }
}

/*
 * $cp-col-deskop + 2 * 0.375rem = 1612px
 * (100% - $cp-col-deskop ) / 2 + 1rem = 50% - 792px
 */
@media (min-width: 1612px) {
    #cp-sidebar-left {
        left: calc(50% - 792px);
    }
}

#cp-sidebar-left-contents {
    margin-bottom: auto; /* 让设置在最底部 */
}

/* 左侧菜单的列表（含子列表） */
.cp-sidebar-left-list {
    display: flex;
    flex-direction: column;
    margin: 0 0 -0.25rem 0;
    padding-left: 0;
    width: 224px;
    list-style: none;
}

/* 左侧菜单的单个项目 */
.cp-sidebar-left-list .cp-module-item {
    display: flex;
    padding: 0.5rem;
    line-height: 1.75;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    background-color: var(--cp-page-bg-light);
    color: var(--cp-grey-text-light);

    a {
        width: 100%;
        text-decoration: none;
        color: var(--cp-grey-text-light);
    }
    
    .cp-sidebar-left-arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 100%;
        background-color: var(--cp-page-bg-light);

        svg {
            width: 1.125rem;
            stroke: var(--cp-grey-text-light);
            transition: transform 0.2s cubic-bezier(0, 0, 0.3, 1);
        }
    }

    &:hover, &:focus {
        border-radius: 0.25rem;
        background-color: var(--cp-grey-bg-light);
        text-decoration: none;

        div {
            background-color: var(--cp-grey-bg-light);
        }
    }
}

.cp-theme-dark .cp-sidebar-left-list .cp-module-item {
    background-color: var(--cp-page-bg-dark);
    color: var(--cp-grey-text-dark);

    a {
        color: var(--cp-grey-text-dark);
    }

    .cp-sidebar-left-arrow {
        background-color: var(--cp-page-bg-dark);

        svg {
            stroke: var(--cp-grey-text-dark);
        }
    }

    &:hover, &:focus {
        background-color: var(--cp-grey-bg-dark);

        div {
            background-color: var(--cp-grey-bg-dark);
        }
    }
}

/* 激活的菜单项 */
.cp-sidebar-left-list .cp-module-item.cp-module-item-active {
    font-weight: 700;
    color: var(--cp-primary-light);
    background-color: var(--cp-secondary-light);

    a, div {
        color: var(--cp-primary-light);
        background-color: var(--cp-secondary-light);
    }

    .cp-sidebar-left-arrow svg {
        stroke: var(--cp-primary-light);
    }

    &:hover, &:focus {
        color: rgb(10, 28, 158);
        background-color: rgb(210, 225, 254);

        a {
            color: rgb(10, 28, 158);
            background-color: rgb(210, 225, 254);
        }

        .cp-sidebar-left-arrow {
            background-color: rgb(210, 225, 254);

            svg {
                stroke: rgb(10, 28, 158);
            }
        }
    }
}

.cp-theme-dark .cp-sidebar-left-list .cp-module-item.cp-module-item-active {
    color: var(--cp-primary-dark);
    background-color: var(--cp-secondary-dark);

    a, div {
        color: var(--cp-primary-dark);
        background-color: var(--cp-secondary-dark);
    }

    .cp-sidebar-left-arrow svg {
        stroke: var(--cp-primary-dark);
    }

    &:hover, &:focus {
        color: rgb(201, 228, 255);
        background-color: rgb(47, 59, 67);
        
        a {
            color: rgb(201, 228, 255);
            background-color: rgb(47, 59, 67);
        }

        .cp-sidebar-left-arrow {
            background-color: rgb(47, 59, 67);

            svg {
                stroke: rgb(201, 228, 255);
            }
        }
    }
}

/* 带箭头的单个菜单项 */
.cp-sidebar-left-list .cp-module-item.cp-module-item-with-arrow {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;

    a {
        display: flex;
        align-items: center;
    }

    .cp-sidebar-left-arrow {
        width: 2.5rem;
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
}

/* 菜单列表 */
.cp-sidebar-left-list li {
    margin: 0 0 0.25rem 0;
    display: grid;
    grid-template-rows: 2.75rem 0fr;
    transition: grid-template-rows 0.2s cubic-bezier(0, 0, 0.3, 1);
    overflow-y: hidden;

    ul {
        min-height: 0;
        height: auto;
        padding-left: 0.75rem;
        margin: 0 0 0 1rem;
        list-style: none;
        border-left: var(--cp-border-light);
        transition: margin 0.3s cubic-bezier(0, 0, 0.3, 1);

        li {
            margin: 0;
        }
    }
}

.cp-sidebar-left-list li:last-child {
    margin: 0;
}

.cp-theme-dark .cp-sidebar-left-list li {
    ul {
        border-left: var(--cp-border-dark);
    }
}

/* 展开的菜单列表 */
.cp-sidebar-left-list li.cp-module-sublist-expanded {
    grid-template-rows: 2.75rem 1fr;

    ul {
        margin: 0.25rem 0 0.25rem 1rem;
    }
    
    svg {
        transform: rotate(90deg);
    }
}

/* 左下角的设置 */
#cp-sidebar-left-settings {
    margin-bottom: 1rem;
}

/* .cp-sidebar-right 的样式在 "../components/toc/Toc.vue" 文件中 */
</style>