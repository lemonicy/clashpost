---
title: "部落冲突 coc 愤怒水母升级数据"
navTitle: "愤怒水母"
shownTitle: "愤怒水母"
description: "这团愤怒的水母在村庄附近等得不耐烦了，它渴望一场酣畅淋漓的战斗。在战斗中，它会说服其跟随的英雄优先攻击防御建筑，然后再分头作战。"
module: upgrade-home
imgFolder: home_heroes/0289
wiki: https://clashofclans.fandom.com/wiki/Angry_Jelly
canonical: /upgrade/0289-Angry-Jelly
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Angry_Jelly_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Angry_Jelly_image.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 愤怒水母的技能（洗脑，又称心灵控制）：让跟随的英雄在部署后的一段时间内优先攻击防御建筑。
2. 水母是飞行单位，可以对防御建筑进行远程攻击。
3. 水母处于跟随状态时不会成为目标或受到伤害，也不会触发陷阱。
4. 当水母跟随的英雄被击倒，或英雄被 [回溯法术](/upgrade/0107-Recall-Spell) 召回，水母会变成普通部队，可以成为目标以及受到伤害，也可以触发陷阱了。
5. 如果 [愤怒水母](/upgrade/0289-Angry-Jelly) 跟随的英雄未被击倒，则不占用回溯法术的空间。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="英雄的目标" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.75 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="5 格" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="10" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    },
    {
        "column": 7,
        "type": "dailyCost",
        "icon": "Dark_Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |技能持续<br>时间 (秒)| 生命值| 升级花费| 升级时间| 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |   ---   |         ---        |  ---  |  ----  |   ---   |   ---   |        ---       |      ---      |
|   1  |   112   |   84    |          25        |  1450 |     \  |   \     |         |         10       |      16       |
|   2  |   121   |   90.75 |          25        |  1525 |  150k  |   3     |         |         10       |      16       |
|   3  |   130   |   97.5  |          25        |  1600 |  160k  |   4     |         |         10       |      16       |
|   4  |   139   |  104.25 |          25        |  1675 |  170k  |   5     |         |         10       |      16       |
|   5  |   148   |  111    |          30        |  1750 |  180k  |   6     |         |         10       |      16       |
|   6  |   157   |  117.75 |          30        |  1825 |  190k  |   7     |         |         10       |      16       |
|   7  |   166   |  124.5  |          30        |  1900 |  200k  |   8     |         |         10       |      16       |
|   8  |   175   |  131.25 |          30        |  1975 |  210k  |   8     |         |         10       |      16       |
|   9  |   184   |  138    |          30        |  2050 |  220k  |   8     |         |         10       |      16       |
|  10  |   193   |  144.75 |          35        |  2125 |  230k  |   8     |         |         10       |      16       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 10 级愤怒水母的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10 级愤怒水母的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>新战宠：愤怒水母。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>