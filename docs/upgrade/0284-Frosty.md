---
title: "部落冲突 coc 冰牙（霜牙）升级数据"
navTitle: "冰牙"
shownTitle: "冰牙（霜牙）"
description: "冰牙是最冷酷的战宠......又冷又酷。它不仅能呼出冰冷的气息减缓敌人的速度，还能释放出一群小冰怪，进一步减缓敌方防御建筑的攻击速度，帮助它的英雄驰骋战场。"
module: upgrade-home
imgFolder: home_heroes/0284
wiki: https://clashofclans.fandom.com/wiki/Frosty
canonical: /upgrade/0284-Frosty
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Frosty_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Frosty_field.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 冰牙的技能（冷酷伙伴）：冰牙每隔一段时间都会生成小冰怪攻击附近的防御建筑。
2. 冰牙和小冰怪的攻击可以减缓敌方防御建筑、部队、英雄的攻速。
3. 冰牙和小冰怪攻击时的减速效果不能叠加。
4. 冰牙和小冰怪的减速效果可以延后单头 [地狱塔](/upgrade/030a-Inferno-Tower) 和 [地狱飞龙](/upgrade/0604-Inferno-Dragon) 达到最高伤害的时间。
5. 如果主人被召回或者阵亡，冰牙会变成一个自由单位，此时没有偏好。

<SmallTitle>冰牙的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="距离英雄 4.5 格内的目标" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
</UnitProperties>

<SmallTitle>小冰怪的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次<sup>*</sup>" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
    <UnitProperty pKey="每秒伤害" pValue="15" />
    <UnitProperty pKey="每次伤害" pValue="15" />
    <UnitProperty pKey="生命值" pValue="450" />
    <UnitProperty pKey="攻击减速持续时间" pValue="4 秒" />
    <UnitProperty pKey="减速比例" pValue="50% 攻速<br>50% 移速" />
</UnitProperties>

\* 虽然说小冰怪的攻击速度是一秒一次，但实际上小冰怪攻击一次之后就死了，而小冰怪的首次攻击时机为到达目标后 0.5 秒。这样一来，小冰怪的每秒伤害等于每次伤害，但造成了攻速更快的观感。

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

| 等级 | 每秒伤害 |每次伤害|小冰怪<br>数量| 生命值 | 升级花费 | 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |  ---  |     ---     |  ---   |   ----  |   ---   |   ---   |        ---        |      ----     |
|   1  |    94   | 112.8 |      1      |  2350  |      \  |   \     |         |         5         |       15      |
|   2  |    98   | 117.6 |      1      |  2450  |   180k  |   3     |         |         5         |       15      |
|   3  |   102   | 122.4 |      1      |  2550  |   190k  |   4     |         |         5         |       15      |
|   4  |   106   | 127.2 |      1      |  2650  |   195k  |   5     |         |         5         |       15      |
|   5  |   110   | 132   |      2      |  2800  |   200k  |   5,12  |         |         5         |       15      |
|   6  |   114   | 136.8 |      2      |  2900  |   210k  |   6     |         |         5         |       15      |
|   7  |   118   | 141.6 |      2      |  3000  |   215k  |   6,12  |         |         5         |       15      |
|   8  |   122   | 146.2 |      2      |  3100  |   225k  |   7     |         |         5         |       15      |
|   9  |   126   | 151.2 |      2      |  3200  |   230k  |   7,12  |         |         5         |       15      |
|  10  |   130   | 156   |      2      |  3300  |   240k  |   8     |         |         5         |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2、4 ~ 10 级冰牙的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>所有等级冰牙的升级花费降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>游戏新增 15 本，可解锁四个新宠物，冰牙是其中之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>