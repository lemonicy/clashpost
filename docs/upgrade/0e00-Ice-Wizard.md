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
|   1  |    48   |   72    |   180  |        6        |
|   2  |    67   |  100.5  |   216  |        7        |
|   3  |    86   |  129    |   259  |        8        |
|   4  |   120   |  180    |   312  |        9        |
|   5  |   163   |  244.5  |   374  |       10        |
|   6  |   178   |  267    |   420  |       11        |
|   7  |   192   |  288    |   456  |       12        |
|   8  |   206   |  309    |   504  |       13        |
|   9  |   221   |  331.5  |   552  |       14        |
|  10  |   235   |  352.5  |   600  |       15        |
|  11  |   250   |  375    |   648  |       16        |
|  12  |   264   |  396    |   696  |       17        |
|  13  |   278   |  417    |   744  |       18        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/12/08">
        <TimelineRow>该兵种第 8 次推出，有效期至 2026/01/01.</TimelineRow>
        <TimelineRow>与上次推出时相比，寒冰法师的每秒伤害和生命值略有提升。</TimelineRow>
    </TimelineItem>
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