---
title: "部落冲突 coc 都城平顶木屋（木棚屋）数据"
navTitle: "平顶木屋"
shownTitle: "平顶木屋"
description: "如果村民喜欢明亮方正的房子，而且要比邻居家大，那这里很适合。"
module: upgrade-capital
imgFolder: capital_buildings/2505
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2505-Wooden-Cabin
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wooden_Cabin.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Wooden_Cabin_Ruin.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="900" />
    <UnitProperty pKey="建造费用" pValue="500" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="20" />
</UnitProperties>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|            |   1   |   2   |   3   |   4   |   5   |
|     ---    |  ---  |  ---  |  ---  |  ---  |  ---  |
|   气球环礁  |   4   |   4   |   4   |   4   |   5   |
|   骷髅公园  |   1   |   2   |   2   |   2   |   \   |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>平顶木屋随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>