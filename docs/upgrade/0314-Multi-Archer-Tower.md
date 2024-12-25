---
title: "部落冲突 coc 多人箭塔升级数据"
navTitle: "多人箭塔"
shownTitle: "多人箭塔"
description: "这些弓箭手联手出击，可以更迅速、更凶猛地消灭来犯之敌。团结就是力量！"
module: upgrade-home
imgFolder: home_buildings/0314
wiki: https://clashofclans.fandom.com/wiki/Multi-Archer_Tower
canonical: /upgrade/0314-Multi-Archer-Tower
---

- *如想查看普通的箭塔，请访问 [箭塔](/upgrade/0302-Archer-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Multi-Archer_Tower3.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="建造中" imgSrc="Multi-Archer_Tower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Multi-Archer_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Multi-Archer_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Multi-Archer_Tower3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="     0,  2,  3" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 多人箭塔不能直接建造，必须由两个 [箭塔](/upgrade/0302-Archer-Tower) 合并而成，两座用来合并的建筑必须已达到最高等级。
2. 合并建筑的操作是永久性的，一旦合并就无法拆开。
3. 多人箭塔能瞄准 3 个不同的敌人，确保弓箭手会分开伤害。当前目标不足 3 个，则多人箭塔会集中攻击可攻击的目标。
   - 举例来说：如果只有 1 个目标，该目标会被 3 个弓箭手同时攻击；如果是 2 个目标，则其中一个目标会被 2 个弓箭手同时攻击（伤害也是双倍），则另一个目标只会被 1 个弓箭手攻击。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="同时攻击多个目标 (1 ~ 3 个)" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.5 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |每个弓箭手的<br>每秒伤害|每个弓箭手的<br>每次伤害| 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |          ---         |          ---         |   ---  |   ---   |   ----  |        ---         |      ----      |
|   1  |          120         |           60         |  5000  |   16M   |  12     |                    |       16       |
|   2  |          130         |           65         |  5200  |   18M   |  13     |                    |       16       |
|   3  |          140         |           70         |  5400  |   23M   |  15,12  |                    |       17       |
|  ⚡1  |          145         |         72.5         |  5400  | 11.5M   |   5,12  |                    |       17        |
|  ⚡2  |          145         |         72.5         |  5500  |    8M   |   6,12  |                    |       17        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 3 级多人箭塔。</TimelineRow>
        <TimelineRow>17 本新解锁一个多人箭塔。</TimelineRow>
        <TimelineRow>1 ~ 2 级多人箭塔的升级费用和时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/03/26">
        <TimelineRow>所有等级多人箭塔的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增建筑：多人箭塔，共设两个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
