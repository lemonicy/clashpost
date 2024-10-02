<script>
export function showSidebarRight() {
    document.getElementById("cp-sidebar-right").style.right = "0rem";
}

export function hideSidebarRight() {
    document.getElementById("cp-sidebar-right").style.right = "";
}
</script>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { useRouter, inBrowser } from 'vitepress';
import { sidebarRightShowing } from '@/assets/global/common.js';
import { hideOverlay } from '@/components/dialog/Overlay.vue';
// import RightBottomAd from '@/components/ad/RightBottomAd.vue';
import Toc from '@/composables/sidebar/Toc.vue';

let tocKey = ref(0);
let adKey = ref(0);

function refreshToc() {
    nextTick(() => {
        tocKey.value++;
        adKey.value++;
    });
}

function clickSidebarRightLinkEvent(event) {
    const tDom = event.target;
    const tocItemsDom = document.getElementById("cp-sidebar-right-toc-items");
    if (tocItemsDom) {
        const isTocItems = tocItemsDom.contains(tDom);
        const tocScrollTop = document.getElementById("cp-toc-scroll-top");
        const isTocScrollTop = tocScrollTop.contains(tDom) || tocScrollTop === tDom;
        
        const isSidebarRightShowing = sidebarRightShowing();
        if (isTocItems) {
            hideOverlay("tocLink", tDom, isSidebarRightShowing);
            hideSidebarRight();
        } else if (isTocScrollTop) {
            hideOverlay("scrollTopBtn", tDom, isSidebarRightShowing);
            hideSidebarRight();
        }
    }
}

// 当链接改变时刷新右边的导航
if (inBrowser) {
    const router = useRouter();
    watch(() => router.route.data.relativePath, (path) => {
        refreshToc();
    }, { immediate: true });
}
</script>

<template>
    <div id="cp-sidebar-right" ref="sidebarRightRef" @click="event => clickSidebarRightLinkEvent(event)">
        <Toc :key="tocKey" />
        <!-- <RightBottomAd :key="adKey" /> -->
    </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

#cp-sidebar-right {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0.5rem 0.5rem 0 0.5rem;
    width: 240px;
    position: fixed;
    right: -240px;
    top: 4rem;
    height: calc(var(--dvh) * 100 - 4rem);
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1000;
    scrollbar-gutter: stable;
    background-color: var(--cp-page-bg-light);
    transition: right 0.3s cubic-bezier(0, 0, 0.3, 1);

    li {
        margin: 0;
    }

    a, button {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.5rem;
        border: none;
        background-color: var(--cp-page-bg-light);
        color: var(--cp-grey-text-light);

        &:hover, &:focus {
            border-radius: 0.25rem;
            background-color: var(--cp-grey-bg-light);
        }
    }

    a:hover, a:focus {
        text-decoration: none;
    }

    button {
        line-height: 1.75;
        width: 100%;
        justify-content: flex-start;
        font-size: 1rem;
    }
}

.cp-theme-dark #cp-sidebar-right {
    background-color: var(--cp-page-bg-dark);

    a, button {
        background-color: var(--cp-page-bg-dark);
        color: var(--cp-grey-text-dark);

        &:hover, &:focus {
            background-color: var(--cp-grey-bg-dark);
        }
    }
}

@media (min-width: $cp-col-laptop) {
    #cp-sidebar-right {
        right: 0rem;
    }
}

/* $cp-col-deskop + 2 * 0.375rem = 1612px */
@media (min-width: 1612px) {
    #cp-sidebar-right {
        right: calc(50% - 792px);
    }
}

.cp-sidebar-right-title {
    margin: 0;
    line-height: 1.5rem;
    padding: 0.375rem 0.5rem;
    font-weight: 700;
}
</style>