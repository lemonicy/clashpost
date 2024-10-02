---
title: "部落冲突 coc 都城巨型地雷升级数据"
navTitle: "巨型地雷"
shownTitle: "巨型地雷"
description: "一个隐藏的强力爆炸陷阱。可选择对地或对空！"
module: upgrade-capital
imgFolder: capital_buildings/2281
wiki: https://clashofclans.fandom.com/wiki/Mega_Mine/Clan_Capital
canonical: /upgrade/2281-Mega-Mine
---

- *如想查看夜世界的巨型地雷，请访问：[夜世界巨型地雷](/upgrade/1183-Mega-Mine)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mega_Mine5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="地面模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Mega_Mine_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Mega_Mine1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Mega_Mine2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Mega_Mine3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Mega_Mine4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Mega_Mine5.png" />
    </UnitImgGroup>
    <UnitImgGroup title="空中模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Mega_Mine1_Air.png" />
        <UnitImg imgTitle="2 级" imgSrc="Mega_Mine2_Air.png" />
        <UnitImg imgTitle="3 级" imgSrc="Mega_Mine3_Air.png" />
        <UnitImg imgTitle="4 级" imgSrc="Mega_Mine4_Air.png" />
        <UnitImg imgTitle="5 级" imgSrc="Mega_Mine5_Air.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1, 2, 3, 4, 5, 6, 7,  8,  9, 10" />
    <BuildingNumRow title="建筑数量" num="0, 4, 5, 6, 7, 8, 9, 10, 11, 12" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   2   |   3   |   4   |   4   |
|   法师山谷   |   2   |   4   |   5   |   6   |   6   |
|   气球环礁   |   0   |   0   |   1   |   2   |   3   |
| 建筑工人工坊 |   0   |   0   |   1   |   2   |   3   |
|   骷髅公园   |   2   |   3   |   3   |   3   |   \   |
|  哥布林矿井  |   1   |   2   |   3   |   3   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害目标" pValue="可调对地和对空" />
    <UnitProperty pKey="触发距离" pValue="2 格" />
    <UnitProperty pKey="爆炸半径" pValue="4 格" />
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

| 等级 | 爆炸伤害 | 升级费用 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |        ---        |        ---       |
|   1  |   400   |    2k   |         2         |         1        |
|   2  |   450   |    4k   |         3         |         3        |
|   3  |   500   |    8k   |         5         |         3        |
|   4  |   550   |   15k   |         7         |         4        |
|   4  |   600   |   25k   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>巨型地雷随着部落都城玩法一同推出。。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>