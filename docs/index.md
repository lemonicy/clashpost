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
        
- 2024/11 更新后，8 本即可解锁 [女王](/upgrade/0201-Archer-Queen)。
- [地狱火炮](/upgrade/0315-Inferno-Artillery) 缝合了天鹰火炮、熔岩发射器、多人箭塔、都城大本营等建筑的特点。
- 游戏中有两位少爷每天只工作一小时：[实验助手](/upgrade/0800-Lab-Assistant) 和 [建筑工人学徒](/upgrade/0801-Builder's-Apprentice)。
- 在远古版本，[巨型加农炮](/upgrade/110a-Giant-Cannon) 会对 [战争机器](/upgrade/10f0-Battle-Machine) 造成额外伤害。
- 2022/06 更新后，[部落城堡](/upgrade/0407-Clan-Castle) 开始使用圣水升级。

</div>

<div class="homepage-recommend-item">
<SmallTitle>最新动态</SmallTitle>

- 17 本版本的数据已于 12/8 上线。本次更新新增的单位有：
    - 科技：[巨矛投手](/upgrade/0011-Thrower)、[复苏法术](/upgrade/category/home)。
    - 建筑：[地狱火炮](/upgrade/0315-Inferno-Artillery)、[火焰喷射器](/upgrade/0316-Firespitter)、[终极炸弹](/upgrade/0387-Giga-Bomb)、[英雄殿堂](/upgrade/0489-Hero-Hall)、[帮手小屋](/upgrade/0502-Helper-Hut)。
    - 英雄相关：[亡灵王子](/upgrade/0204-Minion-Prince)、[护卫玩偶](/upgrade/0720-Henchmen-Puppet)、[暗黑魔球](/upgrade/0721-Dark-Orb)。
    - 其他：[实验助手](/upgrade/0800-Lab-Assistant)。
- 针对 [德鲁伊](/upgrade/008a-Druid) 的平衡性调整已于 10/2 上线。

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