---
title: "部落冲突 coc 都城弹跳法术升级数据"
navTitle: "弹跳法术"
shownTitle: "弹跳法术"
description: "城墙或水域挡了部队的去路？在敌军城墙或水域位置施放该法术，就可以创建通道，方便您的大军一跃而过，保证畅通无阻！"
module: upgrade-capital
imgFolder: capital_tech/2101
wiki: https://clashofclans.fandom.com/wiki/Jump_Spell/Clan_Capital
canonical: /upgrade/2101-Jump-Spell
---

- *如想查看家乡的弹跳法术，请访问：[弹跳法术](/upgrade/0103-Jump-Spell)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Jump_Spell_info.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 当部落解锁弹跳法术工厂时，系统会自动建造 [弹跳法术工厂](/upgrade/2381-Jump-Spell-Factory)，而这需要法师山谷这个子城的大本营升到 2 级。
2. 弹跳法术不仅可以让部队跳过城墙，也可以让部队跳过河流，但无法让地面部队翻越悬崖。
3. 超过 100 人口的兵种（如高山戈仑）无法通过弹跳法术获得跳墙能力，但高山戈仑可以直接推倒城墙，还可以越过 2 格以内的河流，也就不需要弹跳了。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用方式" pValue="范围内脉冲赋能" />
    <UnitProperty pKey="兵种的最大人口数" pValue="100" />
    <UnitProperty pKey="有效时间" pValue="两次进攻" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 作用半径 |
| ---- |   ----  |
|   1  |  3.2 格 |
|   2  |  3.4 格 |
|   3  |  3.6 格 |
|   4  |  3.8 格 |
|   5  |  4.0 格 |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>占用的法术空间从 2 减少到 1.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>弹跳法术随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>