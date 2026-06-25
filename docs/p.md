---
title: "攻略教程"
description: "攻略教程是部落驿站曾经的重要模块，收录了游戏机制讲解、流派打法、游戏素材等内容。虽然内容不再持续更新，但仍保留为历史资料，供后来者参考。"
module: posts
canonical: /p
hasUpdateTime: false
---

<script setup>
import PostCategoryTab from "@/customized/posts/PostCategoryTab.vue";
import PageComp from "@/components/PageComp.vue";
import PostList from "@/customized/posts/PostList.vue";
import { getPostList, getPostCount } from "@/assets/posts/posts.js";

const currentPage = 1;
const posts = getPostList(currentPage);
const postCount = getPostCount();
const maxPage = Math.ceil(postCount / 20);
</script>

<PostCategoryTab :categoryIndex="0" />

<PageComp :currentPage="currentPage" :maxPage="maxPage" linkPrefix="/p" />
<PostList :posts="posts" />
<PageComp :currentPage="currentPage" :maxPage="maxPage" linkPrefix="/p" />