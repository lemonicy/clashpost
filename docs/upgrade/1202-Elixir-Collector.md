---
title: "部落冲突 coc 夜世界圣水收集器升级数据"
navTitle: "圣水收集器"
shownTitle: "圣水收集器"
description: "圣水收集器可以从村庄地下的圣泉中收集圣水。升级您的圣水收集器以使圣水产量最大化。"
module: upgrade-bh
imgFolder: bh_buildings/1202
wiki: https://clashofclans.fandom.com/wiki/Elixir_Collector/Builder_Base
canonical: /upgrade/1202-Elixir-Collector
---

- *如想查看家乡的圣水收集器，请访问：[圣水收集器](/upgrade/0402-Elixir-Collector)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Elixir_Collector10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Elixir_Collector_Ruin.png"/>
        <UnitImg imgTitle="1 级" imgSrc="Elixir_Collector1.png"/>
        <UnitImg imgTitle="2 级" imgSrc="Elixir_Collector2.png"/>
        <UnitImg imgTitle="3 级" imgSrc="Elixir_Collector3.png"/>
        <UnitImg imgTitle="4 级" imgSrc="Elixir_Collector4.png"/>
        <UnitImg imgTitle="5 级" imgSrc="Elixir_Collector5.png"/>
        <UnitImg imgTitle="6 级" imgSrc="Elixir_Collector6.png"/>
        <UnitImg imgTitle="7 级" imgSrc="Elixir_Collector7.png"/>
        <UnitImg imgTitle="8 级" imgSrc="Elixir_Collector8.png"/>
        <UnitImg imgTitle="9 级" imgSrc="Elixir_Collector9.png"/>
        <UnitImg imgTitle="10 级" imgSrc="Elixir_Collector10.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 7, 8 - 10" />
    <BuildingNumRow title="合计" num="1, 2, 3" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, 1, 1" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, 1, 2" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="填满储量所需时间" pValue="24 小时" />    
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    },
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
    }, 
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },      
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每小时产量 | 采集器容量 | 出现收集标<br>志时的储量 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需夜世界<br>大本营等级 |
|  --- |    ---    |    ---    |          ---           |   ---  |    ---  |   ---   |         ---          |           ---          |
|  1   |   1000    |   24000   |           30           |   300  |     1k  | 0, 0,10 |                      |             1          |
|  2   |   1200    |   28000   |           40           |   350  |     5k  | 0, 0,20 |                      |             3          |
|  3   |   1500    |   36000   |           50           |   400  |    10k  | 0, 0,40 |                      |             3          |
|  4   |   1800    |   43200   |           60           |   460  |    30k  | 0, 2    |                      |             4          |
|  5   |   2100    |   50400   |           70           |   550  |    60k  | 0, 6    |                      |             5          |
|  6   |   2500    |   60000   |           80           |   650  |   100k  | 1       |                      |             6          |
|  7   |   3000    |   72000   |          100           |   750  |   200k  | 1,12    |                      |             7          |
|  8   |   3500    |   84000   |          120           |   850  |   300k  | 2       |                      |             8          |
|  9   |   4000    |   96000   |          140           |  1000  |   400k  | 2,12    |                      |             9          |
| 10   |   4500    |  108000   |          160           |  1150  |   800k  | 3       |                      |            10          |

</UnitTable>

一般来说，损坏的建筑不视为解锁，比如说时光钟楼 4 本解锁。按照这个逻辑，夜世界 1 本的圣水收集器和圣水收集器数量应为 0. 但考虑到 1 本常常是新手教程，比较特殊，为了方便玩家理解，这里没有按照上述规则来。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>5 ~ 9 级圣水收集器的升级费用增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，圣水收集器可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/10/16">
        <TimelineRow>填满夜世界的金矿和圣水收集器所需的时间由 12 小时变成 24 小时。</TimelineRow>
    </TimelineItem>
     <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，圣水收集器可升至 9 级。</TimelineRow>
    </TimelineItem>   
    <TimelineItem :historyBottom="true" />
</Timeline>