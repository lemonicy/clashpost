---
title: "部落冲突 coc 巨型特斯拉电磁塔升级数据"
navTitle: "巨型特斯拉电磁塔"
shownTitle: "巨型特斯拉电磁塔"
description: "只要敌方敢碰大本营，作为特斯拉家族中的暴脾气老大哥，巨型特斯拉电磁塔定会让他们好看。它会发射出超强电流击退敌方，你或许还能闻到空气中弥漫着一股......椰子和金属的气味。"
module: upgrade-home
imgFolder: home_buildings/030c
wiki: https://clashofclans.fandom.com/wiki/Town_Hall/Giga_Tesla
canonical: /upgrade/030c-Giga-Tesla
---

- 如想查看大本营的相关数据，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想查看特斯拉电磁塔，请访问：[特斯拉电磁塔](/upgrade/0307-Hidden-Tesla)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giga_Tesla5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Giga_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giga_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giga_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giga_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giga_Tesla5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当玩家升到 12 级大本营时，就拥有了一个 1 级的巨型特斯拉电磁塔。玩家可以升级这个电塔，而最高等级（5 级）的巨型特斯拉电磁塔可以在被摧毁后自爆。
2. 巨型特斯拉电磁塔不是独立的防御建筑，它附属于大本营。
3. 当 12 级大本营受到攻击或村庄摧毁率达到 51% 时，巨型特斯拉电磁塔会启动，激活延迟 0.5 秒。
4. 当玩家将巨型特斯拉电磁塔升到 5 级后，玩家才可以升级 13 级大本营。升级后，“巨型特斯拉电磁塔”会被“[巨型地狱之塔](/upgrade/030d-Giga-Inferno)”取代。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.5 秒/次" />
    <UnitProperty pKey="触发后激活延迟" pValue="0.5 秒" />
    <UnitProperty pKey="5 星大本自爆半径" pValue="4 格 (地面和空中目标)" />
    <UnitProperty pKey="自爆延时" pValue="1.6 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每个目标的<br>每秒伤害|每个目标的<br>每次伤害|目标数量|被摧毁后的<br>自爆伤害| 升级费用 | 升级时间  |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |         ---        |         ---        |   ---  |         ---        |   ---   |   ---    |         ---        |      ---      |
|   1  |         100        |         50         |    2   |           0        |      \  |    \     |                    |       12      |
|   2  |         120        |         60         |    2   |           0        |   1.5M  |    0,12  |                    |       12      |
|   3  |         120        |         60         |    3   |           0        |     2M  |    1     |                    |       12      |
|   4  |         140        |         70         |    3   |           0        |     3M  |    2     |                    |       12      |
|   5  |         140        |         70         |    4   |         500        |     4M  |    3     |                    |       12      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>所有等级巨型特斯拉电磁塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>5 级巨型特斯拉电磁塔的爆炸伤害由 1000 降低到 500.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级巨型特斯拉电磁塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级巨型特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>