---
title: "部落冲突 coc 攻城训练营升级数据"
navTitle: "攻城训练营"
shownTitle: "攻城训练营"
description: "攻城训练营平稳降落在战场后，首先会释放出装载的皮卡超人和法师，然后再释放出部落援军。想知道攻城训练营为什么能塞得下这么多部队？天机不可泄露，你还是不知道比较好。"
module: upgrade-home
imgFolder: home_tech/0243
wiki: https://clashofclans.fandom.com/wiki/Siege_Barracks
canonical: /upgrade/0243-Siege-Barracks
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Siege_Barracks.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="常规模型" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Siege_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Siege_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Siege_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Siege_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Siege_Barracks5.png" />
    </UnitImgGroup>
    <UnitImgGroup title="正在降落的攻城训练营" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Parachute_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Parachute_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Parachute_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Parachute_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Parachute_Barracks5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 攻城训练营介绍：
  - 无法移动：部署攻城训练营后，它会在指定位置迅速着陆。着陆成功后，攻城训练营将无法移动。
  - 自带部队：在释放部落援军之前，攻城训练营会首先派出自带的部队。它会先释放 [皮卡超人](/upgrade/0009-P.E.K.K.A)， 然后每隔几秒便释放一个 [法师](/upgrade/0006-Wizard) 参与进攻，直到释放完所有法师。
  - 化为废墟：在部署成功后，攻城训练营的生命值将不断流失，直到最后化为废墟。 生命值全部流失后，墙壁会倒塌，此时部落援军将被自动释放。
  - 手动释放：您也可以手动摧毁攻城训练营，提前释放出其中的部落援军。(部署后再次点击攻城机器图标即可)。
2. 从 12 本开始可以建造攻城机器，但是 10 级及以上 [大本营](/upgrade/0400-Town-Hall) 就可以请求部落内的其他人增援一个。
3. 含有正面效果的法术对攻城机器均无效，如治疗、狂暴、弹跳、镜像、隐形、急速等。
4. 攻城训练营中的自带部队（皮卡和法师）的等级以使用者的科技为准，而援兵等级以捐赠者的科技为准。
5. 攻城机器可使用战斗书（或战斗锤）升级。
6. 一般来说捐兵时的经验值等于兵种的人口数，但攻城机器例外。捐赠一个攻城机器可以获得 30 经验值，但是在计算 [天鹰火炮](/upgrade/030b-Eagle-Artillery) 触发时，攻城机器算 1 人口。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="部署后生成额外部队" />
    <UnitProperty pKey="部队最长生存时间" pValue="30 秒" />
    <UnitProperty pKey="移动速度" pValue="0" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
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

| 等级 |  皮卡数量 | 法师数量 | 生命值 | 升级花费|  升级时间  |所需实验室等级|所需大本等级|
| ---- |   ----   |   ----  |  ----  |  ----  |    ----   |    ----     |   ----    |
|   1  |     1    |     6   |  3300  |     \  |     \     |      1      |    13     |
|   2  |     1    |     8   |  3700  |  3.5M  |     3     |     10      |    13     |
|   3  |     1    |    10   |  4100  |    5M  |     4     |     10      |    13     |
|   4  |     1    |    11   |  4500  |    8M  |     7     |     11      |    13     |
|   5  |     2    |    11   |  4800  |   18M  |    12     |     14      |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 4 级攻城训练营的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 5 级攻城训练营。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级攻城训练营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>2 ~ 4 级攻城训练营的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城训练营的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>修复了攻城训练营持续时间计算不准确的问题，之前它实际的持续时间和信息界面显示的 30 秒有出入。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>4 级攻城训练营的法师数量减少一个。</TimelineRow>
        <TimelineRow>如果您没有部署攻城机器，当其他军队都被消灭后，战斗不再会自动结束。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>