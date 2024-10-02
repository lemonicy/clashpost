---
title: "攻略教程"
description: "攻略教程是部落驿站的特色模块之一，其中包括游戏机制讲解、流派打法、游戏素材等内容。我们只收录优质内容，保证每一篇文章都能让你涨知识。"
module: posts
canonical: /p
robots: noindex, follow
hasUpdateTime: false
---

<script setup>
import { useData } from 'vitepress';
import PostCategoryTab from '@/components/posts/CategoryTab.vue';
import PageComp from '@/components/PageComp.vue';
import PostList from '@/components/posts/PostList.vue';
import { getPostList, getPostCount } from '@/assets/posts/posts.js';

const { params } = useData();

const currentPage = params.value.page;
const posts = getPostList(currentPage);
const postCount = getPostCount();
const maxPage = Math.ceil(postCount / 20);
</script>

页面正在迁移中，如想查看全部攻略，请 [前往旧版网站](https://www.cocservice.top/p/)。

<PostCategoryTab :categoryIndex="0" />

<PageComp :currentPage="currentPage" :maxPage="maxPage" linkPrefix="/p" />
<PostList :posts="posts" />
<PageComp :currentPage="currentPage" :maxPage="maxPage" linkPrefix="/p" />