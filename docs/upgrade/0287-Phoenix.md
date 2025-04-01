---
title: "部落冲突 coc 凤凰升级数据"
navTitle: "凤凰"
shownTitle: "凤凰"
description: "真正的朋友会在你遇到困难时及时出手相助。战斗开始时，凤凰只是一颗蛋，帮不上什么忙。但当它跟随的英雄可能被击倒时，它会破壳而出，愤怒地攻击附近的敌人，还能让英雄暂时免疫伤害。"
module: upgrade-home
imgFolder: home_heroes/0287
wiki: https://clashofclans.fandom.com/wiki/Phoenix
canonical: /upgrade/0287-Phoenix
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Phoenix_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="凤凰" imgSrc="Phoenix_field.png" />
        <UnitImg imgTitle="凤凰蛋" imgSrc="Phoenix_Egg.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 凤凰的技能（浴火重生）：在跟随的英雄快被击倒时，凤凰会破壳而出，让英雄暂时免疫伤害。
2. 凤凰在主人阵亡前是一颗蛋，不会攻击，不会受伤，也不能提供任何帮助。当主人阵亡时，凤凰会复活主人并使其无敌几秒钟。时间过后，英雄会强制阵亡。
3. 当凤凰没有破壳而出的时候，它的人口数为零，这个数据主要用于计算 [回溯法术](/upgrade/0107-Recall-Spell) 的召回。特别地，如果召回凤凰的主人，即使凤凰蛋不在回溯法术范围内，也会被强制跟随英雄一起被召回。
4. 被凤凰复活的英雄不能以任何方式回复血量，不会被 [天使](/upgrade/0007-Healer) 锁定，[咏王](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备也无法延长其复活时间。一旦复活时间结束，英雄必定会阵亡，凤凰会继续战斗。
5. 凤凰和主人都可以被单独召回，主人被召回后无敌时间会暂停，而凤凰的无敌时间不会暂停。
6. 如果主人被召回或阵亡，凤凰会变成一个自由单位，此时没有偏好目标。
7. 在凤凰的无敌效果结束后，你可以对该英雄使用 [复苏法术](/upgrade/0108-Revive-Spell)。

<SmallTitle>凤凰的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="英雄的目标" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="所需战宠小屋等级" pValue="8" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
</UnitProperties>

<SmallTitle>凤凰蛋的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="跟随距离" pValue="2 格" />
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

| 等级 | 每秒伤害 | 每次伤害 |无敌秒数| 生命值| 升级花费 | 升级时间 | 日均耗油 |所需战宠<br>小屋等级|所需<br>大本等级|
| ---- |   ---   |   ---   |  ---  |  ---  |   ---   |   ---   |   ---   |        ---        |     ----     |
|   1  |   178   |   178   |   6   |  3120 |     \   |   \     |         |         8         |      15      |
|   2  |   186   |   186   |   6   |  3240 |    80k  |   1,12  |         |         8         |      15      |
|   3  |   194   |   194   |   6   |  3360 |    95k  |   2     |         |         8         |      15      |
|   4  |   202   |   202   |   6   |  3480 |   110k  |   3     |         |         8         |      15      |
|   5  |   210   |   210   |   7   |  3600 |   125k  |   4     |         |         8         |      15      |
|   6  |   218   |   218   |   7   |  3720 |   140k  |   4,12  |         |         8         |      15      |
|   7  |   226   |   226   |   7   |  3840 |   155k  |   5     |         |         8         |      15      |
|   8  |   234   |   234   |   7   |  3960 |   170k  |   5,22  |         |         8         |      15      |
|   9  |   242   |   242   |   7   |  4080 |   180k  |   6     |         |         8         |      15      |
|  10  |   250   |   250   |   8   |  4200 |   190k  |   6,12  |         |         8         |      15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 10 级凤凰的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 10 级凤凰的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 10 级凤凰的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>修复使用战宠凤凰的英雄有时不会触发特斯拉电磁塔的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，可解锁四个新宠物，凤凰是其中之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>