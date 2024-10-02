---
title: "部落冲突 coc 夜世界兵营升级数据"
navTitle: "兵营"
shownTitle: "兵营"
description: "您的部队驻扎在兵营，每个兵营一次只能容纳一种兵。升级某些兵种可以提高兵营容纳该兵种的数量。"
module: upgrade-bh
imgFolder: bh_buildings/1281
wiki: https://clashofclans.fandom.com/wiki/Army_Camp/Builder_Base
canonical: /upgrade/1281-Army-Camp
---

- *如想查看夜世界的预备营，请访问：[夜世界预备营](/upgrade/1285-Reinforcement-Camp)。*
- *如想查看家乡的兵营，请访问：[兵营](/upgrade/0480-Army-Camp)。*
- *如想查看都城的兵营，请访问：[都城兵营](/upgrade/2300-Army-Camp)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Army_Camp.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Army_Camp_Ruin.png" />    
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2, 3, 4 - 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="1, 2, 3, 4, 5, 6" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, \, \, \, 4, 4" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, \, \, \, 1, 2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

夜世界的兵营与家乡有些许不同，这里列举一些夜世界兵营的一些独有特性：

1. 在夜世界，每个兵营只能放一种兵，每个兵营可存放的部队数量取决于兵种的种类和等级；
2. 夜世界的兵营不能升级，兵营的建造费用取决于你已有的兵营数量；
3. 匹配对手不需要消耗金币，而且下兵之前可以临时换兵；
4. 夜世界造兵不需要时间，造兵可以瞬间完成。（在 2020 年 3 月 30 日更新之前，填满每个兵营需要的时间固定为 1 分钟）

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="300" />
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
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 3,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 第几个兵营 | 建造花费 | 建造时间 | 升级后可获<br>得的经验 |
|    ----   |   ----  |   ----  |          ---          |
|      1    |     \   |     \   |           \           |
|      2    |   12k   | 0, 0, 5 |                       |
|      3    |  180k   | 0, 3    |                       |
|      4    |  350k   | 0, 8    |                       |
|      5    |    2M   | 3       |                       |
|      6    |    3M   | 6       |                       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">    
        <TimelineRow>5 ~ 6 级兵营的升级费用增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>