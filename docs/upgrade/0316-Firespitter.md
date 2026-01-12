---
title: "部落冲突 coc 火焰喷射器升级数据"
navTitle: "火焰喷射器"
shownTitle: "火焰喷射器"
description: "火焰喷射器喷射火焰的速度比 X 连弩的攻速还要快！即使打歪了，火焰喷射器的攻击也会越过目标，对后方的敌人造成伤害。它只能朝向一个方向，所以要仔细考虑如何放置它！"
module: upgrade-home
imgFolder: home_buildings/0316
wiki: https://clashofclans.fandom.com/wiki/Firespitter
canonical: /upgrade/0316-Firespitter
---

- 如想查看夜世界的一座机制类似的建筑，请访问：[夜世界熔岩火炮](/upgrade/1109-Roaster)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Firespitter2.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Firespitter1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Firespitter2.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 16, 17 - 18" />
    <BuildingNumRow title="建筑数量" num="     0,       2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 火焰喷射器的攻击方式是先以极快的速度打出 20 发子弹（熔化的铁球），休息 1 秒后再发起下一轮攻击，其机制类似于夜世界的 [熔岩火炮](/upgrade/1109-Roaster)。
2. 每发子弹可以击中两个目标。
    - 火焰喷射器的子弹可以同时击中地面和空中目标，不像 [投石炮](/upgrade/030e-Scattershot) 一样，瞄准地面就无法溅射到空中。
    - 火焰喷射器的子弹击中两个目标后就会自动消失。
3. 火焰喷射器的射击有一定的偏移角度，精度不是很高，如果目标较远则有可能打不中。
4. 火焰喷射器只能覆盖约 150° 的扇形区域。
5. 和 [空气炮](/upgrade/0306-Air-Sweeper) 一样，你可以旋转火焰喷射器，使其朝向你想要的方向。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="多目标" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="16 格" />
    <UnitProperty pKey="攻速" pValue="0.0625 秒/次" />
    <UnitProperty pKey="每轮弹药数量" pValue="20" />
    <UnitProperty pKey="每轮攻击间隔" pValue="1 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    },
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |平均<br>每秒伤害| 每次伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |      ---      |   ---   |  ---  |   ---   |   ---    |         ---        |      ---      |
|   1  |      399      |    46   |  4500 |    17M  |   11     |                    |       17      |
|   2  |      425      |    49   |  5000 |    18M  |   11,12  |                    |       17      |
| ⚡1  |      442     |    51   |  5000  |    8M   |   3,12  |                     |       17      |
| ⚡2  |      442     |    51   |  5250  |    6M   |   4     |                     |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>1 ~ 2 级及两个充能等级的火焰喷射器的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增火焰喷射器。</TimelineRow>
        <TimelineRow>火焰喷射器在刚推出的时候就支持充能，属于第二批可以充能的建筑。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>