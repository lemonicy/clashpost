---
title: "部落冲突 coc 都城哥布林大本营数据"
navTitle: "哥布林大本营"
shownTitle: "哥布林大本营"
description: "一座异常安静的哥布林大本营，没有平日里密谋策略的声音，也没有金币声。"
module: upgrade-capital
imgFolder: capital_buildings/2509
wiki: https://clashofclans.fandom.com/wiki/Houses
canonical: /upgrade/2509-Goblin-Hall
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Goblin_Hall.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Goblin_Hall_Ruin.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="900" />
    <UnitProperty pKey="建造费用" pValue="1000" />
    <UnitProperty pKey="摧毁奖励" resourceType="Gold3" pValue="20" />
</UnitProperties>

<SmallTitle>各子城的建筑数量</SmallTitle>

<DistrictTable>

|            |   1   |   2   |   3   |   4   |
|     ---    |  ---  |  ---  |  ---  |  ---  |
|  哥布林矿井 |    1  |    1  |    1  |    1  |

</DistrictTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/09">
        <TimelineRow>新建筑：哥布林大本营。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>