<script setup>
import PostListItem from '@/components/posts/PostListItem.vue';

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="cp-post-list">
        <PostListItem
            v-for="(post, index) of props.posts"
            :index="index"
            :featuredImg="post.featuredImg"
            :featuredImgConvertWebp="post.featuredImgConvertWebp"
            :lastUpdatedISO="post.lastUpdatedISO"
            :tags="post.tags"
            :url="post.url"
            :title="post.title"
            :excerpt="post.excerpt"
            :author="post.author" />
    </div>
</template>