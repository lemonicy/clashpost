---
title: "部落冲突 coc 都城突袭炮车训练营升级数据"
navTitle: "突袭炮车训练营"
shownTitle: "突袭炮车训练营"
description: "制造突袭炮车的工坊。突袭炮车是如何组装起来的倒是好理解，可这些野蛮人是从哪来的呢？"
module: upgrade-capital
imgFolder: capital_buildings/2349
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Barracks#Raid_Cart_Barracks
canonical: /upgrade/2349-Raid-Cart-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Raid_Cart_Barracks5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Barracks_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Raid_Cart_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Raid_Cart_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Raid_Cart_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Raid_Cart_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Raid_Cart_Barracks5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
| 建筑工人工坊 |   1   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可训练的兵种" pValue="<a href='/upgrade/2009-Raid-Cart'>突袭炮车</a>" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   --- |   ---   |   ---    |        ---       |        ---        |
|   1  |  1200 |     \   |    25    |         5        |         1         |
|   2  |  1400 |    25k  |    30    |         6        |         2         |
|   3  |  1600 |   100k  |    35    |         7        |         3         |
|   4  |  1800 |   250k  |    40    |         9        |         4         |
|   5  |  2000 |   500k  |    45    |        10        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>突袭炮车训练营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>