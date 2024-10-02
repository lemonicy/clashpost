---
title: "部落冲突 coc 都城空中炸弹发射器升级数据"
navTitle: "空中炸弹发射器"
shownTitle: "空中炸弹发射器"
description: "要应对繁重的空中防御任务，使用空中炸弹发射器准没错。它能持续不断地向空中发射木桶，木桶会在空中爆炸重创敌军！"
module: upgrade-capital
imgFolder: capital_buildings/2208
wiki: https://clashofclans.fandom.com/wiki/Air_Bombs/Clan_Capital
canonical: /upgrade/2208-Air-Bombs
---

- *如想查看家乡的陷阱空中炸弹，请访问：[空中炸弹](/upgrade/0382-Air-Bomb)。*
- *如想查看夜世界的建筑空中炸弹发射器，请访问：[夜世界空中炸弹发射器](/upgrade/1107-Air-Bombs)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Air_Bombs5.png" :imgAlt="$frontmatter.navTitle"
    description="要应对繁重的空中防御任务，使用空中炸弹发射器准没错。<br>它能持续不断地向空中发射木桶，木桶会在空中爆炸重创敌军！"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Air_Bombs_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Air_Bombs1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Air_Bombs2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Air_Bombs3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Air_Bombs4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Air_Bombs5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 2, 3, 4 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   2   |   2   |   3   |   3   |
|   法师山谷   |   1   |   2   |   3   |   3   |   3   |
|   气球环礁   |   2   |   2   |   2   |   3   |   4   |
| 建筑工人工坊 |   2   |   3   |   3   |   3   |   3   |
|   飞龙悬崖   |   2   |   2   |   2   |   2   |   2   |
|   戈仑石场   |   2   |   2   |   2   |   2   |   2   |
|   骷髅公园   |   1   |   2   |   3   |   3   |   \   |
|  哥布林矿井  |   1   |   2   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅空中目标" />
    <UnitProperty pKey="射程" pValue="8.5 格" />
    <UnitProperty pKey="攻速" pValue="3 秒/次" />
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
|   1  |   225   |   675   |  2300  |    6k   |   180   |         3         |         1        |
|   2  |   250   |   750   |  2550  |   12k   |   190   |         4         |         2        |
|   3  |   275   |   825   |  2700  |   24k   |   200   |         6         |         3        |
|   4  |   300   |   900   |  2950  |   39k   |   210   |         8         |         4        |
|   5  |   325   |   975   |  3200  |   65k   |   220   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>空中炸弹发射器随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>