<script>
import { inBrowser } from "vitepress";
import { showOverlay, hideOverlay } from "@/components/dialog/Overlay.vue";
import { hideSidebarLeft } from "@/composables/sidebar/SidebarLeft.vue";
import { hideSidebarRight } from "@/composables/sidebar/SidebarRight.vue";

export function showDialog(dialogId) {
    // 显示遮罩
    showOverlay();
    // 防止侧边栏的 class 影响弹窗位置
    const dialogOverlay = document.querySelector("#cp-dialog-overlay");
    dialogOverlay.classList.remove("cp-dialog-sidebar-left");
    dialogOverlay.classList.remove("cp-dialog-sidebar-right");
    // 显示弹窗
    const dialogBackground = document.querySelector("#" + dialogId + ".cp-dialog-background");
    if (dialogBackground) {
        dialogBackground.classList.add("cp-dialog-active");
    } else {
        console.error("[clashpost error] 要显示的弹窗不存在，请检查 dialogId（" + dialogId + "）是否正确。")
    }
}

/**
 * 隐藏指定弹窗并关闭遮罩
 */
export function hideDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.classList.remove("cp-dialog-active");
    } else {
        console.error("[clashpost error] 无法隐藏指定的弹窗，请检查弹窗 ID 是否正确。dialogId = " + dialogId);
    }
    hideOverlay();
}

/**
 * 隐藏所有弹窗并关闭遮罩
 */
 export function hideAllDialogs() {
    hideSidebarLeft();
    hideSidebarRight();
    document.querySelectorAll(".cp-dialog-background").forEach(el => {
        el.classList.remove("cp-dialog-active");
    });
    hideOverlay();
}

/**
 * 关闭所有弹窗但不关闭遮罩
 */
export function hideAllDialogsOnly() {
    hideSidebarLeft();
    hideSidebarRight();
    document.querySelectorAll(".cp-dialog-background").forEach(el => {
        el.classList.remove("cp-dialog-active");
    });
}

// 点击遮罩隐藏弹窗和侧边栏
function clickDialogBackgroundEvent(event, dialogId)  {
    const tDom = event.target;
    const cDom = document.getElementById(dialogId);
    if (tDom === cDom || tDom.contains(cDom)) {
        hideAllDialogs();
    }
}

// 检测到 Esc 键关闭侧边栏和弹窗
if (inBrowser) {
    window.addEventListener("keydown", event => {
        // 如果页面中正在展示遮罩，说明有弹窗
        const overlay = document.querySelector("#cp-dialog-overlay");
        const overlayShowing = window.getComputedStyle(overlay).getPropertyValue("display") !== "none";
        
        // 如果在有弹窗的情况下检测到 Esc，则关闭侧边栏和弹窗
        if (overlayShowing && event.key === "Escape") {
            hideAllDialogs();
        }
    });
}
</script>

<script setup>
const props = defineProps({
    // dialogId 的存在是为了避免页面中有多个弹窗时程序识别错误
    dialogId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: "提示"
    },
    hasSecondaryBtn: {
        type: Boolean,
        default: true
    },
    secondaryText: {
        type: String,
        default: "取消"
    },
    hasPrimaryBtn: {
        type: Boolean,
        default: true
    },
    primaryText: {
        type: String,
        default: "确认"
    },
    hasClickSecondaryEvent: {
        type: Boolean,
        default: false
    },
    hasClickPrimaryEvent: {
        type: Boolean,
        default: false
    }
});

const emits = defineEmits([
    "clickSecondaryEvent",
    "clickPrimaryEvent"
]);
</script>

<!-- 遮罩已在 Head 中引入，这里不再引入。另外，每个页面中只存在一个遮罩 -->
<template>
    <div :id="props.dialogId" class="cp-dialog-background" @click="event => clickDialogBackgroundEvent(event, props.dialogId)">
        <div class="cp-dialog-container">
            <div class="cp-dialog-title">{{ props.title }}</div>
            <div class="cp-dialog-content">
                <slot></slot>
            </div>
            <div class="cp-dialog-footer">
                <!-- calcel button -->
                <button class="btn-secondary btn-dialog-secondary" @click="emits('clickSecondaryEvent')" v-if="props.hasSecondaryBtn && props.hasClickSecondaryEvent">
                    {{ props.secondaryText }}
                </button>
                <button class="btn-secondary btn-dialog-secondary" @click="hideDialog('cp-notification-dialog')" v-if="props.hasSecondaryBtn && !props.hasClickSecondaryEvent">
                    {{ props.secondaryText }}
                </button>
                <!-- OK button -->
                <button class="btn-primary" @click="emits('clickPrimaryEvent')" v-if="props.hasPrimaryBtn && props.hasClickPrimaryEvent">
                    {{ props.primaryText }}
                </button>
                <button class="btn-primary" @click="hideDialog('cp-notification-dialog')" v-if="props.hasPrimaryBtn && !props.hasClickPrimaryEvent">
                    {{ props.primaryText }}
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-dialog-background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0.375rem;
    width: 100%;
    /* vh 和 dvh 的兼容性不太好，因此采用自定义方案，用 js 确定变量值，再利用 css 变量确定高度
     * 兼容性不太好指的是：
     * 1. 在 Safari 中，vh 的高度包含了工具栏大小，而其他浏览器不包括。
     * 2. 在 Safari 15.6 ~ 16.0 版本中，dvh 的大小比预计中要大。
     */
    height: calc(var(--dvh) * 100);
    overflow: hidden;
    background-color: transparent;
    z-index: 2000;
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}

body.cp-dialog-show .cp-dialog-background.cp-dialog-active {
    transform: scale(1);
}

.cp-dialog-container {
    width: 92%;
    max-width: 728px;
    grid-template-rows: 4.5rem 0fr 4.5rem;
    max-height: 85%;
    display: grid;
    background-color: var(--cp-page-bg-light);
    border: 0.375rem solid var(--cp-page-bg-light);
    border-radius: 0.375rem;
}

body.cp-dialog-show .cp-dialog-background.cp-dialog-active .cp-dialog-container {
    grid-template-rows: 1fr auto 4.5rem;
}

.cp-theme-dark .cp-dialog-container {
    background-color: var(--cp-page-bg-dark);
    border: 0.375rem solid var(--cp-page-bg-dark);
}

@media (min-width: $cp-col-tablat) {
    .cp-dialog-container {
        width: 85%;
        max-height: 70%;
    }
}

@media (min-width: 1440px) {
    .cp-dialog-container {
        max-height: 55%;
    }
}

.cp-dialog-title {
    box-sizing: content-box;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.2rem;
    background-color: inherit;
    display: flex;
    align-items: center;
}

.cp-dialog-content {
    padding: 0 1.2rem;
    flex: 1;
    overflow-y: auto;
    color: rgb(51, 65, 85);
}

.cp-theme-dark .cp-dialog-content {
    color: rgb(162, 169, 180);
}

.cp-dialog-content {
    p, ul, ol, h1, h2, h3, h4, h5, h6 {
        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media (min-width: $cp-col-tablat-big) {
    // 弹窗的滚动条始终显示，而非只有 hover 的时候显示
    .cp-dialog-content::-webkit-scrollbar {
        display: block !important;
    }
}

.cp-dialog-footer {
    box-sizing: content-box;
    padding: 1.2rem;
    height: 2.3rem;
    background-color: inherit;
    display: flex;
    justify-content: flex-end;
}

.btn-dialog-secondary {
    margin-right: 1rem;
}
</style>