---
title: "部落冲突 coc 灵蛇手镯装备升级数据"
navTitle: "灵蛇手镯"
shownTitle: "灵蛇手镯"
description: "灵蛇手镯是野蛮人之王的第三件史诗装备，它在 2025 年 2 月的灵蛇庆典活动中首次开放购买。当蛮王带上灵蛇手镯装备后，蛮王每受到 300 点伤害就会召唤蛇，蛇的等级和最大召唤数量与装备等级有关。此外，灵蛇手镯装备还可以提高蛮王的每秒伤害、生命值和攻击速度。"
module: upgrade-home
imgFolder: home_heroes/0706
wiki: https://clashofclans.fandom.com/wiki/Snake_Bracelet
canonical: /upgrade/0706-Snake-Bracelet
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">灵蛇手镯</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">灵蛇</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 灵蛇手镯 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Snake_Bracelet_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 灵蛇手镯是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的第三件史诗装备，它在 2025 年 2 月的灵蛇庆典活动中首次开放购买。
2. 当蛮王带上灵蛇手镯装备后，蛮王每受到 300 点伤害就会召唤蛇，蛇的等级和最大召唤数量与装备等级有关。
3. 此外，灵蛇手镯装备还可以提高蛮王的每秒伤害、生命值和攻击速度。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
    <UnitProperty pKey="解锁条件" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 在 2025 年 2 月的灵蛇庆典活动中积攒 3 100 灵蛇奖章（活动货币）后去商人那里购买即可解锁。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    },
    {
        "column": 8,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |最大<br>召唤数量|蛇的等级|英雄每秒<br>伤害增加|英雄生命<br>值增加|英雄攻击<br>速度增加|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---      |  ---  |       ---        |        ---       |        ---      |   ---  |  ---  |  ---  |       ---       |      ---      |
|   1  |       11      |   1   |        10        |        150       |        1%       |    \   |   \   |   \   |        1        |       8       |
|   2  |       11      |   1   |        11        |        300       |        1%       |   120  |   -   |   -   |        1        |       8       |
|   3  |       14      |   2   |        12        |        450       |        2%       |   240  |   20  |   -   |        1        |       8       |
|   4  |       14      |   2   |        14        |        600       |        2%       |   400  |   -   |   -   |        1        |       8       |
|   5  |       14      |   2   |        16        |        750       |        2%       |   600  |   -   |   -   |        1        |       8       |
|   6  |       17      |   3   |        18        |        900       |        3%       |   840  |  100  |   -   |        1        |       8       |
|   7  |       17      |   3   |        20        |       1050       |        3%       |  1120  |   -   |   -   |        1        |       8       |
|   8  |       17      |   3   |        22        |       1200       |        3%       |  1440  |   -   |   -   |        1        |       8       |
|   9  |       20      |   4   |        24        |       1350       |        4%       |  1800  |  200  |   10  |        1        |       8       |
|  10  |       20      |   4   |        26        |       1500       |        4%       |  1900  |   -   |   -   |        1        |       8       |
|  11  |       20      |   4   |        28        |       1650       |        4%       |  2000  |   -   |   -   |        1        |       8       |
|  12  |       24      |   5   |        30        |       1800       |        5%       |  2100  |  400  |   20  |        1        |       8       |
|  13  |       24      |   5   |        33        |       1950       |        5%       |  2200  |   -   |   -   |        3        |      10       |
|  14  |       24      |   5   |        36        |       2100       |        5%       |  2300  |   -   |   -   |        3        |      10       |
|  15  |       32      |   6   |        39        |       2250       |        6%       |  2400  |  600  |   30  |        3        |      10       |
|  16  |       32      |   6   |        42        |       2400       |        6%       |  2500  |   -   |   -   |        5        |      12       |
|  17  |       32      |   6   |        45        |       2550       |        6%       |  2600  |   -   |   -   |        5        |      12       |
|  18  |       40      |   7   |        48        |       2700       |        7%       |  2700  |  600  |   50  |        5        |      12       |
|  19  |       40      |   7   |        51        |       2850       |        7%       |  2800  |   -   |   -   |        7        |      14       |
|  20  |       40      |   7   |        54        |       3000       |        7%       |  2900  |   -   |   -   |        7        |      14       |
|  21  |       46      |   8   |        57        |       3150       |        8%       |  3000  |  600  |  100  |        7        |      14       |
|  22  |       46      |   8   |        60        |       3300       |        8%       |  3100  |   -   |   -   |        8        |      15       |
|  23  |       46      |   8   |        63        |       3450       |        8%       |  3200  |   -   |   -   |        8        |      15       |
|  24  |       50      |   9   |        66        |       3600       |        9%       |  3300  |  600  |  120  |        8        |      15       |
|  25  |       50      |   9   |        69        |       3750       |        9%       |  3400  |   -   |   -   |        9        |      16       |
|  26  |       50      |   9   |        72        |       3900       |        9%       |  3500  |   -   |   -   |        9        |      16       |
|  27  |       56      |  10   |        75        |       4050       |       10%       |  3600  |  600  |  150  |        9        |      16       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。
</SwitchTabGroup>

<!-- ↓↓↓ 灵蛇 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Snake_info.png" :imgAlt="$frontmatter.navTitle"
    description="这些饥饿的大蛇被一只神秘的古老手镯召唤出来，它们只有一个目的——咬碎一切！" />

<SmallTitle>说明</SmallTitle>

灵蛇不能在 [训练营](/upgrade/0481-Barracks) 或 [暗黑训练营](/upgrade/0482-Dark-Barracks) 中直接训练，只能通过灵蛇手镯装备召唤。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 所需<br>装备等级 |
|  --- |   ---   |   ---   |   ---  |      ---       |
|   1  |    32   |    32   |   260  |        1       |
|   2  |    34   |    34   |   280  |        3       |
|   3  |    36   |    36   |   300  |        6       |
|   4  |    38   |    38   |   320  |        9       |
|   5  |    40   |    40   |   340  |       12       |
|   6  |    42   |    42   |   360  |       15       |
|   7  |    44   |    44   |   380  |       18       |
|   8  |    46   |    46   |   400  |       21       |
|   9  |    48   |    48   |   420  |       24       |
|  10  |    50   |    50   |   440  |       27       |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/07">
        <TimelineRow>新装备：灵蛇手镯，有效期至 2025/02/28.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
