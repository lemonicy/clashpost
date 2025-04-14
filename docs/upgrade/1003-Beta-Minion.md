---
title: "部落冲突 coc 夜世界异变亡灵（变异亡灵）升级数据"
navTitle: "异变亡灵"
shownTitle: "异变亡灵（变异亡灵）"
description: "可远距离攻击目标，在暗夜中闪闪发光，于舞池中疯狂不已。"
module: upgrade-bh
imgFolder: bh_tech/1003
wiki: https://clashofclans.fandom.com/wiki/Beta_Minion
canonical: /upgrade/1003-Beta-Minion
---

- *如想查看家乡的亡灵，请访问：[亡灵](/upgrade/0080-Minion)。*
- *如想查看家乡的超级亡灵，请访问：[超级亡灵](/upgrade/0608-Super-Minion)。*
- *如想查看都城的亡灵大军，请访问：[都城亡灵大军](/upgrade/2004-Minion-Horde)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Beta_Minion_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 6 级" imgSrc="Beta_Minion3.png" />
        <UnitImg imgTitle="7 - 10 级" imgSrc="Beta_Minion7.png" />
        <UnitImg imgTitle="11 - 14 级" imgSrc="Beta_Minion11.png" />
        <UnitImg imgTitle="15 - 18 级" imgSrc="Beta_Minion15.png" />
        <UnitImg imgTitle="19 - 20 级" imgSrc="Beta_Minion19.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>异变亡灵的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="4.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="4" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="3" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="超强狙击" />
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
</UnitProperties>

\* 超强狙击：异变亡灵的前几次攻击速度更快，攻击距离更远，并造成额外伤害。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 7,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 8,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害|每个兵营的<br>部队数量|超强狙击<br>次数|超强狙击的<br>额外每次伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |         ---        |       ---      |           ---          |   ---   |   ---   |    ---   |           ---          |
|   3  |    60   |    60  |          3         |        4       |            60          |   200   |    \    |     \    |            3           |
|   4  |    60   |    60  |          3         |        4       |            75          |   200   |    50k  |  0,4     |            3           |
|   5  |    65   |    65  |          3         |        4       |            75          |   220   |   110k  |  0,8     |            3           |
|   6  |    65   |    65  |          3         |        5       |            75          |   220   |   220k  |  0,12    |            3           |
|   7  |    72   |    72  |          3         |        5       |            75          |   242   |   330k  |  0,18    |            4           |
|   8  |    72   |    72  |          3         |        5       |            90          |   242   |   360k  |  1       |            4           |
|   9  |    81   |    81  |          3         |        5       |            90          |   266   |   900k  |  1,12    |            5           |
|  10  |    81   |    81  |          4         |        5       |            90          |   266   |   1.1M  |  2       |            5           |
|  11  |    90   |    90  |          4         |        5       |            90          |   293   |   1.3M  |  2       |            6           |
|  12  |    90   |    90  |          4         |        5       |           110          |   293   |   1.5M  |  2,12    |            6           |
|  13  |    99   |    99  |          4         |        5       |           110          |   322   |   2.3M  |  3,12    |            7           |
|  14  |    99   |    99  |          4         |        6       |           110          |   322   |   2.5M  |  4,12    |            7           |
|  15  |   108   |   108  |          4         |        6       |           110          |   355   |   3.3M  |  5,12    |            8           |
|  16  |   108   |   108  |          4         |        6       |           130          |   355   |   3.5M  |  5,12    |            8           |
|  17  |   117   |   117  |          4         |        6       |           130          |   390   |     4M  |  6       |            9           |
|  18  |   117   |   117  |          4         |        7       |           130          |   390   |   4.2M  |  6       |            9           |
|  19  |   126   |   126  |          4         |        7       |           130          |   429   |   4.8M  |  6,12    |           10           |
|  20  |   126   |   126  |          4         |        7       |           130          |   429   |   5.4M  |  6,12    |           10           |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级异变亡灵。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>异变亡灵的移动速度由 32（4 格/秒） 提升至 38.4（4.8 格/秒）。</TimelineRow>
        <TimelineRow>现在异变亡灵一解锁就是 3 级，你不需要从 1 级开始升了。如果更新前部队高于 3 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>夜世界所有空军的攻击距离减少 0.5 格（蝙蝠除外）。</TimelineRow>
        <TimelineRow>异变亡灵的远程狙杀技能的攻击距离减少 0.5 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>