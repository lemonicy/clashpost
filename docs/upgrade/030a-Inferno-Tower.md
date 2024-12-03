---
title: "部落冲突 coc 地狱之塔升级数据"
navTitle: "地狱之塔"
shownTitle: "地狱之塔"
description: "建造有暗黑重油加持火焰的地狱之塔，可以对单一目标造成难以估算的伤害，或者一次对多重目标进行持续攻击。"
module: upgrade-home
imgFolder: home_buildings/030a
wiki: https://clashofclans.fandom.com/wiki/Inferno_Tower/Home_Village
canonical: /upgrade/030a-Inferno-Tower
---

<script setup>
const tableExtraInfoSingleMode = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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
const tableExtraInfoMultiMode = [
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

- *如想查看 13 本及以上的自带武器，请访问 [巨型地狱之塔](/upgrade/030d-Giga-Inferno)。*
- *如想查看都城的地狱之塔，请访问 [都城地狱之塔](/upgrade/220e-Inferno-Tower)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">单一目标模式</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">多重目标模式</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 单一目标模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Tower10.png" imgAlt="地狱之塔（单一目标模式）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="单头" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Tower5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Inferno_Tower6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Inferno_Tower7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Inferno_Tower8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Inferno_Tower9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Inferno_Tower10.png" />
    </UnitImgGroup>
    <UnitImgGroup title="熄火的单头" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Tower1_Depleted.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Tower2_Depleted.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Tower3_Depleted.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Tower4_Depleted.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Tower5_Depleted.png" />
        <UnitImg imgTitle="6 级" imgSrc="Inferno_Tower6_Depleted.png" />
        <UnitImg imgTitle="7 级" imgSrc="Inferno_Tower7_Depleted.png" />
        <UnitImg imgTitle="8 级" imgSrc="Inferno_Tower8_Depleted.png" />
        <UnitImg imgTitle="9 级" imgSrc="Inferno_Tower9_Depleted.png" />
        <UnitImg imgTitle="10 级" imgSrc="Inferno_Tower10_Depleted.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的地狱塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 9, 10 - 11, 12 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,       2,       3" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 地狱之塔有 1000 发弹药，每一发 0.128 秒，所以它的弹药在 2 分 08 秒内可以用完。
2. 单头地狱塔是三段伤害，初始伤害切二段需要 1.5 秒，二段切三段是 3.75 秒，因此单头塔锁定目标 1.5 + 3.75 = 5.25 秒后到达最高伤害。
3. 上线之后系统会自动填充弹药。老玩家可能经历过手动花黑油填充地狱塔的年代，现在填充不消耗资源了。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="可调整<sup>*</sup>" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="切换目标延时" pValue="0.05 秒" />
    <UnitProperty pKey="弹药数量" pValue="1000" />
</UnitProperties>

\*  地狱之塔有两种模式：单一目标模式（单头）和多重目标模式（多头），两种模式由玩家选择。单头塔只能攻击一个目标，其伤害会随着时间推移越来越高；多头塔可以同时攻击多个目标，其伤害不会随时间增加。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoSingleMode">

| 等级 |初始<br>每秒伤害|1.25 秒后<br>每秒伤害|5.25 秒后<br>每秒伤害| 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |      ---      |        ---        |          ---       |   ---  |   ---   |   ----  |        ---          |      ----      |
|   1  |       30      |         80        |          800       |  1500  |   1.5M  |   2     |                     |       10       |
|   2  |       35      |        100        |         1000       |  1800  |     2M  |   2,12  |                     |       10       |
|   3  |       40      |        120        |         1200       |  2100  |     3M  |   3     |                     |       10       |
|   4  |       45      |        140        |         1400       |  2400  |   3.4M  |   4     |                     |       11       |
|   5  |       50      |        150        |         1500       |  2700  |   4.2M  |   5     |                     |       11       |
|   6  |       55      |        160        |         1600       |  3000  |   6.5M  |   6     |                     |       12       |
|   7  |       65      |        180        |         1800       |  3300  |     8M  |   7     |                     |       13       |
|   8  |       80      |        210        |         2100       |  3700  |    11M  |   9     |                     |       14       |
|   9  |      100      |        230        |         2300       |  4000  |  12.5M  |  10     |                     |       15       |
|  10  |      120      |        260        |         2600       |  4400  |  16.5M  |  11, 6  |                     |       16       |
| ⚡1  |      130      |        280        |         2800       |  4400  |   11M   |   4,12  |                     |       16       |
| ⚡2  |      130      |        280        |         2800       |  4600  |  6.5M   |   6,12  |                     |       16       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 多重目标模式 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Tower10_Multi.png" imgAlt="地狱之塔（多重目标模式）" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="多头" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Tower1_Multi.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Tower2_Multi.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Tower3_Multi.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Tower4_Multi.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Tower5_Multi.png" />
        <UnitImg imgTitle="6 级" imgSrc="Inferno_Tower6_Multi.png" />
        <UnitImg imgTitle="7 级" imgSrc="Inferno_Tower7_Multi.png" />
        <UnitImg imgTitle="8 级" imgSrc="Inferno_Tower8_Multi.png" />
        <UnitImg imgTitle="9 级" imgSrc="Inferno_Tower9_Multi.png" />
        <UnitImg imgTitle="10 级" imgSrc="Inferno_Tower10_Multi.png" />
    </UnitImgGroup>
        <UnitImgGroup title="熄火的多头" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Inferno_Tower1_Multi_Depleted.png" />
        <UnitImg imgTitle="2 级" imgSrc="Inferno_Tower2_Multi_Depleted.png" />
        <UnitImg imgTitle="3 级" imgSrc="Inferno_Tower3_Multi_Depleted.png" />
        <UnitImg imgTitle="4 级" imgSrc="Inferno_Tower4_Multi_Depleted.png" />
        <UnitImg imgTitle="5 级" imgSrc="Inferno_Tower5_Multi_Depleted.png" />
        <UnitImg imgTitle="6 级" imgSrc="Inferno_Tower6_Multi_Depleted.png" />
        <UnitImg imgTitle="7 级" imgSrc="Inferno_Tower7_Multi_Depleted.png" />
        <UnitImg imgTitle="8 级" imgSrc="Inferno_Tower8_Multi_Depleted.png" />
        <UnitImg imgTitle="9 级" imgSrc="Inferno_Tower9_Multi_Depleted.png" />
        <UnitImg imgTitle="10 级" imgSrc="Inferno_Tower10_Multi_Depleted.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各大本等级的地狱塔数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 9, 10 - 11, 12 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,       2,       3" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 地狱之塔有 1000 发弹药，每一发 0.128 秒，所以它的弹药在 2 分 08 秒内可以用完。
2. 单头地狱塔是三段伤害，初始伤害切二段需要 1.5 秒，二段切三段是 3.75 秒，因此单头塔锁定目标 1.5 + 3.75 = 5.25 秒后到达最高伤害。
3. 上线之后系统会自动填充弹药。老玩家可能经历过手动花黑油填充地狱塔的年代，现在填充不消耗资源了。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="可调整<sup>*</sup>" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="0.128 秒/次" />
    <UnitProperty pKey="切换目标延时" pValue="0.05 秒" />
    <UnitProperty pKey="弹药数量" pValue="1000" />
</UnitProperties>

\*  地狱之塔有两种模式：单一目标模式（单头）和多重目标模式（多头），两种模式由玩家选择。单头塔只能攻击一个目标，其伤害会随着时间推移越来越高；多头塔可以同时攻击多个目标，其伤害不会随时间增加。

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfoMultiMode">

| 等级 | 每秒伤害 | 目标数量 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |  ---    |        ---          |      ----      |
|   1  |    30   |     5   |  1500  |   1.5M  |   2     |                     |       10       |
|   2  |    35   |     5   |  1800  |     2M  |   2,12  |                     |       10       |
|   3  |    40   |     5   |  2100  |     3M  |   3     |                     |       10       |
|   4  |    45   |     5   |  2400  |   3.4M  |   4     |                     |       11       |
|   5  |    50   |     5   |  2700  |   4.2M  |   5     |                     |       11       |
|   6  |    55   |     5   |  3000  |   6.5M  |   6     |                     |       12       |
|   7  |    65   |     5   |  3300  |     8M  |   7     |                     |       13       |
|   8  |    80   |     6   |  3700  |    11M  |   9     |                     |       14       |
|   9  |   100   |     6   |  4000  |  12.5M  |  10     |                     |       15       |
|  10  |   120   |     6   |  4400  |  16.5M  |  11, 6  |                     |       16       |
| ⚡1  |   130   |    6   |  4400  |    11M   |   4,12  |                     |       16       |
| ⚡2  |   130   |    6   |  4600  |   6.5M   |   6,12  |                     |       16       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>4、6 ~ 10 级地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 10 级地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>超级充能推出，地狱之塔是第一批可以充能的建筑之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 9 级地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>4 ~ 9 级多头塔地狱塔的每秒伤害降低。</TimelineRow>
        <TimelineRow>4 级单头塔的初始伤害降低，5 ~ 9 级单头塔的三段伤害都有降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 10 级地狱之塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>所有等级地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 6、8 级地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级地狱之塔的每秒伤害降低（含单头和多头模式）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>6 ~ 7 级地狱之塔的升级时间减少。</TimelineRow>
        <TimelineRow>6 ~ 7 级地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 15 本新增 9 级地狱之塔。</TimelineRow>
        <TimelineRow>1 ~ 8 级地狱之塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>6 级地狱之塔的伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 7 级 地狱之塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>游戏新增 14 本，并在 14 本新增 8 级地狱之塔。</TimelineRow>
        <TimelineRow>地狱塔在多目标模式下不再固定为 5 个目标了，8 级地狱塔最多可以攻击 6 个目标。</TimelineRow>
        <TimelineRow>1 ~ 5 级地狱塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/05/20">
        <TimelineRow>7 级地狱之塔处于单一目标模式时的每秒伤害（第三段伤害）降低 100。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>游戏新增 13 本，并在 13 本新增 7 级地狱之塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>2 ~ 3 级地狱塔的伤害降低。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>4 级地狱之塔的升级费用降低。</TimelineRow>
        <TimelineRow>玩家上线后，地狱之塔的弹药将自动被填充，填充不再需要花费暗黑重油。然而，如果玩家不上线， 地狱之塔的弹药就不会被填充，所以你仍然可以攻击到地狱之塔的弹药用完的村庄</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>