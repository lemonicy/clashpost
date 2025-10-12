---
title: "部落冲突 coc 攻城滚木车升级数据"
navTitle: "攻城滚木车"
shownTitle: "攻城滚木车"
description: "虽然攻城滚木车不是最快也不是最牢固的，但它绝对会让人疲于应付。攻城滚木车会不断抛出滚木，碾平路径上的一切，扫清通往敌军大本营的道路。法术对攻城滚木车无效。"
module: upgrade-home
imgFolder: home_tech/0244
wiki: https://clashofclans.fandom.com/wiki/Log_Launcher
canonical: /upgrade/0244-Log-Launcher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Log_Launcher.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Log_Launcher1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Log_Launcher2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Log_Launcher3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Log_Launcher4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Log_Launcher5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 部署攻城滚木车后，它会对准 [大本营](/upgrade/0400-Town-Hall) 前进，并不断释放滚木，对前进路线上的建筑造成伤害。
3. 攻城滚木车的攻击距离是 20 格或者 4 个建筑。在命中第 4 个建筑时滚木会消失，不会攻击至 20 格距离。
4. 攻城滚木车部署后不能移动，即使没有受到伤害也会自动掉血。[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止它自动掉血。
5. 当攻城滚木车的血量清零或到达大本营时，攻城滚木车就会自动解体并释放部落城堡内的部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="对着大本营前进" />
    <UnitProperty pKey="攻击偏好" pValue="城墙 (4 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="溅射范围" pValue="长 19 格，宽 2 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="30" />
    <UnitProperty pKey="攻击距离" pValue="20 格" />
    <UnitProperty pKey="攻击速度" pValue="3 秒/次" />
    <UnitProperty pKey="移动速度" pValue="0.7 格/秒" />
    <UnitProperty pKey="掉血速度" pValue="每秒 156 血<sup>*</sup>" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
</UnitProperties>

\* 这是滚木车不受到伤害时的掉血速度。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 |贴脸伤害<sup>#</sup>| 生命值 | 升级花费 |  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |        ----       |  ----  |   ----  |    ----    |      ----      |      ----     |
|   1  |    140   |   420   |        2900       |  4000  |      \  |     \      |        1       |       13      |
|   2  |    160   |   480   |        3000       |  4400  |   3.2M  |     3      |       10       |       13      |
|   3  |    180   |   540   |        3100       |  4800  |   4.5M  |     4      |       10       |       13      |
|   4  |    200   |   600   |        3200       |  5200  |   7.5M  |     7      |       11       |       13      |
|   5  |    220   |   660   |        3400       |  5500  |    18M  |    12      |       14       |       16      |
</UnitTable>

\# 攻城滚木车会对近距离（具体几格不知道）的建筑造成额外伤害，我们将其称为“贴脸伤害”，而且“贴脸伤害”对 [城墙](/upgrade/0300-Walls) 仍然有 4 倍伤害。在近距离下，滚木车造成的伤害 = 每次伤害 + 贴脸伤害。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>攻城机器的建造时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 4 级攻城滚木车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 5 级攻城滚木车。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级攻城滚木车的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>2 ~ 4 级攻城滚木车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城滚木车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>13 本可解锁新攻城机器：攻城滚木车。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>