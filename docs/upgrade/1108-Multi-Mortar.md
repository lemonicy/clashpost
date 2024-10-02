---
title: "部落冲突 coc 夜世界多管迫击炮升级数据"
navTitle: "多管迫击炮"
shownTitle: "多管迫击炮"
description: "远距离发射多枚能造成溅射伤害的炮弹，以保证最大可能命中目标！"
module: upgrade-bh
imgFolder: bh_buildings/1108
wiki: https://clashofclans.fandom.com/wiki/Multi_Mortar
canonical: /upgrade/1108-Multi-Mortar
---

- *如想查看家乡改装后的迫击炮，请访问该页面后切换为“连发模式”：[迫击炮](/upgrade/0303-Mortar)。*
- *如想查看都城的多管迫击炮，请访问：[都城多管迫击炮](/upgrade/2206-Multi-Mortar)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Multi_Mortar10.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Multi_Mortar1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Multi_Mortar2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Multi_Mortar3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Multi_Mortar4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Multi_Mortar5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Multi_Mortar6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Multi_Mortar7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Multi_Mortar8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Multi_Mortar9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Multi_Mortar10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="4 ~ 11 格" />
    <UnitProperty pKey="攻速" pValue="7 秒/轮<sup>*</sup>" />
</UnitProperties>

\* 多管迫击炮的攻击节奏是：4 连发期间每发 0.5 秒，之后停顿 3.5 秒。如果目标在多管还没打完 4 连发之前死亡，导致多管没有发射全部 4 发炮弹时，每发没有射出去的炮弹会减少 0.5 秒攻击间隔。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
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

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 连发次数 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需夜世界<br>大本等级|
|  --- |   ---   |   ---   |   ---   |   ---  |    ---  |    ---   |         ---        |         ---        |
|  1   |    20   |    45   |    3    |   500  |   600K  |   0, 8   |                    |          5         |
|  2   |    25   |    45   |    4    |   575  |   700K  |   0,12   |                    |          5         |
|  3   |    28   |    50   |    4    |   660  |   800K  |   1      |                    |          5         |
|  4   |    31   |    55   |    4    |   760  |     1M  |   2      |                    |          5         |
|  5   |    34   |    60   |    4    |   875  |   1.2M  |   3      |                    |          5         |
|  6   |    37   |    66   |    4    |  1050  |   1.6M  |   5      |                    |          6         |
|  7   |    41   |    73   |    4    |  1250  |   2.5M  |   7      |                    |          7         |
|  8   |    45   |    80   |    4    |  1450  |   3.5M  |   9      |                    |          8         |
|  9   |    49   |    88   |    4    |  1650  |   4.5M  |  11      |                    |          9         |
| 10   |    58   |    88   |    5    |  1850  |   5.5M  |  12      |                    |         10         |

</UnitTable>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>夜世界重做，建筑的数值重新平衡，伤害、生命值等数据有变化。</TimelineRow>
        <TimelineRow>6 ~ 9 级多管迫击炮的升级时间增加。</TimelineRow>
        <TimelineRow>夜世界 10 本推出，多管迫击炮可升至 10 级。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/12/09">
        <TimelineRow>所有等级多管迫击炮的每秒伤害减少（更新公告里没有这个，但是确实削了）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本推出，多管迫击炮可升至 9 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>