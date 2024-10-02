---
title: "部落冲突 coc 都城超级矿工训练营升级数据"
navTitle: "超级矿工训练营"
shownTitle: "超级矿工训练营"
description: "超级矿工的快乐老家，这里非常接地气，还有一股浓浓的石油味。"
module: upgrade-capital
imgFolder: capital_buildings/234f
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Barracks#Super_Miner_Barracks
canonical: /upgrade/234f-Super-Miner-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Miner_Barracks4.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Barracks_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Super_Miner_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Super_Miner_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Super_Miner_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Super_Miner_Barracks4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井  |   1   |   1   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可训练的兵种" pValue="<a href='/upgrade/200f-Super-Miner'>超级矿工</a>" />
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
|   1  |  1200 |  17.5k  |    25    |         9        |         1         |
|   2  |  1400 |    50k  |    30    |         9        |         2         |
|   3  |  1600 |   150k  |    35    |        10        |         3         |
|   4  |  1800 |   300k  |    40    |        10        |         4         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新建筑：超级矿工训练营。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>