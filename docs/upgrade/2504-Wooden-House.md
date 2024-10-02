---
title: "部落冲突 coc 都城木屋数据"
navTitle: "木屋"
shownTitle: "木屋"
description: "建造和设计都很不错，温馨舒适，让人有家的感觉。"
module: upgrade-capital
imgFolder: capital_buildings/2504
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2504-Wooden-House
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wooden_House.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Wooden_House_Ruin.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="650" />
    <UnitProperty pKey="建造费用" pValue="500" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="20" />
</UnitProperties>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|            |   1   |   2   |   3   |   4   |   5   |
|     ---    |  ---  |  ---  |  ---  |  ---  |  ---  |
|   法师山谷  |   4   |   4   |   5   |   7   |   8   |
| 建筑工人工坊 |   4   |   6  |   8   |   8   |   8   |
|   骷髅公园  |   4   |   5   |   6   |   6   |   \   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>木屋随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>