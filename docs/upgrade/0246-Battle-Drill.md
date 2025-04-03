---
title: "部落冲突 coc 攻城钻机升级数据"
navTitle: "攻城钻机"
shownTitle: "攻城钻机"
description: "攻城钻机完美体现了哥布林的聪明才智。它能够深入地底，钻向距离最近的防御建筑。到达目的地后，它会冒出地面，使用威力十足的钻头瘫痪并摧毁目标。"
module: upgrade-home
imgFolder: home_tech/0246
wiki: https://clashofclans.fandom.com/wiki/Battle_Drill
canonical: /upgrade/0246-Battle-Drill
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Drill_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Battle_Drill1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Battle_Drill2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Battle_Drill3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Battle_Drill4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Battle_Drill5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 和 [掘地矿工](/upgrade/000b-Miner) 类似，部署攻城钻机后，它会在地下行进，避开路线上的一系列防御建筑，之后在目标建筑附近破土而出，直接攻击目标建筑。
3. 攻城钻机从地下出来的一瞬间可以破掉两层墙，也就是说当 [城墙](/upgrade/0300-Walls) 和防御中间隔着一格时可以破墙，隔两格不行。

<Pic src="/upgrade/description/Battle_Drill_Splash.jpg" caption="攻城钻机破墙图示" :lazyLoading="false" width="750" height="435" />

4. 攻城钻机从地下钻出时可以对建筑造成眩晕效果。
5. 当攻城钻机的血量清零时，攻城钻机就会自动解体并释放部落城堡内的部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="寻找防御建筑攻击" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="攻击速度" pValue="1.7 秒/次" />
    <UnitProperty pKey="眩晕时间" pValue="2 秒" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="15" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  | 所需实验室等级|所需大本等级|
|  --- |   ----   |   ----  |  ----  |  ----  |    ----   |      ----    |    ----   |
|   1  |    430   |    731  |  4600  |     \  |     \     |        1     |     15    |
|   2  |    470   |    799  |  4900  |    6M  |    4      |       13     |     15    |
|   3  |    510   |    867  |  5200  |  8.5M  |    5      |       13     |     15    |
|   4  |    550   |    935  |  5500  |   10M  |    8      |       13     |     15    |
|   5  |    590   |   1003  |  5800  |   19M  |   13,12   |       15     |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>攻城机器的建造时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 4 级攻城钻机的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 5 级攻城钻机。</TimelineRow>
        <TimelineRow>2 ~ 4 级攻城钻机的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 4 级攻城钻机的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 ~ 4 级攻城钻机的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增攻城机器：攻城钻机。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>