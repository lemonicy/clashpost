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

1. 驭水青龙在 2024/02 的龙年佳节活动中首次推出，在活动中获取 3 000 任务点数（红包）即可解锁该兵种。
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
    <UnitProperty pKey="连发后休息" pValue="1.7 秒" />
    <UnitProperty pKey="连发次数" pValue="3" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="8" />    
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 对应的大本等级 |
| ---- |   ---   |   ---   |   ---  |      ----    |
|   1  |   332   |   256   |  2400  |       6      |
|   2  |   343   |   264   |  2800  |       7      |
|   3  |   354   |   272   |  3200  |       8      |
|   4  |   365   |   281   |  3800  |       9      |
|   5  |   376   |   289   |  4400  |      10      |
|   6  |   387   |   298   |  5000  |      11      |
|   7  |   420   |   323   |  5800  |      12      |
|   8  |   464   |   357   |  6400  |      13      |
|   9  |   520   |   400   |  6900  |      14      |
|  10  |   575   |   442   |  7500  |      15      |
|  11  |   630   |   484   |  7900  |      16      |
|  12  |   686   |   527   |  8300  |      17      |
|  13  |   752   |   578   |  8800  |      18      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/09">
        <TimelineRow>该兵种第 2 次推出，有效期至 2026/02/26.</TimelineRow>
        <TimelineRow>与上次推出时相比，驭水青龙新增了四个等级（1、2、12、13）。</TimelineRow>
        <TimelineRow>与上次推出时相比，3 ~ 4、6 ~ 12 级驭水青龙的伤害提升，6 ~ 12 级驭水青龙的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/08">
        <TimelineRow>该兵种第 1 次推出，设 9 个等级（3 ~ 11 级），有效期至 2024/02/22.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>