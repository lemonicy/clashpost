---
title: "部落冲突 coc 都城防空火箭升级数据"
navTitle: "防空火箭"
shownTitle: "防空火箭"
description: "防空火箭是歼灭敌军空中部队的利器，可惜它不能攻击地面上的敌人。请巧妙部署防空火箭，最大限度保护您的领空。"
module: upgrade-capital
imgFolder: capital_buildings/2203
wiki: https://clashofclans.fandom.com/wiki/Air_Defense
canonical: /upgrade/2203-Air-Defense
---

- *如想查看家乡的防空火箭，请访问：[防空火箭](/upgrade/0304-Air-Defense)。*
- *如想查看夜世界的防空火炮，请访问：[夜世界防空火炮](/upgrade/1104-Firecrackers)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Air_Defense5.png" :imgAlt="$frontmatter.navTitle"
    description="防空火箭是歼灭敌军空中部队的利器，可惜它不能攻击地面上的敌人。<br>请巧妙部署防空火箭，最大限度保护您的领空。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Air_Defense_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Air_Defense1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Air_Defense2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Air_Defense3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Air_Defense4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Air_Defense5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 10" />
    <BuildingNumRow title="建筑数量" num="     4" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   4   |   4   |   6   |   7   |   7   |
|   法师山谷   |   3   |   4   |   5   |   6   |   6   |
|   气球环礁   |   2   |   2   |   3   |   3   |   3   |
| 建筑工人工坊 |   6   |   7   |   8   |   8   |   8   |
|   飞龙悬崖   |   4   |   5   |   6   |   7   |   7   |
|   戈仑石场   |   5   |   6   |   7   |   8   |   9   |
|   骷髅公园   |   3   |   3   |   4   |   5   |   \   |
|  哥布林矿井  |   2   |   2   |   3   |   3   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
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
|   1  |   260   |   390   |  1400  |  3.5k   |   100   |         1         |         1        |
|   2  |   290   |   435   |  1500  |    7k   |   110   |         2         |         2        |
|   3  |   320   |   480   |  1600  |   14k   |   120   |         4         |         3        |
|   4  |   350   |   525   |  1700  |   24k   |   130   |         6         |         4        |
|   5  |   380   |   570   |  1800  |   40k   |   140   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>5 级防空火箭的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/30">
        <TimelineRow>将防空火箭攻击速度从 1 秒每次降低到 1.5 秒每次。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>防空火箭随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>