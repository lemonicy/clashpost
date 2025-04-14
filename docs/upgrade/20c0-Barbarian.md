---
title: "部落冲突 coc 都城野蛮人升级数据"
navTitle: "野蛮人"
shownTitle: "野蛮人"
description: "这些无畏的勇士长着引人注目的胡子，凭借一身壮硕的肌肉在敌人的村庄肆虐。训练一队野蛮人，他们将为您出生入死！"
module: upgrade-capital
imgFolder: capital_tech/20c0
wiki: https://clashofclans.fandom.com/wiki/Barbarian/Clan_Capital
canonical: /upgrade/20c0-Barbarian
---

- *如想查看家乡的野蛮人，请访问：[野蛮人](/upgrade/0000-Barbarian)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barbarian_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Barbarian1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 都城野蛮人是 [野蛮人攻城槌](/upgrade/2003-Battle-Ram) 和 [突袭炮车](/upgrade/2009-Raid-Cart) 的派生兵种，不能单独部署。
2. 都城的野蛮人属性相同。

<SmallTitle>突袭炮车的属性</SmallTitle>


<SmallTitle>野蛮人的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="防守人口" pValue="1.25" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.3 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |   ----  |  ----  |
|   1  |    25   |    25   |   150  |
|   2  |    30   |    30   |   175  |
|   3  |    35   |    35   |   200  |
|   4  |    40   |    40   |   225  |
|   5  |    45   |    45   |   250  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/12/12">
        <TimelineRow>本次更新后，兵种拥有了防守人口属性。每个都城野蛮人占 1.25 人口。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>