---
title: "部落冲突 coc 南瓜野蛮人升级数据"
navTitle: "南瓜野蛮人"
shownTitle: "南瓜野蛮人"
description: "自制南瓜头盔效果还挺不错，意不意外？直到破碎前，南瓜头盔都能替野蛮人承受伤害。"
module: upgrade-temp
imgFolder: temp/0e02
wiki: https://clashofclans.fandom.com/wiki/Pumpkin_Barbarian
canonical: /upgrade/0e02-Pumpkin-Barbarian
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Pumpkin_Barbarian_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Pumpkin_Barbarian1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Pumpkin_Barbarian3.png" />
        <UnitImg imgTitle="5级" imgSrc="Pumpkin_Barbarian5.png" />
        <UnitImg imgTitle="6级" imgSrc="Pumpkin_Barbarian6.png" />
        <UnitImg imgTitle="7级" imgSrc="Pumpkin_Barbarian7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

与 [骷髅法术](/upgrade/0183-Skeleton-Spell) 召唤的骷髅兵类似，南瓜野蛮人的头盔可以为他们格挡至少一次攻击。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="1<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="5" trainingSystem="legacy" />
</UnitProperties>

\* 理论上来说，1 级大本营可以同时解锁野蛮人和南瓜野蛮人，但因为新手教程会引导玩家升级至 2 本，所以实际上 2 本才能训练和使用南瓜野蛮人。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "trainingCost",
        "icon": "Elixir"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |南瓜头套的<br>生命值|训练花费<sup>#</sup>|对应的<br>大本等级|
| ---- |  ----   |  ----   |   ---  |        ---       |        ---         |       ---      |
|   1  |    8    |    8    |    45  |         15       |         25         |        1       |
|   2  |   11    |   11    |    54  |         18       |         40         |        3       |
|   3  |   14    |   14    |    65  |         22       |         60         |        4       |
|   4  |   18    |   18    |    78  |         26       |        100         |        5       |
|   5  |   24    |   24    |    95  |         32       |        150         |        6       |
|   6  |   26    |   26    |   110  |         36       |        200         |        7       |
|   7  |   30    |   30    |   125  |         42       |        250         |        8       |
</UnitTable>

\# 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2021/10">
        <TimelineRow>该兵种第 2 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/10">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>