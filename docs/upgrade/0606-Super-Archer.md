---
title: "部落冲突 coc 超级弓箭手（超弓）升级数据"
navTitle: "超级弓箭手"
shownTitle: "超级弓箭手（超弓）"
description: "超级弓箭手练就了超强臂力，她的箭矢可以对路径上的多个建筑造成伤害。"
module: upgrade-home
imgFolder: home_tech/0606
wiki: https://clashofclans.fandom.com/wiki/Super_Archer
canonical: /upgrade/0606-Super-Archer
---

- *如想查看该兵种的普通版本，请访问：[弓箭手](/upgrade/0001-Archer)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Archer_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Archer8.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级弓箭手的技能（穿透利箭）：对路径上的多个目标造成伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="路径伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="穿透距离" pValue="12 格" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="6 格" />
    <UnitProperty pKey="最低弓箭手等级" pValue="8" />
    <UnitProperty pKey="最低大本等级" pValue="11" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,18000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害 | 每次伤害 | 生命值 |所需大本等级|
| ---- |   ----   |   ----  |   --- |    ----   |
|   8  |    120   |   180   |   450 |     11    |
|   9  |    132   |   198   |   510 |     12    |
|  10  |    144   |   216   |   550 |     14    |
|  11  |    156   |   234   |   575 |     15    |
|  12  |    162   |   243   |   600 |     16    |
|  13  |    166   |   249   |   625 |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 本新增 13 级弓箭手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>11 ~ 12 级超级弓箭手的生命值降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 12 级弓箭手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级弓箭手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 10 级弓箭手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/01/20">
        <TimelineRow>9 级超级弓箭手生命值从 500 提升至 510。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>现在超级弓箭手可正确命中距离她 0.1 格的目标。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/08/24">
        <TimelineRow>新的超级兵种：超级弓箭手，11 本可强化。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>