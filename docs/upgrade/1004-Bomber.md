---
title: "部落冲突 coc 夜世界炸弹兵升级数据"
navTitle: "炸弹兵"
shownTitle: "炸弹兵"
description: "炸弹兵渴望毁灭、追求高质特效，他会炸毁看到的一切东西，对城墙可造成额外伤害！"
module: upgrade-bh
imgFolder: bh_tech/1004
wiki: https://clashofclans.fandom.com/wiki/Bomber
canonical: /upgrade/1004-Bomber
---

- 如想查看家乡的炸弹人，请访问：[炸弹人](/upgrade/0004-Wall-Breaker)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bomber_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="5 - 7 级" imgSrc="Bomber5.png" />
        <UnitImg imgTitle="8 - 9 级" imgSrc="Bomber8.png" />
        <UnitImg imgTitle="10 - 11 级" imgSrc="Bomber10.png" />
        <UnitImg imgTitle="12 - 13 级" imgSrc="Bomber12.png" />
        <UnitImg imgTitle="14 - 17 级" imgSrc="Bomber14.png" />
        <UnitImg imgTitle="18 - 19 级" imgSrc="Bomber18.png" />
        <UnitImg imgTitle="20 级" imgSrc="Bomber20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>炸弹兵的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="城墙 (15 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.6 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="部队重量" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="2.4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="5" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="4" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="弹跳炸弹" />
    <UnitProperty pKey="技能类型" pValue="冷却型技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="技能下的攻速" pValue="2.5 秒/次" />
    <UnitProperty pKey="伤害类型" pValue="连锁伤害" />
    <UnitProperty pKey="连锁半径" pValue="4 格" />
</UnitProperties>

\* 弹跳炸弹：使用技能时，炸弹兵的下一次攻击会弹跳 2 次，产生巨大爆炸并对城墙造成高额伤害。该技能在冷却时间结束后可以重复使用。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 7,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 8,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害|对墙每次伤害|技能状态下<br>对建筑伤害|技能状态下<br>对墙伤害|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |     ---   |          ---         |         ---        |   ---   |   ---   |    ---   |           ---          |
|   5  |    80   |   160  |    2400   |           80         |         1200       |   605   |    \    |     \    |            4           |
|   6  |    80   |   160  |    2400   |          100         |         1500       |   605   |   320k  |  0,16    |            4           |
|   7  |    90   |   180  |    2700   |          100         |         1500       |   666   |   340k  |  0,20    |            4           |
|   8  |    90   |   180  |    2700   |          120         |         1800       |   666   |   360k  |  1       |            4           |
|   9  |   100   |   200  |    3000   |          120         |         1800       |   732   |   900k  |  1,12    |            5           |
|  10  |   100   |   200  |    3000   |          140         |         2100       |   732   |     1M  |  2       |            5           |
|  11  |   110   |   220  |    3300   |          140         |         2100       |   805   |   1.2M  |  2       |            6           |
|  12  |   110   |   220  |    3300   |          160         |         2400       |   805   |   1.4M  |  2,12    |            6           |
|  13  |   120   |   240  |    3600   |          160         |         2400       |   886   |   2.2M  |  3,12    |            7           |
|  14  |   120   |   240  |    3600   |          180         |         2700       |   886   |   2.4M  |  4,12    |            7           |
|  15  |   130   |   260  |    3900   |          180         |         2700       |   974   |   3.2M  |  5,12    |            8           |
|  16  |   130   |   260  |    3900   |          200         |         3000       |   974   |   3.4M  |  5,12    |            8           |
|  17  |   140   |   280  |    4200   |          200         |         3000       |  1072   |   3.9M  |  6       |            9           |
|  18  |   140   |   280  |    4200   |          220         |         3300       |  1072   |   4.1M  |  6       |            9           |
|  19  |   150   |   300  |    4500   |          220         |         3300       |  1179   |   4.7M  |  6,12    |           10           |
|  20  |   150   |   300  |    4500   |          240         |         3600       |  1179   |   5.3M  |  6,12    |           10           |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级炸弹兵。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>炸弹兵的技能改为“弹跳炸弹”，启用后炸弹兵的下一次攻击会弹跳两次。</TimelineRow>
        <TimelineRow>炸弹兵的移动速度由 16（2 格/秒） 提升至 19.2（2.4 格/秒）。</TimelineRow>
        <TimelineRow>现在炸弹兵一解锁就是 5 级，你不需要从 1 级开始升了。如果更新前部队高于 5 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>炸弹兵的兵种重量从 2 提升至 4。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>