---
title: "部落冲突 coc 冰封箭矢（寒冰箭）装备升级数据"
navTitle: "冰封箭矢"
shownTitle: "冰封箭矢（寒冰箭）"
description: "冰封箭矢是弓箭女皇的第一件史诗装备，它在 2024 年 2 月的龙年佳节活动中首次开放购买。带上冰封箭矢装备后，被女王打中的目标在一段时间内移动速度和攻击速度会变慢。另外，冰封箭矢还能增加女王的每秒伤害。"
module: upgrade-home
imgFolder: home_heroes/0744
wiki: https://clashofclans.fandom.com/wiki/Frozen_Arrow
canonical: /upgrade/0744-Frozen-Arrow
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Frozen_Arrow_info.png" :imgAlt="$frontmatter.navTitle" description="冰封箭矢会减缓被命中目标的速度。" />

<SmallTitle>说明</SmallTitle>

1. 冰封箭矢是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的第一件史诗装备，它在 2024 年 2 月的龙年佳节活动中首次开放购买。
2. 带上冰封箭矢装备后，被女王打中的目标在一段时间内移动速度和攻击速度会变慢。
3. 另外，冰封箭矢还能增加女王的每秒伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 该装备有多种获取方式：

- 在 2024 年 2 月的龙年佳节活动中积攒 3 100 神龙奖章（活动货币）后去商人那里购买即可解锁。
- 在 2024 年 12 月的大闹玩具店活动中积攒 3 100 玩具奖章（活动货币）后去商人那里购买即可解锁。
- 在商人那里花费 1 500 宝石购买，只不过商人每周卖的物品不固定，可能需要等几个星期才能刷出来。

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
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |减速比例<sup>#</sup>|减速<br>持续时间|每秒伤害<br>增加|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |        ---        |      ---      |      ---     |   ---  |   ---  |  ---  |       ---       |      ---      |
|   1  |        25%        |    0.75 秒    |       35     |    \   |    \   |   \   |        1        |       8       |
|   2  |        25%        |       1 秒    |       40     |   120  |    -   |   -   |        1        |       8       |
|   3  |        30%        |       1 秒    |       45     |   240  |    20  |   -   |        1        |       8       |
|   4  |        30%        |       1 秒    |       50     |   400  |    -   |   -   |        1        |       8       |
|   5  |        30%        |    1.25 秒    |       55     |   600  |    -   |   -   |        1        |       8       |
|   6  |        35%        |    1.25 秒    |       60     |   840  |   100  |   -   |        1        |       8       |
|   7  |        35%        |    1.25 秒    |       66     |  1120  |    -   |   -   |        1        |       8       |
|   8  |        35%        |     1.5 秒    |       72     |  1440  |    -   |   -   |        1        |       8       |
|   9  |        37%        |     1.5 秒    |       78     |  1800  |   200  |   10  |        1        |       8       |
|  10  |        37%        |     1.5 秒    |       85     |  1900  |    -   |   -   |        1        |       8       |
|  11  |        37%        |    1.75 秒    |       92     |  2000  |    -   |   -   |        1        |       8       |
|  12  |        40%        |    1.75 秒    |       99     |  2100  |   400  |   20  |        1        |       8       |
|  13  |        40%        |    1.75 秒    |      105     |  2200  |    -   |   -   |        3        |      10       |
|  14  |        40%        |       2 秒    |      111     |  2300  |    -   |   -   |        3        |      10       |
|  15  |        45%        |       2 秒    |      117     |  2400  |   600  |   30  |        3        |      10       |
|  16  |        45%        |       2 秒    |      122     |  2500  |    -   |   -   |        5        |      12       |
|  17  |        45%        |    2.25 秒    |      127     |  2600  |    -   |   -   |        5        |      12       |
|  18  |        50%        |    2.25 秒    |      132     |  2700  |   600  |   50  |        5        |      12       |
|  19  |        50%        |    2.25 秒    |      136     |  2800  |    -   |   -   |        7        |      14       |
|  20  |        50%        |     2.5 秒    |      140     |  2900  |    -   |   -   |        7        |      14       |
|  21  |        55%        |     2.5 秒    |      144     |  3000  |   600  |  100  |        7        |      14       |
|  22  |        55%        |     2.5 秒    |      148     |  3100  |    -   |   -   |        8        |      15       |
|  23  |        55%        |    2.75 秒    |      152     |  3200  |    -   |   -   |        8        |      15       |
|  24  |        60%        |    2.75 秒    |      156     |  3300  |   600  |  120  |        8        |      15       |
|  25  |        60%        |    2.75 秒    |      160     |  3400  |    -   |   -   |        9        |      16       |
|  26  |        60%        |       3 秒    |      164     |  3500  |    -   |   -   |        9        |      16       |
|  27  |        65%        |       3 秒    |      168     |  3600  |   600  |  150  |        9        |      16       |
</UnitTable>

\# 攻击速度和移动速度的减速比例相同。

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>现在 8 本就可以解锁弓箭女皇了，该页面的部分信息需要同步更改。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>所有等级冰封箭矢击中目标后的减速效果变弱（减速比例降低）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/08">
        <TimelineRow>新装备：冰封箭矢。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
