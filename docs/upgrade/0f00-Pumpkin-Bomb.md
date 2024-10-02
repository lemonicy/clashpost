---
title: "部落冲突 coc 南瓜炸弹升级数据"
navTitle: "南瓜炸弹"
shownTitle: "南瓜炸弹"
description: "哇喔！限时供应这款令人毛骨悚然的炸弹。"
module: upgrade-temp
imgFolder: temp/0f00
wiki: https://clashofclans.fandom.com/wiki/Pumpkin_Bomb
canonical: /upgrade/0f00-Pumpkin-Bomb
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Pumpkin_Bomb.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="未重新布置" imgSrc="Pumpkin_Bomb_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 3, 4 - 10" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 该陷阱最后一次推出时部落冲突最高 10 本，因此建筑数量这里最高就写到 10 本。
2. 该陷阱最后一次推出时部落冲突还没有黄金令牌功能，为了让大家用起来不那么违和，我们决定让黄金令牌减免设置在本页无效。
3. 南瓜炸弹的作用：当兵种靠近南瓜炸弹陷阱时，陷阱会爆炸。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="范围伤害" />
    <UnitProperty pKey="作用目标" pValue="仅地面目标" />
    <UnitProperty pKey="触发半径" pValue="1.5 格" />
    <UnitProperty pKey="爆炸半径" pValue="3 格" />
    <UnitProperty pKey="爆炸伤害" pValue="25" />
    <UnitProperty pKey="建造费用" pValue="1 000" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="重新布置费用" pValue="1 000<sup>*</sup>" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="建造时间" pValue="无 (立即完成)" />
    <UnitProperty pKey="新建获得的经验值" pValue="0" />
    <UnitProperty pKey="所需大本等级" pValue="4" />
</UnitProperties>

\* 在 2019 年 2 月更新之前，陷阱被触发后， 需要玩家花费金币手动布置。这次更新后，玩家上线后即可自动重新布置陷阱，并且是免费的。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2013/10">
        <TimelineRow>该陷阱第 2 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2012/10/27">
        <TimelineRow>该陷阱第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>