---
title: "部落冲突 coc 火箭飞矛装备升级数据"
navTitle: "火箭飞矛"
shownTitle: "火箭飞矛"
description: "火箭飞矛是飞盾战神的第一件史诗装备，它在 2024 年 6 月的超级炸弹人大舞台活动中首次出现。火箭飞矛装备可以让飞盾战神在接下来的几次攻击中威力更强，范围更远，并且拥有范围伤害。除此之外，火箭飞矛还可以增加飞盾战神不开技能时的每秒伤害和生命值。"
module: upgrade-home
imgFolder: home_heroes/07c4
wiki: https://clashofclans.fandom.com/wiki/Rocket_Spear
canonical: /upgrade/07c4-Rocket-Spear
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rocket_Spear_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 火箭飞矛是 [飞盾战神](/upgrade/0203-Royal-Champion) 的第一件史诗装备，它在 2024 年 6 月的超级炸弹人大舞台活动中首次出现。
2. 火箭飞矛装备可以让飞盾战神在接下来的几次攻击中威力更强，范围更远，并且拥有**范围伤害**。
3. 除此之外，火箭飞矛还可以增加飞盾战神不开技能时的每秒伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="飞矛射程" pValue="10 格" />
    <UnitProperty pKey="飞矛的伤害半径" pValue="0.8 格" />
</UnitProperties>

\* 在 2024 年 6 月的超级炸弹人大舞台活动中积攒 3 100 超级奖章（活动货币）后去商人那里购买即可解锁。自 2024/08/13 起，该装备有几率出现在商人那里，可花费 1 500 宝石购买。

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

| 等级 |技能状态下<br>秒伤增加|技能<br>攻击次数|英雄<br>秒伤增加|英雄<br>生命值增加| 升级费用| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
|  --- |         ---        |       ---     |      ---      |       ---       |   ---  |   ---  |   --- |       ---       |       ---     |
|   1  |         350        |        7      |       35      |        50       |    \   |    \   |   \   |        1        |       13      |
|   2  |         350        |        7      |       40      |        75       |   120  |    -   |   -   |        1        |       13      |
|   3  |         420        |        7      |       45      |       100       |   240  |    20  |   -   |        1        |       13      |
|   4  |         420        |        7      |       50      |       125       |   400  |    -   |   -   |        1        |       13      |
|   5  |         420        |        7      |       55      |       150       |   600  |    -   |   -   |        1        |       13      |
|   6  |         490        |        7      |       60      |       175       |   840  |   100  |   -   |        1        |       13      |
|   7  |         490        |        7      |       66      |       200       |  1120  |    -   |   -   |        1        |       13      |
|   8  |         490        |        7      |       72      |       225       |  1440  |    -   |   -   |        1        |       13      |
|   9  |         560        |        8      |       78      |       250       |  1800  |   200  |   10  |        1        |       13      |
|  10  |         560        |        8      |       85      |       275       |  1900  |    -   |   -   |        1        |       13      |
|  11  |         560        |        8      |       92      |       300       |  2000  |    -   |   -   |        1        |       13      |
|  12  |         630        |        8      |       99      |       325       |  2100  |   400  |   20  |        1        |       13      |
|  13  |         630        |        8      |      105      |       350       |  2200  |    -   |   -   |        3        |       13      |
|  14  |         630        |        8      |      111      |       375       |  2300  |    -   |   -   |        3        |       13      |
|  15  |         700        |        8      |      117      |       400       |  2400  |   600  |   30  |        3        |       13      |
|  16  |         700        |        8      |      122      |       425       |  2500  |    -   |   -   |        5        |       13      |
|  17  |         700        |        8      |      127      |       450       |  2600  |    -   |   -   |        5        |       13      |
|  18  |         770        |        9      |      132      |       475       |  2700  |   600  |   50  |        5        |       13      |
|  19  |         770        |        9      |      136      |       500       |  2800  |    -   |   -   |        7        |       14      |
|  20  |         770        |        9      |      140      |       525       |  2900  |    -   |   -   |        7        |       14      |
|  21  |         840        |        9      |      144      |       550       |  3000  |   600  |  100  |        7        |       14      |
|  22  |         840        |        9      |      148      |       575       |  3100  |    -   |   -   |        8        |       15      |
|  23  |         840        |        9      |      152      |       600       |  3200  |    -   |   -   |        8        |       15      |
|  24  |         910        |        9      |      156      |       625       |  3300  |   600  |  120  |        8        |       15      |
|  25  |         910        |        9      |      160      |       650       |  3400  |    -   |   -   |        9        |       16      |
|  26  |         910        |        9      |      164      |       675       |  3500  |    -   |   -   |        9        |       16      |
|  27  |         980        |       10      |      168      |       700       |  3600  |   600  |  150  |        9        |       16      |
</UnitTable>

注意：

1. 上表的 8 点移动速度代表 1 格/秒。
2. 如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>所有等级火箭飞矛装备的技能攻击次数提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/11">
        <TimelineRow>新装备：火箭飞矛。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>