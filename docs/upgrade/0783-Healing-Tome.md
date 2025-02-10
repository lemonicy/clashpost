---
title: "部落冲突 coc 治疗书卷装备升级数据"
navTitle: "治疗书卷"
shownTitle: "治疗书卷"
description: "治疗书卷是大守护者的一件普通装备。治疗书卷装备可以在大守护者技能生效期间使周围的部队获得疗伤法术的效果。在治疗书卷的范围内，英雄可以获得全额治疗效果，攻城机器不能获得治疗效果。"
module: upgrade-home
imgFolder: home_heroes/0783
wiki: https://clashofclans.fandom.com/wiki/Healing_Tome
canonical: /upgrade/0783-Healing-Tome
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Healing_Tome_info.png" :imgAlt="$frontmatter.navTitle" description="治疗大守护者和所有附近友军单位。" />

<SmallTitle>说明</SmallTitle>

1. 治疗书卷是 [大守护者](/upgrade/0202-Grand-Warden) 的一件普通装备。
2. 治疗书卷装备可以在大守护者技能生效期间使周围的部队获得 [疗伤法术](/upgrade/0101-Healing-Spell) 的效果。
3. 与疗伤法术不同的是，治疗书卷的范围会随着大守护者的位置变化而变化，大守护者是治疗圈的圆心。
4. 在治疗书卷的范围内，英雄可以获得全额治疗效果，攻城机器不能获得治疗效果。
5. 除了释放疗伤法术外，治疗书卷装备还可以增加大守护者的生命值，也可以增加他使用技能使恢复的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
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

| 等级 |每秒治疗量|治疗效果<br>持续时间|英雄生命值<br>增加|技能回血<br>属性加成|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |   ---   |       ---        |        ---      |        ---        |   --- |  ---  |       ---       |       ---     |
|   1  |    60   |      15.0 秒     |        92       |        165        |    \  |   \   |        6        |       13      |
|   2  |    60   |      15.0 秒     |       107       |        193        |   120 |   -   |        6        |       13      |
|   3  |    70   |      16.0 秒     |       122       |        220        |   240 |   20  |        6        |       13      |
|   4  |    70   |      16.0 秒     |       137       |        248        |   400 |   -   |        6        |       13      |
|   5  |    70   |      16.0 秒     |       153       |        275        |   600 |   -   |        6        |       13      |
|   6  |    80   |      17.0 秒     |       168       |        303        |   840 |  100  |        6        |       13      |
|   7  |    80   |      17.0 秒     |       183       |        330        |  1120 |   -   |        6        |       13      |
|   8  |    80   |      17.0 秒     |       198       |        358        |  1440 |   -   |        6        |       13      |
|   9  |   100   |      18.0 秒     |       229       |        413        |  1800 |  200  |        6        |       13      |
|  10  |   100   |      18.0 秒     |       280       |        463        |  1900 |   -   |        6        |       13      |
|  11  |   100   |      18.0 秒     |       330       |        513        |  2000 |   -   |        6        |       13      |
|  12  |   120   |      19.0 秒     |       381       |        563        |  2100 |  400  |        6        |       13      |
|  13  |   120   |      19.0 秒     |       432       |        613        |  2200 |   -   |        6        |       13      |
|  14  |   120   |      19.0 秒     |       482       |        663        |  2300 |   -   |        6        |       13      |
|  15  |   140   |      19.5 秒     |       533       |        713        |  2400 |  600  |        6        |       13      |
|  16  |   140   |      19.5 秒     |       584       |        763        |  2500 |   -   |        7        |       14      |
|  17  |   140   |      19.5 秒     |       634       |        813        |  2600 |   -   |        7        |       14      |
|  18  |   150   |      20.0 秒     |       685       |        863        |  2700 |  600  |        7        |       14      |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>所有等级治疗书卷装备的治疗效果持续时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，治疗书卷是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>