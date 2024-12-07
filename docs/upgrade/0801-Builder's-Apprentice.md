---
title: "部落冲突 coc 建筑工人学徒升级数据"
navTitle: "建筑工人学徒"
shownTitle: "建筑工人学徒"
description: "建筑工人学徒能帮助建筑工人更快完成升级。您每天可以指派他一次，升级建筑工人学徒还会提升其工作速度！"
module: upgrade-home
imgFolder: home_tech/0801
wiki: https://clashofclans.fandom.com/wiki/Builder%27s_Apprentice
canonical: /upgrade/0801-Builder%27s-Apprentice
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Builder%27s_Apprentice.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>重要说明</SmallTitle>

1. 建筑工人学徒在家乡 [大本营](/upgrade/0400-Town-Hall) 达到 10 级后可以解锁。
2. 解锁后，建筑工人学徒可被指派到目前正在进行的建筑、陷阱或英雄升级中，从而缩短整体升级时间。
   - 建筑工人学徒每天可以工作 1 小时，冷却时间为 23 小时。
   - 建筑工人学徒无法独自完成任务，如果任务在建筑工人学徒的工作期间完成，则他会提前停止工作，并且在冷却时间结束之前无法给他分配其他任务。
   - 建筑工人学徒只能在家乡工作，无法前往夜世界、都城和铸币坊工作。
3. 升级建筑工人学徒可提高其工作效率，从而节省更多时间。
   - 升级建筑工人学徒无需花费时间，但需要花费宝石。
   - 你不能在建筑工人学徒工作期间升级他。
4. 建筑工人药水对建筑工人学徒无效。
5. 黄金令牌的建造加成不能减少升级建筑工人学徒所需的宝石。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "icon": "Gem",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 工作效率 | 每次派遣<br>可节省的时间 | 升级费用 | 所需大本等级 |
|  --- |   ---   |          ---           |    ---   |     ---    |
|   1  |    1×   |         1 小时         |    500   |      10     |
|   2  |    2×   |         2 小时         |    500   |      10     |
|   3  |    3×   |         3 小时         |    750   |      11     |
|   4  |    4×   |         4 小时         |    750   |      11     |
|   5  |    5×   |         5 小时         |   1000   |      12     |
|   6  |    6×   |         6 小时         |   1000   |      12     |
|   7  |    7×   |         7 小时         |   1000   |      13     |
|   8  |    8×   |         8 小时         |   1000   |      14     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>建筑工人学徒有了住的地方，玩家可以在帮手小屋给他分配任务。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>新角色：建筑工人学徒，10 本可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>