---
title: "部落冲突 coc 冰冻陷阱升级数据"
navTitle: "冰冻陷阱"
shownTitle: "冰冻陷阱"
description: "冻住进攻中的敌军，冻起来！"
module: upgrade-temp
imgFolder: temp/0f02
wiki: https://clashofclans.fandom.com/wiki/Freeze_Trap
canonical: /upgrade/0f02-Freeze-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Freeze_Trap.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="药水瓶" imgSrc="Freeze_Trap_Flask.png" />
        <UnitImg imgTitle="未重新布置" imgSrc="Freeze_Trap_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 4, 5 - 11" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 该陷阱最后一次推出时部落冲突最高 11 本，因此建筑数量这里最高就写到 11 本。
2. 该陷阱最后一次推出时部落冲突还没有黄金令牌功能，为了让大家用起来不那么违和，我们决定让黄金令牌减免设置在本页无效。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="作用类型" pValue="冰冻一定范围内的目标" />
    <UnitProperty pKey="作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="2 格" />
    <UnitProperty pKey="冰冻半径" pValue="3 格" />
    <UnitProperty pKey="冰冻时间" pValue="5 秒" />
    <UnitProperty pKey="建造费用" pValue="12 500" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="重新布置费用" pValue="2 000<sup>*</sup>" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="建造时间" pValue="无 (立即完成)" />
    <UnitProperty pKey="新建获得的经验值" pValue="0" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
</UnitProperties>

\* 在 2019 年 2 月更新之前，陷阱被触发后， 需要玩家花费金币手动布置。这次更新后，玩家上线后即可自动重新布置陷阱，并且是免费的。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2016/12/27">
        <TimelineRow>该陷阱第 1 次推出，有效期至 2017/01/06.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>