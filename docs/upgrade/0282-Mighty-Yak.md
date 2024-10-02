---
title: "部落冲突 coc 大牦（牛）升级数据"
navTitle: "大牦"
shownTitle: "大牦（牛）"
description: "大牦像攻城机器一样坚实，有着不撞倒城墙不罢休的毅力。大牦会在跟随的英雄被击倒时陷入狂怒。"
module: upgrade-home
imgFolder: home_heroes/0282
wiki: https://clashofclans.fandom.com/wiki/Mighty_Yak
canonical: /upgrade/0282-Mighty-Yak
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Mighty_Yak_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Mighty_Yak_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 大牦的技能（破墙专家）：大牦可对 [城墙](/upgrade/0300-Walls) 造成额外伤害。
2. 如果主人被召回或者阵亡，大牦会变成一个自由单位，此时没有偏好。
3. 主人阵亡时，大牦会获得几秒的狂暴效果。如果狂暴期间被 [回溯法术](/upgrade/0107-Recall-Spell) 召回，狂暴效果不会暂停。
4. 大牦是所有战宠中唯一不能跳墙的，不过凭借其对墙的 20 倍伤害加成，一般的城墙不能对大牦的路线造成太大的影响。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="距离英雄 7 格内的目标" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="伤害加成" pValue="对墙 20 倍伤害" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.2 格" />
    <UnitProperty pKey="重新锁定目标的延时" pValue="0.1 秒" />
    <UnitProperty pKey="主人死亡后的加成" pValue="狂暴法术" />
    <UnitProperty pKey="狂暴持续时间" pValue="8 秒" />
    <UnitProperty pKey="移动速度增加" pValue="2 格/秒" />
    <UnitProperty pKey="伤害增加" pValue="70%" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
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

| 等级 | 每秒伤害 | 每次伤害 |对墙<br>每次伤害| 生命值 | 升级花费 | 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ----  |   ----  |      ----     |  ---   |   ----  |   ---   |   ---   |        ---        |      ----     |
|   1  |    60   |  126    |      2520     |  3750  |      \  |   \     |         |         3         |       14      |
|   2  |    64   |  134.4  |      2688     |  4000  |   120k  |   2     |         |         3         |       14      |
|   3  |    68   |  142.8  |      2856     |  4250  |   130k  |   2,12  |         |         3         |       14      |
|   4  |    72   |  151.2  |      3024     |  4500  |   140k  |   3     |         |         3         |       14      |
|   5  |    76   |  159.6  |      3192     |  4750  |   150k  |   3,12  |         |         3         |       14      |
|   6  |    80   |  168    |      3360     |  4950  |   160k  |   4     |         |         3         |       14      |
|   7  |    84   |  176.4  |      3528     |  5100  |   170k  |   4,12  |         |         3         |       14      |
|   8  |    88   |  184.8  |      3696     |  5250  |   180k  |   5     |         |         3         |       14      |
|   9  |    92   |  193.2  |      3864     |  5400  |   190k  |   5,12  |         |         3         |       14      |
|  10  |    96   |  201.6  |      4032     |  5550  |   200k  |   6     |         |         3         |       14      |
|  11  |   100   |  210    |      4200     |  5700  |   210k  |   6,12  |         |         7         |       15      |
|  12  |   104   |  218.4  |      4368     |  5850  |   220k  |   7     |         |         7         |       15      |
|  13  |   108   |  226.8  |      4536     |  6000  |   230k  |   7,12  |         |         7         |       15      |
|  14  |   112   |  235.2  |      4704     |  6150  |   240k  |   8     |         |         7         |       15      |
|  15  |   116   |  243.6  |      4872     |  6300  |   250k  |   8     |         |         7         |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 13 级大牦的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 15 级大牦的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>4 ~ 10 级大牦的升级时间减少。</TimelineRow>
        <TimelineRow>所有等级大牦的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 11 ~ 15 级大牦。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>移除了大牦攻击时的溅射伤害。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>部落冲突推出战宠，其中莱希、闪枭、大牦、独角是第一批推出的。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>