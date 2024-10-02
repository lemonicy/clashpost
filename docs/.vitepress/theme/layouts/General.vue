<script setup>
import { nextTick, ref, watch } from 'vue';
import { useRouter, useData } from 'vitepress';
import Head from '@/composables/Head.vue';
import SidebarLeft from '@/composables/sidebar/SidebarLeft.vue';
import TopNav from '@/composables/top-nav/TopNav.vue';
import PageTitle from '@/composables/PageTitle.vue';
import PageInfoPost from '@/composables/page-info/PageInfoPost.vue';
import Main from '@/composables/Main.vue';
import UpdateTimeBottom from '@/composables/page-info/UpdateTimeBottom.vue';
import Footer from '@/composables/Footer.vue';
import SidebarRight from '@/composables/sidebar/SidebarRight.vue';
import UpgradeDialog from '@/components/upgrade/UpgradeDialog.vue';
import NetworkWarning from '@/components/common/NetworkWarning.vue';

const router = useRouter();

let titleKey = ref(0);
let pageInfoPostKey = ref(0);
let upgradeDialogKey = ref(0);
let updateTimeBottomKey = ref(0);

const hasPageInfoPost = link => {
    return link && link.startsWith('/p/') && link.indexOf('category') < 0;
};

watch(() => router.route.data.relativePath, (path) => {
    nextTick(() => {
        titleKey.value++;
        pageInfoPostKey.value++;
        upgradeDialogKey.value++;
        updateTimeBottomKey.value++;
    });
}, { immediate: false });
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <TopNav />
        <PageTitle :key="titleKey" v-if="!$frontmatter.customTitle" />
        <PageInfoPost :key="pageInfoPostKey" :link="$frontmatter.canonical" v-if="hasPageInfoPost($frontmatter.canonical)" />
        <Main />
        <UpdateTimeBottom :key="updateTimeBottomKey" :lastUpdated="$frontmatter.lastUpdated" />
        <Footer />
    </main>
    <SidebarRight />
    <UpgradeDialog :key="upgradeDialogKey" :link="$frontmatter.canonical" />
    <NetworkWarning />
</template>

<style>
.cp-top-callout {
    margin-bottom: -0.5rem;
}
</style>