---
title: "部落冲突 coc 隐形药水瓶装备升级数据"
navTitle: "隐形药水瓶"
shownTitle: "隐形药水瓶"
description: "隐形药水瓶是弓箭女皇的两件初始装备之一。隐形药水瓶可以使弓箭女皇在技能生效期间短暂隐形。在技能生效期间，弓箭女皇的每次射击伤害会大幅增加。此外，隐形药水瓶还可以为女王提供额外生命值。"
module: upgrade-home
imgFolder: home_heroes/0741
wiki: https://clashofclans.fandom.com/wiki/Invisibility_Vial
canonical: /upgrade/0741-Invisibility-Vial
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Invisibility_Vial_info.png" :imgAlt="$frontmatter.navTitle" description="使弓箭女皇隐身并强化其攻击。" />

<SmallTitle>说明</SmallTitle>

1. 隐形药水瓶是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的两件初始装备之一，另一件是 [弓箭手木偶](/upgrade/0740-Archer-Puppet)。
2. 隐形药水瓶可以使弓箭女皇在技能生效期间短暂隐形。在技能生效期间，弓箭女皇的每次射击伤害会大幅增加。
3. 此外，隐形药水瓶还可以为女王提供额外生命值。
4. 和 [隐形法术](/upgrade/0106-Invisibility-Spell) 类似，隐形药水瓶的隐形效果只是不会被建筑锁定，并非无敌。隐形期间女王仍然会被隐形前已经打出去的子弹打中，也会受到溅射伤害。
   - 如果 [天鹰火炮](/upgrade/030b-Eagle-Artillery) 在隐形前就瞄准了女王，即使使用了隐形药水瓶，女王仍然会被天鹰火炮打中，只有在开火前使用隐形药水瓶才能让天鹰火炮转移目标。
5. 隐形药水瓶生效期间的射击伤害加成可以与 [狂暴法术](/upgrade/0102-Rage-Spell) 叠加。在较高的装备等级下，女王可以迅速摧毁建筑物。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="解锁要求" pValue="有女王即可" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |技能<br>持续时间|技能期间每次<br>射击伤害增加|英雄生命值<br>增加|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---      |           ----           |       ---      |   ---  |  ---  |       ---      |       ---      |
|   1  |     4.2 秒    |            340           |        80      |    \   |   \   |        1       |        8       |
|   2  |     4.2 秒    |            440           |       100      |   120  |   -   |        1       |        8       |
|   3  |     4.8 秒    |            540           |       120      |   240  |   20  |        1       |        8       |
|   4  |     4.8 秒    |            640           |       140      |   400  |   -   |        1       |        8       |
|   5  |     4.8 秒    |            730           |       170      |   600  |   -   |        1       |        8       |
|   6  |     5.4 秒    |            820           |       200      |   840  |  100  |        1       |        8       |
|   7  |     5.4 秒    |            920           |       250      |  1120  |   -   |        1       |        8       |
|   8  |     5.4 秒    |           1020           |       300      |  1440  |   -   |        1       |        8       |
|   9  |     6.0 秒    |           1120           |       340      |  1800  |  200  |        1       |        8       |
|  10  |     6.0 秒    |           1220           |       380      |  1900  |   -   |        3       |       10       |
|  11  |     6.0 秒    |           1310           |       420      |  2000  |   -   |        3       |       10       |
|  12  |     6.6 秒    |           1370           |       460      |  2100  |  400  |        3       |       10       |
|  13  |     6.6 秒    |           1430           |       500      |  2200  |   -   |        5       |       12       |
|  14  |     6.6 秒    |           1490           |       540      |  2300  |   -   |        5       |       12       |
|  15  |     7.2 秒    |           1560           |       580      |  2400  |  600  |        5       |       12       |
|  16  |     7.2 秒    |           1620           |       620      |  2500  |   -   |        7       |       14       |
|  17  |     7.2 秒    |           1680           |       660      |  2600  |   -   |        7       |       14       |
|  18  |     7.8 秒    |           1740           |       700      |  2700  |  600  |        7       |       14       |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>装备的初始等级</SmallTitle>

在 2023 年 12 月装备系统发布时，已解锁弓箭女皇的玩家会有一个初始的装备等级，并且不需要解锁铁匠铺。装备等级与玩家的英雄等级相关，具体如下表。

<Table maxWidth="25rem">

| 弓箭女皇等级 | 隐形药水瓶等级 |
|     ---     |      ---     |
|    1 - 10   |       1      |
|   11 - 20   |       2      |
|   21 - 25   |       3      |
|   26 - 30   |       4      |
|   31 - 35   |       5      |
|   36 - 40   |       6      |
|   41 - 45   |       7      |
|   46 - 50   |       8      |
|   51 - 55   |       9      |
|   56 - 60   |      10      |
|   61 - 65   |      11      |
|   66 - 70   |      12      |
|   71 - 75   |      13      |
|   76 - 80   |      14      |
|   81 - 90   |      15      |
</Table>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>现在 8 本就可以解锁弓箭女皇了，该页面的部分信息需要同步更改。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，隐形药水瓶是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>