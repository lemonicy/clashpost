---
title: "部落冲突 coc 都城小屋数据"
navTitle: "小屋"
shownTitle: "小屋"
description: "别致小巧，不适合高个子住。"
module: upgrade-capital
imgFolder: capital_buildings/2503
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2503-Small-Hut
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Small_Hut.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Small_Hut_Ruin.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="400" />
    <UnitProperty pKey="建造费用" pValue="250" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="15" />
</UnitProperties>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|            |   1   |   2   |   3   |   4   |   5   |
|     ---    |  ---  |  ---  |  ---  |  ---  |  ---  |
|   法师山谷  |   7   |   8   |  10   |  10   |  10   |
| 建筑工人工坊 |   0   |   0  |   3   |   6   |   8   |
|   飞龙悬崖  |   0   |   2   |   4   |   6   |   8   |
|   戈仑石场  |   0   |   0   |   0   |   2   |   4   |
|   骷髅公园  |   2   |   2   |   3   |   3   |   \   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>小屋随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>