---
title: "部落冲突 coc 都城冰霜法术（霜冻法术）升级数据"
navTitle: "冰霜法术"
shownTitle: "冰霜法术（霜冻法术）"
description: "战斗再激烈也要保持冷静！冰霜法术可以减缓敌方防御设施和部队的速度，也可以冻结水面，让部队从冰面上通行。"
module: upgrade-capital
imgFolder: capital_tech/2103
wiki: https://clashofclans.fandom.com/wiki/Frost_Spell
canonical: /upgrade/2103-Frost-Spell
---

- *如想查看家乡的冰冻法术，请访问：[冰冻法术](/upgrade/0104-Freeze-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Frost_Spell_info.png" :imgAlt="$frontmatter.navTitle"
    description="战斗再激烈也要保持冷静！<br>冰霜法术可以减缓敌方防御设施和部队的速度，也可以冻结水面，让部队从冰面上通行。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 当部落解锁冰霜法术工厂时，系统会自动建造 [冰霜法术工厂](/upgrade/2383-Frost-Spell-Factory)，而这需要建筑工人共坊这个子城的大本营升到 3 级
2. 任何陷入冰霜法术影响范围内的防御建筑或防御部队都会被减速，使其移动和攻击速度降低 50%.
3. 任何受到冰霜法术影响的水域都会被冻结，地面部队可以在水面上移动和部署，可以暂时扩大部署区域。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用方式" pValue="冰冻防御和水体" />
    <UnitProperty pKey="有效时间" pValue="两次进攻" />
    <UnitProperty pKey="占用的法术空间" pValue="3" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 作用半径 |
| ---- |   ----  |
|   1  |  4.2 格 |
|   2  |  4.4 格 |
|   3  |  4.6 格 |
|   4  |  4.8 格 |
|   5  |  5.0 格 |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>占用的法术空间从 4 减少到 3.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>冰霜法术随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>