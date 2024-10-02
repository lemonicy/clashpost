<script setup>
import Head from '@/composables/Head.vue';
import SidebarLeft from '@/composables/sidebar/SidebarLeft.vue';
import SidebarRight from '@/composables/sidebar/SidebarRight.vue';
</script>

<template>
    <Head />
    <SidebarLeft />
    <main>
        <div style="position: relative; margin-top: 1rem;">
            <h1>您要访问的页面不存在</h1>
            <p>目前个别页面尚未制作完成，请过一段时间再访问，感谢大家的理解与支持。</p>
            <p><a href="/">点击返回网站首页</a></p>
        </div>
    </main>
    <SidebarRight />
</template>