---
title: "部落冲突 coc 攻城飞艇升级数据"
navTitle: "攻城飞艇"
shownTitle: "攻城飞艇"
description: "攻城飞艇可以无视地面障碍，并将您的部落援军直接运送至敌军村庄中心，在飞行途中还会不断投放炸弹。由于外壳不够结实，它很容易被敌军击落。法术对攻城飞艇无效。"
module: upgrade-home
imgFolder: home_tech/0241
wiki: https://clashofclans.fandom.com/wiki/Battle_Blimp
canonical: /upgrade/0241-Battle-Blimp
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Blimp_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Battle_Blimp1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Battle_Blimp2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Battle_Blimp3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Battle_Blimp4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 从 12 本开始可以建造攻城机器，但是 10 级及以上 [大本营](/upgrade/0400-Town-Hall) 就可以请求部落内的其他人增援一个。
2. [攻城战车](/upgrade/0240-Wall-Wrecker) 和攻城飞艇部署后会直线前往大本营方向，到达大本营后自动破裂，释放里面的援军。 如果你想在到达大本营之前释放援军，再点一下攻城机器图标即可。
3. 如果你想提前释放援军，再点一下攻城机器图标即可。
4. 含有正面效果的法术对攻城机器均无效，如治疗、狂暴、弹跳、镜像、隐形、急速等。
5. 攻城机器可使用战斗书（或战斗锤）升级。
6. 一般来说捐兵时的经验值等于兵种的人口数，但攻城机器例外。捐赠一个攻城机器可以获得 30 经验值，但是在计算 [天鹰火炮](/upgrade/030b-Eagle-Artillery) 触发时，攻城机器算 1 人口。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="对着大本营前进" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2.25 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="建造时间" pValue="1200" :isTrainingTime="true" />
</UnitProperties>

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

| 等级 |  每秒伤害 | 每次伤害 |死亡后<br>坠落伤害| 生命值 | 升级花费| 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |       ----      |  ----  |  ----  |   ----  |      ----       |     ----      |
|   1  |    100   |   150   |        700      |  3000  |     \  |    \    |        1        |      12       |
|   2  |    140   |   210   |        800      |  3500  |  3.8M  |    4    |       10        |      12       |
|   3  |    180   |   270   |        900      |  4000  |    5M  |    5    |       10        |      12       |
|   4  |    220   |   330   |       1000      |  4500  |  8.5M  |    8    |       11        |      13       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级攻城飞艇的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>2 ~ 4 级攻城飞艇的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城飞艇的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>现在攻城飞艇的下落位置距离大本营只有 1.5 格，以前是 2 格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/02/15">
        <TimelineRow>各等级攻城飞艇被摧毁时的爆炸伤害从 1000/1200/1400/1600 降低至 700/800/900/1000。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>如果您没有部署攻城机器，当其他军队都被消灭后，战斗不再会自动结束。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13 本新增 4 级攻城飞艇。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>所有等级攻城飞艇的死亡伤害提高。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>所有等级攻城飞艇的生命值增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>