---
title: "部落冲突 coc 阿啾升级数据"
navTitle: "阿啾"
shownTitle: "阿啾"
description: "她的鼻子堵住了，随时准备打喷嚏！阿啾因过敏躲在英雄身后，朝建筑喷出黏糊糊的鼻涕小怪。跟随的英雄被击倒后，她仍会继续战斗！"
module: upgrade-home
imgFolder: home_heroes/028a
wiki: https://clashofclans.fandom.com/wiki/Sneezy
canonical: /upgrade/028a-Sneezy
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">阿啾</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">鼻涕小怪</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 阿啾 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sneezy_info.png" imgAlt="阿啾"
    description="她的鼻子堵住了，随时准备打喷嚏！阿啾因过敏躲在英雄身后，朝建筑喷出黏糊糊的鼻涕小怪。跟随的英雄被击倒后，她仍会继续战斗！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Sneezy1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 阿啾的技能（哈啾！）：喷出空中支援部队。跟随的英雄被击倒后，她仍会继续战斗。
2. 当阿啾跟随的英雄被击倒时，阿啾会进入愤怒状态。愤怒状态大约有 1% 的微小伤害加成，持续 5 分钟，比每局游戏的持续时间都长，因此可视为永久性加成。这个愤怒状态可被 [狂暴法术](/upgrade/0102-Rage-Spell) 覆盖。
3. 当阿啾跟随的英雄未被击倒时，使用 [回溯法术](/upgrade/0107-Recall-Spell) 召回英雄时可一并召回阿啾，而无需占用回溯法术的空间。当阿啾跟随的英雄被击倒时，召回阿啾时就和其他战宠一样要占用空间了。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="见说明<sup>①</sup>" />
    <UnitProperty pKey="每次召唤的鼻涕小怪数量" pValue="2" />
    <UnitProperty pKey="召唤频率" pValue="10 秒/次" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="11" />
    <UnitProperty pKey="所需大本等级" pValue="17" />
</UnitProperties>

① 当阿啾跟随英雄未被击败时，它的攻击距离为 5.5 格，反之则为 1.5 格。

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
    },
    {
        "column": 6,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值| 升级花费| 升级时间| 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |   ---   |  ---  |  ----  |   ---  |   ---   |        ---       |      ---      |
|   1  |   270   |   216   |  3300 |     \  |    \   |         |         11       |      17       |
|   2  |   290   |   232   |  3450 |  200k  |    8   |         |         11       |      17       |
|   3  |   310   |   248   |  3600 |  220k  |    8   |         |         11       |      17       |
|   4  |   330   |   264   |  3750 |  240k  |    8   |         |         11       |      17       |
|   5  |   350   |   280   |  3900 |  260k  |    8   |         |         11       |      17       |
|   6  |   370   |   296   |  4050 |  280k  |    8   |         |         11       |      17       |
|   7  |   390   |   312   |  4200 |  300k  |    8   |         |         11       |      17       |
|   8  |   410   |   328   |  4350 |  320k  |    8   |         |         11       |      17       |
|   9  |   430   |   344   |  4500 |  340k  |    8   |         |         11       |      17       |
|  10  |   450   |   360   |  4650 |  360k  |    8   |         |         11       |      17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 鼻涕小怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Booger_info.png" imgAlt="鼻涕小怪"
    description="邪恶的鼻涕小怪从阿啾的鼻孔中喷射而出！这些生命值较高的空中部队能吸收伤害并攻击建筑。离纸巾远点就行！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Booger1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

鼻涕小怪不能触发陷阱。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.9 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值|
| ---- |   ---   |   ---   |  ---  |
|   1  |   105   |   105   |  1100 |
|   2  |   110   |   110   |  1200 |
|   3  |   115   |   115   |  1300 |
|   4  |   120   |   120   |  1400 |
|   5  |   125   |   125   |  1500 |
|   6  |   130   |   130   |  1600 |
|   7  |   135   |   135   |  1700 |
|   8  |   140   |   140   |  1800 |
|   9  |   145   |   145   |  1900 |
|  10  |   150   |   150   |  2000 |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/12">
        <TimelineRow>鼻涕小怪不再触发陷阱。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>新战宠：阿啾。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>