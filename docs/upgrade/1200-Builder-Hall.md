---
title: "部落冲突 coc 建筑大师大本营（夜世界大本营）升级数据"
navTitle: "建筑大师大本营"
shownTitle: "建筑大师大本营（夜世界大本营）"
description: "建筑大师的家，战斗中的主要目标。在进攻中摧毁敌军的建筑大师大本营可获得一颗胜利之星。摧毁一个区域中 50% 的建筑可获得第二颗胜利之星，摧毁率达到 100% 可获得该区域的三颗胜利之星奖励。
升级建筑大师大本营来解锁更高级的建筑和兵种！"
module: upgrade-bh
imgFolder: bh_buildings/1200
wiki: https://clashofclans.fandom.com/wiki/Builder_Hall
canonical: /upgrade/1200-Builder-Hall
---

- 如想查看夜世界的另一个大本营，请访问：[夜世界奥仔哨站](/upgrade/1240-O.T.T.O's-Outpost)。
- 如想查看家乡的大本营，请访问：[大本营](/upgrade/0400-Town-Hall)。
- 如想查看都城的大本营，请访问：[都城大本营](/upgrade/2400-Capital-Hall)、[子城大本营](/upgrade/2401-District-Hall)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Builder_Hall10.png" :imgAlt="$frontmatter.navTitle"
    description="建筑大师的家，战斗中的主要目标。<br>在进攻中摧毁敌军的建筑大师大本营可获得一颗胜利之星。摧毁一个区域中 50% 的建筑可获得第二颗胜利之星，摧毁率达到 100% 可获得该区域的三颗胜利之星奖励。<br>升级建筑大师大本营来解锁更高级的建筑和兵种！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Builder_Hall1_thumb.png" imgHd="Builder_Hall1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Builder_Hall2_thumb.png" imgHd="Builder_Hall2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Builder_Hall3_thumb.png" imgHd="Builder_Hall3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Builder_Hall4_thumb.png" imgHd="Builder_Hall4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Builder_Hall5_thumb.png" imgHd="Builder_Hall5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Builder_Hall6_thumb.png" imgHd="Builder_Hall6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Builder_Hall7_thumb.png" imgHd="Builder_Hall7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Builder_Hall8_thumb.png" imgHd="Builder_Hall8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Builder_Hall9_thumb.png" imgHd="Builder_Hall9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Builder_Hall10_thumb.png" imgHd="Builder_Hall10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 1,
        "type": "number",
        "icon": "Gold2, Elixir2",
        "noGoldPass": true
    },
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold2"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |金币和圣水<br>储量| 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|建筑<br>数量|陷阱<br>数量|
|  --- |       ---      |   ---  |    ---  |   ---   |         ---        |     ---    |    ---    |
|  1   |       50k      |   650  |      \  |    \    |                    |      0     |      0    |
|  2   |       75k      |   800  |   3.5k  | 0,0,0,5 |                    |     10     |      1    |
|  3   |      100k      |   975  |    30k  |   0,1   |                    |     18     |      6    |
|  4   |      150k      |  1150  |   200k  |    1    |                    |     23     |      9    |
|  5   |      900k      |  1350  |   400k  |    2    |                    |     27     |     12    |
|  6   |      900k      |  1600  |   1.2M  |    3    |                    |     39     |     14    |
|  7   |      1.1M      |  1850  |   1.8M  |    4    |                    |     44     |     16    |
|  8   |      1.3M      |  2150  |   2.8M  |    5    |                    |     50     |     18    |
|  9   |      1.5M      |  2450  |   3.8M  |    6    |                    |     54     |     20    |
| 10   |      1.5M      |  2750  |   4.8M  |    7    |                    |     55     |     21    |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>1 级和 3 级建筑大师大本营的生命值增加，4 ~ 9 级建筑大师大本营的生命值减少。</TimelineRow>
        <TimelineRow>5 ~ 9 级建筑大师大本营的资源储量增加。</TimelineRow>
        <TimelineRow>新增 10 级建筑大师大本营。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>新增 9 级建筑大师大本营。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>