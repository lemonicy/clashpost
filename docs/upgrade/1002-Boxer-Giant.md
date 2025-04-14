---
title: "部落冲突 coc 夜世界巨人拳击手升级数据"
navTitle: "巨人拳击手"
shownTitle: "巨人拳击手"
description: "别看巨人行动笨拙、体壮如牛，他们可是一直在练习拳击！"
module: upgrade-bh
imgFolder: bh_tech/1002
wiki: https://clashofclans.fandom.com/wiki/Boxer_Giant
canonical: /upgrade/1002-Boxer-Giant
---

- *如想查看家乡的巨人，请访问：[巨人](/upgrade/0002-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Boxer_Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 - 7 级" imgSrc="Boxer_Giant3.png" />
        <UnitImg imgTitle="8 - 11 级" imgSrc="Boxer_Giant8.png" />
        <UnitImg imgTitle="12 - 15 级" imgSrc="Boxer_Giant12.png" />
        <UnitImg imgTitle="16 - 19 级" imgSrc="Boxer_Giant16.png" />
        <UnitImg imgTitle="20 级" imgSrc="Boxer_Giant20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>巨人拳击手的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="部队重量" pValue="18" />
    <UnitProperty pKey="移动速度" pValue="1.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="3" />
</UnitProperties>

<SmallTitle>特殊技能 1 的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="重拳出击" />
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="技能描述" pValue="首次攻击造成额外伤害" />
</UnitProperties>

<SmallTitle>特殊技能 2 的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="拳手格挡" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="使用后保持几秒的无敌状态<sup>*</sup>" />
</UnitProperties>

\* 如果玩家没有手动触发这个技能，那么即将死亡时会强制触发一次，提前触发的话即将死亡时就没有无敌效果了。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害|首次攻击的<br>额外伤害|技能<br>无敌时间|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |         ---        |       ---      |   ---   |   ---   |    ---   |           ---          |
|   3  |    65   |   130  |         550        |        无      |   2530  |    \    |     \    |            3           |
|   4  |    65   |   130  |         550        |       5 秒     |   2530  |    60k  |  0,5     |            3           |
|   5  |    70   |   140  |         550        |       5 秒     |   2783  |   120k  |  0,10    |            3           |
|   6  |    70   |   140  |         700        |       5 秒     |   2783  |   240k  |  0,16    |            3           |
|   7  |    76   |   152  |         700        |       5 秒     |   3061  |   350k  |  0,20    |            4           |
|   8  |    76   |   152  |         700        |       6 秒     |   3061  |   380k  |  1,      |            4           |
|   9  |    83   |   166  |         700        |       6 秒     |   3367  |     1M  |  1,12    |            5           |
|  10  |    83   |   166  |         900        |       6 秒     |   3367  |   1.2M  |  2       |            5           |
|  11  |    91   |   182  |         900        |       6 秒     |   3704  |   1.3M  |  2       |            6           |
|  12  |    91   |   182  |         900        |       7 秒     |   3704  |   1.5M  |  2,12    |            6           |
|  13  |   100   |   200  |         900        |       7 秒     |   4075  |   2.3M  |  3,12    |            7           |
|  14  |   100   |   200  |        1150        |       7 秒     |   4075  |   2.5M  |  4,12    |            7           |
|  15  |   109   |   218  |        1150        |       7 秒     |   4482  |   3.3M  |  5,12    |            8           |
|  16  |   109   |   218  |        1150        |     7.5 秒     |   4482  |   3.5M  |  5,12    |            8           |
|  17  |   119   |   238  |        1150        |     7.5 秒     |   4930  |     4M  |  6       |            9           |
|  18  |   119   |   238  |        1400        |     7.5 秒     |   4930  |   4.2M  |  6       |            9           |
|  19  |   129   |   258  |        1400        |     7.5 秒     |   5423  |   4.8M  |  6,12    |           10           |
|  20  |   129   |   258  |        1400        |       8 秒     |   5423  |   5.4M  |  6,12    |           10           |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级巨人拳击手。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>巨人拳击手现在有两个技能了，本次更新在原有“重拳出击”技能的基础上加了个一次性技能“拳手格挡”。</TimelineRow>
        <TimelineRow>巨人拳击手的兵种重量从 8 提升至 18。</TimelineRow>
        <TimelineRow>巨人拳击手的移动速度由 12（1.5 格/秒） 提升至 14.4（1.8 格/秒）。</TimelineRow>
        <TimelineRow>现在巨人拳击手一解锁就是 3 级，你不需要从 1 级开始升了。如果更新前部队高于 3 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>巨人拳击手的兵种重量从 5 提升至 8。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>