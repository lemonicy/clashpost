---
title: "部落冲突 coc 寒冰法师（冰法）升级数据"
navTitle: "寒冰法师"
shownTitle: "寒冰法师（冰法）"
description: "这一传奇兵种会让您的敌人颤栗不已！寒冰法师仅限活动期间训练。"
module: upgrade-temp
imgFolder: temp/0e00
wiki: https://clashofclans.fandom.com/wiki/Ice_Wizard
canonical: /upgrade/0e00-Ice-Wizard
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Wizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Ice_Wizard1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="1.6 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="特殊技能" pValue="被击中的目标会减速" />
    <UnitProperty pKey="速度降低" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="减速效果持续时间" pValue="2 秒" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "trainingCost",
        "icon": "Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |  ----   |  ----   |  ----  |       ----      |
|   1  |    40   |    60   |   150  |        6        |
|   2  |    56   |    84   |   180  |        7        |
|   3  |    72   |   108   |   216  |        8        |
|   4  |   100   |   150   |   260  |        9        |
|   5  |   136   |   204   |   312  |       10        |
|   6  |   148   |   222   |   350  |       11        |
|   7  |   160   |   240   |   380  |       12        |
|   8  |   172   |   258   |   420  |       13        |
|   9  |   184   |   276   |   460  |       14        |
|  10  |   196   |   258   |   500  |       15        |
|  11  |   208   |   294   |   540  |       16        |
|  12  |   220   |   312   |   580  |       17        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/08/11">
        <TimelineRow>该兵种第 7 次推出，有效期至 2025/08/19.</TimelineRow>
        <TimelineRow>与上次推出时相比，除训练时间取消外，无其他数据上的区别。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/12/11">
        <TimelineRow>该兵种第 6 次推出，有效期至 2025/01/01.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12">
        <TimelineRow>该兵种第 5 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12">
        <TimelineRow>该兵种第 4 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12">
        <TimelineRow>该兵种第 3 次推出，前两次分别在 2016/12/30 - 2017/01/06 以及 2017/12/?? - 2018/01/03.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>