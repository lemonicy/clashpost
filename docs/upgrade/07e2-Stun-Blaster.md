---
title: "部落冲突 coc 爆震器装备升级数据"
navTitle: "爆震器"
shownTitle: "爆震器"
description: "释放冲击波，对周围的敌人和建筑造成伤害并附带击晕/瘫痪效果。"
module: upgrade-home
imgFolder: home_heroes/07e2
wiki: https://clashofclans.fandom.com/wiki/Stun_Blaster
canonical: /upgrade/07e2-Stun-Blaster
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flame_Blower_info.png" :imgAlt="$frontmatter.navTitle" description="释放冲击波，对周围的敌人和建筑造成伤害并附带击晕/瘫痪效果" />

<SmallTitle>说明</SmallTitle>

1. 助燃器是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的一件普通装备。在铁匠铺 9 级时解锁，需要 16 本。
2. 使用时，爆震器创造冲击波，造成伤害并晕眩（范围：12格）周边防御部队和建筑。
3. 烈焰之心装备还可以增加飞龙公爵的每秒伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="9级铁匠铺" />
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

| 等级 |技能<br>伤害|晕眩时间| 秒伤害<br>提升| 血量提升 |升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       --- |  ---    |  ---     |---  |  ---  |       ---       |       ---      | --- |
| 1 | 150 | 4.5s | 40 | 450 | \ | \ | \ | 16 |
| 2 | 150 | 4.5s | 43 | 650 | 120 | - | 9 | 16 |
| 3 | 200 | 5s | 46 | 850 | 240 | 20 | 9 | 16 |
| 4 | 200 | 5s | 49 | 1,000 | 400 | - | 9 | 16 |
| 5 | 200 | 5s | 52 | 1,150 | 600 | - | 9 | 16 |
| 6 | 250 | 5.5s | 55 | 1,300 | 940 | 100 | 9 | 16 |
| 7 | 250 | 5.5s | 58 | 1,450 | 1,120 | - | 9 | 16 |
| 8 | 250 | 5.5s | 61 | 1,600 | 1,440 | - | 9 | 16 |
| 9 | 300 | 6s | 64 | 1,750 | 1,800 | 200 | 9 | 16 |
| 10 | 300 | 6s | 67 | 1,900 | 1,900 | - | 9 | 16 |
| 11 | 300 | 6s | 70 | 2,000 | 2,000 | - | 9 | 16 |
| 12 | 350 | 6.5s | 73 | 2,100 | 2,100 | 400 | 9 | 16 |
| 13 | 350 | 6.5s | 76 | 2,200 | 2,200 | - | 9 | 16 |
| 14 | 350 | 6.5s | 79 | 2,275 | 2,300 | - | 9 | 16 |
| 15 | 375 | 7s | 82 | 2,325 | 2,400 | 600 | 9 | 16 |
| 16 | 375 | 7s | 85 | 2,375 | 2,500 | - | 9 | 16 |
| 17 | 375 | 7s | 88 | 2,400 | 2,600 | - | 9 | 16 |
| 18 | 400 | 7.5s | 90 | 2,400 | 2,700 | 600 | 9 | 16 |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2026/02/23">
        <TimelineRow>新增爆震器</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>