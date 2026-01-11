---
title: "部落冲突 coc 天鹰火炮（鸟炮）升级数据"
navTitle: "天鹰火炮"
shownTitle: "天鹰火炮（鸟炮）"
description: "天鹰火炮的攻击范围几乎覆盖了地图的每个角落，它发射的火炮可以对汹汹而来的敌方部队造成溅射伤害。然而，只有大规模的部队才会触发天鹰火炮。"
module: upgrade-home
imgFolder: home_buildings/030b
wiki: https://clashofclans.fandom.com/wiki/Eagle_Artillery
canonical: /upgrade/030b-Eagle-Artillery
---

- *如想查看大本营和天鹰火炮合并后的大本武器，请移步：[地狱火炮](/upgrade/0315-Inferno-Artillery)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Eagle_Artillery7_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="日常状态" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Eagle_Artillery1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Eagle_Artillery2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Eagle_Artillery3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Eagle_Artillery4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Eagle_Artillery5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Eagle_Artillery6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Eagle_Artillery7.png" imgHd="Eagle_Artillery7_hd.png" />
    </UnitImgGroup>
    <UnitImgGroup title="发射中" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Eagle_Artillery1_Active.png" />
        <UnitImg imgTitle="2 级" imgSrc="Eagle_Artillery2_Active.png" />
        <UnitImg imgTitle="3 级" imgSrc="Eagle_Artillery3_Active.png" />
        <UnitImg imgTitle="4 级" imgSrc="Eagle_Artillery4_Active.png" />
        <UnitImg imgTitle="5 级" imgSrc="Eagle_Artillery5_Active.png" />
        <UnitImg imgTitle="6 级" imgSrc="Eagle_Artillery6_Active.png" />
        <UnitImg imgTitle="7 级" imgSrc="Eagle_Artillery7_Active.png" />
    </UnitImgGroup>
        <UnitImgGroup title="无弹药" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Eagle_Artillery1_Unloaded.png" />
        <UnitImg imgTitle="2 级" imgSrc="Eagle_Artillery2_Unloaded.png" />
        <UnitImg imgTitle="3 级" imgSrc="Eagle_Artillery3_Unloaded.png" />
        <UnitImg imgTitle="4 级" imgSrc="Eagle_Artillery4_Unloaded.png" />
        <UnitImg imgTitle="5 级" imgSrc="Eagle_Artillery5_Unloaded.png" />
        <UnitImg imgTitle="6 级" imgSrc="Eagle_Artillery6_Unloaded.png" />
        <UnitImg imgTitle="7 级" imgSrc="Eagle_Artillery7_Unloaded.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 10, 11 - 16, 17 - 18" />
    <BuildingNumRow title="建筑数量" num="     0,       1,       0" />
</BuildingNum>

在 16 级大本营，游戏引入合并建筑功能，这里的建筑数量指的是将所有可合并的建筑都合并后的数量。

<SmallTitle>重要说明</SmallTitle>

1. 按照官方说法，天鹰火炮的攻速为 10 秒 3 发，但我们的测试值为 11.53 秒 3 发，慢于官方说法。
2. 下兵达到一定规模时，天鹰火炮才会触发，其中英雄算 25 人口，每格法术 5 人口，援兵信标 1 人口，战宠不算，援军部队不算，援军法术算。
3. 一般来说捐兵时的经验值等于兵种的人口数，但攻城机器例外。捐赠一个攻城机器可以得到 30 经验，但在计算天鹰火炮触发时，**攻城机器算 1 人口**。
4. 镜像法术复制出来的部队不算人口，但是别忘了镜像法术本身算 15 人口（**注意镜像是 3 格**）。
5. 天鹰火炮必须装弹才能工作，这个装弹操作会在玩家登录游戏时自动进行，但如果玩家长时间不登录，弹药就会用完，从而导致防御失效。
    - 用完天鹰火炮的弹药需要 5 分 46 秒（这里按实际攻速算）。
6. 升级 17 级 [大本营](/upgrade/0400-Town-Hall) 时，天鹰火炮会与大本营合并为 [地狱火炮](/upgrade/0315-Inferno-Artillery)，此时天鹰火炮不再是独立建筑，而是作为大本附带的武器存在。
    - 升级 17 级大本营时要求天鹰火炮达到 7 级，升级完成后天鹰火炮会被移除。
    - 合并建筑的操作是永久性的，一旦合并就无法拆开。
7. 如想了解天鹰火炮的更多机制，请访问：[【天鹰火炮机制讲解】跟随“我们”揭示火炮的运作规律](/p/2140)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害<sup>①</sup>" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="7 ~ 50 格" />
    <UnitProperty pKey="攻速" pValue="11.53 秒一轮<sup>②</sup>" />
    <UnitProperty pKey="触发所需的人口数" pValue="200" />
    <UnitProperty pKey="弹药数量" pValue="90" />
    <UnitProperty pKey="触发后的攻击延迟" pValue="1.25 秒" />
    <UnitProperty pKey="击退距离" pValue="0.5 格" />
</UnitProperties>

① 天鹰火炮会在炮弹中心 0.75 格之内造成高伤害，0.75 ~ 3 格造成低伤害。在下方升级数据的表格中，0.75 格之内的区域称为“中心区域”，0.75 ~ 3 格的区域称为“外围区域”。<br>
② 天鹰火炮的实际攻速约为 11.53 秒 3 发炮弹，比游戏面板显示的 10 秒 3 发要慢。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
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
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |中心区域<br>每次伤害|外围区域<br>每次伤害|平均秒伤<sup>③</sup>| 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |       ---        |        ---        |         ---       |   ---  |   ---   |   ----  |        ---          |      ----      |
|   1  |       225        |         20        |        82.5       |  4000  |    5M   |   4     |                     |       11       |
|   2  |       250        |         25        |        97.5       |  4400  |    6M   |   5     |                     |       11       |
|   3  |       275        |         30        |       112.5       |  4800  |    9M   |   7     |                     |       12       |
|   4  |       350        |         35        |       127.5       |  5200  |   10M   |   7,12  |                     |       13       |
|   5  |       425        |         40        |       142.5       |  5600  |   12M   |   8     |                     |       14       |
|   6  |       475        |         45        |       150         |  5900  |   13M   |   9     |                     |       15       |
|   7  |       525        |         50        |       157.5       |  6200  |   14M   |   9,12  |                     |       16       |
</UnitTable>

③ 这里的平均秒伤是以 10 秒一轮为攻速计算出的，由于天鹰火炮的实际攻速比游戏面板慢，因此实际秒伤会低于这个值。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>4 ~ 7 级天鹰火炮的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 7 级天鹰火炮的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 7 级天鹰火炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>升级 17 级大本营后，大本营和天鹰火炮会自动合并成为地狱火炮。升级 17 级大本营时要求天鹰火炮达到 7 级，升级完成后天鹰火炮会被移除。</TimelineRow>
        <TimelineRow>1、3 ~ 7 级天鹰火炮的升级时间减少。</TimelineRow>
        <TimelineRow>1、4 ~ 7 级天鹰火炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 ~ 6 级天鹰火炮的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>1 ~ 6 级天鹰火炮的中心区域每次伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>16 本新增 7 级天鹰火炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/09/28">
        <TimelineRow>所有等级天鹰火炮中心区域的每次伤害降低 25。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 6 级天鹰火炮。</TimelineRow>
        <TimelineRow>3 ~ 4 级天鹰火炮的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 4 级天鹰火炮的升级费用降低。</TimelineRow>
        <TimelineRow>降低天使对天鹰火炮的吸引力。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>1 ~ 5 级天鹰火炮的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>天鹰火炮不分等级，触发所需部队空间皆调整为 200。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/29">
        <TimelineRow>降低了天鹰火炮锁定战宠的概率。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 5 级天鹰火炮。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 4 级天鹰火炮。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，天鹰火炮的弹药将自动填充，填充不再需要花费圣水。然而，如果玩家不上线，天鹰火炮就不会自动填充，所以你仍然可以攻击到天鹰火炮的弹药用完的村庄。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/02/22">
        <TimelineRow>天鹰火炮的判定面积由之前的 2×2 调整为 3×3，这意味着部队可以在更远的距离攻击到天鹰火炮。之前的很多阵型不再那么好用。</TimelineRow>
    </TimelineItem>    
    <TimelineItem :historyBottom="true" />
</Timeline>