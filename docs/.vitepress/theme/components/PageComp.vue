<script>
import { isNumber } from '@/assets/global/utils.js';
import { resetToastPosition } from '@/assets/global/common.js';

/**
 * 确定用户输入的页码值是否合法
 * 如果不合法，则返回错误原因，合法则返回 null
 * 
 * @param {Number} page 用户输入的页码
 */
function getPageInvalidInfo(page) {
    if (page === "" || !isNumber(page)) {
        return "页码必须是数字";
    } else {
        page = parseFloat(page);
        if (page % 1 !== 0) {
            return "页码必须是整数";
        }
        if (page < 0) {
            return "页码不得小于 0";
        }
        if (page === 0) {
            return "页码不得为 0";
        }
    }
    return null;
}

/**
 * 给出页码，确定链接
 * 
 * @param {String} linkPrefix 页码前缀
 * @param {Number} page 页码
 */
function getPageLink(linkPrefix, page) {
    if (page === 1) {
        return linkPrefix;
    } else {
        return linkPrefix + "/page/" + page;
    }
}

function focusEvent(pageJumpInput) {
    pageJumpInput.value = "";
    // 当键盘弹出时重新确定 toast 的位置，并绑定滚动事件，防止 iOS 键盘盖住固定元素
    // 由于键盘弹出和收起需要一定时间，因此加个延时
    setTimeout(resetToastPosition, 500);
    window.addEventListener("scroll", resetToastPosition);
}

function blurEvent(pageJumpContainer) {
    pageJumpContainer.classList.remove("cp-page-input-show");
    setTimeout(resetToastPosition, 500);
    window.removeEventListener("scroll", resetToastPosition);
}
</script>

<script setup>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vitepress';
import { PagePre, PageNext } from '@/components/icon/page/PageArrows.vue';
import { generateToast } from '@/components/dialog/Toast.vue';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    maxPage: {
        type: Number,
        required: true
    },
    linkPrefix: {
        type: String,
        required: true
    }
});

const pageJumpRef = ref();
const router = useRouter();

const page = props.currentPage;
const maxPage = props.maxPage;
const prefix = props.linkPrefix;

/**
 * 敲击回车后跳转页面的逻辑
 * 
 * @param {Object} event 敲击回车后的 event
 */
function enterKeyEvent(event, pageJumpInput) {
    if (event.key === "Enter") {
        event.preventDefault();
        const inputValue = pageJumpInput.value;
        const pageInvalidInfo = getPageInvalidInfo(inputValue, maxPage);
        if (pageInvalidInfo) {
            // 如果 pageInvalidInfo 不为 null，说明数据不合法，需要弹出错误信息
            generateToast(pageInvalidInfo, {
                type: "error"
            });
        } else {
            // 如果 pageInvalidInfo 为 null，说明数据合法，需要继续处理数据
            let pageNum = parseInt(inputValue);
            let pageLink;
            let succeedText;
            // 如果用户输入的页面数大于或等于最大页面数，则跳转到最后一页
            if (pageNum >= maxPage) {
                pageLink = getPageLink(prefix, maxPage);
                succeedText = "已跳转到最后一页";
            } else {
                pageLink = getPageLink(prefix, pageNum);
                succeedText = "已跳转到第 " + pageNum + " 页";
            }
            router.go(pageLink).then(() => {
                generateToast(succeedText, {
                    type: "info"
                });
            });
        }
        // 为了防止键盘弹出后 toast 被键盘挡住，或者键盘收起后 toast 出现在屏幕中心，回车后重置一次位置
        setTimeout(resetToastPosition, 500);
    }
}

/**
 * 检测到按键 E 按下就撤回输入，防止输入框中出现 E/e.
 * 在数学中，e 常用作自然常数或科学计数法（Exp），为避免不必要的麻烦，这里直接禁用。
 * 
 * @param event 输入数字时触发的 event
 * @param pageJumpInput 
 */
function inputCheck(event) {
    if (event.key === "E" || event.key === "e") {
        event.preventDefault();
    }
}

function showPageJumpInput() {
    const pageJumpContainer = pageJumpRef.value;
    const pageJumpInput = pageJumpContainer.querySelector(".cp-page-btn-jump-input input");
    pageJumpContainer.classList.add("cp-page-input-show");
    pageJumpInput.focus();
}

onMounted(() => {
    nextTick(() => {
        const pageJumpContainer = pageJumpRef.value;
        if (pageJumpContainer) {
            const pageJumpInput = pageJumpContainer.querySelector(".cp-page-btn-jump-input input");
            pageJumpInput.addEventListener("keydown", event => enterKeyEvent(event, pageJumpInput));
            // 下面空的 event 参数不能不传，否则可能不执行
            pageJumpInput.addEventListener("focus", event => focusEvent(pageJumpInput));
            pageJumpInput.addEventListener("blur", event => blurEvent(pageJumpContainer));
            pageJumpInput.addEventListener("keydown", event => inputCheck(event));
        }
    });
});

onBeforeUnmount(() => {
    const pageJumpContainer = pageJumpRef.value;
    if (pageJumpContainer) {
        const pageJumpInput = pageJumpContainer.querySelector(".cp-page-btn-jump-input input");
        pageJumpInput.removeEventListener("keydown", event => enterKeyEvent(event, pageJumpInput));
        pageJumpInput.removeEventListener("focus", event => focusEvent(pageJumpInput));
        pageJumpInput.removeEventListener("blur", event => blurEvent(pageJumpContainer));
        pageJumpInput.removeEventListener("keydown", event => inputCheck(event));
    }
});
</script>

<template>
    <div class="cp-page-component" v-if="maxPage > 1">
        <button class="cp-page-btn cp-page-btn-disabled" v-if="page == 1" aria-label="上一页按钮（已禁用）">
            <PagePre />
        </button>
        <a class="cp-page-btn" v-if="page >= 2" :href="getPageLink(prefix, page - 1)" aria-label="上一页">
            <PagePre />
        </a>
        <a class="cp-page-btn" v-if="page >= 4" :href="getPageLink(prefix, 1)" :aria-label="'第 1 页'">1</a>
        <button class="cp-page-btn cp-page-btn-dots" v-if="page >= 5" aria-label="省略号">…</button>
        <a class="cp-page-btn" v-if="page >= 3" :href="getPageLink(prefix, page - 2)"
            :aria-label="'第 ' + (page - 2) + ' 页'">
            {{ page - 2 }}
        </a>
        <a class="cp-page-btn" v-if="page >= 2" :href="getPageLink(prefix, page - 1)"
            :aria-label="'第 ' + (page - 1) + ' 页'">
            {{ page - 1 }}
        </a>
        <button class="cp-page-btn cp-page-btn-active">{{ page }}</button>
        <a class="cp-page-btn" v-if="maxPage - page >= 1" :href="getPageLink(prefix, page + 1)"
            :aria-label="'第 ' + (page + 1) + ' 页'">
            {{ page + 1 }}
        </a>
        <a class="cp-page-btn" v-if="maxPage - page >= 2" :href="getPageLink(prefix, page + 2)"
            :aria-label="'第 ' + (page + 2) + ' 页'">
            {{ page + 2 }}
        </a>
        <a class="cp-page-btn" v-if="maxPage - page >= 3" :href="getPageLink(prefix, page + 3)"
            :aria-label="'第' + (page + 3) + '页'">
            {{ page + 3 }}
        </a>
        <a class="cp-page-btn" v-if="maxPage - page >= 1" :href="getPageLink(prefix, page + 1)" aria-label="下一页">
            <PageNext />
        </a>
        <button class="cp-page-btn cp-page-btn-disabled" v-if="page == maxPage" aria-label="下一页按钮（已禁用）">
            <PageNext />
        </button>
        <button class="cp-page-btn cp-page-btn-jump" @click="showPageJumpInput" aria-label="跳转到任意页面" ref="pageJumpRef">
            <div class="cp-page-btn-jump-text">跳转</div>
            <div class="cp-page-btn-jump-input">
                <form>
                    <input tabindex="-1" type="number" name="page" min="0" required />
                </form>
            </div>
        </button>
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-page-component {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
}

@media (min-width: $cp-col-tablat) {
    .cp-page-component {
        justify-content: flex-end;
    }
}

.cp-page-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.875rem;
    height: 2rem;
    box-sizing: content-box;
    padding: 0.25rem;
    font-size: 1rem;
    color: var(--cp-text-light);
    border: var(--cp-border-light);
    border-radius: 0.25rem;
    text-decoration: none;
    min-height: 0; /* 覆盖按钮默认的 min-height */
    background-color: var(--cp-page-bg-light);

    svg {
        width: 1.125rem;
    }

    &:hover, &:focus {
        text-decoration: none;
        background-color: rgb(240, 240, 240);
    }
}

.cp-theme-dark .cp-page-btn {
    color: var(--cp-text-dark);
    border: var(--cp-border-dark);
    background-color: var(--cp-page-bg-dark);

    &:hover, &:focus {
        background-color: rgb(48, 48, 48);
    }
}

.cp-page-btn.cp-page-btn-active {
    background-color: var(--cp-primary-light);
    color: rgb(235, 235, 235);
    border: 0.1rem solid var(--cp-primary-light);

    &:hover, &:focus {
        background-color: rgb(60, 88, 166);
        border: 0.1rem solid rgb(60, 88, 166);
    }
}

.cp-theme-dark .cp-page-btn.cp-page-btn-active {
    background-color: var(--cp-primary-dark);
    color: rgb(15, 15, 15);
    border: 0.1rem solid var(--cp-primary-dark);

    &:hover, &:focus {
        background-color: rgb(158, 230, 255);
        border: 0.1rem solid rgb(158, 230, 255);
    }
}

/* 禁用的按钮 */
.cp-page-btn.cp-page-btn-disabled {
    cursor: not-allowed;
    background-color: rgba(26, 28, 24, 0.15);
    border: 0.1rem solid rgba(26, 28, 24, 0.15);
    color: rgba(26, 28, 24, 0.7);

    svg {
        stroke: rgba(26, 28, 24, 0.7);
    }
}

.cp-theme-dark .cp-page-btn.cp-page-btn-disabled {
    background-color: rgba(227, 227, 220, 0.25);
    border: 0.1rem solid rgba(227, 227, 220, 0.12);
    color: rgba(227, 227, 220, 0.6);

    svg {
        stroke: rgba(227, 227, 220, 0.6);
    }
}

/* 省略号 */
.cp-page-btn.cp-page-btn-dots {
    cursor: not-allowed;
}

.cp-page-btn.cp-page-btn-dots:hover, .cp-page-btn.cp-page-btn-dots:focus {
    background-color: var(--cp-page-bg-light);
}

.cp-theme-dark .cp-page-btn.cp-page-btn-dots:hover,
.cp-theme-dark .cp-page-btn.cp-page-btn-dots:focus {
    background-color: var(--cp-page-bg-light);
}

/* 跳转按钮以及输入页码的输入框 */
.cp-page-btn.cp-page-btn-jump {
    width: 3rem;
}

.cp-page-btn.cp-page-btn-jump {
    .cp-page-btn-jump-text {
        display: inherit;
    }

    .cp-page-btn-jump-input {
        display: none;
        
        input {
            width: 3rem;
            height: 2rem;
            border: none;
            border-radius: 0.25rem;
            font-size: 1rem;
            background-color: var(--cp-page-light);
        }
    }

    &:hover, &:focus {
        background-color: inherit;
    }
}

.cp-theme-dark .cp-page-btn.cp-page-btn-jump {
    .cp-page-btn-jump-input {
        input {
            background-color: var(--cp-page-dark);
        }
    }

    &:hover, &:focus {
        background-color: inherit;
    }
}

.cp-page-btn.cp-page-btn-jump.cp-page-input-show {
    .cp-page-btn-jump-text {
        display: none;
    }

    .cp-page-btn-jump-input {
        display: inherit;
    }
}
</style>