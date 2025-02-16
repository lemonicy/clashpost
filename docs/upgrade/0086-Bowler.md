---
title: "部落冲突 coc 巨石投手（蓝胖）升级数据"
navTitle: "巨石投手"
shownTitle: "巨石投手（蓝胖）"
description: "这个蓝皮大个子一辈子只做两件简单的事：狂饮暗黑重油和扔石头。他扔出的巨石击中第一个目标后仍会向前弹跳，可以继续对撞到的目标造成伤害。"
module: upgrade-home
imgFolder: home_tech/0086
wiki: https://clashofclans.fandom.com/wiki/Bowler
canonical: /upgrade/0086-Bowler
---

- *如想查看该兵种的强化版本，请访问：[超级巨石投手](/upgrade/060c-Super-Bowler)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bowler_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Bowler1.png" />
        <UnitImg imgTitle="3 级" imgSrc="Bowler3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Bowler4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Bowler5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Bowler6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Bowler7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Bowler8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Bowler9.png" imgHd="Bowler9_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="6" />
    <UnitProperty pKey="移动速度" pValue="1.75 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.2 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 1.2 秒" />
    <UnitProperty pKey="攻击距离" pValue="3 格<sup>*</sup>" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
    <UnitProperty pKey="训练时间" pValue="50" trainingSystem="2022" />
</UnitProperties>

\* 巨石投手扔出去的石头落地后还能再次弹起来，对建筑造成二次伤害。石头的第一个落地距离蓝胖 3 格，第二个落点距离蓝胖 7 格。巨石投手只能看到第一个目标，二次范围伤害是顺带的，巨石投手并不知道石头会溅到哪儿。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ----  |  ----  |    ----   |    ----     |   ----    |
|   1  |     60   |  132    |   325  |     \  |     \     |      1      |    10     |
|   2  |     72   |  158.4  |   375  | 32.5K  |     2     |      8      |    10     |
|   3  |     84   |  184.8  |   420  |   44K  |     3     |      9      |    11     |
|   4  |     96   |  211.2  |   470  | 62.5K  |     4     |     10      |    12     |
|   5  |    102   |  224.4  |   505  |   85K  |     5     |     11      |    13     |
|   6  |    108   |  237.6  |   530  |  110K  |     8     |     12      |    14     |
|   7  |    114   |  250.8  |   565  |  145K  |     9     |     13      |    15     |
|   8  |    126   |  277.2  |   600  |  175K  |    12     |     14      |    16     |
|   9  |    136   |  299.2  |   650  |  280K  |    15     |     15      |    17     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 本新增 9 级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>巨石投手的训练时间由 1:00 改为 0:50</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 8 级巨石投手的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 7 级巨石投手的升级时间减少。</TimelineRow>
        <TimelineRow>6 ~ 7 级巨石投手的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>2 ~ 6 级巨石投手的每秒伤害提升。</TimelineRow>
        <TimelineRow>2 ~ 7 级巨石投手的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 8 级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 7 级巨石投手的升级时间减少。</TimelineRow>
        <TimelineRow>6 级巨石投手的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 7 级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 6 级巨石投手的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>1 ~ 5 级巨石投手的生命值增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级巨石投手的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14 本新增 6 级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 3 级巨石投手的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 3 级巨石投手的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，新增 5 级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>3 级巨石投手的升级费用和升级时间减少。</TimelineRow>
        <TimelineRow>所有等级巨石投手的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>