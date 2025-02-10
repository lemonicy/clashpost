---
title: "部落冲突 coc 皇家宝石装备升级数据"
navTitle: "皇家宝石"
shownTitle: "皇家宝石"
description: "皇家宝石是飞盾战神的两件初始装备之一。皇家宝石可以使飞盾战神在使用技能时恢复大量生命值，这个属性可以与英雄本身的回血属性叠加。另外，皇家宝石可以增加飞盾战神的每秒伤害和生命值。"
module: upgrade-home
imgFolder: home_heroes/07c1
wiki: https://clashofclans.fandom.com/wiki/Royal_Gem
canonical: /upgrade/07c1-Royal-Gem
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Royal_Gem_info.png" :imgAlt="$frontmatter.navTitle" description="为飞盾战神提供大量额外治疗。" />

<SmallTitle>说明</SmallTitle>

1. 皇家宝石是 [飞盾战神](/upgrade/0203-Royal-Champion) 的两件初始装备之一，另一件是 [寻踪飞盾](/upgrade/07c0-Seeking-Shield)。
2. 皇家宝石可以使飞盾战神在使用技能时恢复大量生命值，这个属性可以与英雄本身的回血属性叠加。
3. 另外，皇家宝石可以增加飞盾战神日常状态下的每秒伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有闰土即可" />
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

| 等级 |使用技能时的<br>回血属性加成|英雄每秒<br>伤害增加|英雄生命值<br>增加| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |           ---           |        ---        |        ---      |   ---  |  ---  |       ---       |       ---     |
|   1  |           1200          |         20        |         40      |    \   |   \   |        1        |       13      |
|   2  |           1200          |         25        |         60      |   120  |   -   |        1        |       13      |
|   3  |           1450          |         30        |         80      |   240  |   20  |        1        |       13      |
|   4  |           1450          |         35        |        100      |   400  |   -   |        1        |       13      |
|   5  |           1450          |         40        |        120      |   600  |   -   |        1        |       13      |
|   6  |           1600          |         45        |        140      |   840  |  100  |        1        |       13      |
|   7  |           1600          |         50        |        160      |  1120  |   -   |        1        |       13      |
|   8  |           1600          |         55        |        180      |  1440  |   -   |        1        |       13      |
|   9  |           1800          |         60        |        200      |  1800  |  200  |        1        |       13      |
|  10  |           1800          |         65        |        220      |  1900  |   -   |        3        |       13      |
|  11  |           1800          |         70        |        240      |  2000  |   -   |        3        |       13      |
|  12  |           2000          |         75        |        260      |  2100  |  400  |        3        |       13      |
|  13  |           2000          |         80        |        280      |  2200  |   -   |        5        |       13      |
|  14  |           2000          |         85        |        300      |  2300  |   -   |        5        |       13      |
|  15  |           2200          |         90        |        320      |  2400  |  600  |        5        |       13      |
|  16  |           2200          |         95        |        340      |  2500  |   -   |        7        |       14      |
|  17  |           2200          |        100        |        360      |  2600  |   -   |        7        |       14      |
|  18  |           2400          |        105        |        380      |  2700  |  600  |        7        |       14      |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。<br>
2. 如果玩家升级到了 13 本并解锁了飞盾战神，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级皇家宝石装备。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁飞盾战神的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 飞盾战神等级 | 皇家宝石等级 |
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
        <TimelineRow>游戏新增装备系统，皇家宝石是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>