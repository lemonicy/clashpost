---
title: "部落冲突 coc 永恒书卷装备升级数据"
navTitle: "永恒书卷"
shownTitle: "永恒书卷"
description: "永恒书卷是大守护者的两件初始装备之一。永恒书卷装备可以在大守护者技能生效期间使他周围的单位（包括他自己）在短时间内拥有无敌效果。无敌只能抵消直接伤害，不能抵消减速和击退效果。"
module: upgrade-home
imgFolder: home_heroes/0780
wiki: https://clashofclans.fandom.com/wiki/Eternal_Tome
canonical: /upgrade/0780-Eternal-Tome
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Eternal_Tome_info.png" :imgAlt="$frontmatter.navTitle" description="大守护者和附近所有友军单位免疫伤害。" />

<SmallTitle>说明</SmallTitle>

1. 永恒书卷是 [大守护者](/upgrade/0202-Grand-Warden) 的两件初始装备之一，另一件是 [生命宝石](/upgrade/0781-Life-Gem)。
2. 永恒书卷装备可以在大守护者技能生效期间使他周围的单位（包括他自己）在短时间内拥有无敌效果。
3. 无敌只能抵消直接伤害，不能抵消减速和击退效果，例如：
   - [毒药法术塔](/upgrade/0311-Spell-Tower) 和 [英雄猎手](/upgrade/0088-Headhunter) 的减速效果；
   - [巨型炸弹](/upgrade/0383-Giant-Bomb) 对小单位的击退效果；
   - [空气炮](/upgrade/0306-Air-Sweeper) 的击退效果；
   - [隐形弹簧](/upgrade/0381-Spring-Trap) 的击飞效果。
4. 永恒书卷装备的无敌效果在开启技能时生效，仅对光环内的单位有效，走出光环 1 秒后的部队就会失去无敌效果。技能开启后进入光环或在光环内生成的部队可以获得无敌效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁条件" pValue="有大守护者即可" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |无敌效果<br>持续时间| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |        ---       |   ---  |  ---  |       ---       |       ---      |
|   1  |       3.2 秒     |    \   |   \   |        1        |       11       |
|   2  |       3.5 秒     |   120  |   -   |        1        |       11       |
|   3  |       4.2 秒     |   240  |   20  |        1        |       11       |
|   4  |       4.5 秒     |   400  |   -   |        1        |       11       |
|   5  |       4.7 秒     |   600  |   -   |        1        |       11       |
|   6  |       5.5 秒     |   840  |  100  |        1        |       11       |
|   7  |       5.7 秒     |  1120  |   -   |        1        |       11       |
|   8  |       6.0 秒     |  1440  |   -   |        1        |       11       |
|   9  |       6.7 秒     |  1800  |  200  |        1        |       11       |
|  10  |       6.8 秒     |  1900  |   -   |        3        |       11       |
|  11  |       6.9 秒     |  2000  |   -   |        3        |       11       |
|  12  |       7.2 秒     |  2100  |  400  |        3        |       11       |
|  13  |       7.3 秒     |  2200  |   -   |        5        |       12       |
|  14  |       7.4 秒     |  2300  |   -   |        5        |       12       |
|  15  |       7.7 秒     |  2400  |  600  |        5        |       12       |
|  16  |       7.8 秒     |  2500  |   -   |        7        |       14       |
|  17  |       7.9 秒     |  2600  |   -   |        7        |       14       |
|  18  |       8.2 秒     |  2700  |  600  |        7        |       14       |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>
2. 如果玩家升级到了 11 本并解锁了大守护者，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级永恒书卷装备。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁大守护者的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 大守护者等级 | 永恒书卷等级 |
|     ---     |     ---     |
|    1 - 3    |      1      |
|    4 - 5    |      2      |
|    6 - 7    |      3      |
|    8 - 9    |      4      |
|   10 - 11   |      5      |
|   12 - 13   |      6      |
|   14 - 15   |      7      |
|   16 - 20   |      8      |
|   21 - 30   |      9      |
|   31 - 35   |     10      |
|   36 - 40   |     11      |
|   41 - 45   |     12      |
|   46 - 50   |     13      |
|   51 - 55   |     14      |
|   56 - 65   |     15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>所有等级永恒书卷的技能持续时间增加 0.2 秒。</TimelineRow>
        <TimelineRow>现在走出光环 1 秒后的部队会失去无敌效果。</TimelineRow>
        <TimelineRow>现在开启技能后进入的部队可以获得无敌效果了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>6 - 18 级永恒书卷装备的无敌效果持续时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，永恒书卷是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>