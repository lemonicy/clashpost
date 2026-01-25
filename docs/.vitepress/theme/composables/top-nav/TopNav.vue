<script setup>
import { nextTick, ref, watch } from "vue";
import { useRouter } from "vitepress";
import BreadCrumb from "@/composables/top-nav/BreadCrumb.vue";
import GoldPassSelect from "@/customized/upgrade/GoldPassSelect.vue";

const router = useRouter();
let goldPassSelectKey = ref(0);

watch(() => router.route.data.relativePath, (path) => {
    nextTick(() => {
        goldPassSelectKey.value++;
    });
}, { immediate: false });
</script>

<template>
    <div class="cp-top-nav" v-if="$frontmatter.module !== 'home'">
        <BreadCrumb :module="$frontmatter.module" />
        <GoldPassSelect :key="'goldPassSelect-' + goldPassSelectKey" :link="$frontmatter.canonical" :hasCustomOption="true" />
    </div>
</template>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

.cp-top-nav {
    display: block; /* 其实就是 div 的默认值，写出来只是容易理解 */
    margin: 0.375rem 0 0 0;

    .cp-select-container {
        display: flex; /* 即使在小屏设备上也不换行 */
        justify-content: flex-end;
        align-items: center;
        margin: 0;
    }

    .cp-select-title {
        font-weight: 400;
        color: var(--cp-grey-text-light);
    }

    .cp-select {
        margin: 0 !important;
    }
}

.cp-theme-dark .cp-top-nav {
    .cp-select-title {
        color: var(--cp-grey-text-dark);
    }
}

@media (min-width: $cp-col-tablat-big) {
    /* 大屏设备上尽量将面包屑导航和月卡减免的切换选项排在一行 */
    .cp-top-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        .cp-select-container {
            margin: 0;
        }
    }
}
</style>