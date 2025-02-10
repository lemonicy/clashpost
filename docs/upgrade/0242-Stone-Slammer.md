---
title: "部落冲突 coc 攻城气球（大气球）升级数据"
navTitle: "攻城气球"
shownTitle: "攻城气球（大气球）"
description: "攻城气球这台重型飞行器会朝防御建筑飞过去，然后投掷巨石将其夷为平地并造成地震效果。法术对攻城气球无效。"
module: upgrade-home
imgFolder: home_tech/0242
wiki: https://clashofclans.fandom.com/wiki/Stone_Slammer
canonical: /upgrade/0242-Stone-Slammer
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Stone_Slammer.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Stone_Slammer1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Stone_Slammer2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Stone_Slammer3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Stone_Slammer4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Stone_Slammer5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 攻城气球的目标是最近的防御，相当于一个能炸烂墙的大号 [气球兵](/upgrade/0005-Balloon)。
3. 攻城气球的伤害包括一次伤害、二次伤害和死亡溅射伤害。其中一次伤害指的是游戏内面板中写明的伤害，二次伤害是面板中没写明的额外伤害。二次伤害中有个最大值和最小值，其中的最大值指的是距离溅射中心 2 格的范围内受到的额外伤害，最小值是 2-3 格范围内受到的伤害。在攻城气球未死亡时，攻城气球的伤害 = 一次伤害 + 二次伤害，死亡后还要加上被摧毁后的溅射伤害。一次伤害、二次伤害和死亡附加伤害都对 [城墙](/upgrade/0300-Walls) 有 25 倍效果。
4. 下方升级数据表格中的伤害都是对建筑的伤害，对城墙的伤害需要再乘以 25。
5. 当攻城气球的血量清零时，攻城气球就会自动解体并释放里面的援军。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="寻找防御建筑攻击" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害加成" pValue="对墙 25 倍伤害" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 2.25 秒" />
    <UnitProperty pKey="死亡附加伤害" pValue="500" />
    <UnitProperty pKey="死亡伤害半径" pValue="3 格" />
    <UnitProperty pKey="死亡伤害延迟" pValue="0.416 秒" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="建造时间" pValue="1200" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |一次伤害<br>(每秒)|一次伤害<br>(每次)|二次伤害<br>(每秒)| 生命值 | 升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |       ----      |       ----      |      ----      |  ----  |  ----  |    ---    |       ----      |      ----     |
|   1  |       400       |       1000      |     100~200    |  5600  |    \   |     \     |         1       |       12      |
|   2  |       500       |       1250      |     150~300    |  5900  |  2.5M  |     2     |        10       |       12      |
|   3  |       600       |       1500      |     200~400    |  6200  |  3.5M  |     3     |        10       |       12      |
|   4  |       700       |       1750      |     250~500    |  6500  |  6.5M  |     7     |        11       |       13      |
|   5  |       750       |       1875      |     300~600    |  6800  |   10M  |     9     |        13       |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级攻城气球的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级攻城气球的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 5 级攻城气球的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 5 级攻城气球。</TimelineRow>
        <TimelineRow>2 ~ 4 级攻城气球的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城气球的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>如果您没有部署攻城机器，当其他军队都被消灭后，战斗不再会自动结束。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 4 级攻城气球。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>