---
title: "部落冲突 coc 烈焰之心装备升级数据"
navTitle: "烈焰之心"
shownTitle: "烈焰之心"
description: "缓慢恢复飞龙公爵的生命值，当他倒下时，会爆发出灼伤敌人的烈焰。"
module: upgrade-home
imgFolder: home_heroes/07e0
wiki: https://clashofclans.fandom.com/wiki/Fire_Heart
canonical: /upgrade/07e0-Fire-Heart
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Fire_Heart_info.png" :imgAlt="$frontmatter.navTitle" description="缓慢恢复飞龙公爵的生命值，当他倒下时，会爆发出灼伤敌人的烈焰。" />

<SmallTitle>说明</SmallTitle>

1. 烈焰之心是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的两件初始装备之一，另一件是 [助燃器](/upgrade/07e1-Flame-Blower)。
2. 烈焰之心亡语的爆炸效果（爆炸范围：4格）只会在飞龙公爵第一次死亡时触发一次。当他被复活后，后续的死亡不会触发爆炸。
3. 烈焰之心装备还可以增加飞龙公爵的生命值和攻击力。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="有飞龙公爵即可" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |亡语<br>伤害|每秒自恢复| 每秒伤害提升|血量提升 |升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       --- |  ---    |  ---       |--- |---  |  ---  |       ---       |       ---      |
| 1 | 1,000 | 50 | 10 | 900 | \ | \ | \ | \ |
| 2 | 1,000 | 50 | 12 | 1,200 | 120 | - | 1 |15|
| 3 | 1,350 | 70 | 14 | 1,450 | 240 | 20 | 1 |15|
| 4 | 1,350 | 70 | 16 | 1,750 | 400 | - | 1 |15|
| 5 | 1,350 | 70 | 18 | 2,000 | 600 | - | 1 |15|
| 6 | 1,700 | 90 | 20 | 2,300 | 840 | 100 | 1 |15|
| 7 | 1,700 | 90 | 22 | 2,600 | 1,120 | - | 1 |15|
| 8 | 1,700 | 90 | 24 | 2,850 | 1,440 | - | 1 |15|
| 9 | 2,000 | 110 | 26 | 3,150 | 1,800 | 200 | 1 |15|
| 10 | 2,000 | 110 | 28 | 3,400 | 1,900 | - | 3 |15|
| 11 | 2,000 | 110 | 30 | 3,700 | 2,000 | - | 3 |15|
| 12 | 2,350 | 130 | 32 | 4,000 | 2,100 | 400 | 3 |15|
| 13 | 2,350 | 130 | 34 | 4,250 | 2,200 | - | 5 |15|
| 14 | 2,350 | 130 | 36 | 4,550 | 2,300 | - | 5 |15|
| 15 | 2,700 | 155 | 38 | 4,800 | 2,400 | 600 | 5 |15|
| 16 | 2,700 | 155 | 40 | 5,100 | 2,500 | - | 7 |15|
| 17 | 2,700 | 155 | 42 | 5,450 | 2,600 | - | 7 |15|
| 18 | 3,000 | 175 | 45 | 5,600 | 2,700 | 600 | 7 |15|
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2026/02/23">
        <TimelineRow>新增烈焰之心</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>