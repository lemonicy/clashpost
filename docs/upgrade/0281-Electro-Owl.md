---
title: "部落冲突 coc 闪枭（鸟）升级数据"
navTitle: "闪枭"
shownTitle: "闪枭（鸟）"
description: "闪枭可以从相当远的距离发动电击，重创敌军！但它几乎全身都是羽毛，要好好保护它哦！"
module: upgrade-home
imgFolder: home_heroes/0281
wiki: https://clashofclans.fandom.com/wiki/Electro_Owl
canonical: /upgrade/0281-Electro-Owl
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electro_Owl_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Electro_Owl_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 闪枭的技能（电击高手）：闪枭的电击会弹射到附近的另一个目标。
2. 闪枭攻击目标时，闪电可以往附近的目标弹射一次，弹射规律跟 [雷龙](/upgrade/000c-Electro-Dragon) 一样，只不过闪枭只能弹一次。如想了解闪枭的闪电弹射规律，请参考：[闪电传递大揭秘——雷龙、闪枭、超法的闪电链机制讲解](/p/5546){target="_blank"}。
3. 如果主人被召回或者阵亡，闪枭会变成一个自由单位，此时没有偏好。
4. 闪枭自身不触发陷阱，但其他部队触发的陷阱可能会误伤到它。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="英雄的目标" />
    <UnitProperty pKey="伤害类型" pValue="链式攻击" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.4 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="5.5 格" />
    <UnitProperty pKey="连锁距离" pValue="3 格以内" />
    <UnitProperty pKey="连锁衰减" pValue="20%" />
    <UnitProperty pKey="连锁延迟" pValue="0.416 秒" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    },
    {
        "column": 6,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 |  升级花费 | 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ----   |   ----  |  ----  |    ---   |   ---   |   ---   |        ---        |      ----     |
|   1  |    100   |   140   |  1600  |     \    |   \     |         |         2         |       14      |
|   2  |    105   |   147   |  1700  |    30k   |   1,12  |         |         2         |       14      |
|   3  |    110   |   154   |  1800  |    45k   |   2     |         |         2         |       14      |
|   4  |    115   |   161   |  1900  |    60k   |   2,12  |         |         2         |       14      |
|   5  |    120   |   168   |  2000  |    75k   |   4     |         |         2         |       14      |
|   6  |    125   |   175   |  2100  |    90k   |   4,12  |         |         2         |       14      |
|   7  |    130   |   182   |  2200  |   105k   |   5     |         |         2         |       14      |
|   8  |    135   |   189   |  2300  |   120k   |   5,22  |         |         2         |       14      |
|   9  |    140   |   196   |  2400  |   135k   |   6     |         |         2         |       14      |
|  10  |    145   |   203   |  2500  |   150k   |   6,12  |         |         2         |       14      |
|  11  |    150   |   210   |  2600  |   165k   |   7     |         |         9         |       16      |
|  12  |    155   |   217   |  2700  |   180k   |   8     |         |         9         |       16      |
|  13  |    160   |   224   |  2800  |   195k   |   8     |         |         9         |       16      |
|  14  |    165   |   231   |  2900  |   210k   |   8     |         |         9         |       16      |
|  15  |    170   |   238   |  3000  |   225k   |   8     |         |         9         |       16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 14 级闪枭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 11 级闪枭的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 15 级闪枭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 11 ~ 15 级闪枭。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 10 级闪枭的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 15 级闪枭的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>部落冲突推出战宠，其中莱希、闪枭、大牦、独角是第一批推出的。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>