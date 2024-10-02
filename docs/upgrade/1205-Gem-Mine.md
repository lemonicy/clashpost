---
title: "部落冲突 coc 夜世界宝石矿井升级数据"
navTitle: "宝石矿井"
shownTitle: "宝石矿井"
description: "宝石矿井中藏有少量宝石，这是极其珍贵的资源！开采宝石既费时又费力。"
module: upgrade-bh
imgFolder: bh_buildings/1205
wiki: https://clashofclans.fandom.com/wiki/Gem_Mine
canonical: /upgrade/1205-Gem-Mine
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Gem_Mine10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Gem_Mine_Ruin.png"/>
        <UnitImg imgTitle="1 级" imgSrc="Gem_Mine1.png"/>
        <UnitImg imgTitle="2 级" imgSrc="Gem_Mine2.png"/>
        <UnitImg imgTitle="3 级" imgSrc="Gem_Mine3.png"/>
        <UnitImg imgTitle="4 级" imgSrc="Gem_Mine4.png"/>
        <UnitImg imgTitle="5 级" imgSrc="Gem_Mine5.png"/>
        <UnitImg imgTitle="6 级" imgSrc="Gem_Mine6.png"/>
        <UnitImg imgTitle="7 级" imgSrc="Gem_Mine7.png"/>
        <UnitImg imgTitle="8 级" imgSrc="Gem_Mine8.png"/>
        <UnitImg imgTitle="9 级" imgSrc="Gem_Mine9.png"/>
        <UnitImg imgTitle="10 级" imgSrc="Gem_Mine10.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3 - 5, 6 - 10" />
    <BuildingNumRow title="合计" num="0, 1, 1" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, \, 1" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, \, 0" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="出现收集标志时的储量" pValue="1" />    
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "number",
        "icon": "Gem",
        "noGoldPass": true
    },
    {
        "column": 2,
        "type": "number",
        "icon": "Gem",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir2"
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

| 等级 | 每天产量 | 矿井容量 | 填满矿井<br>需要的时间 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需夜世界<br>大本营等级 |
|  --- |   ---   |   ---   |          ---          |   ---  |    ---  |   ---   |         ---         |         ---          |
|  1   |  2.16   |    10   |       4,15, 6,40      |   300  |   120k  | 0, 1    |                     |           3          |
|  2   |  2.40   |    11   |       4,14            |   350  |   180k  | 0, 2    |                     |           3          |
|  3   |  2.64   |    12   |       4,13, 5,27      |   400  |   240k  | 0, 6    |                     |           3          |
|  4   |  2.88   |    13   |       4,12,20         |   460  |   450k  | 0, 8    |                     |           4          |
|  5   |  3.12   |    14   |       4,11,41,32      |   550  |     1M  | 0,12    |                     |           5          |
|  6   |  3.36   |    15   |       4,11,8,34       |   650  |   1.5M  | 1       |                     |           6          |
|  7   |  3.84   |    16   |       4, 4            |   750  |   2.5M  | 2       |                     |           7          |
|  8   |  4.32   |    17   |       3,22,26,40      |   850  |   3.5M  | 4       |                     |           8          |
|  9   |  4.80   |    18   |       3,18            |  1000  |   4.5M  | 6       |                     |           9          |
| 10   |  5.04   |    19   |       3,18,28,24      |  1150  |   5.5M  | 8       |                     |          10          |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>5 ~ 9 级宝石矿井的升级费用增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，宝石矿井可升至 10 级。</TimelineRow>
    </TimelineItem>
     <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，宝石矿井可升至 9 级。</TimelineRow>
    </TimelineItem>   
    <TimelineItem :historyBottom="true" />
</Timeline>