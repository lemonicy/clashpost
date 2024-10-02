---
title: "部落冲突 coc 夜世界城墙升级数据"
navTitle: "城墙"
shownTitle: "城墙"
description: "城墙是保护村庄、阻挡敌军的最好防线。"
module: upgrade-bh
imgFolder: bh_buildings/110c
wiki: https://clashofclans.fandom.com/wiki/Wall/Builder_Base
canonical: /upgrade/110c-Walls
---

- *如想查看家乡的城墙，请访问：[城墙](/upgrade/0300-Walls)。*
- *如想查看都城的城墙，请访问：[都城城墙](/upgrade/2200-Walls)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Wall1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Wall2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Wall3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Wall4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wall5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Wall6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Wall7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Wall8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Wall9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Wall10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num=" 1,  2,  3,  4,   5,   6,   7,   8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="10, 20, 50, 75, 100, 120, 140, 160,    180" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    },
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Wall_Ring",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级费用 |升级所需<br>戒指数量|所需夜世界<br>大本等级|
| ---- |  ---  |   ---   |    ---   |       ---        |         ---        |
|   1  |   900 |    1k   |     \    |        1         |          1         |
|   2  |  1100 |    2k   |     \    |        1         |          3         |
|   3  |  1300 |   10k   |     \    |        1         |          3         |
|   4  |  1600 |   50k   |     \    |        1         |          4         |
|   5  |  1900 |  150k   |     \    |        1         |          5         |
|   6  |  2200 |  240k   |     \    |        1         |          6         |
|   7  |  2500 |  400k   |   400k   |        1         |          7         |
|   8  |  2750 |  600k   |   600k   |        2         |          8         |
|   9  |  3050 |  800k   |   800k   |        2         |          9         |
|  10  |  3350 |    1M   |     1M   |        2         |         10         |
</UnitTable>

注：升级城墙时，金币、圣水、戒指任选其一即可。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>更新后夜世界的城墙不再是 5 个一组了，你现在可以单独摆放每块城墙。</TimelineRow>
        <TimelineRow>为了适应上一条所说的改动，所有等级城墙的升级花费有调整。调整后，除了 1 级城墙外，其余等级单个城墙的升级花费都降低了。</TimelineRow>
        <TimelineRow>所有等级城墙的生命值减少。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，城墙可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>升级 6 ~ 8 级夜世界城墙所需的壁垒之戒减少。</TimelineRow>
        <TimelineRow>夜世界 9 本推出，城墙可升至 9 级。</TimelineRow>
        <TimelineRow>夜世界 9 本新增 4 组城墙。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>