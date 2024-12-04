---
title: "部落冲突 coc 巨人升级数据"
navTitle: "巨人"
shownTitle: "巨人"
description: "这些大块头看上去沉默寡言，但倘若他们发现箭塔或加农炮，您将见识他们狂躁的一面！巨人行动缓慢，但是抗打击能力强，可用于吸引火力。"
module: upgrade-home
imgFolder: home_tech/0002
wiki: https://clashofclans.fandom.com/wiki/Giant
canonical: /upgrade/0002-Giant
---

- *如想查看该兵种的强化版本，请访问：[超级巨人](/upgrade/0602-Super-Giant)。*
- *如想查看夜世界的巨人拳击手，请访问：[夜世界巨人拳击手](/upgrade/1002-Boxer-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Giant1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Giant3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giant5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Giant6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Giant7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Giant8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Giant9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Giant10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Giant11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Giant12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Giant13.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="2" />
    <UnitProperty pKey="训练时间" pValue="30" :isTrainingTime="true" />
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
|   1  |    11   |    22   |   300  |      \  |       \   |      1      |     1     |
|   2  |    14   |    28   |   360  |    40k  |    0, 4   |      2      |     4     |
|   3  |    19   |    38   |   450  |   150k  |    0, 8   |      4      |     6     |
|   4  |    24   |    48   |   600  |   500k  |    0,12   |      5      |     7     |
|   5  |    31   |    62   |   800  |   1.2M  |    0,16   |      6      |     8     |
|   6  |    43   |    86   |  1100  |     2M  |    1      |      7      |     9     |
|   7  |    55   |   110   |  1300  |     3M  |    1,12   |      8      |    10     |
|   8  |    62   |   124   |  1500  |   3.5M  |    2,12   |      9      |    11     |
|   9  |    70   |   140   |  1850  |     4M  |    3      |     10      |    12     |
|  10  |    78   |   156   |  2000  |     6M  |    4,12   |     11      |    13     |
|  11  |    86   |   172   |  2200  |     9M  |    5,12   |     13      |    15     |
|  12  |    94   |   188   |  2400  |  15.5M  |   10,12   |     14      |    16     |
|  13  |   102   |   204   |  2600  |  18.5M  |   13,12   |     15      |    17     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级巨人。</TimelineRow>
        <TimelineRow>5 ~ 9、11 ~ 12 级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 12 级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>8 ~ 11 级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>11 级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，同时在 16 本新增 12 级巨人。</TimelineRow>
        <TimelineRow>7 ~ 11 级巨人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9 ~ 10 级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 10 级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 11 级巨人。</TimelineRow>
        <TimelineRow>7 ~ 10 级巨人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>7 ~ 10 级巨人的每秒伤害提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 10 级巨人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 9 级巨人的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 7 级巨人的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>1 ~ 4 级巨人的训练费用：250/750/1250/1750 圣水→ 150/300/750/1500 圣水。</TimelineRow>
        <TimelineRow>2 ~ 9 级的巨人的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8 级巨人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本新增 10 级巨人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020-03-30">
        <TimelineRow>5 ~ 9 级巨人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-12-09">
        <TimelineRow>13 本开放，8 到 9 级巨人的生命值从 1480/1660 增加到 1500/1850。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019-04-02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 5 ~ 8 级巨人的升级时间下调。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>