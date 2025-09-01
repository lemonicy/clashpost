<script>
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}
</script>

<script setup>
import { onMounted, onUpdated, ref, computed } from "vue";
import { useData } from "vitepress";
import ArrowTop from "@/components/icon/ArrowTop.vue";
import ExternalLink from "@/components/icon/ExternalLink.vue";
import TocList from "@/composables/sidebar/TocList.vue";
import { hideAllDialogs } from "@/components/dialog/Dialog.vue";

const headings = ref([]);
const { frontmatter } = useData();

function setTocHeadings() {
    headings.value.splice(0, headings.value.length);
    document.querySelector("main")
        .querySelectorAll("h2, h3, h4")
        .forEach((el, index) => {
            const domId = "cp-title-" + index;
            const tocId = "cp-toc-" + index;
            el.setAttribute("id", domId);

            headings.value.push({
                id: tocId,
                level: parseInt(el.tagName.charAt(1), 10),
                content: el.innerText,
                subheadings: []
            });
        });
}

onMounted(() => {
    setTimeout(setTocHeadings, 100);
});

// 开发环境下每 2 秒更新一次目录
if (import.meta.env.MODE === 'development') {
    // 由于 setTocHeadings() 函数改动了当前组件的 DOM 结构，因此下方的 onUpdated 事件会反复触发
    // 为了避免这个函数占满 CPU，这里用 setTimeout 控制运行频率
    let tocUpdateTimer;
    onUpdated(() => {
        clearTimeout(tocUpdateTimer);
        tocUpdateTimer = setTimeout(setTocHeadings, 2000);
    });
}

const groupedHeadings = computed(() => {
    let items = [...headings.value];
    for (let i = items.length - 1; i >= 0; i--) {
        let currentItem = items[i];
        let parentItem;
        for (let index = items.length - 1; index >= 0; index--) {
            const item = items[index];
            if (item.level < currentItem.level && index < i) {
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

const wikiLink = frontmatter.value.wiki;
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
    margin-bottom: auto; /* 占满空间，把下方留给广告位 */
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