---
title: "部落冲突 coc 巨矛投手（粉胖）升级数据"
navTitle: "巨矛投手"
shownTitle: "巨矛投手（粉胖）"
description: "这位力大无穷的投手目标明确，志在必得！他会从远处向敌人和防御建筑投掷威力十足的长矛。他哪来那么大力气？秘诀就在于他那浓密的胡须！"
module: upgrade-home
imgFolder: home_tech/0011
wiki: https://clashofclans.fandom.com/wiki/Thrower
canonical: /upgrade/0011-Thrower
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Thrower_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Thrower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Thrower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Thrower3.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="16" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="6 格" />
    <UnitProperty pKey="所需训练营等级" pValue="18" />
    <UnitProperty pKey="所需大本等级" pValue="16" />
    <UnitProperty pKey="训练时间" pValue="190" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ---   |  ---- |    ---  |     ---   |     ---     |   ----    |
|   1  |    180   |   450   |  1800 |      \  |      \    |       1     |     16    |
|   2  |    190   |   475   |  1950 |    21M  |     14    |      14     |     16    |
|   3  |    200   |   500   |  2100 |    23M  |     16    |      15     |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 16 本新增巨矛投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>