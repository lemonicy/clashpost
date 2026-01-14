---
title: "部落冲突 coc 远袭者升级数据"
navTitle: "远袭者"
shownTitle: "远袭者"
description: "动动脑子！远袭者能从颅骨发射远程爆炸弩箭，让入侵者满满当当地尝到溅射伤害的滋味。"
module: upgrade-home
imgFolder: home_th/0840
wiki: https://clashofclans.fandom.com/wiki/Longshot
canonical: /upgrade/0840-Longshot
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Longshot_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Longshot1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

- 远袭者的特殊技能（致命一击）：被击倒后会造成爆炸伤害。
    - 这个爆炸没有与 [巨型炸弹](/upgrade/0383-Giant-Bomb) 类似的击退效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.8 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="11 格" />
    <UnitProperty pKey="警戒半径" pValue="19 格<sup>①</sup>" />
    <UnitProperty pKey="巡逻半径" pValue="17 格<sup>②</sup>" />
    <UnitProperty pKey="死亡伤害" pValue="1000" />
    <UnitProperty pKey="死亡伤害半径" pValue="3.5 格" />
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
|  --- |   ---   |   ---   |   ---  |   ---   |   ---   |     ---     |
|   1  |   330   |   594   |   7000 |     \   |    \    |      18     |
|   2  |   360   |   648   |   8000 |   18M   |    7    |      18     |
|   3  |   390   |   702   |   9000 |   22M   |    9    |      18     |
|   4  |   420   |   756   |  10000 |   26M   |   11    |      18     |
|   5  |   450   |   810   |  11000 |   28M   |   13    |      18     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/01/12">
        <TimelineRow>攻击距离从 12 格减少到 11 格。</TimelineRow>
        <TimelineRow>巡逻半径从 18 格减少到 17 格。</TimelineRow>
        <TimelineRow>警戒半径从 20 格减少到 19 格。</TimelineRow>
        <TimelineRow>普攻伤害半径从 1.5 格减少到 1 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/17">
        <TimelineRow>推出守卫系统，远袭者是第一批推出的守卫。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>