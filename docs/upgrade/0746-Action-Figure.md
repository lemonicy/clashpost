---
title: "部落冲突 coc 动作人偶装备升级数据"
navTitle: "动作人偶"
shownTitle: "动作人偶"
description: "动作人偶是弓箭女皇的第三件史诗装备，它在 2025 年 4 月的是敌是友活动中首次开放购买。动作人偶装备可以在使用技能时召唤一个霸天巨人，其各项数据与同名临时兵种相同。霸天巨人的等级取决于装备等级。"
module: upgrade-home
imgFolder: home_heroes/0746
wiki: https://clashofclans.fandom.com/wiki/Action_Figure
canonical: /upgrade/0746-Action-Figure
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Action_Figure_info.png" :imgAlt="$frontmatter.navTitle" description="召唤霸天巨人与弓箭女皇并肩作战。" />

<SmallTitle>说明</SmallTitle>

1. 动作人偶是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的第三件史诗装备，它在 2025 年 4 月的是敌是友活动中首次开放购买。
2. 动作人偶装备可以在使用技能时召唤一个 [霸天巨人](/upgrade/0e17-Giant-Giant)，其各项数据与同名临时兵种相同。霸天巨人的等级取决于装备等级。
3. 带上动作人偶装备后，弓箭女皇使用技能时可以隐形一秒，因此可以重置防御建筑的攻击。
4. 除了以上能力，动作人偶装备还可以让弓箭女皇拥有更高的每秒伤害和生命值，还可以让弓箭女皇拥有自我疗愈能力。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="史诗" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "icon": "Shiny_Ore",
        "noGoldPass": true
    },
    {
        "column": 6,
        "type": "cost",
        "icon": "Glowy_Ore",
        "noGoldPass": true
    },
    {
        "column": 7,
        "type": "cost",
        "icon": "Starry_Ore",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |霸天巨人<br>等级|英雄<br>每秒血量恢复|英雄<br>每秒伤害增加|英雄<br>生命值增加|升级费用|升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |      ---      |         ---        |        ---        |       ---      |  ---   |   --- |  ---  |       ---       |      ---      |
|   1  |       1       |           6        |         28        |       159      |    \   |   \   |   \   |        1        |       8       |
|   2  |       1       |           8        |         32        |       184      |   120  |   -   |   -   |        1        |       8       |
|   3  |       2       |          10        |         36        |       200      |   240  |   20  |   -   |        1        |       8       |
|   4  |       2       |          12        |         40        |       217      |   400  |   -   |   -   |        1        |       8       |
|   5  |       2       |          14        |         44        |       236      |   600  |   -   |   -   |        1        |       8       |
|   6  |       3       |          16        |         48        |       254      |   840  |  100  |   -   |        1        |       8       |
|   7  |       3       |          18        |         53        |       276      |  1120  |   -   |   -   |        1        |       8       |
|   8  |       3       |          20        |         58        |       298      |  1440  |   -   |   -   |        1        |       8       |
|   9  |       4       |          22        |         63        |       318      |  1800  |  200  |   10  |        1        |       8       |
|  10  |       4       |          24        |         68        |       339      |  1900  |   -   |   -   |        1        |       8       |
|  11  |       4       |          26        |         74        |       359      |  2000  |   -   |   -   |        1        |       8       |
|  12  |       5       |          28        |         80        |       380      |  2100  |  400  |   20  |        1        |       8       |
|  13  |       5       |          30        |         84        |       399      |  2200  |   -   |   -   |        3        |      10       |
|  14  |       5       |          31        |         89        |       424      |  2300  |   -   |   -   |        3        |      10       |
|  15  |       6       |          32        |         94        |       448      |  2400  |  600  |   30  |        3        |      10       |
|  16  |       6       |          33        |         98        |       473      |  2500  |   -   |   -   |        5        |      12       |
|  17  |       6       |          34        |        102        |       498      |  2600  |   -   |   -   |        5        |      12       |
|  18  |       7       |          35        |        106        |       522      |  2700  |  600  |   50  |        5        |      12       |
|  19  |       7       |          36        |        109        |       544      |  2800  |   -   |   -   |        7        |      14       |
|  20  |       7       |          36        |        112        |       565      |  2900  |   -   |   -   |        7        |      14       |
|  21  |       8       |          37        |        116        |       586      |  3000  |  600  |  100  |        7        |      14       |
|  22  |       8       |          37        |        119        |       608      |  3100  |   -   |   -   |        8        |      15       |
|  23  |       8       |          38        |        122        |       628      |  3200  |   -   |   -   |        8        |      15       |
|  24  |       9       |          38        |        125        |       649      |  3300  |  600  |  120  |        8        |      15       |
|  25  |       9       |          39        |        128        |       671      |  3400  |   -   |   -   |        9        |      16       |
|  26  |       9       |          39        |        132        |       692      |  3500  |   -   |   -   |        9        |      16       |
|  27  |      10       |          40        |        135        |       713      |  3600  |  600  |  150  |        9        |      16       |
</UnitTable>

注：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>推出记录</SmallTitle>

<UnitTable>

| 推出时间 | 活动名称 |     价格      | 购买渠道 |
|   ---   |   ---   |      ---      |    ---   |
| 2025/04 | 是敌是友 | 3 100 冠军奖章 |   商人   |
| 2025/08 | 水花大赛 | 3 100 水花奖章 |   商人   |
| 2026/02 | 智慧勇士 | 3 100 愤怒奖章 |   商人   |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/04/08">
        <TimelineRow>新装备：动作人偶。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>