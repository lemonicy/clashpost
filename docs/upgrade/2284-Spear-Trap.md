---
title: "部落冲突 coc 都城投矛陷阱升级数据"
navTitle: "投矛陷阱"
shownTitle: "投矛陷阱"
description: "等待一群敌方单位经过，然后发射威力十足的尖矛，打他们个措手不及。"
module: upgrade-capital
imgFolder: capital_buildings/2284
wiki: https://clashofclans.fandom.com/wiki/Spear_Trap
canonical: /upgrade/2284-Spear-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spear_Trap4.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Spear_Trap_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Spear_Trap1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spear_Trap2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spear_Trap3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Spear_Trap4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井  |   3   |   4   |   5   |   6   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="伤害目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发距离" pValue="10 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |   伤害   | 矛的数量 | 升级费用 |所需子城<br>大本等级|
| ---- |   ---   |    ---   |   ---   |        ---       |
|   1  |   120   |     4    |    3k   |         1        |
|   2  |   140   |     5    |    6k   |         3        |
|   3  |   160   |     6    |   12k   |         3        |
|   4  |   180   |     7    |   20k   |         4        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>都城新陷阱：投矛陷阱。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>