---
title: "部落冲突 coc 复仇之塔升级数据"
navTitle: "复仇之塔"
shownTitle: "复仇之塔"
description: "如果你摧毁了它的建筑伙伴，复仇之塔就会锁定你、追踪你，然后狠狠惩罚你。随着周围建筑被摧毁，它会变得更强大、更愤怒！"
module: upgrade-home
imgFolder: home_buildings/0319
wiki: https://clashofclans.fandom.com/wiki/Revenge_Tower
canonical: /upgrade/0319-Revenge-Tower
---

<script setup>
const tableExtraInfoDormant = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
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
const tableExtraInfoStage1 = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
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
const tableExtraInfoStage2 = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
const tableExtraInfoStage3 = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">休眠状态</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">一阶段</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">二阶段</SwitchTab>
    <SwitchTab tabId="cp-unit-item-3">三阶段</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 休眠状态 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revenge_Tower2_Dormant.png" imgAlt="复仇之塔（休眠状态）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Revenge_Tower1_Dormant.png" />
        <UnitImg imgTitle="2 级" imgSrc="Revenge_Tower2_Dormant.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17, 18" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 复仇之塔随着建筑被摧毁的数量增加而增强。
    - 游戏开始时，它处于休眠状态，不会主动攻击。
    - 当 5 座建筑物被摧毁时，它会进入一阶段。一阶段的复仇之塔会以较慢的速度向地面和空中单位发射高伤害的弹丸。
    - 当 20 座建筑物被摧毁时，它会进入二阶段。此时复仇之塔每次造成的伤害减半，但射速翻倍，并且可以像 [跳弹加农炮](/upgrade/0313-Ricochet-Cannon) 一样将弹丸反弹到其他目标，不过只能反弹一次。
    - 当 40 座建筑物被摧毁时，它会进入三阶段，也就是最终阶段。此时复仇之塔每次造成的伤害不变，射速再次翻倍，且可以反弹两次。
2. 即使复仇之塔处于休眠状态，它仍被视为防御建筑，这意味着 [巨人](/upgrade/0002-Giant)、[气球兵](/upgrade/0005-Balloon) 等以防御为目标的单位会优先攻击它。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoDormant">

| 等级 | 生命值 | 升级费用 |   升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |  ---  |   ---   |     ---     |        ---         |       ---       |
|   1  |  5800 |   430k  | 13, 0, 0, 5 |                    |        18       |
|   2  |  6200 |   460k  | 14          |                    |        18       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 一阶段 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revenge_Tower2_Stage1.png" imgAlt="复仇之塔（一阶段）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Revenge_Tower1_Stage1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Revenge_Tower2_Stage1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17, 18" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="11 格" />
    <UnitProperty pKey="攻速" pValue="1.2 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStage1">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |   升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |  ---  |   ---   |     ---     |        ---         |       ---       |
|   1  |   375   |   450   |  5800 |   430k  | 13, 0, 0, 5 |                    |        18       |
|   2  |   416   |   500   |  6200 |   460k  | 14          |                    |        18       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 二阶段 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revenge_Tower2_Stage2.png" imgAlt="复仇之塔（二阶段）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Revenge_Tower1_Stage2.png" />
        <UnitImg imgTitle="2 级" imgSrc="Revenge_Tower2_Stage2.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17, 18" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="直接伤害 + 弹射伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="11 格" />
    <UnitProperty pKey="攻速" pValue="0.6 秒/次" />
    <UnitProperty pKey="最远弹射距离" pValue="4 格" />
    <UnitProperty pKey="最高弹射次数" pValue="1" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStage2">

| 等级 | 每秒伤害 | 直接伤害 | 弹射伤害 | 生命值 | 升级费用 |   升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |    ---   |  ---  |   ---   |     ---     |        ---         |       ---       |
|   1  |   375   |   225   |    135   |  5800 |   430k  | 13, 0, 0, 5 |                    |        18       |
|   2  |   416   |   250   |    150   |  6200 |   460k  | 14          |                    |        18       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 三阶段 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-3" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revenge_Tower2_Stage3.png" imgAlt="复仇之塔（三阶段）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Revenge_Tower1_Stage3.png" />
        <UnitImg imgTitle="2 级" imgSrc="Revenge_Tower2_Stage3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17, 18" />
    <BuildingNumRow title="建筑数量" num="     0,  1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="直接伤害 + 弹射伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="11 格" />
    <UnitProperty pKey="攻速" pValue="0.3 秒/次" />
    <UnitProperty pKey="最远弹射距离" pValue="4 格" />
    <UnitProperty pKey="最高弹射次数" pValue="2" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoStage2">

| 等级 | 每秒伤害 | 直接伤害 |弹射伤害<sup>*</sup>| 生命值 | 升级费用 |   升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |         ---        |  ---  |   ---   |     ---     |        ---         |       ---       |
|   1  |   750   |   225   |      135 / 81      |  5800 |   430k  | 13, 0, 0, 5 |                    |        18       |
|   2  |   833   |   250   |      150 / 90      |  6200 |   460k  | 14          |                    |        18       |
</UnitTable>

\* 弹射伤害一栏中，135 / 81 代表弹丸弹射到第一个目标时的伤害为 135，弹射到第二个目标时为 81.
</SwitchTabGroup>