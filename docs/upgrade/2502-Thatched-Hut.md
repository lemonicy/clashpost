---
title: "部落冲突 coc 都城稻草屋数据"
navTitle: "稻草屋"
shownTitle: "稻草屋"
description: "住着野蛮人。这简陋小屋建起来快，燃起来更快。"
module: upgrade-capital
imgFolder: capital_buildings/2502
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2502-Thatched-Hut
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Thatched_Hut.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Thatched_Hut_Ruin.png" />
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

|           |   1   |   2   |   3   |   4   |   5   |
|     ---   |  ---  |  ---  |  ---  |  ---  |  ---  |
| 野蛮人兵营 |   6   |   7   |   7   |   9   |   9   |
|  飞龙悬崖  |   4   |   6   |   8   |   8   |   8   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>稻草屋随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>