---
title: "部落冲突 coc 夜世界暗夜女巫升级数据"
navTitle: "暗夜女巫"
shownTitle: "暗夜女巫"
description: "从容地召唤出成群的飞行生物，和她的妹妹不同，她可不会破坏草皮。"
module: upgrade-bh
imgFolder: bh_tech/1007
wiki: https://clashofclans.fandom.com/wiki/Night_Witch
canonical: /upgrade/1007-Night-Witch
---

- *如想查看家乡的女巫，请访问：[女巫](/upgrade/0084-Witch)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Night_Witch_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="9 - 11 级" imgSrc="Night_Witch9.png" />
        <UnitImg imgTitle="12 - 15 级" imgSrc="Night_Witch12.png" />
        <UnitImg imgTitle="16 - 17 级" imgSrc="Night_Witch16.png" />
        <UnitImg imgTitle="18 - 19 级" imgSrc="Night_Witch18.png" />
        <UnitImg imgTitle="20 级" imgSrc="Night_Witch20.png" />
        <UnitImg imgTitle="蝙蝠" imgSrc="Night_Witch_Bat1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>暗夜女巫的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="部队重量" pValue="14" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.7 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="8" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="6" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="蝙蝠召唤" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="额外召唤一群蝙蝠" />
</UnitProperties>

<SmallTitle>蝙蝠的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="7 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.3 格" />
    <UnitProperty pKey="每秒伤害" pValue="20" />
    <UnitProperty pKey="每次伤害" pValue="40" />
    <UnitProperty pKey="生命值" pValue="10" />
</UnitProperties>

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

| 等级 | 每秒伤害 | 每次伤害|蝙蝠召唤的<br>冷却时间|每次召唤数量<sup>①</sup>|开启技能后的<br>召唤数量<sup>②</sup>|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |         ---        |           ---         |                ---                |   ---   |   ---   |    ---   |           ---          |
|   9  |   176   |  123.2 |        6.0 秒      |        3 (上限 4)      |                 7                |    690   |    \    |     \    |            6          |
|  10  |   176   |  123.2 |        4.8 秒      |        3 (上限 4)      |                 7                |    690   |   1.4M  |  2       |            6          |
|  11  |   193   |  135.1 |        4.8 秒      |        3 (上限 4)      |                 7                |    759   |   1.6M  |  2       |            6          |
|  12  |   193   |  135.1 |        4.8 秒      |        3 (上限 4)      |                 8                |    759   |   1.8M  |  2,12    |            6          |
|  13  |   216   |  151.2 |        4.8 秒      |        3 (上限 4)      |                 8                |    835   |   2.5M  |  3,12    |            7          |
|  14  |   216   |  151.2 |        4.8 秒      |        4 (上限 5)      |                 8                |    835   |   2.7M  |  4,12    |            7          |
|  15  |   234   |  163.8 |        4.8 秒      |        4 (上限 5)      |                 8                |    918   |   3.5M  |  5,12    |            8          |
|  16  |   234   |  163.8 |        4.8 秒      |        4 (上限 5)      |                 9                |    918   |   3.7M  |  5,12    |            8          |
|  17  |   257   |  179.9 |        4.8 秒      |        4 (上限 5)      |                 9                |   1010   |   4.2M  |  6       |            9          |
|  18  |   257   |  179.9 |        4.8 秒      |        4 (上限 5)      |                10                |   1010   |   4.4M  |  6       |            9          |
|  19  |   278   |  194.6 |        4.8 秒      |        4 (上限 5)      |                10                |   1111   |   5.2M  |  6,12    |           10          |
|  20  |   278   |  194.6 |        4.8 秒      |        4 (上限 5)      |                11                |   1111   |   5.6M  |  6,12    |           10          |
</UnitTable>

① 暗夜女巫并不是每次都会召唤 3 到 4 个蝙蝠，当一只暗夜女巫召唤的蝙蝠达到上表的限制时，除非蝙蝠死亡，否则不会继续召唤。这个上限指的是每只暗夜女巫召唤的蝙蝠，如果有两只暗夜女巫，那么场上的最大蝙蝠数量为 2 倍上限。<br>
② 开启技能后暗夜女巫会额外召唤一批蝙蝠，注意是额外召唤的，不受上限影响。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/27">
        <TimelineRow>所有等级暗夜女巫的生命值增加。</TimelineRow>
        <TimelineRow>所有等级暗夜女巫开启技能后召唤出的蝙蝠数量增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/20">
        <TimelineRow>暗夜女巫的生命值增加 6%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/09">
        <TimelineRow>暗夜女巫的生命值增加 11%。</TimelineRow>
        <TimelineRow>暗夜女巫召唤蝙蝠的冷却时间减少 0.8 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级暗夜女巫。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>现在暗夜女巫多了个一次性技能“蝙蝠召唤”，可以额外召唤一群蝙蝠，以前的召唤功能还在。</TimelineRow>
        <TimelineRow>暗夜女巫的兵种重量从 12 提升至 14。</TimelineRow>
        <TimelineRow>现在暗夜女巫一解锁就是 9 级，你不需要从 1 级开始升了。如果更新前部队高于 9 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>