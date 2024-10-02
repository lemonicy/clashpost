---
title: "部落冲突 coc 都城巨型加农炮升级数据"
navTitle: "巨型加农炮"
shownTitle: "巨型加农炮"
description: "什么都无法阻挡巨型加农炮的攻击。它发射的巨型加农炮弹可以射穿任何东西，并一直向前飞行，一直向前......"
module: upgrade-capital
imgFolder: capital_buildings/220c
wiki: https://clashofclans.fandom.com/wiki/Giant_Cannon/Clan_Capital
canonical: /upgrade/220c-Giant-Cannon
---

- *如想查看都城的加农炮，请访问：[都城加农炮](/upgrade/2201-Cannon)。*
- *如想查看都城的多管加农炮，请访问：[都城多管加农炮](/upgrade/2204-Multi-Cannon)。*
- *如想查看夜世界的巨型加农炮，请访问：[夜世界巨型加农炮](/upgrade/110a-Giant-Cannon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Cannon5.png" :imgAlt="$frontmatter.navTitle"
    description="什么都无法阻挡巨型加农炮的攻击。<br>它发射的巨型加农炮弹可以射穿任何东西，并一直向前飞行，一直向前......"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Giant_Cannon_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Giant_Cannon1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Giant_Cannon2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Giant_Cannon3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Giant_Cannon4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Giant_Cannon5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>都城大本营的建筑数量</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 6, 7 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,     1,      2" />
</BuildingNum>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|             |   1   |   2   |   3   |   4   |   5   |
|     ---     |  ---  |  ---  |  ---  |  ---  |  ---  |
|  野蛮人兵营  |   0   |   0   |   1   |   2   |   2   |
|   法师山谷   |   0   |   0   |   0   |   2   |   2   |
| 建筑工人工坊 |   2   |   2   |   3   |   4   |   4   |
|   骷髅公园   |   1   |   1   |   1   |   1   |   \   |
|  哥布林矿井  |   0   |   1   |   1   |   1   |   \   |

</DistrictTable>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="穿透伤害" />
    <UnitProperty pKey="穿透区域宽度" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="10 格" />
    <UnitProperty pKey="攻速" pValue="5 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "icon": "Gold3",
        "noGoldPass": true
    },
    {
        "column": 5,
        "type": "number",
        "icon": "Gold3",
        "noGoldPass": true
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 | 摧毁奖励 |所需都城<br>大本等级|所需子城<br>大本等级|
| ---- |   ---   |   ---   |   ---  |   ---   |   ---   |        ---        |        ---       |
|   1  |   80    |   400   |  3700  |   10k   |   340   |         5         |         1        |
|   2  |   90    |   450   |  3900  |   20k   |   360   |         6         |         2        |
|   3  |   100   |   500   |  4100  |   40k   |   380   |         7         |         3        |
|   4  |   110   |   550   |  4300  |   63k   |   400   |         8         |         4        |
|   5  |   120   |   600   |  4500  |  105k   |   420   |         10        |         5        |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>巨型加农炮随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>