---
title: "部落冲突 coc 贪婪渡鸦升级数据"
navTitle: "贪婪渡鸦"
shownTitle: "贪婪渡鸦"
description: "更可怕的稻草人，也挡不住贪婪渡鸦扑向闪亮的战利品！这只蒙面怪鸟快速挥动羽翼，专门攻击资源建筑和关键目标，对其造成额外伤害。"
module: upgrade-home
imgFolder: home_heroes/028b
wiki: https://clashofclans.fandom.com/wiki/Greedy_Raven
canonical: /upgrade/028b-Greedy-Raven
---

<!-- ↓↓↓ 阿啾 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Sneezy_info.png" imgAlt="贪婪渡鸦"
    description="更可怕的稻草人，也挡不住贪婪渡鸦扑向闪亮的战利品！这只蒙面怪鸟快速挥动羽翼，专门攻击资源建筑和关键目标，对其造成额外伤害。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="GreedyRaven.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 贪婪渡鸦优先攻击英雄攻击目标附近的资源建筑。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="资源建筑 (5倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="3.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.42 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="8" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="12" />
    <UnitProperty pKey="所需大本等级" pValue="18" />
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
|   1  |   110   |   46.2  |  2150 |     \  |    \   |         |         12       |      18       |
|   2  |   115   |   48.3  |  2300 |  260k  |   8   |         |         12       |      18       |
|   3  |   120   |   50.4  |  2450 |  280k  |   8   |         |         12       |      18       |
|   4  |   125   |   52.5  |  2600 |  300k  |   8   |         |         12       |      18       |
|   5  |   130   |   54.6  |  2750 |  320k  |   8   |         |         12       |      18       |
|   6  |   135   |   56.7  |  2900 |  340k  |   8   |         |         12       |      18       |
|   7  |   140   |   58.8  |  3050 |  360k  |   8   |         |         12       |      18       |
|   8  |   145   |   60.9  |  3200 |  380k  |   8   |         |         12       |      18       |
|   9  |   150   |   63.0  |  3350 |  400k  |   8   |         |         12       |      18       |
|  10  |   155   |   65.1  |  3500 |  420k  |   8   |         |         12       |      18       |
</UnitTable>
</SwitchTabGroup>


<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>新战宠：贪婪渡鸦。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>