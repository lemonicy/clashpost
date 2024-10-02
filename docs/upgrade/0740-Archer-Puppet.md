---
title: "部落冲突 coc 弓箭手木偶（弓箭手玩偶）装备升级数据"
navTitle: "弓箭手木偶"
shownTitle: "弓箭手木偶（弓箭手玩偶）"
description: "弓箭手木偶是弓箭女皇的两件初始装备之一。弓箭手木偶装备可以让弓箭女皇使用技能时召唤出一定数量的弓箭手。召唤出的弓箭手等级与实验室中弓箭手的等级相同。除了召唤弓箭手外，该装备还可以为弓箭女皇提供额外的每秒伤害，并且增加技能时恢复的生命值。"
module: upgrade-home
imgFolder: home_heroes/0740
wiki: https://clashofclans.fandom.com/wiki/Archer_Puppet
canonical: /upgrade/0740-Archer-Puppet
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_Puppet_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 弓箭手木偶是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的两件初始装备之一，另一件是 [隐形药水瓶](/upgrade/0741-Invisibility-Vial)。
2. 弓箭手木偶装备可以让弓箭女皇使用技能时召唤出一定数量的 [弓箭手](/upgrade/0001-Archer)。
    - 装备召唤出的弓箭手有隐身效果，持续时间随装备等级增加而增加。
    - 弓箭手木偶的召唤速度为每秒 5 个弓箭手。
    - 召唤出的弓箭手等级与 [实验室](/upgrade/0483-Laboratory) 中弓箭手的等级相同。
3. 除了召唤弓箭手外，该装备还可以为弓箭女皇提供额外的每秒伤害，并且增加技能时恢复的生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有女王即可" />
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

| 等级 |召唤的<br>弓箭手数量|英雄每秒伤害<br>增加|开启技能后<br>生命值恢复加成|隐身持续时间|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---        |         ---       |            ---          |    ---    |   ---  |  ---  |       ---       |      ---     |
|   1  |         5        |         26        |            160          |   3.5 秒  |    \   |   \   |        1        |       9      |
|   2  |         5        |         34        |            175          |   3.5 秒  |   120  |   -   |        1        |       9      |
|   3  |        10        |         42        |            190          |     4 秒  |   240  |   20  |        1        |       9      |
|   4  |        10        |         49        |            205          |     4 秒  |   400  |   -   |        1        |       9      |
|   5  |        10        |         55        |            220          |     4 秒  |   600  |   -   |        1        |       9      |
|   6  |        15        |         62        |            235          |   4.5 秒  |   840  |  100  |        1        |       9      |
|   7  |        15        |         71        |            250          |   4.5 秒  |  1120  |   -   |        1        |       9      |
|   8  |        15        |         80        |            265          |   4.5 秒  |  1440  |   -   |        1        |       9      |
|   9  |        20        |         90        |            280          |     5 秒  |  1800  |  200  |        1        |       9      |
|  10  |        20        |        100        |            295          |     5 秒  |  1900  |   -   |        3        |      10      |
|  11  |        20        |        109        |            310          |     5 秒  |  2000  |   -   |        3        |      10      |
|  12  |        25        |        115        |            325          |   5.5 秒  |  2100  |  400  |        3        |      10      |
|  13  |        25        |        122        |            340          |   5.5 秒  |  2200  |   -   |        5        |      12      |
|  14  |        25        |        127        |            360          |   5.5 秒  |  2300  |   -   |        5        |      12      |
|  15  |        30        |        132        |            380          |     6 秒  |  2400  |  600  |        5        |      12      |
|  16  |        30        |        136        |            400          |     6 秒  |  2500  |   -   |        7        |      14      |
|  17  |        30        |        140        |            420          |     6 秒  |  2600  |   -   |        7        |      14      |
|  18  |        35        |        144        |            440          |   6.5 秒  |  2700  |  600  |        7        |      14      |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。
2. 如果玩家升级到了 9 本并解锁了弓箭女皇，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级弓箭手木偶装备。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁弓箭女皇的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 弓箭女皇等级 | 弓箭手木偶等级 |
|     ---     |      ---     |
|    1 - 10   |       1      |
|   11 - 20   |       2      |
|   21 - 25   |       3      |
|   26 - 30   |       4      |
|   31 - 35   |       5      |
|   36 - 40   |       6      |
|   41 - 45   |       7      |
|   46 - 50   |       8      |
|   51 - 55   |       9      |
|   56 - 60   |      10      |
|   61 - 65   |      11      |
|   66 - 70   |      12      |
|   71 - 75   |      13      |
|   76 - 80   |      14      |
|   81 - 90   |      15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2024/09/09">
        <TimelineRow>现在弓箭手木偶装备召唤出的弓箭手有隐身效果了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，弓箭手木偶是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>