---
title: "部落冲突 coc 戈仑冰人升级数据"
navTitle: "戈仑冰人"
shownTitle: "戈仑冰人"
description: "戈仑冰人个性冷酷而且毫无幽默感。他经过的地方无不冷冻成霜，被消灭时还会冻住四周的事物。聚会时要是有人跟他说话，戈仑冰人会原地冻住。抵御入侵村庄的敌军时，他的冰冻效果范围比进攻时小，持续时间也更短。"
module: upgrade-home
imgFolder: home_tech/0087
wiki: https://clashofclans.fandom.com/wiki/Ice_Golem
canonical: /upgrade/0087-Ice-Golem
---

- *本页面的内容不是戈仑石人，如想查看戈仑石人的页面，请访问：[戈仑石人](/upgrade/0083-Golem)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Golem_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Ice_Golem1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Ice_Golem3.png" />
        <UnitImg imgTitle="5 - 6 级" imgSrc="Ice_Golem5.png" />
        <UnitImg imgTitle="7 级" imgSrc="Ice_Golem7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Ice_Golem8.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 戈仑冰人的普通攻击与 [冰冻法术](/upgrade/0104-Freeze-Spell) 不同，不能把敌方部队和建筑完全冻住，只是有一个减速效果。
2. 戈仑冰人死亡后的冰冻效果与冰冻法术类似，可以把敌方部队和建筑完全冻住。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="15" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="攻击减速效果" pValue="50% 移速<br>50% 攻速" />
    <UnitProperty pKey="减速持续时间" pValue="2 秒" />
    <UnitProperty pKey="冰冻半径" pValue="7.5 格 (进攻)<br>5.5 格 (防守)" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="8" />
    <UnitProperty pKey="所需大本等级" pValue="11" />
    <UnitProperty pKey="训练时间" pValue="150" :isTrainingTime="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害| 每次伤害 |进攻时<br>死亡冰冻时间|防守时<br>死亡冰冻时间| 生命值 |升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| --- |   ---   |   ----  |        ----         |        ---         |  ---- |  ----  |    ----   |       ----      |      ----     |
|  1  |    24   |    48   |      4    秒        |       2    秒      |  2600 |    \   |      \    |        1        |       11      |
|  2  |    28   |    56   |      4.75 秒        |       2.25 秒      |  2800 |    55K |     2,20  |        9        |       11      |
|  3  |    32   |    64   |      5.5  秒        |       2.5  秒      |  3000 |    85K |     4     |        9        |       11      |
|  4  |    36   |    72   |      6.25 秒        |       2.75 秒      |  3200 |   100K |     5     |       10        |       12      |
|  5  |    40   |    80   |      7    秒        |       3    秒      |  3400 |   125K |     6,12  |       10        |       12      |
|  6  |    44   |    88   |      7.5  秒        |       3.25 秒      |  3600 |   220K |    11     |       12        |       14      |
|  7  |    48   |    96   |      8    秒        |       3.5  秒      |  3900 |   280K |    12     |       13        |       15      |
|  8  |    52   |   104   |      8.5  秒        |       3.75 秒      |  4200 |   360K |    15,12  |       14        |       16      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>7 级戈仑冰人的升级时间减少。</TimelineRow>
        <TimelineRow>6 ~ 7 级戈仑冰人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在 16 本新增 8 级戈仑冰人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 ~ 7 级戈仑冰人的升级时间减少。</TimelineRow>
        <TimelineRow>6 级戈仑冰人的升级费用降低。</TimelineRow>
        <TimelineRow>天使治疗戈仑石人、小戈仑石人、戈仑冰人的几率降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 7 级戈仑冰人。</TimelineRow>
        <TimelineRow>4 ~ 5 级戈仑冰人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 6 级戈仑冰人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 3 级戈仑冰人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 6 级戈仑冰人。</TimelineRow>
        <TimelineRow>戈仑冰人的训练时间由 360 秒减少到 300 秒。</TimelineRow>
        <TimelineRow>2 ~ 4 级戈仑冰人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>所有等级戈仑冰人防守状态下死亡后的冰冻时间减少 0.5 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>12 级大本营新增 5 级戈仑冰人。</TimelineRow>
        <TimelineRow>在防守时，戈仑冰人死亡后的冰冻时间整体减少。</TimelineRow>
        <TimelineRow>戈仑冰人进攻时的冰冻半径增大 36%。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>