---
title: "部落冲突 coc 夜世界飞龙宝宝升级数据"
navTitle: "飞龙宝宝"
shownTitle: "飞龙宝宝"
description: "飞龙宝宝可爱又温暖，一发脾气就喜欢喷射火焰。没有哪个爱搞破坏的家伙能有它这么可爱。"
module: upgrade-bh
imgFolder: bh_tech/1005
wiki: https://clashofclans.fandom.com/wiki/Baby_Dragon/Builder_Base
canonical: /upgrade/1005-Baby-Dragon
---

- *如想查看家乡的飞龙宝宝，请访问：[飞龙宝宝](/upgrade/000a-Baby-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Baby_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="5 - 7 级" imgSrc="Baby_Dragon5.png" />
        <UnitImg imgTitle="8 - 11 级" imgSrc="Baby_Dragon8.png" />
        <UnitImg imgTitle="12 - 15 级" imgSrc="Baby_Dragon12.png" />
        <UnitImg imgTitle="16 - 19 级" imgSrc="Baby_Dragon16.png" />
        <UnitImg imgTitle="20 级" imgSrc="Baby_Dragon20.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>飞龙宝宝的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="6" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="4" />
</UnitProperties>

<SmallTitle>特殊技能 1 的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="火冒三丈" />
    <UnitProperty pKey="技能类型" pValue="被动技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>①</sup>" />
</UnitProperties>

<SmallTitle>特殊技能 2 的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="烈焰喷嚏" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>②</sup>" />
</UnitProperties>

① 火冒三丈：周围没有其他空中部队时，飞龙宝宝的伤害会提升。<br>
② 烈焰喷嚏：飞龙宝宝喷出锥形范围的火焰，对前方的敌人造成伤害。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害|落单时的<br>额外伤害|烈焰喷嚏的<br>额外伤害<sup>③</sup>|  生命值  | 升级花费 | 升级时间 |所需实验室和<br>大本营等级|
| ---- |   ---   |   ---  |         ---       |               ---              |    ---   |   ---   |    ---   |           ---         |
|   5  |    62   |    62  |        +60%       |             80 - 100           |   1331   |     \   |     \    |            4          |
|   6  |    62   |    62  |        +70%       |             80 - 100           |   1331   |   360k  |  0,16    |            4          |
|   7  |    68   |    68  |        +70%       |             80 - 100           |   1464   |   380k  |  0,20    |            4          |
|   8  |    68   |    68  |        +70%       |            128 - 160           |   1464   |   400k  |  1       |            4          |
|   9  |    75   |    75  |        +70%       |            128 - 160           |   1611   |     1M  |  1,12    |            5          |
|  10  |    75   |    75  |        +80%       |            128 - 160           |   1611   |   1.2M  |  2       |            5          |
|  11  |    83   |    83  |        +80%       |            128 - 160           |   1772   |   1.4M  |  2       |            6          |
|  12  |    83   |    83  |        +80%       |            220 - 275           |   1772   |   1.6M  |  2,12    |            6          |
|  13  |    91   |    91  |        +80%       |            220 - 275           |   1949   |   2.4M  |  3,12    |            7          |
|  14  |    91   |    91  |        +90%       |            220 - 275           |   1949   |   2.6M  |  4,12    |            7          |
|  15  |   100   |   100  |        +90%       |            220 - 275           |   2144   |   3.4M  |  5,12    |            8          |
|  16  |   100   |   100  |        +90%       |            320 - 400           |   2144   |   3.6M  |  5,12    |            8          |
|  17  |   110   |   110  |        +90%       |            320 - 400           |   2358   |   4.1M  |  6       |            9          |
|  18  |   110   |   110  |       +100%       |            320 - 400           |   2358   |   4.3M  |  6       |            9          |
|  19  |   120   |   120  |       +100%       |            320 - 400           |   2358   |   5.1M  |  6,12    |           10          |
|  20  |   120   |   120  |       +100%       |            440 - 550           |   2358   |   5.5M  |  6,12    |           10          |
</UnitTable>

③ 2023 年 10 月更新后，烈焰喷嚏造成的额外伤害不再固定。根据与敌人距离的不同，伤害最大可衰减 20%.

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>飞龙宝宝的烈焰喷嚏伤害不再固定，根据到目标的距离缩减 0 ~ 20%.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级飞龙宝宝。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>飞龙宝宝现在有两个技能了，本次更新在原有“火冒三丈”技能的基础上加了个一次性技能“烈焰喷嚏”。</TimelineRow>
        <TimelineRow>现在飞龙宝宝一解锁就是 5 级，你不需要从 1 级开始升了。如果更新前部队高于 5 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>夜世界所有空军的攻击距离减少 0.5 格（蝙蝠除外）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>