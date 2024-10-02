---
title: "部落冲突 coc 雷霆泰坦（雷电泰坦）升级数据"
navTitle: "雷霆泰坦"
shownTitle: "雷霆泰坦（雷电泰坦）"
description: "雷霆泰坦从不控制自己与生俱来的魔力，在战场上，她就是无比强大的存在。她将自己的一部分魔力转化为一条威力十足的电鞭，而剩下的魔力则围绕在她身边，破坏周遭的一切。"
module: upgrade-home
imgFolder: home_tech/000f
wiki: https://clashofclans.fandom.com/wiki/Electro_Titan
canonical: /upgrade/000f-Electro-Titan
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electro_Titan_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Electro_Titan1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Electro_Titan2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Electro_Titan3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Electro_Titan4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 雷霆泰坦光环范围内的敌方兵种、英雄和建筑会持续掉血。
2. 只要光环覆盖到建筑的判定面积就可以对建筑造成持续伤害。
3. 雷霆泰坦的光环无法对 [城墙](/upgrade/0300-Walls) 造成伤害。
4. 雷霆泰坦的光环对英雄的伤害只有普通兵种的 25%。
5. 雷霆泰坦的光环可以对隐形状态下的部队和建筑造成伤害。
6. [狂暴法术](/upgrade/0102-Rage-Spell) 只能提升雷霆泰坦的普通攻击，不能提升雷霆泰坦的光环伤害。

<SmallTitle>雷霆泰坦属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="普攻类型" pValue="单体伤害 (地面和空中)" />
    <UnitProperty pKey="普攻攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="普攻攻击距离" pValue="1.25 格" />
    <UnitProperty pKey="占据人口" pValue="32" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="所需训练营等级" pValue="16" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
    <UnitProperty pKey="训练时间" pValue="360" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>光环的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用类型" pValue="范围伤害 (地面和空中)" />
    <UnitProperty pKey="作用的目标" pValue="敌方部队和建筑" />
    <UnitProperty pKey="光环半径" pValue="3.5 格" />
    <UnitProperty pKey="光环攻击速度" pValue="0.4 秒/次" />
    <UnitProperty pKey="伤害衰减" pValue="对英雄只有 25% 伤害" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |普攻伤害<br>(每秒/每次)|光环伤害<br>(每秒/每次)| 生命值 | 升级花费 |  升级时间 |所需实验室<br>等级|所需<br>大本等级|
| ---- |          ---        |           ---        |  ---- |   ----  |    ----   |      ----      |     ----      |
|   1  |      180 / 270      |        75 / 30       |  7200 |      \  |     \     |        1       |      14       |
|   2  |      200 / 300      |       100 / 40       |  7700 |  19.5M  |    13     |       12       |      14       |
|   3  |      220 / 330      |       125 / 50       |  8200 |  20.5M  |    14     |       13       |      15       |
|   4  |      240 / 360      |      137.5 / 55      |  8400 |    22M  |    16     |       14       |      16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在 16 本新增 4 级雷霆泰坦。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 3 级雷霆泰坦的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>增加雷霆泰坦的「大守护者权重」，让大守护者更有可能跟随他们。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，并在 14 本新增新兵种：雷霆泰坦。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>