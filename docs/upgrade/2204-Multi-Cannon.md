---
title: "部落冲突 coc 都城多管加农炮升级数据"
navTitle: "多管加农炮"
shownTitle: "多管加农炮"
description: "拥有多根炮管的加农炮！"
module: upgrade-capital
imgFolder: capital_buildings/2204
wiki: https://clashofclans.fandom.com/wiki/Multi_Cannon
canonical: /upgrade/2204-Cannon
---

- *如想查看家乡改装后的加农炮，请访问该页面后切换为“连发模式”：[加农炮](/upgrade/0301-Cannon)。*
- *如想查看夜世界的加农炮，请访问：[夜世界双管加农炮](/upgrade/1100-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Multi_Cannon5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Multi_Cannon_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Multi_Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Multi_Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Multi_Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Multi_Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Multi_Cannon5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2, 3 - 10" />
    <BuildingNumRow title="建筑数量" num="0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   2   |   2   |   2   |   5   |   6   |
|   法师山谷   |   1   |   2   |   2   |   2   |   2   |
|   气球环礁   |   2   |   2   |   2   |   2   |   2  |
| 建筑工人工坊 |   2   |   3   |   4   |   4   |   4   |
|   戈仑石场   |   1   |   2   |   3   |   3   |   3   |
|   骷髅公园   |   3   |   4   |   4   |   5   |   \   |
|  哥布林矿井  |   2   |   2   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="6 格" />
    <UnitProperty pKey="攻速" pValue="2.88 秒/轮<sup>*</sup>" />
</UnitProperties>

* 多管加农炮的攻击节奏是 0.16 秒一发，8 发后休息 1.6 秒。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   222   |    80   |  1800  |    4k   |   140   |         2         |         1        |
|   2  |   250   |    90   |  2050  |    8k   |   150   |         3         |         2        |
|   3  |   277   |   100   |  2300  |   16k   |   160   |         5         |         3        |
|   4  |   305   |   110   |  2550  |   27k   |   170   |         7         |         4        |
|   5  |   333   |   120   |  2800  |   45k   |   180   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>多管加农炮随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>