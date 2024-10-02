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
   - 当多个治疗单位（包括天使、[独角](/upgrade/0283-Unicorn) 和人类形态下的德鲁伊）治疗同一目标时，治疗量会打折扣，详见网站的 [天使](/upgrade/0007-Healer) 页面。
   - 在人类形态下，德鲁伊不能反击。在没有治疗目标时，即使受到伤害也会保持静止。
4. 在巨熊形态下，德鲁伊是一种优先攻击防御建筑的兵种。
5. 人类形态下的德鲁伊可以跳墙，巨熊形态则不能跳墙。

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
    <UnitProperty pKey="训练时间" pValue="150" :isTrainingTime="true" />
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
|   2  |     70    |     70    |  1400 |   250K  |     12    |        12       |       14      |
|   3  |     75    |     75    |  1500 |   350K  |     14    |        13       |       15      |
|   4  |     80    |     80    |  1600 |   375K  |     16    |        14       |       16      |
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
   - 当多个治疗单位（包括天使、[独角](/upgrade/0283-Unicorn) 和人类形态下的德鲁伊）治疗同一目标时，治疗量会打折扣，详见网站的 [天使](/upgrade/0007-Healer) 页面。
   - 在人类形态下，德鲁伊不能反击。在没有治疗目标时，即使受到伤害也会保持静止。
4. 在巨熊形态下，德鲁伊是一种优先攻击防御建筑的兵种。
5. 人类形态下的德鲁伊可以跳墙，巨熊形态则不能跳墙。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="攻击类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="16" />
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
    <TimelineItem date="2024/10/02">
        <TimelineRow>德鲁伊在人类形态下的每秒治疗量减少（-42%）。</TimelineRow>
        <TimelineRow>德鲁伊在人类形态下最多可存活的时间减少（30 秒 → 25 秒）。</TimelineRow>
        <TimelineRow>德鲁伊在巨熊形态下的伤害降低（-50%）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>德鲁伊的最多可治疗的目标数量由 4 个减少到 3 个。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>14 本可解锁新兵种：德鲁伊。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>