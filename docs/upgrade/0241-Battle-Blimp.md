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

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 攻城飞艇部署后会直线前往 [大本营](/upgrade/0400-Town-Hall) 方向，并在路线上投掷炸弹。
3. 当攻城飞艇的血量清零或到达大本营时，攻城飞艇就会解体并释放里面的援军。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="对着大本营前进" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="3 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2.25 格/秒" />
    <UnitProperty pKey="炸弹投掷速度" pValue="1.5 秒/次" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
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

| 等级 |炸弹的<br>平均每秒伤害|炸弹的<br>爆炸伤害|死亡后<br>坠落伤害| 生命值 | 升级花费| 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |        ----        |       ----      |       ----     |  ----  |  ----  |   ----  |      ----       |     ----      |
|   1  |         100        |       150       |        700     |  3000  |     \  |    \    |        1        |      12       |
|   2  |         140        |       210       |        800     |  3500  |  2.5M  |    2    |       10        |      12       |
|   3  |         180        |       270       |        900     |  4000  |  3.5M  |    3    |       10        |      12       |
|   4  |         220        |       330       |       1000     |  4500  |  6.5M  |    7    |       11        |      13       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>攻城机器的建造时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 4 级攻城飞艇的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
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