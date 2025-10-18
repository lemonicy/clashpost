---
title: "部落冲突 coc 圣水收集器升级数据"
navTitle: "圣水收集器"
shownTitle: "圣水收集器"
description: "圣水收集器可以从村庄地下的圣泉中收集圣水。升级您的圣水收集器以使圣水产量最大化。"
module: upgrade-home
imgFolder: home_buildings/0402
wiki: https://clashofclans.fandom.com/wiki/Elixir_Collector
canonical: /upgrade/0402-Elixir-Collector
---

- *如想查看夜世界的圣水收集器，请访问：[夜世界圣水收集器](/upgrade/1202-Elixir-Collector)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elixir_Collector16.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Elixir_Collector1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Elixir_Collector2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Elixir_Collector3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Elixir_Collector4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Elixir_Collector5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Elixir_Collector6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Elixir_Collector7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Elixir_Collector8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Elixir_Collector9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Elixir_Collector10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Elixir_Collector11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Elixir_Collector12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Elixir_Collector13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Elixir_Collector14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Elixir_Collector15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Elixir_Collector16.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2, 3, 4, 5, 6 - 8, 9 - 17" />
    <BuildingNumRow title="建筑数量" num="1, 2, 3, 4, 5,     6,      7" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="掠夺比例" pValue="50% (无上限)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "number",
        "icon": "Elixir",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 8,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 9,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每小时产量|采集器<br>容量<sup>*</sup>|填满容量<br>所需时间|出现收集标志<br>时的储量|每个采集器<br>提速所需宝石|  生命值  | 升级费用 |   升级时间   |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |  ----   |           ---           |        ---       |          ---          |          ---           |    ---  |   ---   |     ---     |        ---         |        ---      |
|   1  |   200   |            1k           |    0, 5          |            6          |            \           |     75  |    150  |  0, 0, 0, 5 |                    |         1       |
|   2  |   400   |            2k           |    0, 5          |           15          |            \           |    150  |    300  |  0, 0, 0,15 |                    |         1       |
|   3  |   600   |            3k           |    0, 5          |           25          |            \           |    300  |    700  |  0, 0, 1    |                    |         2       |
|   4  |   800   |            5k           |    0, 6,15       |           40          |            \           |    400  |   1.4k  |  0, 0, 2    |                    |         2       |
|   5  |  1000   |           10k           |    0,10          |           60          |            4           |    500  |   3.0k  |  0, 0, 5    |                    |         3       |
|   6  |  1300   |           20k           |    0,15,23,5     |          100          |            5           |    550  |   7.0k  |  0, 0,15    |                    |         3       |
|   7  |  1600   |           30k           |    0,18,45       |          160          |            6           |    600  |    14k  |  0, 0,30    |                    |         4       |
|   8  |  1900   |           50k           |    1, 2,18,57    |          220          |            7           |    660  |    28k  |  0, 1       |                    |         4       |
|   9  |  2200   |           75k           |    1,10, 5,27    |          300          |            8           |    720  |    56k  |  0, 2       |                    |         5       |
|  10  |  2800   |          100k           |    1,11,42,52    |          400          |            9           |    780  |    75k  |  0, 3       |                    |         5       |
|  11  |  3500   |          150k           |    1,18,51,26    |          500          |           10           |    860  |    85k  |  0, 4       |                    |         7       |
|  12  |  4200   |          200k           |    1,23,37,9     |          600          |           10           |    960  |   170k  |  0, 6       |                    |         8       |
|  13  |  4900   |          250k           |    2, 3, 1,14    |          700          |           11           |   1080  |   400k  |  0, 8       |                    |        10       |
|  14  |  5600   |          300k           |    2, 5,34,18    |          800          |           11           |   1180  |   800k  |  0,12       |                    |        11       |
|  15  |  6300   |          350k           |    2, 7,33,20    |          900          |           11           |   1280  |   1.2M  |  1          |                    |        12       |
|  16  |  7000   |          385k           |    2, 7          |         1000          |           11           |   1350  |     2M  |  2          |                    |        14       |
| ⚡1  |  7300   |        401.5k           |    2, 7          |         1000          |           11           |   1350  |   1.7M  |  2          |                    |        16       |
| ⚡2  |  7600   |          418k           |    2, 7          |         1000          |           11           |   1350  |   1.5M  |  3          |                    |        16       |
| ⚡3  |  7600   |          418k           |    2, 7          |         1000          |           11           |   1400  |   1.3M  |  4          |                    |        16       |
</UnitTable> 

\* 采集器容量满后将停止工作，直到玩家收集采集器内的资源。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1 ~ 8 级圣水收集器的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 16 级圣水收集器的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>2 ~ 10 级圣水收集器的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>6、7、9 级圣水收集器的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 12 级圣水收集器的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>超级充能推出，圣水收集器是第一批可以充能的建筑之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>新增 16 级圣水收集器，14 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>8、10 ~15 级圣水收集器的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>新增 15 级圣水收集器，12 级大本营可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>5 级圣水收集器的升级费用从 3500 减少到 3000，与 5 级金矿的升级费用相同（现在这两座建筑每一等级的升级费用都保持一致）</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>1 ~ 4 级的圣水收集器/金矿的容量加倍，3 小时不再能填满这些采集器。</TimelineRow>
        <TimelineRow>10 ~ 14 级圣水收集器的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 6、12 ~ 14 级圣水收集器的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>新增 14 级圣水收集器，11 级大本营可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 7 ~ 13 级圣水收集器的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>