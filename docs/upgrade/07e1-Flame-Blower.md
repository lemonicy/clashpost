---
title: "部落冲突 coc 助燃器装备升级数据"
navTitle: "助燃器"
shownTitle: "助燃器"
description: "吹出炽热烈焰，灼烧敌人和建筑。"
module: upgrade-home
imgFolder: home_heroes/07e1
wiki: https://clashofclans.fandom.com/wiki/Flame_Blower
canonical: /upgrade/07e1-Flame-Blower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flame_Blower_info.png" :imgAlt="$frontmatter.navTitle" description="吹出炽热烈焰，灼烧敌人和建筑。" />

<SmallTitle>说明</SmallTitle>

1. 助燃器是 [飞龙公爵](/upgrade/0205-Dragon-Duke) 的两件初始装备之一，另一件是 [烈焰之心](/upgrade/07e0-Fire-Heart)。
2. 使用时，助燃器在飞龙公爵面前喷出锥形的火焰（范围：12格）造成大量伤害。
3. 烈焰之心装备还可以增加飞龙公爵的自恢复和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="有飞龙公爵即可" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |技能<br>伤害|生命值增加| 生命值<br>恢复提升|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       --- |  ---    |  ---     |---  |  ---  |       ---       |       ---      |
| 1 | 1,300 | 500 | 150 | \ | \ | \ |15|
| 2 | 1,300 | 700 | 250 | 120 | - | 1 |15|
| 3 | 1,375 | 900 | 350 | 240 | 20 | 1 |15|
| 4 | 1,375 | 1,100 | 450 | 400 | - | 1 |15|
| 5 | 1,375 | 1,300 | 550 | 600 | - | 1 |15|
| 6 | 1,500 | 1,500 | 650 | 840 | 100 | 1 |15|
| 7 | 1,500 | 1,700 | 750 | 1,120 | - | 1 |15|
| 8 | 1,500 | 1,850 | 850 | 1,440 | - | 1 |15|
| 9 | 1,750 | 2,000 | 950 | 1,800 | 200 | 1 |15|
| 10 | 1,750 | 2,150 | 1,050 | 1,900 | - | 3 |15|
| 11 | 1,750 | 2,300 | 1,150 | 2,000 | - | 3 |15|
| 12 | 2,000 | 2,450 | 1,250 | 2,100 | 400 | 3 |15|
| 13 | 2,000 | 2,600 | 1,300 | 2,200 | - | 5 |15|
| 14 | 2,000 | 2,750 | 1,350 | 2,300 | - | 5 |15|
| 15 | 2,700 | 2,900 | 1,400 | 2,400 | 600 | 5 |15|
| 16 | 2,250 | 3,000 | 1,450 | 2,500 | - | 7 |15|
| 17 | 2,250 | 3,050 | 1,500 | 2,600 | - | 7 |15|
| 18 | 2,500 | 3,100 | 1,500 | 2,700 | 600 | 7 |15|
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2026/02/23">
        <TimelineRow>新增助燃器</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>