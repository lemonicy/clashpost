---
title: "部落冲突 coc 蔓生法术升级数据"
navTitle: "蔓生法术"
shownTitle: "蔓生法术"
description: "将附近的建筑困在坚固的根蔓中，阻止防御建筑攻击。部队会无视被困建筑。"
module: upgrade-home
imgFolder: home_tech/0185
wiki: https://clashofclans.fandom.com/wiki/Overgrowth_Spell
canonical: /upgrade/0185-Overgrowth-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Overgrowth_Spell.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 蔓生法术会暂时让防御建筑无法攻击。
2. 部队会无视被藤蔓缠住的建筑。
   - 如果法术正好部署到部队的目标身上，则部队会重新选择目标。
3. 被藤蔓缠住的建筑是无敌的。
   - 被藤蔓缠住的建筑免疫各种法术伤害、范围溅射伤害以及 [雷霆泰坦](/upgrade/000f-Electro-Titan) 的光环伤害，因此它和 [女王](/upgrade/0201-Archer-Queen) 的 [隐形药水瓶](/upgrade/0741-Invisibility-Vial) 装备不一样，是真正的无敌。
   - 它不能直接成为部队的目标，但可以被 [雷电飞龙](/upgrade/000c-Electro-Dragon) 和 [超级法师](/upgrade/0609-Super-Wizard) 的闪电链击中。即使被击中，这些建筑也不会受到任何伤害。
4. 蔓生法术对 [城墙](/upgrade/0300-Walls)、陷阱、防守方的部队、英雄（防守状态的 [大守护者](/upgrade/0202-Grand-Warden) 除外）、[建筑工人](/upgrade/0500-Builders-Hut)
   和 [部落城堡](/upgrade/0407-Clan-Castle) 无效。在蔓生法术生效期间，这些建筑仍然会保留其原始功能。
   - 被藤蔓缠住的城墙不具有无敌效果，仍然可以受到伤害。
   - 藤蔓不能缠住建筑工人，但建筑工人无法修复被藤蔓缠住的建筑。
   - 如果部落城堡被藤蔓缠住，援军依然可以从城堡里出来。
5. 藤蔓会卡住 [攻城战车](/upgrade/0240-Wall-Wrecker) 和 [攻城滚木车](/upgrade/0244-Log-Launcher) 这种路线固定的地面攻城机器。
6. 使用法术后，防守方的阵地中会留下植物和藤蔓碎片，防守方点击之后可以清除，每个碎片等于 1 圣水，类似于墓碑。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="6 格" />
    <UnitProperty pKey="作用类型" pValue="在范围内生成藤蔓" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="法术配置时间" pValue="360" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |法术<br>持续时间| 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |      ---      |   ---   |  ----   |       ----      |      ----     |
|   1  |     22 秒     |    \    |    \    |         1       |       12      |
|   2  |     23 秒     |  62.5K  |    7    |        10       |       12      |
|   3  |     24 秒     |   125K  |   12    |        12       |       14      |
|   4  |     25 秒     |   175K  |   13    |        14       |       16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2、4 级蔓生法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 4 级蔓生法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>2 - 4 级蔓生法术的持续时间减少。</TimelineRow>
        <TimelineRow>蔓生法术的作用半径减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>新法术：蔓生法术，12 本可解锁，共推出 4 个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>