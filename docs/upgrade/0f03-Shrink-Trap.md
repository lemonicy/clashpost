---
title: "部落冲突 coc 玲珑陷阱升级数据"
navTitle: "玲珑陷阱"
shownTitle: "玲珑陷阱"
description: "这个陷阱中装着女巫诅咒过的药水，触发后会使范围内的敌军体型变小，暂时降低他们的生命值和伤害，并让他们看起来萌萌哒。厉害啦！"
module: upgrade-temp
imgFolder: temp/0f03
wiki: https://clashofclans.fandom.com/wiki/Shrink_Trap
canonical: /upgrade/0f03-Shrink-Trap
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Shrink_Trap.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="药水瓶" imgSrc="Shrink_Trap_Flask.png" />
        <UnitImg imgTitle="未重新布置" imgSrc="Shrink_Trap_unarmed.png" />
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
3. 玲珑陷阱的作用：当兵种靠近玲珑陷阱陷阱时会触发缩小效果，暂时降低它们的生命值和伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="作用类型" pValue="详见说明<sup>①</sup>" />
    <UnitProperty pKey="作用目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发半径" pValue="2 格" />
    <UnitProperty pKey="作用半径" pValue="3 格" />
    <UnitProperty pKey="作用时间" pValue="20 秒" />
    <UnitProperty pKey="建造费用" pValue="12 500" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="重新布置费用" pValue="2 500<sup>*</sup>" :isUpgradeCost="true" resourceType="Gold" :noGoldPass="true" />
    <UnitProperty pKey="建造时间" pValue="无 (立即完成)" />
    <UnitProperty pKey="新建获得的经验值" pValue="0" />
    <UnitProperty pKey="所需大本等级" pValue="4" />
</UnitProperties>

① 触发玲珑陷阱后，20 秒内兵种的生命值和移动速度降低 50%.<br>
② 在 2019 年 2 月更新之前，陷阱被触发后， 需要玩家花费金币手动布置。这次更新后，玩家上线后即可自动重新布置陷阱，并且是免费的。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2017/08/18">
        <TimelineRow>该陷阱第 1 次推出，有效期至 2017/08/25.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>