---
title: "部落冲突 coc 暗黑魔球装备升级数据"
navTitle: "暗黑魔球"
shownTitle: "暗黑魔球"
description: ""
module: upgrade-home
imgFolder: home_heroes/0721
wiki: https://clashofclans.fandom.com/wiki/Dark_Orb
canonical: /upgrade/0721-Dark-Orb
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Orb_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 暗黑魔球是 [亡灵王子](/upgrade/0204-Minion-Prince) 的两件初始装备之一，另一件是 [护卫玩偶](/upgrade/0720-Henchmen-Puppet)。
2. 暗黑魔球装备可以让亡灵王子使用技能时召唤出一颗水晶，并向他所面对的方向移动。水晶移动时会对周围的部队造成少量伤害，并在一段时间内减慢敌方单位的移动速度和攻击速度。
    - 水晶的伤害和减速效果对敌方的建筑、援军、英雄都有效。
    - 由于水晶只对亡灵王子前方的单位有效，因此使用技能时需要注意亡灵王子面对的方向，以免浪费技能。
3. 除了召唤水晶外，该装备还可以为亡灵王子提供额外的每秒伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有亡灵王子即可" />
    <UnitProperty pKey="水晶的作用半径" pValue="6 格（中心点在英雄前方）" />
</UnitProperties>

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
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |水晶伤害|水晶<br>减速比例|减速<br>持续时间|英雄每秒伤害<br>增加|英雄生命值<br>增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |  ---  |      ---      |       ---     |        ---       |       ---       |   --- |  ---  |       ---       |       ---     |
|   1  |   45  |      20%      |      8 秒     |         10       |        88       |    \  |   \   |        1        |        9      |
|   2  |   45  |      20%      |      8 秒     |         13       |       103       |   120 |   -   |        1        |        9      |
|   3  |   55  |      25%      |      9 秒     |         18       |       117       |   240 |   20  |        1        |        9      |
|   4  |   55  |      25%      |      9 秒     |         21       |       131       |   400 |   -   |        1        |        9      |
|   5  |   55  |      25%      |      9 秒     |         24       |       147       |   600 |   -   |        1        |        9      |
|   6  |   65  |      30%      |     10 秒     |         29       |       161       |   840 |  100  |        1        |        9      |
|   7  |   65  |      30%      |     10 秒     |         32       |       175       |  1120 |   -   |        1        |        9      |
|   8  |   65  |      30%      |     10 秒     |         35       |       190       |  1440 |   -   |        1        |        9      |
|   9  |   75  |      35%      |     11 秒     |         40       |       219       |  1800 |  200  |        1        |        9      |
|  10  |   75  |      35%      |     11 秒     |         43       |       266       |  1900 |   -   |        3        |       10      |
|  11  |   75  |      35%      |     11 秒     |         46       |       313       |  2000 |   -   |        3        |       10      |
|  12  |  100  |      40%      |     13 秒     |         51       |       359       |  2100 |  400  |        3        |       10      |
|  13  |  100  |      40%      |     13 秒     |         54       |       406       |  2200 |   -   |        5        |       12      |
|  14  |  100  |      40%      |     13 秒     |         57       |       453       |  2300 |   -   |        5        |       12      |
|  15  |  150  |      45%      |     15 秒     |         62       |       500       |  2400 |  600  |        5        |       12      |
|  16  |  150  |      45%      |     15 秒     |         65       |       546       |  2500 |   -   |        7        |       14      |
|  17  |  150  |      45%      |     15 秒     |         68       |       593       |  2600 |   -   |        7        |       14      |
|  18  |  200  |      50%      |     18 秒     |         73       |       640       |  2700 |  600  |        7        |       14      |
</UnitTable>

注意：

1. 如果升级费用中有多种资源，则同时需要多种资源才能升级。
2. 如果玩家升级到了 9 本并解锁了亡灵王子，即使玩家没有马上升 [铁匠铺](/upgrade/0488-Blacksmith) 也可以升级护卫玩偶装备。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>亡灵王子的初始装备随英雄的推出而同步推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>