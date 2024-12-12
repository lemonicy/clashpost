---
title: "部落冲突 coc 蛮羊骑士升级数据"
navTitle: "蛮羊骑士"
shownTitle: "蛮羊骑士"
description: "姜饼蛮羊骑士坚毅无比，即使战败也“蛮”不在乎。这对甜点组合是自奥利奥和牛奶以来的最佳搭档，城墙在她面前就像烤焦的饼干一样，一碰就碎。"
module: upgrade-temp
imgFolder: temp/0e08
wiki: https://clashofclans.fandom.com/wiki/Ram_Rider
canonical: /upgrade/0e08-Ram-Rider
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ram_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级 (2023 版)" imgSrc="Ram_Rider1.png" />
        <UnitImg imgTitle="所有等级 (2022 版)" imgSrc="Ram_Rider_2022_lvl1.png" />
        <UnitImg imgTitle="宣传图 (2022 版)" imgSrc="Ram_Rider_2022_thumb.png" imgHd="Ram_Rider_2022.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 蛮羊骑士在 2022 年 12 月作为圣诞节的临时兵种首次推出，当时的兵种介绍是这样的：蛮羊骑士忙着到处传递欢乐的节日气氛。完成第一次冲锋后，她会跃过城墙朝防御建筑扔铃铛。
2. 2023 年 12 月，它在饼干大作战活动中回归，并且更新了形象。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="2.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="10" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="特殊技能" pValue="蛮羊冲锋！<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="60" trainingSystem="2022" />
</UnitProperties>

\* 冲向她看到的第一个防御建筑，并摧毁挡道的城墙！

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|等级<sup>#</sup>| 冲撞伤害 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
|       ---      |  ----   |  ----   |   ----   |  ----  |       ---      |
|        3       |   220   |   125   |    125   |   700  |        8       |
|        4       |   300   |   150   |    150   |   900  |        9       |
|        5       |   400   |   175   |    175   |  1200  |       10       |
|        6       |   500   |   200   |    200   |  1350  |       11       |
|        7       |   600   |   225   |    225   |  1650  |       12       |
|        8       |   700   |   250   |    250   |  1750  |       13       |
|        9       |   800   |   275   |    275   |  1900  |       14       |
|       10       |   900   |   300   |    300   |  2100  |       15       |
|       11       |  1000   |   325   |    325   |  2300  |       16       |
</UnitTable>

\# 这里对应的是游戏内的等级，蛮羊骑士是从 3 级起步的，没有 1 到 2 级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/12">
        <TimelineRow>该兵种在饼干大作战活动中以不同的形象回归。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>该兵种第 1 次推出，有效期至 2022/12/29.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>