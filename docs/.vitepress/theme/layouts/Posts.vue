<script setup>
import { nextTick, ref, watch } from 'vue';
import { useRouter } from 'vitepress';
import Head from '@/composables/Head.vue';
import SidebarLeft from '@/composables/sidebar/SidebarLeft.vue';
import TopNav from '@/composables/top-nav/TopNav.vue';
import PageTitle from '@/composables/PageTitle.vue';
import PageInfoPost from '@/customized/posts/PageInfoPost.vue';
import Main from '@/composables/Main.vue';
import Footer from '@/composables/Footer.vue';
import SidebarRight from '@/composables/sidebar/SidebarRight.vue';
import NetworkWarning from '@/components/common/NetworkWarning.vue';

const router = useRouter();

let titleKey = ref(0);
let pageInfoPostKey = ref(0);

const hasPageInfoPost = link => {
    return link && link.match("/p/\d*");
};

watch(() => router.route.data.relativePath, (path) => {
    nextTick(() => {
        titleKey.value++;
        pageInfoPostKey.value++;
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
        <Footer />
    </main>
    <SidebarRight />
    <NetworkWarning />
</template>

<style lang="scss">
.cp-top-callout {
    margin-bottom: -0.5rem;
}
</style>