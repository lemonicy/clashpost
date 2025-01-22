<script setup>
import { useRouter } from 'vitepress';
import EventTabs from '@/components/tab/EventTabs.vue';
import EventTab from '@/components/tab/EventTab.vue';

const props = defineProps({
    categoryIndex: {
        type: Number,
        default: 0
    }
});

const router = useRouter();

async function changeCategory(categoryIndex) {
    const linkArr = ["", "starter", "advanced", "knowledge", "material", "defense",
        "bh", "capital", "storm", "archive", "uncategorized"];
    let fullLink;
    if (categoryIndex === 0) {
        fullLink = "/p"
    } else {
        fullLink = "/p/category/" + linkArr[categoryIndex];
    }
    // 获取滚动位置
    const tabLeftPosition = document.querySelector("#cp-post-category-tabs .cp-tabs").scrollLeft;
    await router.go(fullLink);
    document.querySelector("#cp-post-category-tabs .cp-tabs").scrollLeft = tabLeftPosition;
}
</script>

<template>
    <EventTabs id="cp-post-category-tabs" contentClass="cp-upgrade-item" :stickyTabs="true">
        <EventTab :activeTab="categoryIndex === 0" @clickEvent="changeCategory(0)">全部</EventTab>
        <EventTab :activeTab="categoryIndex === 1" @clickEvent="changeCategory(1)">新手入门</EventTab>
        <EventTab :activeTab="categoryIndex === 2" @clickEvent="changeCategory(2)">进阶攻略</EventTab>
        <EventTab :activeTab="categoryIndex === 3" @clickEvent="changeCategory(3)">游戏机制</EventTab>
        <EventTab :activeTab="categoryIndex === 4" @clickEvent="changeCategory(4)">游戏素材</EventTab>
        <EventTab :activeTab="categoryIndex === 5" @clickEvent="changeCategory(5)">布阵和防守</EventTab>
        <EventTab :activeTab="categoryIndex === 6" @clickEvent="changeCategory(6)">夜世界</EventTab>
        <EventTab :activeTab="categoryIndex === 7" @clickEvent="changeCategory(7)">都城</EventTab>
        <EventTab :activeTab="categoryIndex === 8" @clickEvent="changeCategory(8)">风暴之后</EventTab>
        <EventTab :activeTab="categoryIndex === 9" @clickEvent="changeCategory(9)">历史档案</EventTab>
        <EventTab :activeTab="categoryIndex === 10" @clickEvent="changeCategory(10)">未分类</EventTab>
    </EventTabs>
</template>