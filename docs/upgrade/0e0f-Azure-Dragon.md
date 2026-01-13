---
title: "部落冲突 coc 驭水青龙升级数据"
navTitle: "驭水青龙"
shownTitle: "驭水青龙"
description: "青龙象征着力量与威严，而这条驭水青龙更是集聚了这两方面的神力。它预示着春天的到来，能行云布雨，还能助您斩获胜利。驭水青龙的生命值很高，并能造成带有穿透效果的溅射伤害，可攻击到其初始目标后方的敌军。有它的帮助，您在战场上肯定能如鱼得水，势如破竹！"
module: upgrade-temp
imgFolder: temp_troops/0e0f
wiki: https://clashofclans.fandom.com/wiki/Azure_Dragon
canonical: /upgrade/0e0f-Azure-Dragon
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Azure_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Azure_Dragon1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 驭水青龙是龙年佳节活动中的两个临时兵种之一，在活动中获取 3 000 红包即可解锁该兵种。
2. 驭水青龙使用水珠攻击，水珠会刺穿短距离的目标，造成直线的范围伤害。
3. 驭水青龙攻击时是三连发的，不过如果连发未结束时目标就被摧毁了，它可能会中断连发。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.6 格/秒" />
    <UnitProperty pKey="连发间隔" pValue="0.2 秒" />
    <UnitProperty pKey="连发后休息" pValue="2.1 秒" />
    <UnitProperty pKey="连发次数" pValue="3" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="8" />    
    <UnitProperty pKey="训练时间" pValue="300" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 对应的大本等级 |
| ---- |   ---   |   ---   |   ---  |      ----    |
|   3  |   332   |   255   |  3200  |       8      |
|   4  |   354   |   272   |  3800  |       9      |
|   5  |   376   |   289   |  4400  |      10      |
|   6  |   398   |   306   |  5000  |      11      |
|   7  |   420   |   323   |  5600  |      12      |
|   8  |   442   |   340   |  6200  |      13      |
|   9  |   464   |   357   |  6600  |      14      |
|  10  |   486   |   374   |  7200  |      15      |
|  11  |   502   |  385.9  |  7600  |      16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/02/22.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>