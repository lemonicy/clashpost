---
title: "部落冲突 coc 霸天巨人升级数据"
navTitle: "霸天巨人"
shownTitle: "霸天巨人"
description: "霸天巨人的力量堪比十个普通巨人，他能对防御建筑造成巨大的溅射伤害。糟糕！如果他的生命值降至一半，则会进入狂暴状态，速度和力量大幅提升。"
module: upgrade-temp
imgFolder: temp_troops/0e17
wiki: https://clashofclans.fandom.com/wiki/Giant_Giant
canonical: /upgrade/0e17-Giant-Giant
---

- *如想查看普通巨人，请访问：[巨人](/upgrade/0002-Giant)。*
- *如想查看巨人的强化版本，请访问：[超级巨人](/upgrade/0602-Super-Giant)。*
- *如想查看夜世界的巨人拳击手，请访问：[夜世界巨人拳击手](/upgrade/1002-Boxer-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Giant_Giant1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 霸天巨人在 2025 年 4 月的是敌是友活动中首次作为临时兵种推出，玩家获得 100 活动门票（任务点数）后即可解锁。
2. 霸天巨人对 [城墙](/upgrade/0300-Walls) 有 2 倍伤害。
3. 当霸天巨人的生命值下降到一半时会进入狂暴状态，狂暴状态下霸天巨人的伤害和移动速度均有提升。狂暴效果持续 20 秒。
4. [弓箭女皇](/upgrade/0201-Archer-Queen) 的 [动作人偶](/upgrade/0746-Action-Figure) 装备召唤的兵种就是霸天巨人，其属性和本页中的霸天巨人相同。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 2)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="50" />
    <UnitProperty pKey="移动速度" pValue="1.65 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="狂暴状态持续时间" pValue="20 秒" />
    <UnitProperty pKey="狂暴状态伤害增加" pValue="50%" />
    <UnitProperty pKey="狂暴状态移动速度增加" pValue="1.5 格/秒" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="6" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|       等级     | 每秒伤害 | 每次伤害 |  生命值 |对应的<br>大本等级|
|       ---      |   ---   |   ---   |    ---  |       ---      |
|  1<sup>*</sup> |   110   |   220   |    800  |        3       |
|  2<sup>*</sup> |   140   |   280   |   1600  |        4       |
|  3<sup>*</sup> |   165   |   330   |   2400  |        5       |
|        4       |   190   |   380   |   3200  |        6       |
|        5       |   240   |   480   |   4800  |        7       |
|        6       |   310   |   620   |   7000  |        8       |
|        7       |   430   |   860   |   9000  |        9       |
|        8       |   550   |  1100   |  12500  |       10       |
|        9       |   620   |  1240   |  15000  |       11       |
|       10       |   700   |  1400   |  18500  |       12       |
| 11<sup>#</sup> |   780   |  1560   |  20000  |       13       |
| 12<sup>#</sup> |   820   |  1640   |  21000  |       14       |
| 13<sup>#</sup> |   860   |  1720   |  22000  |       15       |
| 14<sup>#</sup> |   920   |  1840   |  23500  |       16       |
| 15<sup>#</sup> |   980   |  1960   |  25000  |       17       |
</UnitTable>

\* 1 - 3 级的霸天巨人不能直接训练，需要在活动期间摧毁对手的兵营或者使用弓箭女皇的动作人偶装备才能获得。<br>
\# 11 - 15 级霸天巨人只能在活动期间训练。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/28">
        <TimelineRow>该兵种第 2 次推出，有效期至 2026/02/02.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/04/14">
        <TimelineRow>14 ~ 15 级霸天巨人的每秒伤害和生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/04/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2025/04/29.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>