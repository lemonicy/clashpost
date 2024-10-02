---
title: "部落冲突 coc 都城炸弹塔升级数据"
navTitle: "炸弹塔"
shownTitle: "炸弹塔"
description: "炸弹塔可以投掷炸弹轰炸附近的地面部队，被摧毁后会产生一个大爆炸！近战部队最好离它远点吧！"
module: upgrade-capital
imgFolder: capital_buildings/2205
wiki: https://clashofclans.fandom.com/wiki/Bomb_Tower/Clan_Capital
canonical: /upgrade/2205-Bomb-Tower
---

- *如想查看家乡的炸弹塔，请访问：[炸弹塔](/upgrade/0308-Bomb-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bomb_Tower5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Bomb_Tower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Bomb_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Bomb_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Bomb_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Bomb_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Bomb_Tower5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num=" 1, 2, 3 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,   2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   2   |   3   |   3   |   4   |   4   |
|   气球环礁   |   2   |   2   |   2   |   2   |   2   |
|   飞龙悬崖   |   2   |   3   |   3   |   3   |   3   |
|   骷髅公园   |   3   |   4   |   4   |   4   |   \   |
|  哥布林矿井  |   1   |   1   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="5 格" />
    <UnitProperty pKey="攻速" pValue="1.1 秒/次" />
    <UnitProperty pKey="死亡伤害半径" pValue="2.75 格" />
    <UnitProperty pKey="死亡伤害延迟" pValue="1 秒" />
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

| 等级 | 每秒伤害 | 每次伤害 |被摧毁后的<br>爆炸伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |         ---         |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   65    |   71.5  |         300         |  2000  |  4.5k   |   150   |         2         |         1        |
|   2  |   75    |   82.5  |         350         |  2250  |    9k   |   160   |         3         |         2        |
|   3  |   85    |   93.5  |         400         |  2500  |   18k   |   170   |         5         |         3        |
|   4  |   95    |   104.5 |         450         |  2750  |   30k   |   180   |         7         |         4        |
|   5  |   105   |   115.5 |         500         |  3000  |   50k   |   190   |         9         |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/09/14">
        <TimelineRow>2 ~ 5 级都城炸弹塔的每秒伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>炸弹塔随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>