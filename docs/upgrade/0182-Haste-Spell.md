---
title: "部落冲突 coc 急速法术（加速法术）升级数据"
navTitle: "急速法术"
shownTitle: "急速法术（加速法术）"
description: "即使最笨重的兵种也能加点速了！急速法术虽不像狂暴法术能提升伤害，但却可以更好地提升移动速度。它占用空间小，您可以将更多急速法术带到战场之中！"
module: upgrade-home
imgFolder: home_tech/0182
wiki: https://clashofclans.fandom.com/wiki/Haste_Spell
canonical: /upgrade/0182-Haste-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Haste_Spell.png" :imgAlt="$frontmatter.navTitle" 
    description="即使最笨重的兵种也能加点速了！<br>急速法术虽不像狂暴法术能提升伤害，但却可以更好地提升移动速度。它占用空间小，您可以将更多急速法术带到战场之中！"
    :isSmallImg="true" />

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="4 格" />
    <UnitProperty pKey="作用类型" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="作用目标" pValue="我方部队和英雄" />
    <UnitProperty pKey="每次脉冲间隔时间" pValue="0.3 秒" />
    <UnitProperty pKey="脉冲有效时间" pValue="1 秒<sup>*</sup>" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 脉冲有效时间比脉冲间隔时间要长，这意味着部队离开法术范围后，仍然会保持效果 0.7 到 1 秒。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |速度提升<sup>#</sup>| 持续时间 | 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |        ----       |   ---   |    ---   |  ----   |       ----      |      ----     |
|   1  |         28        |  10 秒  |     \    |    \    |         1       |        9      |
|   2  |         34        |  15 秒  |     8K   |    1    |         7       |        9      |
|   3  |         40        |  20 秒  |    17K   |    2    |         8       |       10      |
|   4  |         46        |  25 秒  |    30K   |    3    |         8       |       10      |
|   5  |         52        |  30 秒  |  38.5K   |    4    |         9       |       11      |
|   6  |         56        |  30 秒  |   200K   |    9    |        15       |       17      |
</UnitTable>

\# 表格中每 8 点速度值代表 1 格/秒。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>6 级急速法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2、4 ~ 4 级急速法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 本新增 6 级急速法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>3 ~ 5 级急速法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级急速法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>4 ~ 5 级急速法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 级急速法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>3 ~ 5 级急速法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级急速法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4 级急速法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级急速法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>2 ~ 5 级急速法术的配置费用提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>11 本新增 5 级急速法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>