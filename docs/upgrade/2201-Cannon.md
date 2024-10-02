---
title: "部落冲突 coc 都城加农炮升级数据"
navTitle: "加农炮"
shownTitle: "加农炮"
description: "加农炮威力巨大，弥补了它射速缓慢的不足。它的另一个缺点是炮口没法向上抬太高，因此攻击不到空中目标。"
module: upgrade-capital
imgFolder: capital_buildings/2201
wiki: https://clashofclans.fandom.com/wiki/Cannon/Clan_Capital
canonical: /upgrade/2201-Cannon
---

- *如想查看家乡的加农炮，请访问：[加农炮](/upgrade/0301-Cannon)。*
- *如想查看夜世界的加农炮，请访问：[夜世界加农炮](/upgrade/1100-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Cannon5.png" :imgAlt="$frontmatter.navTitle"
    description="加农炮威力巨大，弥补了它射速缓慢的不足。<br>它的另一个缺点是炮口没法向上抬太高，因此攻击不到空中目标。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Cannon_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Cannon5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    4, 5,      6" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   4   |   6   |   8   |   9   |   9   |
|   法师山谷   |   4   |   5   |   6   |   7   |   7   |
|   气球环礁   |   8   |  12   |  14   |  15   |   16  |
| 建筑工人工坊 |   5   |   6   |   7   |   8   |   8   |
|   飞龙悬崖   |   5   |   6   |   7   |   8   |   8   |
|   戈仑石场   |   8   |  12   |  13   |  14   |  15   |
|   骷髅公园   |   5   |   5   |   5   |   6   |   \   |
|  哥布林矿井  |   1   |   3   |   5   |   7   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="8 格" />
    <UnitProperty pKey="攻速" pValue="1.5 秒/次" />
</UnitProperties>

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
|   1  |   130   |   195   |  1250  |  2.5k   |   100   |         1         |         1        |
|   2  |   150   |   225   |  1450  |    5k   |   110   |         2         |         3        |
|   3  |   170   |   225   |  1650  |   10k   |   120   |         4         |         3        |
|   4  |   190   |   285   |  1850  |   18k   |   130   |         6         |         4        |
|   5  |   210   |   315   |  2050  |   30k   |   140   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>3 ~ 5 级都城加农炮的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>加农炮随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>