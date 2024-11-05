---
title: "部落驿站"
customTitle: true
titleTemplate: "下载游戏、查数据、看攻略的好帮手"
description: "部落驿站（原部落冲突指导）是一个百科类网站，不管是下载游戏、查数据，还是看攻略，这个网站都能满足你，快来看看吧！"
module: home
canonical: /
hasUpdateTime: false
---

<script setup>
import { onMounted, nextTick, onBeforeUnmount } from 'vue';
import FeaturedCardGrid from '@/components/card/FeaturedCardGrid.vue';
import FeaturedCard from '@/components/card/FeaturedCard.vue';
import { calcAllCountdowns } from '@/assets/homepage-countdown.js';

let intervalId;
onMounted(() => {
    nextTick(() => {
        // 网页完全加载完毕后再计算倒计时，防止阻塞
        setTimeout(() => {
            calcAllCountdowns();
            intervalId = setInterval(calcAllCountdowns, 1000);
        }, 200);
    });
});

onBeforeUnmount(() => {
    clearInterval(intervalId);
});
</script>

<div id="homepage-site-name">
    <h1>部落驿站 (原部落冲突指导)</h1>
</div>
<div id="homepage-site-description">部落玩家的得力助手，下载游戏、找数据、看攻略都来这。</div>

<SmallTitle>网站模块</SmallTitle>
<FeaturedCardGrid>
    <FeaturedCard link="/apk"
        style="background: radial-gradient(ellipse at 50% 80%,rgba(194,97,254,0.15),hsla(0,0%,100%,0));"
        title="安装包下载" subtitle="国际服、私服"
        imgSrc="https://static.clashpost.com/homepage/homepage_apk.jpg" />
    <FeaturedCard link="/upgrade"
        style="background: radial-gradient(ellipse at 50% 80%,rgba(144,238,144,0.15),hsla(0,0%,100%,0));"
        title="升级数据" subtitle="升级时间、所需资源"
        imgSrc="https://static.clashpost.com/homepage/homepage_upgrade.jpg" />
    <FeaturedCard link="/p"
        style="background: radial-gradient(ellipse at 50% 80%,rgba(1,87,226,0.15),hsla(0,0%,100%,0));"
        title="攻略教程" subtitle="流派打法、游戏机制"
        imgSrc="https://static.clashpost.com/homepage/homepage_strategy_v2.jpg" />
    <FeaturedCard link="/faq"
        style="background: radial-gradient(ellipse at 50% 80%,rgba(221,210,59,0.15),hsla(0,0%,100%,0));"
        title="常见问题解答" subtitle="含作者的联系方式"
        imgSrc="https://static.clashpost.com/homepage/homepage_faq.jpg" />
</FeaturedCardGrid>

<SmallTitle>倒计时</SmallTitle>
<div class="homepage-countdown-cards"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(135,206,235,0.15),hsla(0,0%,100%,0));">
    <div id="countdown-cwl" class="homepage-countdown-group">
        <div class="homepage-countdown-title stage-1" style="display: none;">联赛报名开始</div>
        <div class="homepage-countdown-title stage-2" style="display: none;">联赛报名结束</div>
        <div class="homepage-countdown-title stage-3" style="display: block;">所有部落联赛结束</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
    <div id="countdown-raid-weekend" class="homepage-countdown-group">
        <div class="homepage-countdown-title stage-1" style="display: block;">突袭周末开始</div>
        <div class="homepage-countdown-title stage-2" style="display: none;">突袭周末结束</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
    <div id="countdown-trader" class="homepage-countdown-group">
        <div class="homepage-countdown-title">商人刷新</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
    <div id="countdown-clan-games" class="homepage-countdown-group">
        <div class="homepage-countdown-title stage-1" style="display: block;">竞赛开始</div>
        <div class="homepage-countdown-title stage-2" style="display: none;">竞赛结束</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
    <div id="countdown-league-reset" class="homepage-countdown-group">
        <div class="homepage-countdown-title">赛季重置</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
    <div id="countdown-gold-pass" class="homepage-countdown-group">
        <div class="homepage-countdown-title">月卡结算</div>
        <div class="homepage-countdown-time">加载中……</div>
    </div>
</div>

<div class="homepage-recommend">
    <div class="homepage-recommend-item">
        <SmallTitle>你知道吗</SmallTitle>
        <ul>
            <li>使用 <a href="/upgrade/0745-Magic-Mirror">克隆魔镜</a> 复制出的 <a href="/upgrade/0201-Archer-Queen">女王</a> 会被 <a href="/upgrade/0088-Headhunter">英雄猎手</a> 优先攻击。</li>
            <li><a href="/upgrade/000b-Miner">掘地矿工</a> 在防守时不会钻地。</li>
            <li><a href="/upgrade/0185-Overgrowth-Spell">蔓生法术</a> 生成的藤蔓可以卡住 <a href="/upgrade/0244-Log-Launcher">攻城滚木车</a>。</li>
            <li>给萌新捐兵时，捐出去的兵等级会变低，详见 <a href="/p/2053">援兵等级限制机制</a>。</li>
            <li>法术的效果可以叠加，详见 <a href="/p/1362">法术叠加机制</a>。</li>
        </ul>
    </div>
    <div class="homepage-recommend-item">
        <SmallTitle>最新动态</SmallTitle>
        <ul>
            <li>针对 <a href="/upgrade/008a-Druid">德鲁伊</a> 的平衡性调整已于 10/2 上线。</li>
            <li>九月更新的数据已于 9/12 上线。</li>
            <li>网站的搜索功能已与 8/7 上线。</li>
            <li>旧版网站的所有文章已于 6/29 迁移完毕。</li>
            <li>六月更新数据已于 6/18 上线。</li>
        </ul>
    </div>
</div>

<div class="homepage-attention">
    <SmallTitle>注意</SmallTitle>
    <ul>
        <li>倒计时功能依赖设备时间，请确保设备的时间正确。</li>
        <li>最新动态功能是手动维护的，不能自动读取最新发布的内容。</li>
    </ul>
</div>

<style lang="scss">
@use '@/assets/mixins.scss' as *;

#homepage-site-name {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    font-weight: 700;

    h1 {
        margin-bottom: 0;
    }
}

#homepage-site-description {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
}

.cp-theme-light #homepage-site-description {
    color: rgb(75, 85, 99);
}

.cp-theme-dark #homepage-site-description {
    color: rgb(162, 169, 180);
}

/* countdown feature on homepage */
.homepage-countdown-cards {
    display: flex;
    flex-wrap: wrap;
}

.homepage-countdown-group {
    width: 50%;
    padding: 0.75rem;
    text-align: center;
    background-color: transparent;
    transition: width 0.3s cubic-bezier(0, 0, 0.2, 1);

    * {
        background-color: transparent;
    }
}

@media (min-width: $cp-col-tablat-big) {
    .homepage-countdown-group {
        width: 33%;
    }
}

.homepage-countdown-title {
    margin-bottom: 0.25rem;
    font-weight: 600;
}

/* 首页推荐和注意事项 */
.homepage-recommend {
    display: flex;
    flex-wrap: wrap;
}

.homepage-recommend-item {
    width: 100%;
}

@media (min-width: $cp-col-tablat-big) {
    .homepage-recommend-item {
        width: 50%;
    }
}

.homepage-recommend-item, .homepage-attention {
    ul {
        margin-left: 1.5rem;
        padding-left: 0;
        
        &:last-child { 
            margin-bottom: .5rem;
        }
    }
}

.homepage-attention ul {
    margin-top: 1rem;
}

main#layout-index {
    padding: 1rem 1.5rem;
}

@media (min-width: 1624px) {
    main#layout-index {
        /* 1.5rem - (100% - $cp-col-deskop)) / 2 = 824px - 50% */
        padding: 1rem calc(824px - 50%);
    }
}

@media (min-width: $cp-col-deskop) {
    main#layout-index {
        padding: 1rem 0.5rem;
    }
}

/* 覆盖默认的图片样式 */
.cp-featured-card img {
    margin: inherit
}
</style>