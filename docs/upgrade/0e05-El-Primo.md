---
title: "部落冲突 coc 艾尔普里莫升级数据"
navTitle: "艾尔普里莫"
shownTitle: "艾尔普里莫"
description: "这个神秘的面具侠来历不明，大家只知道他是个大力士，可以用自己的铁拳轻松击垮城墙，为部落疯狂乱斗。"
module: upgrade-temp
imgFolder: temp_troops/0e05
wiki: https://clashofclans.fandom.com/wiki/El_Primo
canonical: /upgrade/0e05-El-Primo
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="El_Primo_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="El_Primo1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

该兵种最后一次推出时部落冲突还没有黄金令牌功能，为了让大家用起来不那么违和，我们决定让黄金令牌减免设置在本页无效。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="所需训练营等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="特殊技能" pValue="对城墙造成 20 倍伤害" />
    <UnitProperty pKey="训练时间" pValue="60" trainingSystem="legacy" :noGoldPass="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "trainingCost",
        "icon": "Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |对墙<br>每次伤害|训练费用<sup>*</sup>| 生命值  |对应的<br>大本等级|
| ---- |  ----   |  ----   |      ----     |         ---       |  ----  |       ---      |
|   1  |    31   |    31   |       620     |         180       |   577  |        5       |
|   2  |    43   |    43   |       860     |         320       |   762  |        6       |
|   3  |    63   |    63   |      1260     |         440       |  1122  |        7       |
|   4  |    96   |    96   |      1920     |         560       |  1591  |        8       |
|   5  |   120   |   120   |      2400     |         750       |  2120  |        9       |
|   6  |   149   |   149   |      2980     |         875       |  2653  |       10       |
|   7  |   178   |   178   |      3560     |        1000       |  3301  |       11       |
|   8  |   192   |   192   |      3840     |        1000       |  3550  |       12       |
</UnitTable>

\* 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2018/12/14">
        <TimelineRow>为了庆祝荒野乱斗全球发行，艾尔普里莫作为临时兵种推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>