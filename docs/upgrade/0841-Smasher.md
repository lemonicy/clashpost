---
title: "部落冲突 coc 粉碎者升级数据"
navTitle: "粉碎者"
shownTitle: "粉碎者"
description: "这位重型守卫会对地面和空中部队造成溅射伤害。粉碎者是个输不起的暴躁角色——如果大本营被摧毁，他就会勃然大怒；如果他自己被击倒，他也会留下愤怒的余威。"
module: upgrade-home
imgFolder: home_th/0841
wiki: https://clashofclans.fandom.com/wiki/Smasher
canonical: /upgrade/0841-Smasher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Smasher_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Smasher1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

- 粉碎者的特殊技能（败局狂怒）：大本营被摧毁会进入狂暴状态，这种状态会持续到他被击倒为止。另外，粉碎者在被击倒后会释放一个狂暴法术，其效果与 [狂暴法术塔](/upgrade/0311-Spell-Tower) 相同，可强化防御建筑和防守方单位。
    - 无论粉碎者被击倒前是否进入了狂暴状态，这个狂暴法术都会释放。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="2.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.25 格" />
    <UnitProperty pKey="警戒半径" pValue="12 格<sup>①</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="14 格<sup>②</sup>" />
    <UnitProperty pKey="狂暴状态下移动速度提升" pValue="1.5 格/秒" />
    <UnitProperty pKey="狂暴状态下伤害提升" pValue="60%" />
    <UnitProperty pKey="所需大本等级" pValue="18" />
</UnitProperties>

① （待证实）如果敌军进入这个范围，守卫会看向部队的方向，准备反击。<br>
② （待证实）在没有敌人的情况下，守卫也会走动，而这个走动的范围叫巡逻半径。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "noGoldPass": true,
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "noGoldPass": true,
    }
];
</script>


<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 升级时间 | 所需大本等级 |
|  --- |   ---   |    ---  |   ---  |   ---   |   ---   |     ---     |
|   1  |   500   |    900  |  12000 |     \   |    \    |      18     |
|   2  |   550   |    990  |  13000 |   18M   |    7    |      18     |
|   3  |   600   |   1080  |  14000 |   22M   |    9    |      18     |
|   4  |   650   |   1170  |  15000 |   26M   |   11    |      18     |
|   5  |   700   |   1260  |  16000 |   28M   |   13    |      18     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/12">
        <TimelineRow>巡逻半径从 10 格增加到 12 格。</TimelineRow>
        <TimelineRow>警戒半径从 12 格增加到 14 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/17">
        <TimelineRow>推出守卫系统，粉碎者是第一批推出的守卫。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>