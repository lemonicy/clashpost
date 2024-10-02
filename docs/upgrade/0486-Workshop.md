---
title: "部落冲突 coc 攻城机器工坊升级数据"
navTitle: "攻城机器工坊"
shownTitle: "攻城机器工坊"
description: "攻城机器工坊是专门建造攻城机器的地方。升级攻城机器工坊以解锁不同的攻城机器！"
module: upgrade-home
imgFolder: home_buildings/0486
wiki: https://clashofclans.fandom.com/wiki/Workshop
canonical: /upgrade/0486-Workshop
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Workshop7.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Workshop1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Workshop2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Workshop3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Workshop4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Workshop5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Workshop6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Workshop7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 11, 12 - 16" />
    <BuildingNumRow title="建筑数量" num="     0,       1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="4×4" :isJudgeSquare="true" />
    <UnitProperty pKey="提速所需宝石数" pValue="30<sup>*</sup>" />
</UnitProperties>

\* 30 宝石是 [训练营](/upgrade/0481-Barracks) + [暗黑训练营](/upgrade/0482-Dark-Barracks) + 攻城机器工坊捆绑提速一小时的价格，这些建筑不能单独提速。一般来说购买训练药水更划算。

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

| 等级 |可容纳的攻<br>城机器数量| 生命值 | 升级费用 | 升级时间 |升级后可获<br>得的经验|所需<br>大本等级|解锁的<br>攻城机器|
| ---- |          ---         |   --- |    ---   |   ---   |         ---        |       ---     |        ----     |
|   1  |           1          |  1000 |     3M   |    4    |                    |       12      |<a href="/upgrade/0240-Wall-Wrecker">攻城战车</a>|
|   2  |           2          |  1100 |     5M   |    5    |                    |       12      |<a href="/upgrade/0241-Battle-Blimp">攻城飞艇</a>|
|   3  |           3          |  1200 |     7M   |    7    |                    |       12      |<a href="/upgrade/0242-Stone-Slammer">攻城气球</a>|
|   4  |           3          |  1300 |     9M   |    8    |                    |       13      |<a href="/upgrade/0243-Siege-Barracks">攻城训练营</a>|
|   5  |           3          |  1400 |    10M   |    9    |                    |       13      |<a href="/upgrade/0244-Log-Launcher">攻城滚木车</a>|
|   6  |           3          |  1500 |    14M   |   10    |                    |       14      |<a href="/upgrade/0245-Flame-Flinger">攻城烈焰车</a>|
|   7  |           3          |  1600 |    17M   |   11    |                    |       15      |<a href="/upgrade/0246-Battle-Drill">攻城钻机</a>|
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>4 ~ 7 级攻城机器工坊的升级时间减少。</TimelineRow>
        <TimelineRow>7 级攻城机器工坊的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 ~ 7 级攻城机器工坊厂的升级时间减少。</TimelineRow>
        <TimelineRow>6 级攻城机器工坊厂的升级费用 1650 万减少到 1400 万。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>1 ~ 5 级攻城机器工坊的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 5 级攻城机器工坊的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>攻城机器工坊升级时兵种可继续建造攻城机器，但建造速度减半（建造时间翻倍）。</TimelineRow>
        <TimelineRow>游戏新增 15 本，并在 15 本新增 7 级攻城机器工坊，可解锁新的攻城机器：攻城钻机。</TimelineRow>
        <TimelineRow>1 ~ 6 级攻城机器工坊的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 2 级攻城机器工坊的升级费用降低。</TimelineRow>
        <TimelineRow>14 本新增 6 级攻城机器工坊，新攻城机器：攻城烈焰车。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>13 本可以将攻城机器工坊升到 5 级了，新攻城机器：攻城滚木车。</TimelineRow>
    </TimelineItem> 
        <TimelineItem date="2019/04/02">
        <TimelineRow>13 本可以将攻城机器工坊升到 4 级了，新攻城机器：攻城训练营。</TimelineRow>
        <TimelineRow>攻城机器工坊的占地面积由 5*5 改为 4*4，但是判定面积没变。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>