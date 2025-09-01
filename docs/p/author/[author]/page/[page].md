---
title: "个人主页"
customTitle: true
description: "欢迎来到部落驿站，你现在看到的是个人主页功能，您可以选择一篇他的文章阅读。另外，在非个人主页页面，你可以点击昵称进入文章作者的个人主页。"
module: posts-author
canonical: /p
robots: noindex, follow
hasUpdateTime: false
---

<script setup>
import { useData } from "vitepress";
import PageComp from "@/components/PageComp.vue";
import PostList from "@/customized/posts/PostList.vue";
import { getAuthorInfo, getPostList, getPostCount } from "@/assets/posts/posts.js";

const { params } = useData();

const currentPage = params.value.page;
const authorId = params.value.author;
const authorInfo = getAuthorInfo(authorId);
const authorName = authorInfo.nickName;

const posts = getPostList(currentPage, {"author": authorId});
const postCount = getPostCount({"author": authorId});
const linkPrefix = "/p/author/" + authorId;
const maxPage = Math.ceil(postCount / 20);
</script>

# “{{ authorName }}”的个人主页

<PageComp :currentPage="currentPage" :maxPage="maxPage" :linkPrefix="linkPrefix" />
<PostList :posts="posts" />
<PageComp :currentPage="currentPage" :maxPage="maxPage" :linkPrefix="linkPrefix" />