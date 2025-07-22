---
title: "部落冲突 coc 兵营升级数据"
navTitle: "兵营"
shownTitle: "兵营"
description: "部队驻扎在兵营。建造并升级兵营以容纳更多部队。"
module: upgrade-home
imgFolder: home_buildings/0480
wiki: https://clashofclans.fandom.com/wiki/Army_Camp
canonical: /upgrade/0480-Army-Camp
---

- *如想查看夜世界的兵营，请访问：[夜世界兵营](/upgrade/1281-Army-Camp)。*
- *如想查看都城的兵营，请访问：[都城兵营](/upgrade/2300-Army-Camp)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Army_Camp13_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Army_Camp1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Army_Camp2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Army_Camp3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Army_Camp4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Army_Camp5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Army_Camp6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Army_Camp7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Army_Camp8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Army_Camp9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Army_Camp10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Army_Camp11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Army_Camp12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Army_Camp13.png" imgHd="Army_Camp13_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 4, 5 - 6, 7 - 17" />
    <BuildingNumRow title="建筑数量" num="    1,     2,     3,      4" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 可容纳的<br>部队人口 | 生命值 | 升级费用 |  升级时间 | 升级后可获<br>得的经验  | 所需<br>大本等级 |
| ---- |        ----        |  ----  |   ----  |    ---   |          ---          |       ---       |
|    1 |          20        |   100  |    200  |  0, 0, 1 |                       |         1       |
|    2 |          30        |   150  |     2k  |  0, 0, 5 |                       |         2       |
|    3 |          35        |   200  |    10k  |  0, 0,30 |                       |         3       |
|    4 |          40        |   250  |   100k  |  0, 2    |                       |         4       |
|    5 |          45        |   300  |   250k  |  0, 6    |                       |         5       |
|    6 |          50        |   330  |   500k  |  0,12    |                       |         6       |
|    7 |          55        |   400  |   1.5M  |  2       |                       |         9       |
|    8 |          60        |   500  |   2.5M  |  3       |                       |        10       |
|    9 |          65        |   600  |   4.2M  |  4       |                       |        11       |
|   10 |          70        |   700  |   4.5M  |  5       |                       |        12       |
|   11 |          75        |   800  |   7.5M  |  6       |                       |        13       |
|   12 |          80        |   850  |    10M  |  7       |                       |        15       |
|   13 |          85        |   900  |    21M  | 15       |                       |        17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 6 级兵营的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>17 本新增 13 级兵营。</TimelineRow>
        <TimelineRow>1 ~ 5 级兵营的升级时间减少。</TimelineRow>
        <TimelineRow>6、11、12 级兵营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">  
        <TimelineRow>9 ~ 12 级兵营的升级时间减少。</TimelineRow>
        <TimelineRow>10、12 级兵营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>12 级兵营的升级时间减少。</TimelineRow>
        <TimelineRow>12 级兵营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>12 级兵营的升级时间 16 天减少到 12 天 12 小时。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>10 ~ 11 级兵营的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级兵营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 12 级兵营。</TimelineRow>
        <TimelineRow>8 ~ 11 级兵营的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 15 级兵营。</TimelineRow>
        <TimelineRow>2 ~ 3 级兵营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本新增 11 级兵营。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>兵营的占地面积由 5*5 改为 4*4。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>8 ~ 9 级兵营的升级费用降低。</TimelineRow>
        <TimelineRow>5 ~ 9 级兵营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>