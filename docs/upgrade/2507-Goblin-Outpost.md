---
title: "部落冲突 coc 都城哥布林前哨基地数据"
navTitle: "哥布林前哨基地"
shownTitle: "哥布林前哨基地"
description: "一个被遗弃的哥布林前哨基地，大家都去哪儿了？"
module: upgrade-capital
imgFolder: capital_buildings/2507
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2507-Goblin-Outpost
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Goblin_Outpost.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Goblin_Outpost_Ruin.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="650" />
    <UnitProperty pKey="建造费用" pValue="500" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="15" />
</UnitProperties>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|            |   1   |   2   |   3   |   4   |
|     ---    |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井 |   9   |   9   |   9   |   9   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新建筑：哥布林前哨基地。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>