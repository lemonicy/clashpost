---
title: "部落冲突 coc 都城超级特斯拉电磁塔升级数据"
navTitle: "超级特斯拉电磁塔"
shownTitle: "超级特斯拉电磁塔"
description: "如果特斯拉电磁塔变得超级庞大会怎样？即使面对最强大的敌军，它的超强力电流也能对他们造成重创！"
module: upgrade-capital
imgFolder: capital_buildings/220b
wiki: https://clashofclans.fandom.com/wiki/Hidden_Mega_Tesla
canonical: /upgrade/220b-Hidden-Mega-Tesla
---

- *如想查看家乡的巨型特斯拉电磁塔（12 本自带武器），请访问：[巨型特斯拉电磁塔](/upgrade/030c-Giga-Tesla)。*
- *如想查看夜世界的超级特斯拉电磁塔，请访问：[夜世界超级特斯拉电磁塔](/upgrade/110b-Mega-Tesla)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hidden_Mega_Tesla5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Hidden_Mega_Tesla_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Hidden_Mega_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Hidden_Mega_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Hidden_Mega_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Hidden_Mega_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Hidden_Mega_Tesla5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4, 5 - 10" />
    <BuildingNumRow title="建筑数量" num="    0, 1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   0   |   2   |   3   |   4   |
|   法师山谷   |   0   |   2   |   2   |   2   |   2   |
|   气球环礁   |   2   |   2   |   2   |   2   |   2   |
| 建筑工人工坊 |   2   |   3   |   4   |   5   |   5   |
|   戈仑石场   |   1   |  1    |   1   |   1   |   1   |
|   骷髅公园   |   4   |   5   |   5   |   5   |   \   |
|  哥布林矿井  |   0   |   1   |   1   |   3   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="连锁距离" pValue="2.25 格" />
    <UnitProperty pKey="最大目标数量" pValue="2 (含初始目标)" />
    <UnitProperty pKey="连锁延迟" pValue="0.416 秒" />
    <UnitProperty pKey="连锁衰减" pValue="20% (逐级递减)" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发距离" pValue="6 格" />
    <UnitProperty pKey="射程" pValue="6 格" />
    <UnitProperty pKey="攻速" pValue="4 秒/次" />
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

| 等级 | 每秒伤害 |首个目标<br>伤害|第二个<br>目标的伤害| 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |      ---      |       ---        |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   150   |      600      |       480        |  1800  |    7k   |   160   |         4         |         1        |
|   2  |   175   |      700      |       560        |  2000  |   14k   |   170   |         5         |         2        |
|   3  |   200   |      800      |       640        |  2200  |   28k   |   180   |         6         |         3        |
|   4  |   225   |      900      |       720        |  2400  |   45k   |   190   |         8         |         4        |
|   5  |   250   |     1000      |       800        |  2600  |   75k   |   200   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>超级特斯拉电磁塔随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>