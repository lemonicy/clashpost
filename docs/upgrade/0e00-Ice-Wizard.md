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
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="1.6 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="5" />    
    <UnitProperty pKey="特殊技能" pValue="被击中的目标会减速" />
    <UnitProperty pKey="速度降低" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="训练时间" pValue="30" :oldTrainingSystem="true" />
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

| 等级 | 每秒伤害 | 每次伤害 |训练花费<sup>①</sup>| 生命值 |对应的<br>大本等级|
| ---- |  ----   |  ----   |        ----       |  ----  |       ----      |
|   1  |    40   |    60   |         800       |    75  |  1<sup>②</sup>  |
|   2  |    56   |    84   |        1120       |    90  |        5        |
|   3  |    72   |   108   |        1440       |   108  |        6        |
|   4  |   100   |   150   |        1760       |   130  |        7        |
|   5  |   136   |   204   |        2080       |   156  |        8        |
|   6  |   148   |   222   |        2400       |   175  |        9        |
|   7  |   160   |   240   |        2720       |   190  |       10        |
|   8  |   172   |   258   |        3040       |   210  |       11        |
|   9  |   184   |   276   |        3360       |   230  |       12        |
|  10  |   196   |   294   |        3680       |   250  |       13        |
</UnitTable>

① 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。<br>
② 游戏内部确实规定了 1 级寒冰法师的属性，但是寒冰法师 5 本才会解锁，这时候系统会自动把寒冰法师升到 2 级，所以 1 级寒冰法师实际上不会出现。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2021/12">
        <TimelineRow>该兵种第 6 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12">
        <TimelineRow>该兵种第 5 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12">
        <TimelineRow>该兵种第 4 次推出，前 3 次推出分别在 2016、2017、2018 年。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>