---
title: "部落冲突 coc 都城地狱飞龙训练营升级数据"
navTitle: "地狱飞龙训练营"
shownTitle: "地狱飞龙训练营"
description: "地狱飞龙玩耍的地方，由超级建筑工人建造而成，使用的是防火性能最好的材料。"
module: upgrade-capital
imgFolder: capital_buildings/234e
wiki: https://clashofclans.fandom.com/wiki/Clan_Capital_Barracks#Inferno_Dragon_Barracks
canonical: /upgrade/234e-Inferno-Dragon-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Dragon_Barracks4.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Barracks_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Dragon_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Dragon_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Dragon_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Dragon_Barracks4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   骷髅公园   |   1   |   1   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" />
    <UnitProperty pKey="可训练的兵种" pValue="<a href='/upgrade/200e-Inferno-Dragon'>地狱飞龙</a>" />
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
|   1  |  1200 |     \   |    25    |         8        |         1         |
|   2  |  1400 |    35k  |    30    |         8        |         2         |
|   3  |  1600 |   125k  |    35    |         9        |         3         |
|   4  |  1800 |   275k  |    40    |        10        |         4         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/12/12">
        <TimelineRow>新建筑：地狱飞龙训练营。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>