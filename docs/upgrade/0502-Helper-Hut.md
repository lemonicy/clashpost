---
title: "部落冲突 coc 帮手小屋升级数据"
navTitle: "帮手小屋"
shownTitle: "帮手小屋"
description: "在这个舒适的小屋里，帮手们躺在暖和的高低床上休息！前往帮手小屋，给帮手们指派村庄里的工作。"
module: upgrade-home
imgFolder: home_buildings/0502
wiki: https://clashofclans.fandom.com/wiki/Helper_Hut
canonical: /upgrade/0502-Helper-Hut
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Helper_Hut_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 8, 9 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 你可以在帮手小屋里给帮手们分配任务。
2. 升级帮手小屋无需宝石，但升级帮手需要宝石。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="建造花费" pValue="1000000" :isUpgradeCost="true" resourceType="Elixir" gpClass="building" />
    <UnitProperty pKey="建造时间" pValue="瞬间完成" />
    <UnitProperty pKey="生命值" pValue="500" />
</UnitProperties>

<SmallTitle>升级信息</SmallTitle>

<UnitTable maxWidth="360px">

| 解锁帮手 | 所需大本等级 |
|    :--  |     ---     |
| <a href="/upgrade/0800-Lab-Assistant">实验助手</a> |  9 |
| <a href="/upgrade/0801-Builder%27s-Apprentice">建筑工人学徒</a> | 10 |
| <a href="/upgrade/0802-Alchemist">炼金术士</a> | 11 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>新帮手：炼金术士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>新建筑：帮手小屋。现在你可以在帮手小屋里给帮手们分配任务。最初帮手小屋总共有两个帮手：实验助手和建筑工人学徒。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>