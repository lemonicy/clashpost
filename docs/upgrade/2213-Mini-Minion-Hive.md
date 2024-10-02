---
title: "部落冲突 coc 都城迷你亡灵巢升级数据"
navTitle: "迷你亡灵巢"
shownTitle: "迷你亡灵巢"
description: "这座防御建筑下面藏着一个地下巢穴，每次打开都会释放一群迷你亡灵，它们誓死捍卫自己的领地且极其凶猛，绝不放过任何来犯敌军。"
module: upgrade-capital
imgFolder: capital_buildings/2213
wiki: https://clashofclans.fandom.com/wiki/Mini-Minion_Hive
canonical: /upgrade/2213-Mini-Minion-Hive
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mini-Minion_Hive4.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Mini-Minion_Hive_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Mini-Minion_Hive1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Mini-Minion_Hive2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Mini-Minion_Hive3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Mini-Minion_Hive4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|   骷髅公园   |   1   |   2   |   2   |   2   |   \   |
|  哥布林矿井  |   0   |   0   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="14 格" />
    <UnitProperty pKey="攻速" pValue="4.26 秒/轮*" />
</UnitProperties>

\* 迷你亡灵巢的攻击节奏是 0.23 秒一发，12 发后休息 1.5 秒。注意：**连发期间迷你亡灵巢不会切换目标，可使用骷髅这种小单位反制。**

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |
|   1  |   209   |   75    |  4400  | 17.5k   |   390   |         1         |
|   2  |   251   |   90    |  4800  |   35k   |   410   |         2         |
|   3  |   293   |   105   |  5200  |   70k   |   430   |         3         |
|   4  |   335   |   120   |  5600  |  113k   |   450   |         4         |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/12/12">
        <TimelineRow>都城新防御：迷你亡灵巢。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>