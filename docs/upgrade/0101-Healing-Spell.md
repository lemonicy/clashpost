---
title: "部落冲突 coc 疗伤法术（治疗）升级数据"
navTitle: "疗伤法术"
shownTitle: "疗伤法术（治疗）"
description: "恢复部队的元气，让他们保持战斗力！施放疗伤法术会产生一个治疗光环，治愈该法术光环之内的部队。"
module: upgrade-home
imgFolder: home_tech/0101
wiki: https://clashofclans.fandom.com/wiki/Healing_Spell
canonical: /upgrade/0101-Healing-Spell
---

- *如想查看都城的疗伤法术，请访问：[都城疗伤法术](/upgrade/2100-Healing-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Healing_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="恢复部队的元气，让他们保持战斗力！<br>施放疗伤法术会产生一个治疗光环，治愈该法术光环之内的部队。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 多个疗伤法术的效果可以叠加。
2. 疗伤法术治疗我方英雄时，其效果会减弱。疗伤法术对攻城机器无效。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="作用目标" pValue="我方部队和英雄" />
    <UnitProperty pKey="治疗次数" pValue="40" />
    <UnitProperty pKey="两次治疗的间隔时间" pValue="0.3 秒<sup>*</sup>" />
    <UnitProperty pKey="法术持续时间" pValue="12 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="法术配置时间" pValue="360" :isTrainingTime="true" />
</UnitProperties>

\* 疗伤法术的治疗方式是每隔 0.3 秒给法术作用范围内兵种增加部分生命值。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |最大总治疗量<br>(部队)<sup>①</sup>|最大总治疗量<br>(英雄)|  升级花费 |  升级时间  |所需实验室<br>等级<sup>②</sup>|所需<br>大本等级|
| ---- |              ----              |         ----        |    ----  |    ----   |             ----            |      ----     |
|   1  |               600              |          330        |      \   |     \     |              2              |       6       |
|   2  |               800              |          440        |     75K  |     0,5   |              2              |       6       |
|   3  |              1000              |          550        |    150K  |     0,10  |              4              |       6       |
|   4  |              1200              |          660        |    300K  |     0,20  |              5              |       7       |
|   5  |              1400              |          770        |    900K  |     1,12  |              6              |       8       |
|   6  |              1600              |          880        |    1.8M  |     3     |              7              |       9       |
|   7  |              1800              |          990        |      3M  |     4     |              8              |      10       |
|   8  |              2000              |         1100        |    8.5M  |     6     |             11              |      13       |
|   9  |              2200              |         1210        |   14.5M  |     9     |             13              |      15       |
|  10  |              2400              |         1320        |     19M  |    15     |             14              |      16       |
</UnitTable>

① 表格中的总治疗量指的是每个兵都可以享受这么多治疗量。<br>
② 如果玩家升级到 6 级大本营并且解锁了疗伤法术，即使玩家没有立即升实验室也可以升级疗伤法术。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>9 级疗伤法术的升级时间减少。</TimelineRow>
        <TimelineRow>9 级疗伤法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增 16 本，并在 16 本新增 10 级疗伤法术。</TimelineRow>
        <TimelineRow>6 ~ 9 级疗伤法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 级疗伤法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 9 级疗伤法术。</TimelineRow>
        <TimelineRow>7 ~ 8 级疗伤法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>3 ~ 7 级疗伤法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 7 级疗伤法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 7 级疗伤法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本新增 8 级疗伤法术。</TimelineRow>
        <TimelineRow>游戏中对部队的治疗量和对英雄的治疗量分别显示在了面板上。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中 5 ~ 6 级疗伤法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>