---
title: "部落冲突 coc 地震法术升级数据"
navTitle: "地震法术"
shownTitle: "地震法术"
description: "用强烈的地震摧毁城墙与建筑吧！地震法术造成的伤害受建筑最大生命值影响。对同一建筑重复施放地震法术，造成的伤害将会递减。但是，对同一块城墙重复施放该法术则可以产生更大的伤害。没有任何城墙能抵抗四次地震法术！"
module: upgrade-home
imgFolder: home_tech/0181
wiki: https://clashofclans.fandom.com/wiki/Earthquake_Spell
canonical: /upgrade/0181-Earthquake-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Earthquake_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="用强烈的地震摧毁城墙与建筑吧！<br>地震法术造成的伤害受建筑最大生命值影响。对同一建筑重复施放地震法术，造成的伤害将会递减。但是，对同一块城墙重复施放该法术则可以产生更大的伤害。没有任何城墙能抵抗四次地震法术！"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 地震法术机制：多个地震攻击建筑的伤害递减，对城墙递增，4 瓶地震可以摧毁任何等级的 [城墙](/upgrade/0300-Walls)。
2. 对建筑来说，第 $n$ 瓶地震对建筑效果为 $\displaystyle \frac{k}{2n - 1}$，其中 $k$ 为单瓶伤害。如 5 级地震的伤害为 29%，放第三瓶的时候对建筑造成的伤害为：$\displaystyle \frac{0.29}{2 × 3 - 1}$，即 $5.8\%$.
3. 如果玩家操作得当，地震法术实际震开的范围会大于理论数据，参见[『部落冲突』科普向之地震法术](/p/897)。
4. 地震法术不能对 [储金罐](/upgrade/0404-Gold-Storage)、[圣水瓶](/upgrade/0405-Elixir-Storage) 和 [暗黑重油罐](/upgrade/0406-Dark-Elixir-Storage) 造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="百分比范围伤害" />
    <UnitProperty pKey="作用目标" pValue="敌方建筑和墙" />
    <UnitProperty pKey="法术持续时间" pValue="震 5 次，共持续 2 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

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

| 等级 |       总伤害     | 作用半径 | 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |       ----      |   ---   |   ----  |   ----   |       ----      |      ----     |
|   1  |14.5%<sup>*</sup>|  3.5 格 |     \   |    \     |         1       |        8      |
|   2  |        17%      |  3.8 格 |     6K  |   0,12   |         6       |        8      |
|   3  |        21%      |  4.1 格 |    12K  |   1      |         7       |        9      |
|   4  |        25%      |  4.4 格 |  25.5K  |   3      |         8       |       10      |
|   5  |        29%      |  4.7 格 |    42K  |   3,12   |         9       |       11      |
</UnitTable>

\* 1 级地震的实际伤害是 14.5%，但游戏内显示的是 14%。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级地震法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>5 级地震法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级地震法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级地震法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 3 级地震法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>4 ~ 5 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>11 本新增 5 级地震法术。</TimelineRow>
        <TimelineRow>更新后，地震等级越高，作用范围越大，之前固定为 4 格半径。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>