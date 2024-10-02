---
title: "部落冲突 coc 隐形法术（隐身法术）升级数据"
navTitle: "隐形法术"
shownTitle: "隐形法术（隐身法术）"
description: "隐形法术可以让范围内的一切隐形且无法被锁定，城墙和攻城机器除外。"
module: upgrade-home
imgFolder: home_tech/0106
wiki: https://clashofclans.fandom.com/wiki/Invisibility_Spell
canonical: /upgrade/0106-Invisibility-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Invisibility_Spell.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 隐形法术的判定方式同 [冰冻法术](/upgrade/0104-Freeze-Spell)，需要覆盖建筑中心点才能起作用，参见：[【隐形法术作用原理】你想要知道的关于法术的一切全在这里](/p/1864)。
2. 即使部队或建筑被隐形法术覆盖，[雷霆泰坦](/upgrade/000f-Electro-Titan) 仍然可以对其造成伤害。
3. 隐形法术对敌我双方目标均有效，但 [城墙](/upgrade/0300-Walls) 和攻城机器例外。法术覆盖范围内我方看不到敌方，敌方也看不到我方，但是我方自己可以看到自己，比如说隐形的天使能看到自家的隐形女王。
4. 你可以利用隐形法术敌我不分的特性引导部队攻击其他目标，也可以让法术范围内的部队输出。
5. 隐形不等于无敌，仅仅是不被锁定，这一点和 [女王](/upgrade/0201-Archer-Queen) 的 [隐形药水瓶](/upgrade/0741-Invisibility-Vial) 装备类似。被隐形法术覆盖的部队无法避免被已经打出去的子弹打中，也无法免疫溅射伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="4 格" />
    <UnitProperty pKey="作用类型" pValue="将部队和建筑隐形" />
    <UnitProperty pKey="作用目标" pValue="敌我双方的部队和建筑" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需法术工厂等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="11" />
    <UnitProperty pKey="法术配置时间" pValue="180" :isTrainingTime="true" />
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

| 等级 | 法术持续时间 | 升级花费 |  升级时间  | 所需实验室等级 | 所需大本等级 |
| ---- |     ----    |   ----  |    ----   |      ----     |     ----    |
|   1  |   3.75 秒   |     \   |     \     |        1      |      11     |
|   2  |      4 秒   |   5.6M  |     5,12  |        9      |      11     |
|   3  |   4.25 秒   |   7.5M  |     6     |       10      |      12     |
|   4  |    4.5 秒   |     9M  |     9,12  |       11      |      13     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 级隐形法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>3 ~ 4 级隐形法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级隐形法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 级隐形法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>现在被部署到隐形法术范围内的部队会立即隐形，不会再出现防御建筑有时可以在这些部队隐形之前进行锁定的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>11 本新增 6 级法术工厂，新法术：隐形法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>