---
title: "部落冲突 coc 城墙升级数据"
navTitle: "城墙"
shownTitle: "城墙"
description: "城墙是保护村庄、阻挡敌军的最好防线。"
module: upgrade-home
imgFolder: home_buildings/0300
wiki: https://clashofclans.fandom.com/wiki/Wall
canonical: /upgrade/0300-Walls
---

- *如想查看夜世界的城墙，请访问：[夜世界城墙](/upgrade/110c-Walls)。*
- *如想查看都城的城墙，请访问：[都城城墙](/upgrade/2200-Walls)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall18.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

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
        <UnitImg imgTitle="11 级" imgSrc="Wall11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Wall12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Wall13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Wall14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Wall15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Wall16.png" />
        <UnitImg imgTitle="17 级" imgSrc="Wall17_thumb.png" imgHd="Wall17.png"/>
        <UnitImg imgTitle="18 级" imgSrc="Wall18.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1,  2,  3,  4,   5,   6,   7,   8,   9,  10, 11 - 13, 14 - 17" />
    <BuildingNumRow title="建筑数量" num="0, 25, 50, 75, 100, 125, 175, 225, 250, 275,     300,     325" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="18 级城墙最高可升级" pValue="100 块" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Wall_Ring",
        "noGoldPass": true
    },
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级费用 | 升级所需<br>戒指数量 | 所需<br>大本等级 |
| ---- |  ---  |   ---   |    ---   |         ---        |       ---       |
|   1  |   300 |    50   |     \    |          \         |        2        |
|   2  |   500 |    1k   |     \    |          1         |        2        |
|   3  |   700 |    5k   |     \    |          1         |        3        |
|   4  |   900 |   10k   |     \    |          1         |        4        |
|   5  |  1400 |   20k   |    20k   |          1         |        5        |
|   6  |  2000 |   30k   |    30k   |          1         |        6        |
|   7  |  2500 |   50k   |    50k   |          1         |        7        |
|   8  |  3000 |   75k   |    75k   |          1         |        8        |
|   9  |  3500 |  100k   |   100k   |          1         |        9        |
|  10  |  4000 |  200k   |   200k   |          1         |        9        |
|  11  |  5000 |  500k   |   500k   |          1         |       10        |
|  12  |  7000 |    1M   |     1M   |          1         |       11        |
|  13  |  9000 |    2M   |     2M   |          2         |       12        |
|  14  | 11000 |    3M   |     3M   |          3         |       13        |
|  15  | 12500 |    4M   |     4M   |          4         |       14        |
|  16  | 13500 |    5M   |     5M   |          5         |       15        |
|  17  | 14500 |    7M   |     7M   |          7         |       16        |
|  18  | 15500 |    8M   |     8M   |          8         |       17        |
</UnitTable>

注：升级城墙时，金币、圣水、戒指任选其一即可。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 18 级城墙，目前游戏只开放了 100 块 18 级城墙。</TimelineRow>
        <TimelineRow>16 ~ 17 级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>15 ~ 16 级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>16 本可解锁全部 17 级城墙（共 325 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本可以再刷 100 块 17 级墙（共 250 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，可升级 150 块 17 级城墙。</TimelineRow>
        <TimelineRow>14 ~ 15 级城墙的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>现在你可以把所有的城墙都升到 16 级了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 16 级城墙，目前游戏只开放了 200 块 16 级城墙。</TimelineRow>
        <TimelineRow>13 ~ 14 级城墙的升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>9 ~ 14 级城墙的生命值减少。</TimelineRow>
        <TimelineRow>从 5 级大本营开始，就可以选择使用金币或圣水升级城墙（以前是 9 级大本营）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>6 ~ 14 级城墙的升级费用降低。</TimelineRow>
        <TimelineRow>14 本解锁全部 15 级城墙（325 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14 本玩家可升至 15 级的城墙新增 50 块（更新后总共可以升 200 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/14">
        <TimelineRow>14 本玩家可升至 15 级的城墙新增 50 块（更新后总共可以升 150 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 15 级城墙，不过只能升级 100 块。</TimelineRow>
        <TimelineRow>12 级城墙的升级费用由 300 万降低到 200 万，13 级由 500 万降低到 400 万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>编辑家乡村庄的阵型时，城墙也可以像建筑和陷阱那样互换位置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本可以再刷 100 块 14 级墙（这次更新后全部开放了）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本可以再刷 50 块 14 级墙（合计 200 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 ~ 12 级城墙的升级费用降低。</TimelineRow>
        <TimelineRow>11 ~ 12 级城墙需要的戒指减少。</TimelineRow>
        <TimelineRow>13 本可以再刷 50 块 14 级墙（合计 150 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，新增 14 级城墙（但是只能升 100 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12 本可以将所有城墙升至 13 级（之前只能升级 250 块）。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>