---
title: "部落冲突 coc 复苏法术（复活法术）升级数据"
navTitle: "复苏法术"
shownTitle: "复苏法术（复活法术）"
description: "天使的独家秘方！复苏法术能让效果范围内被击倒的英雄恢复一部分生命值，重新回到战斗中。将该法术带入战斗，被击倒且可复苏的英雄上方就会出现一颗漂浮的金色心脏。升级复苏法术，可为英雄恢复更多生命值。"
module: upgrade-home
imgFolder: home_tech/0108
wiki: https://clashofclans.fandom.com/wiki/Revive_Spell
canonical: /upgrade/0108-Revive-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Revive_Spell_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 复苏法术仅在英雄被击倒时有效。如果玩家还有未使用的复苏法术，则被击倒的英雄上方会出现一颗漂浮的金色心脏，表示它们可以重新加入战斗。使用复苏法术后，法术会瞄准有效范围内最近的英雄并复苏，使其恢复大部分生命值。
    - 如果法术有效范围内没有符合条件的英雄，则法术不会生效，会直接浪费掉。
    - 如果法术有效范围内有多个符合条件的英雄，则只对距离法术部署位置最近的英雄有效。
2. 复苏法术可以对同一英雄使用多次。
3. 只有当英雄的自动技能和 [凤凰](/upgrade/0287-Phoenix) 的无敌效果都结束后，你才能对被击倒的英雄使用复苏法术。
    - 英雄的自动技能指的是设置中的“即将被击败时自动使用技能”选项，这个选项默认打开。
5. 如果英雄在使用技能时被击倒，复苏后剩余的技能时间还在。
6. 如果带有战宠的英雄被击倒，则英雄在第一次被击倒时就会与战宠分离，此时战宠会变成独立个体，即使该英雄被复苏，战宠也不会重新跟随。
7. 根据早期的游戏设定，英雄拥有不死之身，为了契合该设定，网站采用“复苏法术”这个翻译，而不使用“复活法术”。

> Heroes are immortal! Unlike other troops, they will not perish in combat. If they are injured, they can simply sleep it off.<br>
> 英雄是不朽的！不同于其他部队，他们不会在战斗结束后化作圣水，当他们受伤了只需睡一觉就会痊愈。<br>
> （摘自官方于 2013 年 1 月在英雄玩法推出之时对英雄的介绍）

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="有效半径" pValue="8 格" />
    <UnitProperty pKey="作用类型" pValue="复活英雄" />
    <UnitProperty pKey="作用目标" pValue="我方英雄" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="8" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,18000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |复苏后<br>回复的血量| 升级花费 |  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |        ---       |    ---   |    ---    |       ----      |      ----    |
|   1  |        60%       |     \    |      \    |         1       |       15     |
|   2  |        65%       |    18M   |      8    |        13       |       15     |
|   3  |        70%       |    20M   |     12    |        14       |       16     |
|   4  |        75%       |    22M   |     16    |        15       |       17     |
</UnitTable>


<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/10/06">
        <TimelineRow>2 ~ 3 级复苏法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 15 本新增复苏法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>