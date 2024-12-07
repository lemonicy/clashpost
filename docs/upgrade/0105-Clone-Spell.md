---
title: "部落冲突 coc 镜像法术（克隆法术）升级数据"
navTitle: "镜像法术"
shownTitle: "镜像法术（克隆法术）"
description: "使用镜像法术复制出一批奇袭部队！镜像法术将会在施放地点生成一个圆形光环，任何进入光环的部队都会被复制，被复制部队的存活时间有限。复制的部队单位达到其单位上限时，镜像法术将会失效。"
module: upgrade-home
imgFolder: home_tech/0105
wiki: https://clashofclans.fandom.com/wiki/Clone_Spell
canonical: /upgrade/0105-Clone-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Clone_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="使用镜像法术复制出一批奇袭部队！<br>镜像法术将会在施放地点生成一个圆形光环，任何进入光环的部队都会被复制，被复制部队的存活时间有限。复制的部队单位达到其单位上限时，镜像法术将会失效。"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 镜像法术的复制机制：圈内存活士兵进入复制周期，复制顺序为圈内下兵顺序，越早下的兵越先复制（可等价理解为士兵存活时间越久的越先复制），一个周期完成后重复下一个周期直到复制满。若有新士兵进入则重新根据下兵顺序计算复制顺序，详见：[镜像法术机制讲解](/p/2211)。
2. 镜像法术对我方英雄、战宠和攻城机器无效。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="复制部队" />
    <UnitProperty pKey="作用目标" pValue="我方部队" />
    <UnitProperty pKey="法术持续时间" pValue="18 秒" />
    <UnitProperty pKey="复制间隔" pValue="0.3 秒" />
    <UnitProperty pKey="复制出的军队有效时间" pValue="30 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="3" />
    <UnitProperty pKey="所需法术工厂等级" pValue="5" />
    <UnitProperty pKey="所需大本等级" pValue="10" />
    <UnitProperty pKey="法术配置时间" pValue="540" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |最大复制<br>人口数| 升级花费 | 升级时间 |所需<br>实验室等级| 所需大本等级 |
| ---- |       ----     |   ----   |  ----   |       ----     |     ----    |
|   1  |        22      |     \    |   \     |         1      |      10     |
|   2  |        24      |   1.5M   |   1     |         8      |      10     |
|   3  |        26      |   2.5M   |   2     |         8      |      10     |
|   4  |        28      |     3M   |   2,12  |         9      |      11     |
|   5  |        30      |     4M   |   3,12  |         9      |      11     |
|   6  |        34      |     5M   |   4     |        11      |      13     |
|   7  |        38      |     8M   |   6     |        12      |      14     |
|   8  |        42      |     9M   |   8     |        13      |      15     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 8 级镜像法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 8 级镜像法术的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 8 级镜像法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 ~ 8 级镜像法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 8 级镜像法术。</TimelineRow>
        <TimelineRow>6 级镜像法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 6 级镜像法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>1 ~ 4 级镜像法术可复制的部队人口数增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6 级镜像法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 5 级镜像法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 7 级镜像法术。</TimelineRow>
        <TimelineRow>6 级镜像法术可复制的部队单位从 33 提高到 34。</TimelineRow>
        <TimelineRow>2 ~ 5 级镜像法术的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 3 级镜像法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 6 级镜像法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>