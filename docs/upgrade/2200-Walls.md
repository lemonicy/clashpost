---
title: "部落冲突 coc 都城城墙升级数据"
navTitle: "城墙"
shownTitle: "城墙"
description: "城墙可以保卫子城，阻挡敌人的进攻。同一个子城内，所有城墙会同时升级，等级始终保持一致。 同心建设，并肩战斗，子城城墙，同步升级！"
module: upgrade-capital
imgFolder: capital_buildings/2200
wiki: https://clashofclans.fandom.com/wiki/Wall/Clan_Capital
canonical: /upgrade/2200-Walls
---

- *如想查看家乡的城墙，请访问：[城墙](/upgrade/0300-Walls)。*
- *如想查看夜世界的城墙，请访问：[夜世界城墙](/upgrade/110c-Walls)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall5.png" :imgAlt="$frontmatter.navTitle"
    description="城墙可以保卫子城，阻挡敌人的进攻。<br>同一个子城内，所有城墙会同时升级，等级始终保持一致。同心建设，并肩战斗，子城城墙，同步升级！"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="常规模型" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Wall_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Wall1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Wall2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Wall3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Wall4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wall5.png" />
    </UnitImgGroup>
    <UnitImgGroup title="在角落的城墙" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Wall_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Wall1_Corner.png" />
        <UnitImg imgTitle="2 级" imgSrc="Wall2_Corner.png" />
        <UnitImg imgTitle="3 级" imgSrc="Wall3_Corner.png" />
        <UnitImg imgTitle="4 级" imgSrc="Wall4_Corner.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wall5_Corner.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num=" 1,   2,   3,   4,   5,   6,   7,   8, 9 - 10" />
    <BuildingNumRow title="建筑数量" num="80, 120, 160, 180, 200, 220, 240, 260,    280" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   50  |  100  |  140  |  180  |  200  |
|   法师山谷   |   80  |  120  |  140  |  160  |  180  |
|   气球环礁   |   60  |   80  |  100  |  120  |  120  |
| 建筑工人工坊 |  100  |  120  |  140  |  160  |  180  |
|   飞龙悬崖   |   80  |  100  |  120  |  140  |  140  |
|   戈仑石场   |   60  |  100  |  120  |  140  |  160  |
|   骷髅公园   |   80  |   80  |   80  |  100  |   \   |
|  哥布林矿井  |   30  |   60  |   80  |  100  |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 生命值 |升级费用<sup>*</sup>|所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |  ---  |        ---        |        ---        |        ---        |
|   1  |  5000 |           0       |         1         |         1         |
|   2  |  6500 |         500       |         3         |         3         |
|   3  |  8000 |        1500       |         5         |         3         |
|   4  |  9500 |        3500       |         7         |         4         |
|   5  | 11000 |        6000       |         9         |         5         |
</UnitTable>

\* 这里列出的是每块城墙的成本。由于都城的城墙是整个子城一块升级的，因此实际的升级成本是整个子城的城墙总数乘以每个城墙的升级成本。

<SmallTitle>所有子城升级城墙的成本</SmallTitle>

<DistrictTable>

|   子城名称   |     2    |    3   |     4    |     5    |
|     ---     |    ---   |   ---   |    ---   |   ---   |
|   都城之巅   |   14 万  |  42 万  |   98 万  |  168 万  |
|  野蛮人兵营  |   10 万  |  30 万  |   70 万  |  120 万  |
|   法师山谷   |    9 万  |  27 万  |   63 万  |  108 万  |
|   气球环礁   |    6 万  |  18 万  |   42 万  |   72 万  |
| 建筑工人工坊 |    9 万  |  27 万  |   63 万  |  108 万  |
|   飞龙悬崖   |    7 万  |  21 万  |   49 万  |   84 万  |
|   戈仑石场   |    8 万  |  24 万  |   56 万  |   96 万  |
|   骷髅公园   |    5 万  |  15 万  |   35 万  |     \    |
|  哥布林矿井  |    5 万  |  15 万  |   35 万  |     \    |

</DistrictTable>

注：当子城是 1 级时不能升级城墙，因此上表不列出。

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>城墙随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>