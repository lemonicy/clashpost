---
title: "部落冲突 coc 都城哥布林小屋数据"
navTitle: "哥布林小屋"
shownTitle: "哥布林小屋"
description: "一间空空如也的哥布林小屋，可能是要卖掉吧？"
module: upgrade-capital
imgFolder: capital_buildings/2508
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2508-Goblin-Hut
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Goblin_Hut.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Goblin_Hut_Ruin.png" />
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
|  哥布林矿井 |   11  |   11  |   11  |   11  |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新建筑：哥布林小屋。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>