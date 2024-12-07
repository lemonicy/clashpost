---
title: "部落冲突 coc 弓箭手升级数据"
navTitle: "弓箭手"
shownTitle: "弓箭手"
description: "这些神箭手在战场上总是能够百步穿杨，一箭封喉。她们觉得没有什么比一箭打爆对手更爽的了。"
module: upgrade-home
imgFolder: home_tech/0001
wiki: https://clashofclans.fandom.com/wiki/Archer
canonical: /upgrade/0001-Archer
---

- *如想查看以弓箭手为原型的英雄，请访问：[弓箭女皇（女王）](/upgrade/0201-Archer-Queen)。*
- *如想查看该兵种的强化版本，请访问：[超级弓箭手](/upgrade/0606-Super-Archer)。*
- *如想查看夜世界的隐秘弓箭手，请访问：[夜世界隐秘弓箭手](/upgrade/1001-Sneaky-Archer)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Archer_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Archer1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Archer3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Archer5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Archer6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Archer7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Archer8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Archer9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Archer10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Archer11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Archer12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="2" />
    <UnitProperty pKey="训练时间" pValue="6" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级花费 |  升级时间  |所需实验室等级|所需大本等级|
| ---- |  ----   |  ----   |  ----  |   ----  |    ----   |    ----     |   ----    |
|   1  |     7   |    7    |    20  |      \  |       \   |      1      |     1     |
|   2  |     9   |    9    |    23  |    30k  |    0, 3   |      1      |     3     |
|   3  |    12   |   12    |    28  |    80k  |    0, 6   |      3      |     5     |
|   4  |    16   |   16    |    33  |   300k  |    0,12   |      5      |     7     |
|   5  |    20   |   20    |    40  |   800k  |    1      |      6      |     8     |
|   6  |    22   |   22    |    44  |     2M  |    1,12   |      7      |     9     |
|   7  |    25   |   25    |    48  |   2.5M  |    1,18   |      8      |    10     |
|   8  |    28   |   28    |    52  |   3.2M  |    2      |      9      |    11     |
|   9  |    31   |   31    |    56  |   5.6M  |    3      |     10      |    12     |
|  10  |    34   |   34    |    60  |     9M  |    5      |     12      |    14     |
|  11  |    37   |   37    |    64  |    14M  |    6      |     13      |    15     |
|  12  |    40   |   40    |    68  |    18M  |   13      |     14      |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>7 ~ 11 级弓箭手的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级弓箭手的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 12 级弓箭手。</TimelineRow>
        <TimelineRow>7 ~ 11 级弓箭手的升级时间减少。</TimelineRow>
        <TimelineRow>10 级弓箭手的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 级弓箭手的升级时间减少。</TimelineRow>
        <TimelineRow>9 级弓箭手的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级弓箭手。</TimelineRow>
        <TimelineRow>7 ~ 10 级弓箭手的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 9 级弓箭手的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 9 级弓箭手的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本新增 10 级弓箭手。</TimelineRow>
        <TimelineRow>1 ~ 2 级弓箭手的训练费用：50/80 圣水→ 30/60 圣水</TimelineRow>
        <TimelineRow>2 ~ 9 级的弓箭手的升级费用降低。</TimelineRow>
        <TimelineRow>4 ~ 8 级弓箭手的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>12 本新增 9 级弓箭手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 ~ 8 级弓箭手的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 5 ~ 8 级弓箭手的升级时间下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>