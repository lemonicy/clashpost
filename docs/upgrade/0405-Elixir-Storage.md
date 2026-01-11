---
title: "部落冲突 coc 圣水瓶升级数据"
navTitle: "圣水瓶"
shownTitle: "圣水瓶"
description: "圣水瓶用来保存从地下收集的圣水。升级圣水瓶以提升其存储上限。"
module: upgrade-home
imgFolder: home_buildings/0405
wiki: https://clashofclans.fandom.com/wiki/Elixir_Storage
canonical: /upgrade/0405-Elixir-Storage
---

- *如想查看夜世界的圣水瓶，请访问：[夜世界圣水瓶](/upgrade/1204-Elixir-Storage)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elixir_Storage19.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Elixir_Storage1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Elixir_Storage2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Elixir_Storage3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Elixir_Storage4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Elixir_Storage5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Elixir_Storage6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Elixir_Storage7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Elixir_Storage8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Elixir_Storage9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Elixir_Storage10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Elixir_Storage11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Elixir_Storage12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Elixir_Storage13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Elixir_Storage14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Elixir_Storage15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Elixir_Storage16.png" />
        <UnitImg imgTitle="17 级" imgSrc="Elixir_Storage17.png" />
        <UnitImg imgTitle="18 级" imgSrc="Elixir_Storage18.png" />
        <UnitImg imgTitle="19 级" imgSrc="Elixir_Storage19.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 7, 8, 9 - 18" />
    <BuildingNumRow title="建筑数量" num="    1,     2, 3,      4" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

[雷电法术](/upgrade/0100-Lightning-Spell) 和 [地震法术](/upgrade/0181-Earthquake-Spell) 不能对资源仓库造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="掠夺比例" pValue="点击查看" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "number",
        "icon": "Elixir",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 | 最大储量 | 生命值 | 升级费用 |   升级时间   | 升级后可获<br>得的经验 | 所需<br>大本等级 |
| ---- |  ----   |  ---- |    ---   |      ---    |         ---          |       ---       |
|   1  |  1.5k   |   150 |    300   |  0, 0, 0,10 |                      |         1       |
|   2  |  3.0k   |   300 |    750   |  0, 0, 2    |                      |         2       |
|   3  |  6.0k   |   450 |   1500   |  0, 0, 5    |                      |         2       |
|   4  |   12k   |   600 |   3000   |  0, 0,15    |                      |         3       |
|   5  |   25k   |   800 |   6000   |  0, 0,30    |                      |         3       |
|   6  |   45k   |  1000 |    12k   |  0, 1       |                      |         3       |
|   7  |  100k   |  1250 |    25k   |  0, 2       |                      |         4       |
|   8  |  225k   |  1500 |    50k   |  0, 3       |                      |         4       |
|   9  |  450k   |  1700 |   100k   |  0, 4       |                      |         5       |
|  10  |  850k   |  1900 |   250k   |  0, 5       |                      |         6       |
|  11  | 1.75M   |  2100 |   500k   |  0, 6       |                      |         7       |
|  12  |    2M   |  2500 |     1M   |  0,12       |                      |        11       |
|  13  |    3M   |  2900 |   1.8M   |  1          |                      |        12       |
|  14  |    4M   |  3300 |   2.8M   |  2          |                      |        13       |
|  15  |   4.5M  |  3700 |     3M   |  3          |                      |        14       |
|  16  |     5M  |  3900 |     4M   |  4          |                      |        15       |
|  17  |   5.5M  |  4050 |   5.5M   |  5          |                      |        16       |
|  18  |     6M  |  4200 |    10M   |  7          |                      |        17       |
|  19  |   6.5M  |  4300 |    18M   |  12,12      |                      |        18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，并在 18 本新增 19 级圣水瓶。</TimelineRow>
        <TimelineRow>18 级圣水瓶的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 9 级圣水瓶的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 6、8 ~ 17 级圣水瓶的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 ~ 18 级圣水瓶的资源储量增加。</TimelineRow>
        <TimelineRow>2 ~ 8 级圣水瓶的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 18 级圣水瓶。</TimelineRow>
        <TimelineRow>15 ~ 17 级圣水瓶的升级费用降低。</TimelineRow>
        <TimelineRow>17 级圣水瓶的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>12 ~ 16 级圣水瓶的升级时间减少。</TimelineRow>
        <TimelineRow>15 级圣水瓶的升级费用降低，与储金罐保持一致。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>新增 17 级圣水瓶，16 级大本营可解锁。</TimelineRow>
        <TimelineRow>15 级圣水瓶的升级费用由 550 万降低到 450 万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>13 ~ 14 级圣水瓶的升级时间减少。</TimelineRow>
        <TimelineRow>13 ~ 14 级圣水瓶的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 16 级圣水瓶。</TimelineRow>
        <TimelineRow>12 ~ 15 级圣水瓶的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 15 级圣水瓶。</TimelineRow>
        <TimelineRow>2 ~ 3 级圣水瓶的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>新增 14 级圣水瓶，13 级大本营可解锁。</TimelineRow>
        <TimelineRow>13 级圣水瓶的容量增加 50 万。</TimelineRow>
        <TimelineRow>12 级大本营可掠夺的金币增加至 50 万（不含采集器和城堡）。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>10 ~ 13 级圣水瓶的升级时间减少。</TimelineRow>
        <TimelineRow>12 ~ 13 级圣水瓶的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>