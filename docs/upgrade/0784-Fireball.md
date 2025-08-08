---
title: "部落冲突 coc 巨大火球装备升级数据"
navTitle: "巨大火球"
shownTitle: "巨大火球"
description: "巨大火球是大守护者的第一件史诗装备，它在 2024 年 3 月的超级飞龙大舞台活动中首次开放购买。巨大火球装备可以让大守护者在开启技能时投掷一个巨大的火球，造成巨大的溅射伤害。该火球会瞄准最近的防御建筑，没有距离限制。"
module: upgrade-home
imgFolder: home_heroes/0784
wiki: https://clashofclans.fandom.com/wiki/Fireball
canonical: /upgrade/0784-Fireball
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Fireball_info.png" :imgAlt="$frontmatter.navTitle" description="向距离最近的防御建筑扔出一个巨大的爆炸火球。" />

<SmallTitle>说明</SmallTitle>

1. 巨大火球是 [大守护者](/upgrade/0202-Grand-Warden) 的第一件史诗装备，它在 2024 年 3 月的超级飞龙大舞台活动中首次开放购买。
2. 巨大火球装备可以让大守护者在开启技能时投掷一个巨大的火球，造成巨大的溅射伤害。该火球会瞄准最近的防御建筑，没有距离限制。如果没有防御建筑，则火球会瞄准非防御建筑，甚至是敌方部队。
   - 火球不仅可以对建筑造成伤害，也可以对敌方部队造成伤害。
   - 如果火球击中建筑物、地面部队，又或者未击中任何目标，则火球只能对地面目标造成伤害，只有在火球瞄准空中部队的时候才能对空中部队造成伤害。也就是说，火球不能同时击中地面目标和空中目标。
   - 如果所有的目标都被 [隐形法术](/upgrade/0106-Invisibility-Spell) 或 [蔓生法术](/upgrade/0185-Overgrowth-Spell) 覆盖，则火球会飞到地图最上方的角落。角落的这次爆炸仍然会造成溅射伤害。
3. 除了扔火球外，这个装备还可以增加大守护者的每秒伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
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
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |火球的<br>溅射半径|火球的伤害|英雄每秒<br>伤害增加|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---       |    ---   |        ---       |   ---  |  ---  |  ---  |       ---       |      ---      |
|   1  |      4 格      |   1500   |         21       |    \   |   \   |   \   |        1        |      11       |
|   2  |      4 格      |   1500   |         24       |   120  |   -   |   -   |        1        |      11       |
|   3  |      4 格      |   1700   |         27       |   240  |   20  |   -   |        1        |      11       |
|   4  |      4 格      |   1700   |         30       |   400  |   -   |   -   |        1        |      11       |
|   5  |      4 格      |   1800   |         33       |   600  |   -   |   -   |        1        |      11       |
|   6  |      4 格      |   1950   |         36       |   840  |  100  |   -   |        1        |      11       |
|   7  |      4 格      |   1950   |         40       |  1120  |   -   |   -   |        1        |      11       |
|   8  |      4 格      |   2050   |         44       |  1440  |   -   |   -   |        1        |      11       |
|   9  |      5 格      |   2200   |         47       |  1800  |  200  |   10  |        1        |      11       |
|  10  |      5 格      |   2200   |         51       |  1900  |   -   |   -   |        1        |      11       |
|  11  |      5 格      |   2350   |         56       |  2000  |   -   |   -   |        1        |      11       |
|  12  |      5 格      |   2650   |         60       |  2100  |  400  |   20  |        1        |      11       |
|  13  |      5 格      |   2650   |         63       |  2200  |   -   |   -   |        3        |      11       |
|  14  |      5 格      |   2750   |         67       |  2300  |   -   |   -   |        3        |      11       |
|  15  |      5 格      |   3100   |         71       |  2400  |  600  |   30  |        3        |      11       |
|  16  |      5 格      |   3100   |         74       |  2500  |   -   |   -   |        5        |      12       |
|  17  |      5 格      |   3250   |         77       |  2600  |   -   |   -   |        5        |      12       |
|  18  |      5 格      |   3400   |         80       |  2700  |  600  |   50  |        5        |      12       |
|  19  |      5 格      |   3400   |         82       |  2800  |   -   |   -   |        7        |      14       |
|  20  |      5 格      |   3500   |         84       |  2900  |   -   |   -   |        7        |      14       |
|  21  |      5 格      |   3650   |         87       |  3000  |  600  |  100  |        7        |      14       |
|  22  |      5 格      |   3650   |         89       |  3100  |   -   |   -   |        8        |      15       |
|  23  |      5 格      |   3750   |         92       |  3200  |   -   |   -   |        8        |      15       |
|  24  |      6 格      |   3900   |         94       |  3300  |  600  |  120  |        8        |      15       |
|  25  |      6 格      |   3900   |         96       |  3400  |   -   |   -   |        9        |      16       |
|  26  |      6 格      |   3950   |         99       |  3500  |   -   |   -   |        9        |      16       |
|  27  |      6 格      |   4100   |        101       |  3600  |  600  |  150  |        9        |      16       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>推出记录</SmallTitle>

<UnitTable>

| 推出时间 |    活动名称   |     价格       | 购买渠道 |
|   ---   |      ---      |      ---      |    ---   |
| 2024/03 | 超级飞龙大舞台 | 3 100 超级奖章 |   商人   |
| 2024/12 |   大闹玩具店   | 3 100 玩具奖章 |   商人   |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>18 ~ 23 级巨大火球的溅射半径减小。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/03/11">
        <TimelineRow>新装备：巨大火球。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
