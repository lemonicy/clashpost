---
title: "部落冲突 coc 夜世界骷髅气球升级数据"
navTitle: "骷髅气球"
shownTitle: "骷髅气球"
description: "里面挤满的不是炸弹，而是骷髅兵，骷髅兵从气球里直接跳到敌军旁边发动攻击！"
module: upgrade-bh
imgFolder: bh_tech/1008
wiki: https://clashofclans.fandom.com/wiki/Drop_Ship
canonical: /upgrade/1008-Drop-Ship
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Drop_Ship_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="11 - 12 级" imgSrc="Drop_Ship11.png" />
        <UnitImg imgTitle="13 - 14 级" imgSrc="Drop_Ship13.png" />
        <UnitImg imgTitle="15 - 16 级" imgSrc="Drop_Ship15.png" />
        <UnitImg imgTitle="17 - 18 级" imgSrc="Drop_Ship17.png" />
        <UnitImg imgTitle="19 - 20 级" imgSrc="Drop_Ship19.png" />
        <UnitImg imgTitle="骷髅" imgSrc="Skeleton1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>骷髅气球的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="普攻伤害半径" pValue="1.25 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="3.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="每次召唤的骷髅数量" pValue="3" />
    <UnitProperty pKey="骷髅上限" pValue="9<sup>①</sup>" />
    <UnitProperty pKey="死亡伤害半径" pValue="2 格" />
    <UnitProperty pKey="死亡伤害延时" pValue="0.416 秒" />
    <UnitProperty pKey="每个兵营的部队数量" pValue="1" />
    <UnitProperty pKey="所需训练营等级" pValue="9" />
    <UnitProperty pKey="所需夜世界大本等级" pValue="7" />
</UnitProperties>

① 每个骷髅气球召唤的骷髅最多能有 9 个在场上存在。

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="骷髅轰炸" />
    <UnitProperty pKey="技能类型" pValue="一次性技能" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>②</sup>" />
    <UnitProperty pKey="技能爆炸半径" pValue="2.25 格" />
</UnitProperties>

② 骷髅轰炸：使用技能时，骷髅气球会朝正下方丢下炸弹，造成范围伤害并对城墙造成额外伤害。此外，爆炸效果还会召唤出骷髅兵进行后续的地面攻击。

<SmallTitle>骷髅的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="部队重量" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="每秒伤害" pValue="20" />
    <UnitProperty pKey="每次伤害" pValue="20" />
    <UnitProperty pKey="生命值" pValue="10" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |骷髅轰炸<br>技能的伤害|技能投放的<br>骷髅数量|死亡伤害|  生命值  | 升级花费 |  升级时间 |所需实验室和<br>大本营等级|
| ---- |         ---        |          ---       |   ---  |    ---  |   ---   |    ---   |           ---         |
|  11  |         600        |           5        |   300  |   3400  |     \   |    \     |            7          |
|  12  |         700        |           6        |   300  |   3400  |   2.4M  |  2,12    |            7          |
|  13  |         700        |           6        |   300  |   3740  |   2.6M  |  3,12    |            7          |
|  14  |         700        |           6        |   400  |   3740  |   2.8M  |  4,12    |            7          |
|  15  |         700        |           6        |   400  |   4114  |   3.6M  |  5,12    |            8          |
|  16  |         800        |           7        |   400  |   4114  |   3.8M  |  5,12    |            8          |
|  17  |         800        |           7        |   400  |   4525  |   4.3M  |  6       |            9          |
|  18  |         800        |           7        |   500  |   4525  |   4.5M  |  6       |            9          |
|  19  |         800        |           7        |   500  |   4978  |   5.5M  |  6,12    |           10          |
|  20  |         900        |           8        |   500  |   4978  |   5.7M  |  6,12    |           10          |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/02/27">
        <TimelineRow>骷髅气球的攻击距离从 0 格（建筑头顶）修改为 0.5 格。</TimelineRow>
        <TimelineRow>骷髅轰炸技能的爆炸半径从 3 格减少到 2.25 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/09">
        <TimelineRow>现在骷髅气球优先攻击防御建筑而不是攻击距离最近的建筑。</TimelineRow>
        <TimelineRow>骷髅气球的生命值增加 21%.</TimelineRow>
        <TimelineRow>骷髅气球的技能半径增加 0.5 格（原文就是这个意思，实际上好像没改任何半径/距离相关的属性）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 19 - 20 级骷髅气球。</TimelineRow>
        <TimelineRow>由于夜世界重做，部队的伤害、生命值等数据都有变化。</TimelineRow>
        <TimelineRow>现在骷髅气球多了一个一次性技能“骷髅轰炸”，启用后骷髅气球会朝正下方丢炸弹，并召唤一群骷髅继续战斗。</TimelineRow>
        <TimelineRow>现在骷髅气球一解锁就是 11 级，你不需要从 1 级开始升了。如果更新前部队高于 11 级，更新后等级不会重置。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>现在骷髅气球必须走到建筑头顶才能投放骷髅了，不像以前有 0.5 格的间隔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>提升了骷髅气球在 10-11 级和 14-15 级的死亡附加伤害，以修复其特殊技能信息和实际死亡附加伤害不一致的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，所有兵种可升至 18 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>