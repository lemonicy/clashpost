---
title: "部落冲突 coc 隐秘弓箭手升级数据"
navTitle: "隐秘弓箭手"
shownTitle: "隐秘弓箭手"
description: "打击重要目标的任务就交给这队隐秘弓箭手吧，绝对靠谱。前提是她们不暴露自己，就是这样。"
module: upgrade-capital
imgFolder: capital_tech/2001
wiki: https://clashofclans.fandom.com/wiki/Sneaky_Archer/Clan_Capital
canonical: /upgrade/2001-Sneaky-Archer
---

- *如想查看家乡的隐秘弓箭手，请访问：[夜世界隐秘弓箭手](/upgrade/1001-Sneaky-Archer)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sneaky_Archer_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Sneaky_Archer1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 当部落解锁野蛮人兵营时，系统会自动建造 [隐秘弓箭手训练营](/upgrade/2341-Sneaky-Archer-Barracks)，也就是说隐秘弓箭手在 [都城大本营](/upgrade/2400-Capital-Hall) 达到 2 级后可解锁。
2. 在都城中，隐秘弓箭手只能以 5 个一组的形式部署。
3. 隐秘弓箭手的技能（隐形披风）：在部署 5 秒内隐身，不能被防御建筑锁定。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="每组兵的配兵人口" pValue="10" />
    <UnitProperty pKey="每组兵的部队数量" pValue="5" />
    <UnitProperty pKey="每个兵的防守人口" pValue="2" />
    <UnitProperty pKey="移动速度" pValue="1.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.75 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |    60   |    60   |   100  |
|   2  |    64   |    64   |   120  |
|   3  |    68   |    68   |   140  |
|   4  |    71   |    71   |   160  |
|   5  |    74   |    74   |   180  |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>4 ~ 5 级隐秘弓箭手的每秒伤害由 72/16 减少到 71/74.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>隐秘弓箭手随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>