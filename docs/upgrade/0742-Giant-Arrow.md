---
title: "部落冲突 coc 巨型箭矢（穿云箭）装备升级数据"
navTitle: "巨型箭矢"
shownTitle: "巨型箭矢（穿云箭）"
description: "巨型箭矢是弓箭女皇的一件普通装备。巨型箭矢装备可以让女王在使用技能时发射一支非常大的箭，这支箭可以穿透整个阵型。除了射出一支巨大的箭之外，巨型箭矢装备还可以给女王提供额外的每秒伤害和生命值。"
module: upgrade-home
imgFolder: home_heroes/0742
wiki: https://clashofclans.fandom.com/wiki/Giant_Arrow
canonical: /upgrade/0742-Giant-Arrow
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Arrow_info.png" :imgAlt="$frontmatter.navTitle" />

<SmallTitle>说明</SmallTitle>

1. 巨型箭矢是 [弓箭女皇](/upgrade/0201-Archer-Queen) 的一件普通装备。
2. 巨型箭矢装备可以让女王在使用技能时发射一支非常大的箭，这支箭（巨箭）可以穿透整个阵型，类似于夜世界的 [巨型加农炮](/upgrade/110a-Giant-Cannon)。
   - 巨箭的行进方向取决于女王使用技能时的目标位置以及女王自身的位置。沿着女王和目标的中心点画一条射线，这条线就是巨箭的路径。如果使用技能时场上所有的目标都被 [隐形法术](/upgrade/0106-Invisibility-Spell) 隐藏了，则巨箭的方向就是女王正对着的方向。
   - 如果敌方部队正好在巨箭的路径上，则地面部队和空中部队都可以被击中。
   - [狂暴法术](/upgrade/0102-Rage-Spell) 不能提升巨箭的伤害。
3. 除了射出一支巨大的箭之外，巨型箭矢装备还可以给女王提供额外的每秒伤害和生命值。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能类型" pValue="主动技能" />
    <UnitProperty pKey="装备稀有度" pValue="普通" />
    <UnitProperty pKey="所需铁匠铺等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="9" />
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

| 等级 |巨箭的伤害|女王的每秒<br>伤害加成|生命值加成| 升级费用|升级费用|所需<br>铁匠铺等级|所需<br>大本等级|
| ---- |   ---   |         ---        |   ---   |    ---  |  ---  |       ---      |       ---      |
|   1  |   750   |          20        |    80   |     \   |   \   |        2       |        9       |
|   2  |   750   |          23        |    93   |    120  |   -   |        2       |        9       |
|   3  |   850   |          27        |   106   |    240  |   20  |        2       |        9       |
|   4  |   850   |          30        |   119   |    400  |   -   |        2       |        9       |
|   5  |   850   |          33        |   133   |    600  |   -   |        2       |        9       |
|   6  |  1000   |          37        |   146   |    840  |  100  |        2       |        9       |
|   7  |  1000   |          40        |   159   |   1120  |   -   |        2       |        9       |
|   8  |  1000   |          43        |   172   |   1440  |   -   |        2       |        9       |
|   9  |  1200   |          50        |   199   |   1800  |  200  |        2       |        9       |
|  10  |  1200   |          59        |   241   |   1900  |   -   |        3       |       10       |
|  11  |  1200   |          68        |   284   |   2000  |   -   |        3       |       10       |
|  12  |  1500   |          77        |   326   |   2100  |  400  |        3       |       10       |
|  13  |  1500   |          86        |   369   |   2200  |   -   |        5       |       12       |
|  14  |  1500   |          96        |   411   |   2300  |   -   |        5       |       12       |
|  15  |  1750   |         105        |   454   |   2400  |  600  |        5       |       12       |
|  16  |  1750   |         114        |   496   |   2500  |   -   |        7       |       14       |
|  17  |  1750   |         123        |   539   |   2600  |   -   |        7       |       14       |
|  18  |  1950   |         132        |   581   |   2700  |  600  |        7       |       14       |
</UnitTable>

注意：如果升级费用中有多种资源，则同时需要多种资源才能升级。

<SmallTitle>更新历史</SmallTitle>

<Timeline>  
    <TimelineItem date="2023/12/12">
        <TimelineRow>游戏新增装备系统，巨型箭矢是第一批推出的装备。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>