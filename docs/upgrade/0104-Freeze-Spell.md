---
title: "部落冲突 coc 冰冻法术升级数据"
navTitle: "冰冻法术"
shownTitle: "冰冻法术"
description: "当战斗进入白热化，我们更要保持冷静！冰冻法术能发出一道低温冲击波，可以暂时冻结有效范围内的敌军部队和防御性建筑。"
module: upgrade-home
imgFolder: home_tech/0104
wiki: https://clashofclans.fandom.com/wiki/Freeze_Spell
canonical: /upgrade/0104-Freeze-Spell
---

- *如想查看都城的冰霜法术，请访问：[都城冰霜法术](/upgrade/2103-Frost-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Freeze_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="当战斗进入白热化，我们更要保持冷静！<br>冰冻法术能发出一道低温冲击波，可以暂时冻结有效范围内的敌军部队和防御性建筑。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 冰冻法术对敌方英雄有效。
2. 冰冻法术可以停止敌军或建筑的一切行为。对于建筑来说，需要覆盖建筑中心点才能冰冻。该结论非官方，是根据多次测试推断的，参见：[女王的射程快速算法和冰冻的极致放置（多图预警）](/p/598)。
3. [戈仑冰人](/upgrade/0087-Ice-Golem)、[寒冰猎犬](/upgrade/060a-Ice-Hound) 等单位与冰冻法术不同，不能把敌方单位完全冻住，只是有个减速效果。
4. 冰冻法术的作用是冻结敌方单位，停止敌方的移动和攻击，而 [冰障法术](/upgrade/0186-Ice-Block-Spell) 的作用是冻结我方部队，让我方部队获得减伤效果。两者的作用不同，不要混淆。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="停止敌方的移动和攻击" />
    <UnitProperty pKey="作用目标" pValue="所有敌方目标" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需法术工厂等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,9000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  冰冻时间 | 升级花费| 升级时间 | 所需实验室等级 |所需大本等级|
| ---- |   ----   |  ----  |  ----   |      ----     |   ----    |
|   1  |  2.5 秒  |    \   |   \     |        7      |     9     |
|   2  |    3 秒  |  1.2M  |   1     |        7      |     9     |
|   3  |  3.5 秒  |  1.7M  |   1,12  |        8      |    10     |
|   4  |    4 秒  |    3M  |   2     |        8      |    10     |
|   5  |  4.5 秒  |  4.2M  |   2,12  |        8      |    10     |
|   6  |    5 秒  |    6M  |   3,12  |        9      |    11     |
|   7  |  5.5 秒  |    7M  |   5     |       10      |    12     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 7 级冰冻法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>3 ~ 7 级冰冻法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 7 级冰冻法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>7 级冰冻法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>3 ~ 7 级冰冻法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 5 级冰冻法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4 级冰冻法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4、6 级冰冻法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级冰冻法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>5 级冰冻法术的升级费用降低。</TimelineRow>
        <TimelineRow>9 本即可将冰冻法术升至 2 级。（之前 10 本才可以）</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中所有等级冰冻法术的配置费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>