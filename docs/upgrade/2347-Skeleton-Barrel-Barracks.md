---
title: "部落冲突 coc 都城骷髅飞桶训练营升级数据"
navTitle: "骷髅飞桶训练营"
shownTitle: "骷髅飞桶训练营"
description: "其实就是个建在墓地边的木桶厂，老板是个卖气球的。"
module: upgrade-capital
imgFolder: capital_buildings/2347
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Barracks#Skeleton_Barrel_Barracks
canonical: /upgrade/2347-Skeleton-Barrel-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Barrel_Barracks5.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Barracks_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Skeleton_Barrel_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Skeleton_Barrel_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Skeleton_Barrel_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Skeleton_Barrel_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Skeleton_Barrel_Barracks5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   气球环礁   |   1   |   1   |   1   |   1   |   1   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可训练的兵种" pValue="<a href='/upgrade/2007-Skeleton-Barrel'>骷髅飞桶</a>" />
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
|   1  |  1200 |    10k  |    25    |         4        |         1         |
|   2  |  1400 |    25k  |    30    |         5        |         2         |
|   3  |  1600 |   100k  |    35    |         7        |         3         |
|   4  |  1800 |   250k  |    40    |         8        |         4         |
|   5  |  2000 |   500k  |    45    |        10        |         5         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>骷髅飞桶训练营随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>