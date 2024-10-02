---
title: "部落冲突 coc 寻踪飞盾（追踪神盾）装备升级数据"
navTitle: "寻踪飞盾"
shownTitle: "寻踪飞盾（追踪神盾）"
description: "寻踪飞盾是飞盾战神的两件初始装备之一。寻踪飞盾装备可以让飞盾战神在使用技能时投掷一个盾牌，盾牌会击中四个不同的目标，对每个目标造成固定伤害。盾牌优先攻击防御建筑的特点使它非常适合用来清理阵型中间的关键防御，它攻击距离无限的特点使它十分适合用来在战斗结束时清理角落的建筑工人小屋。"
module: upgrade-home
imgFolder: home_heroes/07c0
wiki: https://clashofclans.fandom.com/wiki/Seeking_Shield
canonical: /upgrade/07c0-Seeking-Shield
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Seeking_Shield_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 寻踪飞盾是 [飞盾战神](/upgrade/0203-Royal-Champion) 的两件初始装备之一，另一件是 [皇家宝石](/upgrade/07c1-Royal-Gem)。
2. 寻踪飞盾装备可以让飞盾战神在使用技能时投掷一个盾牌，盾牌会击中四个不同的目标，对每个目标造成固定伤害。
   - 盾牌优先攻击防御建筑。如果场上至少有 4 个防御建筑，则盾牌只攻击防御建筑。如果剩余的防御建筑少于 4 个，则盾牌会击中所有防御，剩下的名额才会留给防守方部队以及非防御建筑。
   - 由于盾牌优先攻击防御的特点，它非常适合用来清理阵型中间的关键防御。
   - 盾牌的攻击距离是无限的，因此十分适合用来在战斗结束时清理角落的 [建筑工人小屋](/upgrade/0500-Builders-Hut)。
3. 除了投掷盾牌外，寻踪飞盾装备还可以增加飞盾战神的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有闰土即可" />
    <UnitProperty pKey="目标数量" pValue="4" />
    <UnitProperty pKey="目标类型" pValue="地面和空中目标" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 4,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每个目标的<br>伤害|英雄生命值<br>增加| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---      |       ---       |   ---  |  ---  |       ---       |       ---      |
|   1  |       1000     |        40       |    \   |   \   |        1        |       13       |
|   2  |       1000     |        60       |   120  |   -   |        1        |       13       |
|   3  |       1250     |        80       |   240  |   20  |        1        |       13       |
|   4  |       1250     |       100       |   400  |   -   |        1        |       13       |
|   5  |       1250     |       120       |   600  |   -   |        1        |       13       |
|   6  |       1500     |       140       |   840  |  100  |        1        |       13       |
|   7  |       1500     |       160       |  1120  |   -   |        1        |       13       |
|   8  |       1500     |       180       |  1440  |   -   |        1        |       13       |
|   9  |       1750     |       200       |  1800  |  200  |        1        |       13       |
|  10  |       1750     |       220       |  1900  |   -   |        3        |       13       |
|  11  |       1750     |       240       |  2000  |   -   |        3        |       13       |
|  12  |       2000     |       260       |  2100  |  400  |        3        |       13       |
|  13  |       2000     |       280       |  2200  |   -   |        5        |       13       |
|  14  |       2000     |       300       |  2300  |   -   |        5        |       13       |
|  15  |       2250     |       320       |  2400  |  600  |        5        |       13       |
|  16  |       2250     |       340       |  2500  |   -   |        7        |       14       |
|  17  |       2250     |       360       |  2600  |   -   |        7        |       14       |
|  18  |       2500     |       380       |  2700  |  600  |        7        |       14       |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>
2. 如果玩家升级到了 13 本并解锁了飞盾战神，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级寻踪飞盾装备。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁飞盾战神的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 飞盾战神等级 | 寻踪飞盾等级 |
|     ---     |     ---     |
|    1 - 2    |      1      |
|      3      |      2      |
|      4      |      3      |
|      5      |      4      |
|    6 - 7    |      5      |
|    8 - 9    |      6      |
|   10 - 11   |      7      |
|   12 - 14   |      8      |
|   15 - 17   |      9      |
|     18      |     10      |
|     19      |     11      |
|   20 - 24   |     12      |
|   25 - 26   |     13      |
|   27 - 29   |     14      |
|   30 - 40   |     15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，寻踪飞盾是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>