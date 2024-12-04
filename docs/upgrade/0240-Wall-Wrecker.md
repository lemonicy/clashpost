---
title: "部落冲突 coc 攻城战车升级数据"
navTitle: "攻城战车"
shownTitle: "攻城战车"
description: "攻城战车的作用简单直接：攻破挡在路上的一切障碍将部落援军运送到村庄核心地带。它由坚固材料打造而成，可以承受不少伤害。法术对攻城战车无效。"
module: upgrade-home
imgFolder: home_tech/0240
wiki: https://clashofclans.fandom.com/wiki/Wall_Wrecker
canonical: /upgrade/0240-Wall-Wrecker
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Wall_Wrecker_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Wall_Wrecker1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Wall_Wrecker2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Wall_Wrecker3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Wall_Wrecker4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Wall_Wrecker5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 从 12 本开始可以建造攻城机器，但是 10 级及以上 [大本营](/upgrade/0400-Town-Hall) 就可以请求部落内的其他人增援一个。
2. 攻城战车和 [攻城飞艇](/upgrade/0241-Battle-Blimp) 部署后会直线前往大本营方向，到达大本营后自动破裂，释放里面的援军。
3. 如果你想提前释放援军，再点一下攻城机器图标即可。
4. 含有正面效果的法术对攻城机器均无效，如治疗、狂暴、弹跳、镜像、隐形、急速等。
5. 攻城机器可使用战斗书（或战斗锤）升级。
6. 一般来说捐兵时的经验值等于兵种的人口数，但攻城机器例外。捐赠一个攻城机器可以获得 30 经验值，但是在计算 [天鹰火炮](/upgrade/030b-Eagle-Artillery) 触发时，攻城机器算 1 人口。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="对着大本营前进" />
    <UnitProperty pKey="攻击偏好" pValue="城墙 (10 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.3 秒/次" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="建造时间" pValue="1200" :isTrainingTime="true" />
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

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费| 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |  ----  |  ----  |   ----  |      ----       |     ----      |
|   1  |    250   |   325   |  5500  |     \  |    \    |        1        |      12       |
|   2  |    300   |   390   |  6000  |  2.5M  |    2    |       10        |      12       |
|   3  |    350   |   455   |  6500  |  3.5M  |    3    |       10        |      12       |
|   4  |    400   |   520   |  7000  |  6.5M  |    7    |       11        |      13       |
|   5  |    450   |   585   |  7500  |   10M  |    9    |       13        |      15       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级攻城战车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级攻城战车的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 5 级攻城战车的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 5 级攻城战车。</TimelineRow>
        <TimelineRow>2 ~ 4 级攻城战车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城战车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/01/20">
        <TimelineRow>所有等级攻城战车的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>如果您没有部署攻城机器，当其他军队都被消灭后，战斗不再会自动结束。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 4 级攻城战车,优化了攻城战车的寻路系统。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>