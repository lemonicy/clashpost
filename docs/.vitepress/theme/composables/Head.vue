<script setup>
import { onMounted, onBeforeUnmount, nextTick, ref } from 'vue';
import { inBrowser } from 'vitepress';
import { getCookie, setCookie } from "@/assets/global/utils.js";
import { showSidebarLeft, hideSidebarLeft } from '@/composables/sidebar/SidebarLeft.vue';
import { showSidebarRight, hideSidebarRight } from '@/composables/sidebar/SidebarRight.vue';
import { showDialog, hideAllDialogs, hideAllDialogsOnly } from '@/components/dialog/Dialog.vue';
import Overlay, { showOverlay, hideOverlay } from '@/components/dialog/Overlay.vue';
import { generateToast } from '@/components/dialog/Toast.vue';
import Close from '@/components/icon/Close.vue';

const notificationCountIconRef = ref(0);
const searchProviderRef = ref();

const hasNotification = true;
const notificationCount = 1;
const currentNotificationId = 5;

// 显示通知弹窗
function showNotificationDialog() {
    // 点击通知按钮后隐藏菜单和目录
    hideAllDialogsOnly();

    // 打开通知弹窗
    showDialog("cp-notification-dialog");

    // 删除通知数量的角标
    const notificationCountIcon = notificationCountIconRef.value
    notificationCountIcon.style.display = "";
    setCookie("cp-notification-id", currentNotificationId, "1", "years");
}

// 点击左上角菜单按钮后运行的代码
function menuBtnEvent() {
    // 如果菜单不存在，则提示本页没有菜单
    const sidebarLeft = document.getElementById("cp-sidebar-left");
    if (sidebarLeft) {
        const fixedLeftValue = sidebarLeft.style.left;
        hideSidebarRight();
        if (fixedLeftValue === "0rem") {
            hideOverlay();
            hideSidebarLeft();
        } else {
            showOverlay("sidebar-left");
            showSidebarLeft();
        }
    } else {
        generateToast("本页没有菜单", {
            type: "warning",
            showDuration: 3000
        });
    }
}

// 显示搜索弹窗
function showSearchDialogEvent() {
    // 点击搜索按钮后隐藏菜单和目录
    hideAllDialogsOnly();

    // 打开搜索弹窗，并将光标聚焦到搜索框
    showDialog("cp-search-dialog");
    document.getElementById("cp-search-input").focus();
}

// 开始搜索
function startSearching() {
    const inputText = document.getElementById("cp-search-input").value;
    const searchText = inputText + " site:clashpost.com";
    const searchTextEncoded = encodeURI(searchText.replaceAll(" ", "+"));

    // 确定搜索服务提供商，并跳转到指定网站
    const searchProvider = getCookie("cp-search-provider");
    let url;
    if (searchProvider === "Google") {
        url = "https://www.google.com/search?q=" + searchTextEncoded;
    } else if (searchProvider === "DuckDuckGo") {
        url = "https://duckduckgo.com/?q=" + searchTextEncoded;
    } else if (searchProvider === "Yandex") {
        url = "https://www.yandex.com/search?text=" + searchTextEncoded;
    } else if (searchProvider === "Yahoo") {
        url = "https://search.yahoo.com/search?p=" + searchTextEncoded;
    } else {
        url = "https://www.bing.com/search?q=" + searchTextEncoded;
    }
    window.open(url, "_self", "noreferrer");
}

// 清空搜索框中输入的内容
function clearSearchText() {
    document.getElementById("cp-search-input").value = "";
}

// 退出搜索
function exitSearching() {
    clearSearchText();
    document.getElementById("cp-search-input").blur();
    hideAllDialogs();
}

// 在搜索弹窗打开时，键入 Enter 键后触发的事件
function searchEnterKeyEvent(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        startSearching();
    }
}

// 在搜索弹窗打开时，输入内容时触发的事件
function searchInputChangeEvent(event) {
    const inputDom = document.getElementById("cp-search-input");
    const inputValue = inputDom.value;
    if (inputValue.length > 0) {
        // 输入框不为空，显示清除按钮
        document.getElementById("cp-search-clear-btn").classList.add("cp-btn-visible");
    } else {
        // 输入框为空，隐藏清除按钮
        document.getElementById("cp-search-clear-btn").classList.remove("cp-btn-visible");
    }
}

// 点击清空搜索框按钮后触发的事件
function clearSearchBtnEvent(event) {
    event.preventDefault();
    clearSearchText();
    document.getElementById("cp-search-clear-btn").classList.remove("cp-btn-visible");
}

// 触发打开搜索弹窗快捷键时运行的代码
function searchshortcutClickEvent(event) {
    if (event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey && event.code === "KeyK") {
        event.preventDefault();

        // 确定搜索弹窗是否已打开
        const searchDialogBackground = document.getElementById("cp-search-dialog");
        const searchDialogShowing = searchDialogBackground.classList.contains("cp-dialog-active");

        if (searchDialogShowing) {
            // 搜索弹窗已打开，关闭弹窗
            hideAllDialogs();
            document.getElementById("cp-search-input").blur();
        } else {
            // 搜索弹窗未打开，先关闭其他弹窗，再打开搜索弹窗
            hideAllDialogsOnly();
            showDialog("cp-search-dialog");
            document.getElementById("cp-search-input").focus();
        }
    }
}

// 点击右上角目录按钮后运行的代码
function tocBtnEvent() {
    const sidebarRight = document.getElementById("cp-sidebar-right");
    if (sidebarRight) {
        const fixedRightValue = sidebarRight.style.right;
        // 显示或隐藏目录
        hideSidebarLeft();
        if (fixedRightValue === "0rem") {
            hideOverlay();
            hideSidebarRight();
        } else {
            showOverlay("sidebar-right");
            showSidebarRight();
        }
    } else {
        generateToast("本页没有目录", {
            type: "warning",
            showDuration: 3000
        });
    }
}

// 确定是否需要展示通知角标
onMounted(() => {
    nextTick(() => {
        if (!inBrowser) return;

        // 确定是否需要显示通知角标
        // 加个延迟，防止 Hydration Mismatch
        setTimeout(() => {
            const notificationCountIcon = notificationCountIconRef.value
            const cookieIdString = getCookie("cp-notification-id");
            const cookieId = cookieIdString ? parseFloat(cookieIdString) : 0;
            // 如果当前的通知 ID 大于 cookie 中存储的 ID，则展示新通知并把新 ID 存入 cookie
            if (hasNotification && cookieId < currentNotificationId) {
                notificationCountIcon.style.display = "block";
            }
        }, 300);

        // 搜索相关的快捷键绑定
        const searchInput = document.getElementById("cp-search-input");
        searchInput.addEventListener("keydown", event => searchEnterKeyEvent(event));
        searchInput.addEventListener("keyup", event => searchInputChangeEvent(event));
        window.addEventListener("keydown", event => searchshortcutClickEvent(event));

        // 在搜索弹窗中写出当前使用的搜索服务提供商
        const searchProviderCookie = getCookie("cp-search-provider");
        let searchProviderText;
        if (searchProviderCookie === "Google") {
            searchProviderText = "谷歌";
        } else if (searchProviderCookie === null) {
            searchProviderText = "必应";
        } else if (searchProviderCookie === "Yahoo") {
            searchProviderText = "雅虎";
        } else {
            // 没有翻译，直接把原文填上去
            searchProviderText = searchProviderCookie;
        }
        const searchProviderDom = searchProviderRef.value;
        searchProviderDom.innerText = searchProviderText;
    });
});

onBeforeUnmount(() => {
    const searchInput = document.getElementById("cp-search-input");
    searchInput.removeEventListener("keydown", event => searchEnterKeyEvent(event));
    searchInput.removeEventListener("keyup", event => searchInputChangeEvent(event));
    window.removeEventListener("keydown", event => searchshortcutClickEvent(event));
});
</script>

<template>
    <Overlay />
    <div id="cp-nav-container">
        <nav id="cp-nav-header">
            <div id="cp-head-left">
                <button id="cp-site-menu-btn" class="cp-nav-icon" aria-label="菜单" @click="menuBtnEvent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div id="cp-site-name">部落驿站</div>
            </div>
            <div id="cp-head-right">
                <button id="cp-notification-btn" class="cp-nav-icon" aria-label="通知" @click="showNotificationDialog">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                    <div id="cp-notification-new" ref="notificationCountIconRef">{{ notificationCount }}</div>
                </button>
                <button id="cp-search-btn" class="cp-nav-icon" aria-label="搜索" @click="showSearchDialogEvent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
                <button id="cp-toc-btn" class="cp-nav-icon" aria-label="目录" @click="tocBtnEvent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
            </div>
        </nav>
    </div>
    <Dialog dialogId="cp-notification-dialog" title="通知" :hasSecondaryBtn="false" :hasPrimaryBtn="true" primaryText="我知道了">
        <p>二月更新后，高等级建筑的升级时间和升级费用不一定高于低等级建筑的，比如 5 级箭塔的升级时间是 4 小时，6 级反倒减少到了 2 小时。游戏设计如此，并不是网站写错了。</p>
    </Dialog>
    <Dialog dialogId="cp-search-dialog" title="搜索 (Ctrl + k)" :hasSecondaryBtn="true" :hasPrimaryBtn="true"
        primaryText="开始搜索" secondaryText="关闭窗口" :hasClickPrimaryEvent="true" :hasClickSecondaryEvent="true"
        @clickPrimaryEvent="startSearching" @clickSecondaryEvent="exitSearching">
        <div id="cp-search-input-container">
            <form>
                <input id="cp-search-input" type="search" name="searchText" placeholder="请输入搜索词" />
                <button id="cp-search-clear-btn" type="reset" aria-label="清空搜索框" @click="event => clearSearchBtnEvent(event)"><Close /></button>
            </form>
        </div>
        <div id="cp-search-input-tip">
            当前的搜索服务提供商为【<span ref="searchProviderRef">???</span>】，可 <a href="/settings">前往设置</a> 修改。
        </div>
    </Dialog>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

#cp-nav-container {
    width: 100%;
    height: 4rem;
    position: fixed;
    top: 0;
    z-index: 1050;
    @include cp-acrylic-bg-light;
    border-bottom: var(--cp-border-light);
}

.cp-theme-dark #cp-nav-container {
    @include cp-acrylic-bg-dark;
    border-bottom: var(--cp-border-dark);
}

/* 由于打开窗口时已经有全局毛玻璃效果了，因此出于性能考虑，Head 的毛玻璃效果不同时开启 */
body.cp-dialog-show #cp-nav-container {
    background-color: var(--cp-page-bg-light);
}

body.cp-theme-dark.cp-dialog-show #cp-nav-container {
    background-color: var(--cp-page-bg-dark);
}

#cp-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: $cp-col-deskop;
    height: 3.875rem;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 0.25rem;
}

@media (min-width: $cp-col-tablat) {
    #cp-nav-header {
        margin-left: 0.25rem;
    }
}

@media (min-width: 1612px) {
    #cp-nav-header {
        margin-left: calc(50% - 788px);
    }
}

#cp-site-name {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5rem;
}

.cp-nav-icon {
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--cp-border-light);
    user-select: none;

    &:hover,
    &:hover svg,
    :hover {
        cursor: pointer;
        background-color: var(--cp-grey-bg-light);
    }

    &:focus {
        outline: 0.1rem solid var(--cp-primary-light);
    }
}

.cp-theme-dark .cp-nav-icon {
    background-color: var(--cp-border-dark);

    &:hover,
    &:hover svg,
    :hover {
        background-color: var(--cp-grey-bg-dark);
    }

    &:focus {
        outline: 0.1rem solid var(--cp-primary-dark);
    }
}

.cp-nav-icon svg {
    width: 1.5rem;
    height: 1.5rem;
}

#cp-head-left {
    display: flex;
    align-items: center;
}

#cp-site-menu-btn {
    width: 48px;
    overflow: hidden;
    transition: width 0.3s cubic-bezier(0, 0, 0.2, 1);
}

#cp-site-name {
    margin-left: 0;
}

@media (min-width: $cp-col-tablat) {
    #cp-site-menu-btn {
        width: 0;
    }

    #cp-site-name {
        margin-left: 0.875rem;
    }
}

#cp-head-right {
    display: flex;
    position: relative;
    right: 0.5rem;
}

/* 在不同宽度的设备上对齐 Head 元素和内容 */
@media (min-width: $cp-col-tablat) {
    #cp-head-right {
        right: 0.75rem;
    }
}

@media (min-width: $cp-col-laptop) {
    #cp-head-right {
        width: 228px;
    }
}

@media (min-width: $cp-col-deskop) {
    #cp-head-right {
        right: 1.75rem;
    }
}

#cp-toc-btn {
    width: 48px;
    overflow: hidden;
    transition: width 0.3s cubic-bezier(0, 0, 0.2, 1);
}

@media (min-width: $cp-col-laptop) {
    #cp-toc-btn {
        width: 0;
    }
}

/* 新通知的图标 */
#cp-notification-btn {
    position: relative;
}

#cp-notification-new {
    display: none;
    width: 1rem;
    height: 1rem;
    font-size: 1rem;
    line-height: 1;
    position: absolute;
    top: 0.375rem;
    right: 0.5rem;
    border-radius: 50%;
    color: rgb(255, 255, 255);
    background-color: rgb(220, 60, 60);
    z-index: 2000;
}

.cp-theme-dark #cp-notification-new {
    color: rgb(0, 0, 0);
    background-color: rgb(255, 218, 185);
}

/* 搜索的弹窗 */
#cp-search-input-container form {
    display: flex;
    position: relative;
}

#cp-search-input {
    width: 100%;
    margin-top: 0.25rem;
    padding: 0.375rem 2.375rem 0.375rem 0.625rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgb(17, 24, 39);

    &::placeholder {
        color: var(--cp-grey-text-light);
    }

    &:focus {
        background-color: var(--cp-page-bg-light);
        outline: 0.125rem solid var(--cp-text-light);
    }
}

.cp-theme-dark #cp-search-input {
    background-color: rgba(249, 250, 251, 0.1);
    color: rgb(209, 213, 219);

    &::placeholder {
        color: var(--cp-grey-text-dark);
    }

    &:focus {
        background-color: var(--cp-page-bg-dark);
        outline: 0.125rem solid var(--cp-text-dark);
    }
}

#cp-search-clear-btn {
    display: none;
    height: 2.5rem;
    position: absolute;
    top: 0.25rem;
    right: 0;
    border: none;
    background-color: transparent;

    svg {
        width: 1.25rem;
    }
}

#cp-search-clear-btn.cp-btn-visible {
    display: block;
}

#cp-search-input-tip {
    margin-top: 1.25rem;
}
</style>