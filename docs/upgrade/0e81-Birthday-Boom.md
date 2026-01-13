---
title: "部落冲突 coc 生日大爆炸升级数据"
navTitle: "生日大爆炸"
shownTitle: "生日大爆炸"
description: "为 5 周岁生日献上一份爆炸性惊喜。这份精美礼物可以对附近的敌军建筑和部队造成伤害和眩晕效果。"
module: upgrade-temp
imgFolder: temp_others/0e81
wiki: https://clashofclans.fandom.com/wiki/Birthday_Boom
canonical: /upgrade/0e81-Birthday-Boom
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Birthday_Boom.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 该法术最后一次推出时部落冲突还没有黄金令牌功能，为了让大家用起来不那么违和，我们决定让黄金令牌减免设置在本页无效。
2. 使用该法术时，每个法术会附带 5 个“礼物”， 礼物中含有一个“爆炸礼包”，落地后炸弹爆炸，对建筑造成伤害。爆炸之后，礼物会变成一个已经用过的炸弹模型， 防守方点击之后可以获得 5000 圣水。
3. 生日大爆炸法术对大本营的伤害只有对其他建筑的 70%.

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害半径" pValue="2.5 格" />
    <UnitProperty pKey="击晕时长" pValue="2 秒" />
    <UnitProperty pKey="占据的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="5" />
    <UnitProperty pKey="法术配置费用" pValue="未知<sup>*</sup>" />
    <UnitProperty pKey="法术配置时间" pValue="360" trainingSystem="legacy" :noGoldPass="true" />
</UnitProperties>

\* 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  总伤害  |对应的大本等级|
| ---- |   ---   |      ----   |
|   1  |   232   |       5     |
|   2  |   260   |       6     |
|   3  |   288   |       7     |
|   4  |   316   |       8     |
|   5  |   344   |       9     |
|   6  |   372   |      10     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2017/08/25">
        <TimelineRow>该法术第 1 次推出，有效期至 2017/09/07.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>