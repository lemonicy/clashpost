<script>
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}
</script>

<script setup>
import { computed, nextTick, onMounted, onUpdated, ref, watch } from "vue";
import { useData } from "vitepress";
import ArrowTop from "@/components/icon/general/ArrowTop.vue";
import ExternalLink from "@/components/icon/link/ExternalLink.vue";
import TocList from "@/composables/sidebar/TocList.vue";
import { hideAllDialogs } from "@/components/dialog/Dialog.vue";

const headings = ref([]);
const { frontmatter, page } = useData();
const pagePath = computed(() => page.value.relativePath);
const wikiLink = computed(() => frontmatter.value.wiki);

let lastHeadingsSignature = "";

function setTocHeadings() {
    const main = document.querySelector("main");
    if (!main) {
        headings.value = [];
        lastHeadingsSignature = "";
        return;
    }

    const nextHeadings = [];
    main.querySelectorAll("h2, h3, h4").forEach((el, index) => {
        const domId = "cp-title-" + index;
        const tocId = "cp-toc-" + index;
        el.setAttribute("id", domId);

        nextHeadings.push({
            id: tocId,
            level: parseInt(el.tagName.charAt(1), 10),
            content: el.innerText,
            subheadings: []
        });
    });

    // 避免目录内容没有变化时重复触发当前组件更新。
    const signature = JSON.stringify(nextHeadings.map(({ id, level, content }) => ({ id, level, content })));
    if (signature !== lastHeadingsSignature) {
        headings.value = nextHeadings;
        lastHeadingsSignature = signature;
    }
}

async function refreshTocHeadings() {
    // 等待 VitePress 完成新页面内容的 DOM 更新，再读取标题。
    await nextTick();
    setTocHeadings();
}

onMounted(refreshTocHeadings);

// 路由变化时由当前组件自己更新目录，不再依赖父组件通过 key 强制重新挂载。
watch(pagePath, refreshTocHeadings, { flush: "post" });

// 开发环境下更新 Markdown 后，路径不会变化，因此保留一次延迟刷新。
if (import.meta.env.MODE === 'development') {
    let tocUpdateTimer;
    onUpdated(() => {
        clearTimeout(tocUpdateTimer);
        tocUpdateTimer = setTimeout(setTocHeadings, 2000);
    });
}

const groupedHeadings = computed(() => {
    // 使用副本进行分组，避免在 computed 中修改 headings 自身的数据。
    const items = headings.value.map(item => ({
        ...item,
        subheadings: []
    }));

    for (let i = items.length - 1; i >= 0; i--) {
        const currentItem = items[i];
        let parentItem;
        for (let index = i - 1; index >= 0; index--) {
            const item = items[index];
            if (item.level < currentItem.level) {
                parentItem = item;
                break;
            }
        }
        if (parentItem) {
            parentItem.subheadings.unshift(currentItem);
            items.splice(i, 1);
        }
    }
    return items;
});
</script>

<template>
    <div class="cp-sidebar-right-toc" v-if="groupedHeadings.length">
        <p class="cp-sidebar-right-title">本页目录</p>
        <TocList :items="groupedHeadings" />
        <div class="cp-toc-bottom-line"></div>
        <ul id="cp-toc-operation">
            <li v-if="wikiLink">
                <a :href="wikiLink" target="_blank" rel="nofollow" @click="hideAllDialogs">前往维基查看 <ExternalLink :sidebarItemIcon="true" /></a>
            </li>
            <li class="cp-toc-scroll-to-top">
                <button id="cp-toc-scroll-top" @click="scrollToTop">返回顶部 <ArrowTop :sidebarItemIcon="true" /></button>
            </li>
        </ul>
    </div>
    <div class="cp-sidebar-right-toc" v-else>
        <p class="cp-sidebar-right-title">本页没有目录</p>
    </div>
</template>

<style lang="scss">
.cp-sidebar-right-toc {
    width: 224px;

    ul {
        margin: 0;
        padding-left: 0;
    }

    li {
        list-style: none;
        
        ul {
            margin-left: 1rem;
        }
    }

    button {
        font-weight: 400;
    }
}

.cp-toc-scroll-to-top a {
    cursor: pointer;
}
</style>
