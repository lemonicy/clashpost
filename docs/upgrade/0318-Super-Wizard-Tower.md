---
title: "部落冲突 coc 超级法师塔升级数据"
navTitle: "超级法师塔"
shownTitle: "超级法师塔"
description: "超级法师的首次攻击最多可电击附近 15 个敌人，被闪电链命中的目标受到的伤害更低。"
module: upgrade-home
imgFolder: home_buildings/0318
wiki: https://clashofclans.fandom.com/wiki/Super_Wizard_Tower
canonical: /upgrade/0318-Super-Wizard-Tower
---

- *如想查看合并前的建筑，请移步：[法师塔](/upgrade/0305-Wizard-Tower)。*
- *如想查看都城的超级法师塔，请移步：[都城超级法师塔](/upgrade/2207-Super-Wizard-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Wizard_Tower2_hd.png" :imgAlt="$frontmatter.shownTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="建造中" imgSrc="Super_Wizard_Tower_Ruin.png" />
        <UnitImg imgTitle="1 级" imgSrc="Super_Wizard_Tower1.png" imgHd="Super_Wizard_Tower1_hd.png" />
        <UnitImg imgTitle="2 级" imgSrc="Super_Wizard_Tower2.png" imgHd="Super_Wizard_Tower2_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17, 18" />
    <BuildingNumRow title="建筑数量" num="     0,  2" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 超级法师塔不能直接建造，必须由两个 [法师塔](/upgrade/0305-Wizard-Tower) 合并而成，两座用来合并的建筑必须已达到最高等级。
    - 合并一旦开始就无法取消。
    - 合并建筑的操作是永久性的，一旦合并就无法拆开。
    - 升本前必须合并完所有可以合并的建筑。
2. 超级法师塔会向初始目标发射一道闪电，该闪电可连锁初始目标周围的多个目标。
3. 超级法师塔每次攻击最多对 15 个目标造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="射程" pValue="8 格" />
    <UnitProperty pKey="攻速" pValue="1.3 秒/次" />
    <UnitProperty pKey="连锁距离" pValue="4 格" />
    <UnitProperty pKey="最大目标数" pValue="15 (含初始目标)" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="连锁后保留的伤害" pValue="40% (除初始目标外均保留 40% 伤害)" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 直接伤害 | 连锁伤害 | 生命值 | 升级费用 | 升级时间 |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---   |   ---  |   ---   |   ---   |        ---         |      ----      |
|   1  |   290   |   377   |  150.8  |  6000  |   29M   |    13   |                    |       18       |
|   2  |   320   |   416   |  166.4  |  6300  |   30M   |    14   |                    |       18       |
| ⚡1  |   327  |   425.1 |  170.04 |  6300  |   12M   |     6    |                    |       18       |
| ⚡2  |   327  |   425.1 |  170.04 |  6450  |   14M   |     7    |                    |       18       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18 本推出，并在 18 本新增建筑：超级法师塔，共设两个等级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>
