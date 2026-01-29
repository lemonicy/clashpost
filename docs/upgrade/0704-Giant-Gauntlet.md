---
title: "部落冲突 coc 巨型手套装备升级数据"
navTitle: "巨型手套"
shownTitle: "巨型手套"
description: "巨型手套是野蛮人之王的第一件史诗装备，它在 2023 年 12 月的饼干大作战活动中首次开放购买。当蛮王带上巨型手套装备时，开启技能后蛮王受到的伤害减少，而且会造成范围伤害。另外，巨型手套还会增加蛮王的每秒伤害，并给予他自愈的能力。"
module: upgrade-home
imgFolder: home_heroes/0704
wiki: https://clashofclans.fandom.com/wiki/Giant_Gauntlet
canonical: /upgrade/0704-Giant-Gauntlet
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Gauntlet_info.png" :imgAlt="$frontmatter.navTitle" description="野蛮人之王体型变大，可造成范围伤害且减少所受伤害。" />

<SmallTitle>说明</SmallTitle>

1. 巨型手套是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的第一件史诗装备，它在 2023 年 12 月的饼干大作战活动中首次开放购买。
2. 当蛮王带上巨型手套装备时，开启技能后蛮王受到的伤害减少，而且会造成范围伤害。
3. 另外，巨型手套还会增加蛮王的每秒伤害，并给予他自愈的能力。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="范围伤害半径" pValue="2.5 格" />
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
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |技能<br>持续时间|受到的伤害<br>减少|每秒伤害<br>增加|每秒自愈<br>血量|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---     |       ---       |      ---      |      ---      |  ---  |   ---  |  ---  |       ---       |      ---      |
|   1  |     14 秒    |       20%       |       17      |        6      |   \   |    \   |   \   |        1        |       8       |
|   2  |     14 秒    |       20%       |       20      |        8      |  120  |    -   |   -   |        1        |       8       |
|   3  |   14.5 秒    |       25%       |       23      |       10      |  240  |    20  |   -   |        1        |       8       |
|   4  |   14.5 秒    |       25%       |       26      |       12      |  400  |    -   |   -   |        1        |       8       |
|   5  |   14.5 秒    |       25%       |       29      |       14      |  600  |    -   |   -   |        1        |       8       |
|   6  |     15 秒    |       30%       |       32      |       16      |  840  |   100  |   -   |        1        |       8       |
|   7  |     15 秒    |       30%       |       34      |       18      | 1120  |    -   |   -   |        1        |       8       |
|   8  |     15 秒    |       30%       |       37      |       20      | 1440  |    -   |   -   |        1        |       8       |
|   9  |   15.5 秒    |       35%       |       43      |       22      | 1800  |   200  |   10  |        1        |       8       |
|  10  |   15.5 秒    |       35%       |       53      |       24      | 1900  |    -   |   -   |        1        |       8       |
|  11  |   15.5 秒    |       35%       |       63      |       26      | 2000  |    -   |   -   |        1        |       8       |
|  12  |     16 秒    |       40%       |       74      |       28      | 2100  |   400  |   20  |        1        |       8       |
|  13  |     16 秒    |       40%       |       84      |       30      | 2200  |    -   |   -   |        3        |      10       |
|  14  |     16 秒    |       40%       |       94      |       31      | 2300  |    -   |   -   |        3        |      10       |
|  15  |   16.5 秒    |       45%       |      104      |       32      | 2400  |   600  |   30  |        3        |      10       |
|  16  |   16.5 秒    |       45%       |      115      |       33      | 2500  |    -   |   -   |        5        |      12       |
|  17  |   16.5 秒    |       45%       |      125      |       34      | 2600  |    -   |   -   |        5        |      12       |
|  18  |     17 秒    |       50%       |      135      |       35      | 2700  |   600  |   50  |        5        |      12       |
|  19  |     17 秒    |       50%       |      137      |       36      | 2800  |    -   |   -   |        7        |      14       |
|  20  |     17 秒    |       50%       |      140      |       36      | 2900  |    -   |   -   |        7        |      14       |
|  21  |   17.5 秒    |       50%       |      142      |       37      | 3000  |   600  |  100  |        7        |      14       |
|  22  |   17.5 秒    |       50%       |      145      |       37      | 3100  |    -   |   -   |        8        |      15       |
|  23  |   17.5 秒    |       50%       |      147      |       38      | 3200  |    -   |   -   |        8        |      15       |
|  24  |     18 秒    |       55%       |      150      |       38      | 3300  |   600  |  120  |        8        |      15       |
|  25  |     18 秒    |       55%       |      152      |       39      | 3400  |    -   |   -   |        9        |      16       |
|  26  |     18 秒    |       55%       |      155      |       39      | 3500  |    -   |   -   |        9        |      16       |
|  27  |     19 秒    |       60%       |      160      |       40      | 3600  |   600  |  150  |        9        |      16       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>推出记录</SmallTitle>

<UnitTable>

| 推出时间 |  活动名称  |     价格      | 购买渠道 |
|   ---   |    ---    |      ---      |    ---   |
| 2023/12 | 饼干大作战 | 3 100 饼干奖章 |   商人   |
| 2024/12 | 大闹玩具店 | 3 100 玩具奖章 |   商人   |
| 2025/10 |  宇宙摇滚  | 3 100 摇滚奖章 |   商人   |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/28">
        <TimelineRow>所有等级巨型手套装备的减伤效果提升。</TimelineRow>
        <TimelineRow>所有等级巨型手套装备的技能持续时间增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>21 - 22、24 - 27级巨型手套的伤害减免比例降低。</TimelineRow>
        <TimelineRow>19 - 27 级巨型手套可以给英雄提供的每秒伤害加成减少。</TimelineRow>
        <TimelineRow>20 - 27 级巨型手套给英雄提供的自愈能力略微降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/18">
        <TimelineRow>新装备：巨型手套。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>