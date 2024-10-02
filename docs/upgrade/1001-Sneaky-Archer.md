---
title: "部落冲突 coc 夜世界隐秘弓箭手升级数据"
navTitle: "隐秘弓箭手"
shownTitle: "隐秘弓箭手"
description: "弓箭手隐身于月色中，她们甚至可以在被发现之前就将目标消灭。她们的弱点？高傲自负。"
module: upgrade-bh
imgFolder: bh_tech/1001
wiki: https://clashofclans.fandom.com/wiki/Sneaky_Archer
canonical: /upgrade/1001-Sneaky-Archer
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sneaky_Archer_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 4 级" imgSrc="Sneaky_Archer1.png" />
        <UnitImg imgTitle="5 - 8 级" imgSrc="Sneaky_Archer5.png" />
        <UnitImg imgTitle="9 - 12 级" imgSrc="Sneaky_Archer9.png" />
        <UnitImg imgTitle="13 - 16 级" imgSrc="Sneaky_Archer13.png" />
        <UnitImg imgTitle="17 - 20 级" imgSrc="Sneaky_Archer17.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>隐秘弓箭手的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="部队重量" pValue="3" />
    <UnitProperty pKey="移动速度" pValue="3.6 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="2" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="2" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="隐形披风" />
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="技能描述" pValue="部署后隐身，不会被锁定" />
</UnitProperties>

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

| 等级 | 每秒伤害 | 每次伤害|每个兵营的<br>部队数量|技能<br>隐身时间|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |         ---        |       ---      |   ---   |   ---   |    ---   |           ---          |
|   1  |    60   |   60   |          3         |        无      |    196  |    \    |     \    |            1           |
|   2  |    60   |   60   |          3         |       3 秒     |    196  |   5k    |  0,0,3   |            1           |
|   3  |    66   |   66   |          3         |       3 秒     |    216  |   8k    |  0,0,10  |            2           |
|   4  |    66   |   66   |          3         |       4 秒     |    216  |   12k   |  0,0,30  |            2           |
|   5  |    72   |   72   |          3         |       4 秒     |    237  |   100k  |  0,6     |            3           |
|   6  |    72   |   72   |          3         |       5 秒     |    237  |   200k  |  0,11    |            3           |
|   7  |    79   |   79   |          3         |       5 秒     |    261  |   320k  |  0,16    |            4           |
|   8  |    79   |   79   |          3         |       6 秒     |    261  |   350k  |  0,21    |            4           |
|   9  |    86   |   86   |          3         |       6 秒     |    287  |   800k  |  1       |            5           |
|  10  |    86   |   86   |          4         |       6 秒     |    287  |   1M    |  1,12    |            5           |
|  11  |    95   |   95   |          4         |       6 秒     |    316  |   1.1M  |  2       |            6           |
|  12  |    95   |   95   |          4         |       7 秒     |    316  |   1.3M  |  2,12    |            6           |
|  13  |   104   |  104   |          4         |       7 秒     |    347  |   2.1M  |  3,12    |            7           |
|  14  |   104   |  104   |          4         |       8 秒     |    347  |   2.3M  |  4,12    |            7           |
|  15  |   112   |  112   |          4         |       8 秒     |    382  |   3.1M  |  5,12    |            8           |
|  16  |   112   |  112   |          4         |       9 秒     |    382  |   3.3M  |  5,12    |            8           |
|  17  |   119   |  119   |          4         |       9 秒     |    420  |   3.9M  |  6       |            9           |
|  18  |   119   |  119   |          4         |      10 秒     |    420  |   4.1M  |  6       |            9           |
|  19  |   125   |  125   |          4         |      10 秒     |    462  |   4.7M  |  6,12    |           10           |
|  20  |   125   |  125   |          4         |      11 秒     |    462  |   5.3M  |  6,12    |           10           |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级隐秘弓箭手。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>隐秘弓箭手的兵种重量从 2 提升至 3.</TimelineRow>
        <TimelineRow>隐秘弓箭手的移动速度由 24（3 格/秒）提升至 28.8（3.6 格/秒）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>修复了狂暴野蛮人、超级野蛮人和隐秘弓箭手的技能持续时间计时不太准确的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>隐秘弓箭手的兵种重量从 1 提升至 2.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>