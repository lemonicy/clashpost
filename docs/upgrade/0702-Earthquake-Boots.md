---
title: "部落冲突 coc 地震金靴（震地金靴）装备升级数据"
navTitle: "地震金靴"
shownTitle: "地震金靴（震地金靴）"
description: "地震金靴是野蛮人之王的一件普通装备。地震金靴可以时蛮王在使用技能时制造一场地震。这次地震可以立即摧毁周围的城墙，并且对建筑物造成一定百分比的破坏。地震金靴可以对半径内的所有地面单位（包括部队）造成少量额外伤害……"
module: upgrade-home
imgFolder: home_heroes/0702
wiki: https://clashofclans.fandom.com/wiki/Earthquake_Boots
canonical: /upgrade/0702-Earthquake-Boots
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Earthquake_Boots_info.png" :imgAlt="$frontmatter.navTitle" description="引发强烈地震，摧毁城墙并对建筑造成伤害。" />

<SmallTitle>说明</SmallTitle>

1. 地震金靴是 [野蛮人之王](/upgrade/0200-Barbarian-King) 的一件普通装备。
2. 地震金靴可以时蛮王在使用技能时制造一场地震。这次地震可以立即摧毁周围的城墙，并且对建筑物造成一定百分比的破坏。
   - 地震金靴造成的百分比破坏是相对于建筑最大生命值的，即使残血也按满血算。
   - 地震金靴的伤害并不均匀，位于地震范围边缘的城墙会受到伤害，但不会倒塌。
   - 地震金靴引起的地震**可以**激活 12 级及以上 [大本营](/upgrade/0400-Town-Hall) 自带的武器。
   - 和 [地震法术](/upgrade/0181-Earthquake-Spell) 不同的是，地震金靴引起的地震**可以**对资源仓库造成破坏。
   - 当地震金靴引起的地震和地震法术叠加时，建筑物的损坏效果会减弱，具体公式可前往地震法术页面查看，你把地震金靴装备当作一瓶地震法术即可。
3. 除了制造地震之外，地震金靴装备还可以提高蛮王的每秒伤害和最大生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="地震伤害半径" pValue="8 格" />
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

| 等级 |地震伤害<br>百分比|每秒伤害<br>增加|生命值增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |       ---      |      ---      |   ---   |   ---  |  ---  |       ---      |       ---      |
|   1  |       10%      |       13      |    209  |    \   |   \   |        1       |        8       |
|   2  |       10%      |       15      |    244  |   120  |   -   |        1       |        8       |
|   3  |       20%      |       17      |    278  |   240  |   20  |        1       |        8       |
|   4  |       20%      |       19      |    313  |   400  |   -   |        1       |        8       |
|   5  |       20%      |       21      |    348  |   600  |   -   |        1       |        8       |
|   6  |       30%      |       23      |    383  |   840  |  100  |        1       |        8       |
|   7  |       30%      |       26      |    418  |  1120  |   -   |        1       |        8       |
|   8  |       30%      |       28      |    452  |  1440  |   -   |        1       |        8       |
|   9  |       34%      |       32      |    522  |  1800  |  200  |        1       |        8       |
|  10  |       34%      |       40      |    677  |  1900  |   -   |        3       |       10       |
|  11  |       34%      |       48      |    831  |  2000  |   -   |        3       |       10       |
|  12  |       36%      |       55      |    986  |  2100  |  400  |        3       |       10       |
|  13  |       36%      |       63      |   1200  |  2200  |   -   |        5       |       12       |
|  14  |       36%      |       71      |   1500  |  2300  |   -   |        5       |       12       |
|  15  |       38%      |       79      |   1800  |  2400  |  600  |        5       |       12       |
|  16  |       38%      |       86      |   2100  |  2500  |   -   |        7       |       14       |
|  17  |       38%      |       94      |   2300  |  2600  |   -   |        7       |       14       |
|  18  |       40%      |      102      |   2500  |  2700  |  600  |        7       |       14       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>9 ~ 18 级地震金靴的百分比伤害降低。</TimelineRow>
        <TimelineRow>地震金靴 100 点左右的固定伤害取消，现在地震金靴不能杀死骷髅了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>9 - 18 级地震金靴装备的伤害百分比增加。</TimelineRow>
        <TimelineRow>12 - 18 级地震金靴装备可以给英雄加更多生命值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，地震金靴是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>