---
title: "部落冲突 coc 德鲁伊升级数据"
navTitle: "德鲁伊"
shownTitle: "德鲁伊"
description: "德鲁伊的情绪复杂多变，上一秒他还在冷静地治疗友军，下一秒就变成了一只愤怒无比的巨熊。"
module: upgrade-home
imgFolder: home_tech/008a
wiki: https://clashofclans.fandom.com/wiki/Druid
canonical: /upgrade/008a-Druid
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">人类形态</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">巨熊形态</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 人类形态 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Druid_info.png" imgAlt="德鲁伊（人类形态）"
    description="德鲁伊的情绪复杂多变，上一秒他还在冷静地治疗友军，下一秒就变成了一只愤怒无比的巨熊。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Druid1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Druid3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 德鲁伊有两种形态：可以治疗友军的人类形态以及可以进攻的巨熊形态。
2. 在德鲁伊被部署后的前 25 秒，他处于人类形态，当 25 秒时间耗尽或生命值归零时，他会变身为巨熊形态。
   - 如果德鲁伊被 [隐形弹簧](/upgrade/0381-Spring-Trap) 弹走，他将无法变身。
3. 在人类形态下，德鲁伊的治疗效果可以最多弹射到 4 个目标（含第一个治疗目标）身上。
   - 德鲁伊的治疗效果无法弹射到攻城机器身上（攻城机器免疫所有治疗效果）。
   - 德鲁伊可以同时治疗地面和空中部队，而天使只能治疗地面部队。
   - 与天使和 [疗伤法术](/upgrade/0101-Healing-Spell) 不同的是，德鲁伊对英雄的治疗量没有衰减。
   - 当多个治疗单位治疗同一目标时，治疗量会衰减，详见这篇文章：[论多个治疗单位治疗同一目标时的衰减效应](/p/6925)。
   - 在人类形态下，德鲁伊不能反击。在没有治疗目标时，即使受到伤害也会保持静止。
4. 在巨熊形态下，德鲁伊是一种优先攻击防御建筑的兵种。
5. 人类形态下的德鲁伊可以跳墙，巨熊形态下则不能。
6. 两种形态的德鲁伊占用的人口数不一样，人类形态为 16 人口，巨熊形态为 10 人口。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="治疗偏好" pValue="无" />
    <UnitProperty pKey="治疗类型" pValue="链式治疗" />
    <UnitProperty pKey="目标数量上限" pValue="3" />
    <UnitProperty pKey="治疗的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="16" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="治疗速度" pValue="1 秒/次" />
    <UnitProperty pKey="治疗距离" pValue="5 格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="11" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="8,8,360,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒治疗量 | 每次治疗量 | 生命值 | 升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
|  --- |    ---    |    ---    |  ---- |  ----   |    ----   |       ----      |      ----     |
|   1  |     65    |     65    |  1300 |    \    |      \    |         1       |       14      |
|   2  |     70    |     70    |  1400 |   125K  |      9    |        12       |       14      |
|   3  |     75    |     75    |  1500 |   175K  |     12    |        13       |       15      |
|   4  |     80    |     80    |  1600 | 187.5K  |     13    |        14       |       16      |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 巨熊形态 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bear_info.png" imgAlt="德鲁伊（巨熊形态）"
    description="德鲁伊变身成愤怒的熊灵之后，拥有较高的生命值，会冲向防御建筑并摧毁它们！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Bear1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Bear3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 德鲁伊有两种形态：可以治疗友军的人类形态以及可以进攻的巨熊形态。
2. 在德鲁伊被部署后的前 25 秒，他处于人类形态，当 25 秒时间耗尽或生命值归零时，他会变身为巨熊形态。
   - 如果德鲁伊被 [隐形弹簧](/upgrade/0381-Spring-Trap) 弹走，他将无法变身。
3. 在人类形态下，德鲁伊的治疗效果可以最多弹射到 4 个目标（含第一个治疗目标）身上。
   - 德鲁伊的治疗效果无法弹射到攻城机器身上（攻城机器免疫所有治疗效果）。
   - 德鲁伊可以同时治疗地面和空中部队，而天使只能治疗地面部队。
   - 与天使和 [疗伤法术](/upgrade/0101-Healing-Spell) 不同的是，德鲁伊对英雄的治疗量没有衰减。
   - 当多个治疗单位治疗同一目标时，治疗量会衰减，详见这篇文章：[论多个治疗单位治疗同一目标时的衰减效应](/p/6925)。
   - 在人类形态下，德鲁伊不能反击。在没有治疗目标时，即使受到伤害也会保持静止。
4. 在巨熊形态下，德鲁伊是一种优先攻击防御建筑的兵种。
5. 人类形态下的德鲁伊可以跳墙，巨熊形态下则不能。
6. 两种形态的德鲁伊占用的人口数不一样，人类形态为 16 人口，巨熊形态为 10 人口。


<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="攻击类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
|  --- |   ---   |   ---   |  ----  |
|   1  |   150   |   150   |  1900  |
|   2  |   160   |   160   |  2000  |
|   3  |   170   |   170   |  2100  |
|   4  |   180   |   180   |  2200  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 4 级德鲁伊的升级时间减少。</TimelineRow>
        <TimelineRow>德鲁伊在巨熊形态下占用的人口数由 16 调整为 10.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>德鲁伊的训练时间由 2:30 改为 2:20</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>4 级德鲁伊的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 4 级德鲁伊的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/10/02">
        <TimelineRow>德鲁伊在人类形态下的每秒治疗量减少约 42%.</TimelineRow>
        <TimelineRow>德鲁伊在人类形态下最多可存活的时间减少（30 秒 → 25 秒）。</TimelineRow>
        <TimelineRow>德鲁伊在巨熊形态下的伤害降低 50%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>德鲁伊最多可治疗的目标数量由 4 个减少到 3 个。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>14 本可解锁新兵种：德鲁伊。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>