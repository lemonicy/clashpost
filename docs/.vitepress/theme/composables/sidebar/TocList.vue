<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

// 确定某个 li 元素是否显示
function getDisplayAttr(itemId) {
    // 如果不存在切换选项卡，则不修改 display 的值
    const switchTab = document.querySelector(".cp-page-tabs");
    if (switchTab === null) {
        return "";
    }

    const titleId = itemId.replace("cp-toc-", "cp-title-");
    const h2Dom = document.getElementById(titleId);
    const contentDom = document.querySelector("main");
    let targetDom = h2Dom.parentNode;
    while (!targetDom.classList.contains("cp-switch-tab-item")) {
        // 如果遍历到 contentDom 还没找到，则说明该内容很可能是公共内容，并不在切换选项卡里，强制退出循环即可
        if (targetDom === contentDom) {
            break;
        }
        // 如果还没找到，并且没有遍历到 contentDom，则继续向上寻找
        targetDom = targetDom.parentNode;
    }
    
    // 程序执行到这里时，targetDom 就是目标 DOM，此时可以确定 display 的值了
    if (targetDom.style.display === "none") {
        return "display: none";
    } else {
        return "";
    }
}
</script>

<template>
    <ul id="cp-sidebar-right-toc-items">
        <li v-for="item in items" :style="getDisplayAttr(item.id)">
            <button :id="item.id">{{ item.content }}</button>
            <TocList v-if="item.subheadings.length" :items="item.subheadings" />
        </li>
    </ul>
</template>

<style lang="scss">
.cp-toc-bottom-line {
    margin: 0.75rem 0.5rem;
    border: 0.05rem solid var(--cp-border-color-light);
}

.cp-theme-dark .cp-toc-bottom-line {
    border: 0.05rem solid var(--cp-border-color-dark);
}
</style>