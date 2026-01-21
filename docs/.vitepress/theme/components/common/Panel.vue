<script setup>
import Arrow from "@/components/icon/general/Arrow.vue";

const props = defineProps({
    title: {
        type: String,
        default: null
    },
    expandedTitle: {
        type: String,
        default: "点击折叠"
    },
    collapsedTitle: {
        type: String,
        default: "点击展开"
    }
});

// 默认为折叠状态
const title = props.title;
const expandedTitle = props.expandedTitle;
const collapsedTitle = props.collapsedTitle;
const titleText = title ? title : collapsedTitle;

function panelTitleClickEvent(event) {
    // 一直查找被点击元素的祖先元素，直到确定它所在的 panel，加上 body 的限制是为了避免 DOM 结构出错时出现死循环
    let eventParent = event.target.parentNode;
    while (!eventParent.classList.contains("cp-panel")) {
        if (eventParent === document.body) {
            console.error("[clashpost error] \"cp-panel\" 的 DOM 结构错误，请检查以下元素所在的 panel：\n" + event.target);
            return;
        }
        eventParent = eventParent.parentNode;
    }
    const panelDom = eventParent;

    // 确定标题文字所在的 div，修改文字内容
    const panelTitleTextDom = panelDom.querySelector(".cp-panel-title-text");
    if (panelDom.classList.contains("cp-panel-expanded")) {
        // 已展开，点击后折叠
        panelDom.classList.remove("cp-panel-expanded");
        panelTitleTextDom.innerText = title ? title : collapsedTitle;
    } else {
        // 已折叠，点击后展开
        panelDom.classList.add("cp-panel-expanded");
        panelTitleTextDom.innerText = title ? title : expandedTitle;
    }
}
</script>

<template>
    <div class="cp-panel">
        <div class="cp-panel-title" tabindex="0"
            @click="event => panelTitleClickEvent(event)" @keyup.enter="event => panelTitleClickEvent(event)">
            <div class="cp-panel-title-arrow"><Arrow /></div>
            <div class="cp-panel-title-text">{{ titleText }}</div>
        </div>
        <div class="cp-panel-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.cp-panel {
    display: grid;
    margin: 1rem 0;
    background-color: rgb(245, 245, 245);
    grid-template-rows: 3.25rem 0fr;
    transition: grid-template-rows 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.cp-panel.cp-panel-expanded {
    grid-template-rows: 3.25rem 1fr;
}

.cp-panel, .cp-panel-title, .cp-panel-content {
    border-radius: 0.5rem;
}

.cp-theme-dark .cp-panel {
    background-color: rgb(40, 40, 40);
}

.cp-panel-title:active {
    cursor: pointer;
    background-color: rgb(235, 235, 235);
}

.cp-theme-dark .cp-panel-title:active {
    background-color: rgb(48, 48, 48);
}

.cp-panel-title:focus {
    outline: 0.1rem solid var(--cp-primary-light);
}

.cp-theme-dark .cp-panel-title:focus {
    outline: 0.1rem solid var(--cp-primary-dark);
}

.cp-panel-title {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    cursor: pointer;
    user-select: none;
}

.cp-panel-title-arrow {
    display: flex;
    align-items: center;
    width: 1rem;
    margin-right: 0.5rem;
    transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.cp-panel-title-text {
    font-size: 1rem;
}

.cp-panel.cp-panel-expanded .cp-panel-title-arrow {
    transform: rotate(90deg);
}

/* 
 * 以下方案可实现内容高度不确定时的过渡动画
 * https://www.51cto.com/article/745745.html
 */
.cp-panel .cp-panel-content {
    overflow: hidden;
    padding: 0 1rem;
    min-height: 0;
    transition: padding 0.2s cubic-bezier(0, 0, 0.2, 1);

    p, ul, ol {
        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.cp-panel.cp-panel-expanded .cp-panel-content {
    padding: 0.75rem 1rem;
}
</style>