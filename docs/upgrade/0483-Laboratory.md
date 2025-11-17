---
title: "部落冲突 coc 实验室（研究所）升级数据"
navTitle: "实验室"
shownTitle: "实验室（研究所）"
description: "法师们在实验室里隐藏着什么秘密呢？没人敢去瞧一眼。我们只知道他们的研究可以使部队和法术变得更强！"
module: upgrade-home
imgFolder: home_buildings/0483
wiki: https://clashofclans.fandom.com/wiki/Laboratory
canonical: /upgrade/0483-Laboratory
---

- *如想查看夜世界的星空实验室，请访问：[夜世界星空实验室](/upgrade/1282-Star-Laboratory)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Laboratory15.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="实验室" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Laboratory1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Laboratory2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Laboratory3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Laboratory4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Laboratory5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Laboratory6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Laboratory7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Laboratory8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Laboratory9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Laboratory10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Laboratory11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Laboratory12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Laboratory13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Laboratory14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Laboratory15.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

战宠不在实验室中升级，而是在 [战宠小屋](/upgrade/0487-Pet-House) 中升级，战宠升级时既不占用实验室时间，也不占用建筑时间。您可以用英雄之书或英雄之锤升级战宠。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需<br>大本等级 |
| ---- |  ---- |   ----  |    ---   |          ---         |       ---       |
|    1 |   500 |     5k  |  0, 0, 1 |                      |        3        | 
|    2 |   550 |    25k  |  0, 0,30 |                      |        4        |
|    3 |   600 |    50k  |  0, 2    |                      |        5        | 
|    4 |   650 |   100k  |  0, 4    |                      |        6        | 
|    5 |   700 |   200k  |  0, 8    |                      |        7        | 
|    6 |   750 |   400k  |  0,16    |                      |        8        | 
|    7 |   830 |   800k  |  1       |                      |        9        | 
|    8 |   950 |   1.3M  |  1,18    |                      |       10        | 
|    9 |  1070 |   2.1M  |  2,18    |                      |       11        | 
|   10 |  1140 |   3.8M  |  4       |                      |       12        | 
|   11 |  1210 |   5.5M  |  6       |                      |       13        | 
|   12 |  1280 |   8.1M  |  7       |                      |       14        | 
|   13 |  1350 |  10.8M  |  8       |                      |       15        |
|   14 |  1400 |    13M  |  9       |                      |       16        |
|   15 |  1450 |    18M  | 10       |                      |       17        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>15 级实验室的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24"> 
        <TimelineRow>2、14 级实验室的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 15 级实验室。</TimelineRow>    
        <TimelineRow>12 ~ 14 级实验室的升级时间减少。</TimelineRow>
        <TimelineRow>13 级实验室的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>13 ~ 14 级实验室的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>新增 14 级实验室，16 级大本营可解锁。</TimelineRow>
        <TimelineRow>12 级实验室的升级费用 1150 万减少至 810 万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>升级实验室的同时也可以开始升级兵种/法术/攻城机器。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>新增 13 级实验室，15 级大本营可解锁。</TimelineRow>
        <TimelineRow>8 ~ 12 级实验室的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>3 ~ 11 级实验室的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>新增 12 级实验室，14 级大本营可解锁。</TimelineRow>
        <TimelineRow>1 ~ 9 级实验室的升级费用降低。。</TimelineRow>
        <TimelineRow>2 ~ 11 级实验室的升级时间减少。</TimelineRow>
        <TimelineRow>升级实验室期间，之前在实验室内正在进行的升级会正常继续，且实验室的升级和实验室内的项目升级都可以使用宝石或魔法书完成。但实验室正在升级时，无法开始新的兵种或法术升级。</TimelineRow>
    </TimelineItem> 
    <TimelineItem date="2019/12/09">
        <TimelineRow>新增 11 级实验室，13 级大本营可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 2、4 ~ 8 级实验室的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 8 级实验室的升级费用降低。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>