---
title: "部落冲突 coc 都城平顶屋（小棚屋）数据"
navTitle: "平顶屋"
shownTitle: "平顶屋"
description: "如果村民喜欢明亮方正的房子，那很适合住在这里。"
module: upgrade-capital
imgFolder: capital_buildings/2501
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2501-Small-Cabin
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Small_Cabin.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Small_Cabin_Ruin.png" />
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

|           |   1   |   2   |   3   |   4   |   5   |
|     ---   |  ---  |  ---  |  ---  |  ---  |  ---  |
| 野蛮人兵营 |   3   |   5   |   5   |   5   |   5   |
|  气球环礁  |   4   |   6   |   8   |  10   |  10   |
|  飞龙悬崖  |   4   |   4   |   4   |   4   |   4   |
|  骷髅公园  |   3   |   3   |   3   |   4   |   \   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>平顶屋随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>