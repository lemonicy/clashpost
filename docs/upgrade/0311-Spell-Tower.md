---
title: "部落冲突 coc 法术塔升级数据"
navTitle: "法术塔"
shownTitle: "法术塔"
description: "多年来，法师在战场上只有火球这一种魔法，一次还只能扔一颗。现在，他们发明了一种全自动的魔法利器，可以使用不同魔法扰乱敌人的进攻！"
module: upgrade-home
imgFolder: home_buildings/0311
wiki: https://clashofclans.fandom.com/wiki/Spell_Tower
canonical: /upgrade/0311-Spell-Tower
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">狂暴法术塔</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">毒药法术塔</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">隐形法术塔</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 狂暴法术塔 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spell_Tower3_Rage.png" imgAlt="狂暴法术塔"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="狂暴法术塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Spell_Tower1_Rage.png" />
        <UnitImg imgTitle="2 级" imgSrc="Spell_Tower2_Rage.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spell_Tower3_Rage.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的法术塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 14, 15 - 18" />
    <BuildingNumRow title="建筑数量" num="     0,       2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 法术塔的机制：法术塔升级后可以施放不同的法术，你可以在部署阵型时选择法术塔要释放的法术。
2. 法术塔被摧毁后会自动释放一次法术，也就是说法术塔至少会发挥一次作用。
3. 法术塔的触发机制见：[揭秘——法术塔触发机制](/p/5552)。

<SmallTitle>狂暴法术塔的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="法术作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="9 格" />
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="为防守方的防御和部队提供加成" />
    <UnitProperty pKey="释放方式" pValue="原地释放" />
    <UnitProperty pKey="法术持续时间" pValue="18 秒" />
    <UnitProperty pKey="伤害提升" pValue="60%" />
    <UnitProperty pKey="重新装填时间" pValue="70 秒" />
</UnitProperties>
</SwitchTabGroup>

<!-- ↓↓↓ 毒药法术塔 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spell_Tower3_Poison.png" imgAlt="毒药法术塔"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="毒药法术塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="2 级" imgSrc="Spell_Tower2_Poison.png" />
        <UnitImg imgTitle="3 级" imgSrc="Spell_Tower3_Poison.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的法术塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 14, 15 - 17" />
    <BuildingNumRow title="建筑数量" num="     0,       2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 法术塔的机制：法术塔升级后可以施放不同的法术，你可以在部署阵型时选择法术塔要释放的法术。
2. 法术塔被摧毁后会自动释放一次法术，也就是说法术塔至少会发挥一次作用。
3. 法术塔的触发机制见：[揭秘——法术塔触发机制](/p/5552)。

<SmallTitle>毒药法术塔的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="法术作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="9 格" />
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="对附近的敌人释放毒药法术" />
    <UnitProperty pKey="释放方式" pValue="扔到目标身上" />
    <UnitProperty pKey="毒药最高秒伤" pValue="60<sup>*</sup>" />
    <UnitProperty pKey="法术持续时间" pValue="12 秒" />
    <UnitProperty pKey="移动速度降低" pValue="35%" />
    <UnitProperty pKey="攻击速度降低" pValue="25%" />
    <UnitProperty pKey="重新装填时间" pValue="70 秒" />
</UnitProperties>

\* 毒药法术塔的毒药效果对英雄只有 20% 伤害，但减速效果是全额的。
</SwitchTabGroup>

<!-- ↓↓↓ 隐形法术塔 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spell_Tower3_Invisibility.png" imgAlt="隐形法术塔"
    :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="隐形法术塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="3 级" imgSrc="Spell_Tower3_Invisibility.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的法术塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 14, 15 - 17" />
    <BuildingNumRow title="建筑数量" num="     0,       2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 法术塔的机制：法术塔升级后可以施放不同的法术，你可以在部署阵型时选择法术塔要释放的法术。
2. 法术塔被摧毁后会自动释放一次法术，也就是说法术塔至少会发挥一次作用。
3. 法术塔的触发机制见：[揭秘——法术塔触发机制](/p/5552)。

<SmallTitle>隐形法术塔的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="法术作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="4.5 格" />
    <UnitProperty pKey="作用半径" pValue="4.5 格" />
    <UnitProperty pKey="作用类型" pValue="让附近的兵种和建筑暂时隐形<sup>*</sup>" />
    <UnitProperty pKey="释放方式" pValue="原地释放" />
    <UnitProperty pKey="隐形效果持续时间" pValue="4.5 秒" />
    <UnitProperty pKey="重新装填时间" pValue="70 秒" />
</UnitProperties>

\* 法术塔释放的隐形法术和普通的 [隐形法术](/upgrade/0106-Invisibility-Spell) 一样不分敌我，也就是说这个隐形法术会把进攻方和防守方都隐形掉。
</SwitchTabGroup>

<!-- ↓↓↓ 法术塔的公共部分是从升级数据开始的，不是更新历史 ↓↓↓ -->
<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验| 所需<br>大本等级 | 解锁的法术 |
| ---- |   --- |   ---   |   ---    |        ---          |       ---       |    ---    |
|   1  |  2500 |    9M   |   7      |                     |        15       |<a href="/upgrade/0102-Rage-Spell">狂暴法术</a>|
|   2  |  2800 |   11M   |   8      |                     |        15       |<a href="/upgrade/0180-Poison-Spell">毒药法术</a>|
|   3  |  3100 |   12M   |   8,12   |                     |        15       |<a href="/upgrade/0106-Invisibility-Spell">隐形法术</a>|
</UnitTable>

注：法术塔释放的法术与自己主动释放的法术并不完全相同，上述链接只是方便对照，切勿生搬硬套。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>3 级法术塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>1 ~ 3 级法术塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>1 ~ 3 级法术塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>1 ~ 3 级法术塔的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3 级法术塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>狂暴法术塔的法术范围从 6 格减少至 5 格。</TimelineRow>
        <TimelineRow>狂暴法术塔的提高伤害从 +90% 减少至 +60%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>狂暴法术塔的重新填充时间增加 20 秒。</TimelineRow>
        <TimelineRow>毒药法术塔和隐形法术塔的重新填充时间增加 10 秒。</TimelineRow>
        <TimelineRow>狂暴法术塔的狂暴效果由 +100% 调整为 +90%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>毒药法术塔 “降低攻击速度” 的效果由 -35% 调整为 -25%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增建筑：法术塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>