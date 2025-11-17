---
title: "部落冲突 coc 跳弹加农炮（弹跳加农炮）升级数据"
navTitle: "跳弹加农炮"
shownTitle: "跳弹加农炮（弹跳加农炮）"
description: "建筑工人凭借他的奇妙想法发明了一种威力巨大的炮弹，这种炮弹会弹射击中第二个目标。"
module: upgrade-home
imgFolder: home_buildings/0313
wiki: https://clashofclans.fandom.com/wiki/Ricochet_Cannon
canonical: /upgrade/0313-Ricochet-Cannon
---

- *如想查看普通的加农炮，请访问 [加农炮](/upgrade/0301-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ricochet_Cannon3.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="建造中" imgSrc="Ricochet_Cannon_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Ricochet_Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Ricochet_Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Ricochet_Cannon3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 15, 16, 17" />
    <BuildingNumRow title="建筑数量" num="     0,  2,  3" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 跳弹加农炮不能直接建造，必须由两个 [加农炮](/upgrade/0301-Cannon) 合并而成，两座用来合并的建筑必须已达到最高等级。
2. 合并建筑的操作是永久性的，一旦合并就无法拆开。
3. 如果在距离第一个目标 4 格范围内存在其他敌方单位，则炮弹将会弹射到第二个目标并造成伤害。
4. 第二个目标受到的伤害与第一个目标相同。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="0.8 秒/次" />
    <UnitProperty pKey="最远弹射距离" pValue="4 格" />
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

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |   ----  |        ---          |      ----      |
|   1  |   360   |  288    |  5400  |    12M  |   7     |                     |       16       |
|   2  |   390   |  312    |  5700  |    13M  |   8     |                     |       16       |
|   3  |   405   |  324    |  6000  |  17.5M  |  10,18  |                     |       17       |
| ⚡1  |   413   |  330.4  |  6000  |  11.5M  |   5,12  |                     |       17       |
| ⚡2  |   413   |  330.4  |  6150  |     8M  |   6,12  |                     |       17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>3 级跳弹加农炮的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>1 ~ 2 级跳弹加农炮的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 2 级跳弹加农炮的升级费用和时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 3 级跳弹加农炮。</TimelineRow>
        <TimelineRow>17 本新解锁一个跳弹加农炮。</TimelineRow>
        <TimelineRow>1 ~ 2 级跳弹加农炮的升级费用和时间减少。</TimelineRow>
        <TimelineRow>跳弹加农炮成为第二批可以充能的建筑。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增建筑：跳弹加农炮，共设两个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>