---
title: "部落冲突 coc 都城哥布林发射器升级数据"
navTitle: "哥布林发射器"
shownTitle: "哥布林发射器"
description: "这件精美的哥布林手工艺品会朝进攻者快速丢出装满哥布林的飞桶，而这些哥布林会向进攻者丢出尖锐的长矛。那长矛又会丢出什么呢？"
module: upgrade-capital
imgFolder: capital_buildings/2215
wiki: https://clashofclans.fandom.com/wiki/Goblin_Thrower
canonical: /upgrade/2215-Goblin-Thrower
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">哥布林发射器</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">哥布林投矛手</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 哥布林发射器 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Goblin_Thrower4.png" imgAlt="哥布林发射器"
    description="这件精美的哥布林手工艺品会朝进攻者快速丢出装满哥布林的飞桶，而这些哥布林会向进攻者丢出尖锐的长矛。那长矛又会丢出什么呢？"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Goblin_Thrower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Goblin_Thrower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Goblin_Thrower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Goblin_Thrower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Goblin_Thrower4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井  |   3   |   3   |   4   |   4   |   \   |

</DistrictTable>

<SmallTitle>重要说明</SmallTitle>

1. 哥布林发射器在一次战斗中一共可以发射 5 个飞桶，每个飞桶内装有 3 只哥布林投矛手。
2. 哥布林发射器一旦发射完所有飞桶则不会继续攻击。
3. 如果哥布林发射器的飞桶在未消耗完毕时即被摧毁，则剩余的飞桶会立即释放。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="9 格" />
    <UnitProperty pKey="攻速" pValue="4 秒/次" />
    <UnitProperty pKey="发射兵种" pValue="哥布林投矛手" />
    <UnitProperty pKey="弹药容量" pValue="5" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 兵种等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |
|   1  |    1    |   18    |    72   |  3100  |   16k   |   350   |         1         |
|   2  |    2    |   20    |    80   |  3400  |   32k   |   370   |         3         |
|   3  |    3    |   22    |    88   |  3700  |   64k   |   390   |         3         |
|   4  |    4    |   25    |   100   |  4000  |   99k   |   410   |         4         |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 哥布林投矛手 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Spear_Goblin_info.png" imgAlt="哥布林投矛手"
    description="是谁想出了这么个馊主意，教哥布林扔长矛？这些长矛又是从哪里来的？不过话说回来，不管是对地面还是空中的进攻者，他们的威慑力真的很大。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Spear_Goblin1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.9 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.75 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
|  --- |   ---   |   ---   |   ---  |
|   1  |    55   |   49.5  |   155  |
|   2  |    60   |   54    |   170  |
|   3  |    65   |   58.5  |   185  |
|   4  |    70   |   63    |   200  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>都城新防御：哥布林发射器。哥布林投矛手是它的派生兵种。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>