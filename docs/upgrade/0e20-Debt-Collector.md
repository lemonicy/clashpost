---
title: "部落冲突 coc 收债哥布林升级数据"
navTitle: "收债哥布林"
shownTitle: "收债哥布林"
description: "收债哥布林贪婪无比，喜欢直奔资源建筑，夺取的战利品数量远超普通哥布林。而且，额外夺取的战利品并非来自防守方，而是由收债哥布林自己变出来的！"
module: upgrade-temp
imgFolder: temp/0e20
wiki: https://clashofclans.fandom.com/wiki/Debt_Collector
canonical: /upgrade/0e20-Debt-Collector
---

- *如想查看收债哥布林的设计原型，请访问：[哥布林](/upgrade/0003-Goblin)。*
- *如想查看哥布林的强化版本，请访问：[隐秘哥布林（超哥）](/upgrade/0601-Sneaky-Goblin)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Debt_Collector_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Debt_Collector1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 收债哥布林在 2025 年 6 月的黑暗交易活动中作为临时兵种推出，玩家获得 100 哥布林钞票（任务点数）后即可解锁。
2. 收债哥布林对资源类建筑造成 4 倍伤害，并且可以获得双倍资源。这些额外获得的资源是由游戏生成，不会在防守方的资源建筑中扣除。


<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="资源类建筑（4 倍伤害）" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 对资源建筑的<br>每次伤害 | 生命值 | 所需大本等级 |
| ---- |   ---   |   ---   |           ----         |  ---   |     ---     |
|   1  |    30   |    36   |           144          |   80   |      6      |
|   2  |    35   |    42   |           168          |  100   |      7      |
|   3  |    40   |    48   |           192          |  120   |      8      |
|   4  |    45   |    54   |           216          |  140   |      9      |
|   5  |    50   |    60   |           240          |  160   |     10      |
|   6  |    55   |    66   |           264          |  180   |     11      |
|   7  |    60   |    72   |           288          |  200   |     12      |
|   8  |    65   |    78   |           312          |  220   |     13      |
|   9  |    70   |    84   |           336          |  240   |     14      |
|  10  |    75   |    90   |           360          |  260   |     15      |
|  11  |    80   |    96   |           384          |  280   |     16      |
|  12  |    85   |   102   |           408          |  300   |     17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/10">
        <TimelineRow>该兵种第 1 次推出，有效期至 2025/07/01。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>