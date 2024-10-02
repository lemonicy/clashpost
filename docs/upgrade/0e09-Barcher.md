---
title: "部落冲突 coc 野蛮箭手升级数据"
navTitle: "野蛮箭手"
shownTitle: "野蛮箭手"
description: "既像野蛮人一样强悍，也如弓箭手一般凶猛。野蛮箭手虽然长得怪异，但拥有惊人的进攻实力。"
module: upgrade-temp
imgFolder: temp/0e09
wiki: https://clashofclans.fandom.com/wiki/Barcher
canonical: /upgrade/0e09-Barcher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barcher_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Barcher1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

野蛮箭手是合体狂潮活动中的四个临时兵种之一，在活动中的奖励之路中达到 2 000 酸腐圣水（任务点数）即可解锁该兵种。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="3" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="特殊技能" pValue="狂暴披风<sup>*</sup>" />
    <UnitProperty pKey="伤害提升" pValue="70%" />
    <UnitProperty pKey="攻速提升" pValue="100%" />
    <UnitProperty pKey="移速提升" pValue="2.5 格/秒" />
    <UnitProperty pKey="训练时间" pValue="12" :isTrainingTime="true" />
</UnitProperties>

\* 部署后的 5 秒内对防御建筑隐身，并提升攻击速度！

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |  ----   |  ----   |  ----  |       ---      |
|   1  |    40   |    40   |   110  |        6       |
|   2  |    43   |    43   |   135  |        7       |
|   3  |    47   |    47   |   160  |        8       |
|   4  |    50   |    50   |   185  |        9       |
|   5  |    54   |    54   |   220  |       10       |
|   6  |    59   |    59   |   255  |       11       |
|   7  |    63   |    63   |   290  |       12       |
|   8  |    68   |    68   |   325  |       13       |
|   9  |    72   |    72   |   360  |       14       |
|  10  |    76   |    76   |   395  |       15       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/20">
        <TimelineRow>所有等级野蛮箭手的伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/13">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>