---
title: "部落冲突 coc 野猪骑士升级数据"
navTitle: "野猪骑士"
shownTitle: "野猪骑士"
description: "驯服了狂暴的跳跳猪后，野猪骑士可以直接攻击那些躲在城墙后面的鼠辈了！有暗黑重油的滋养，这些勇士战无不胜！"
module: upgrade-home
imgFolder: home_tech/0081
wiki: https://clashofclans.fandom.com/wiki/Hog_Rider
canonical: /upgrade/0081-Hog-Rider
---

- *如想查看该兵种的强化版本，请访问：[超级野猪骑士](/upgrade/060f-Super-Hog-Rider)。*
- *如想查看夜世界的野猪飞骑，请访问：[夜世界野猪飞骑](/upgrade/100a-Hog-Glider)。*
- *如想查看都城的野猪突袭队，请访问：[都城野猪突袭队](/upgrade/200b-Hog-Raiders)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Hog_Rider1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Hog_Rider3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Hog_Rider5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Hog_Rider6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Hog_Rider7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Hog_Rider8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Hog_Rider9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Hog_Rider10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Hog_Rider11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Hog_Rider12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Hog_Rider13.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑<sup>*</sup>" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="7" />
    <UnitProperty pKey="训练时间" pValue="45" :isTrainingTime="true" />
</UnitProperties>

\* 如果场上存在防御建筑，则野猪骑士不会去攻击敌方的援军、英雄、骷髅兵。如果场上没有防御，则野猪骑士会优先攻击附近的敌方单位，然后才会去攻击普通建筑。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间 |所需实验室等级|所需大本等级|
|  --- |    ---   |   ---   |   --- |    ---  |     ---   |     ---    |    ---    |
|   1  |     60   |    60   |   270 |      \  |     \     |      1     |     7     |
|   2  |     70   |    70   |   312 |     4K  |    0,10   |      5     |     7     |
|   3  |     80   |    80   |   370 |     7K  |    0,20   |      6     |     8     |
|   4  |     92   |    92   |   430 |    10K  |    1, 6   |      6     |     8     |
|   5  |    105   |   105   |   500 |    20K  |    2      |      7     |     9     |
|   6  |    118   |   118   |   590 |    37K  |    2,12   |      8     |    10     |
|   7  |    140   |   140   |   700 |    70K  |    3      |      9     |    11     |
|   8  |    155   |   155   |   810 |    95K  |    4      |     10     |    12     |
|   9  |    165   |   165   |   890 |   100K  |    5      |     10     |    12     |
|  10  |    176   |   176   |   970 |   175K  |    7      |     11     |    13     |
|  11  |    187   |   187   |  1080 |   215K  |    8,18   |     12     |    14     |
|  12  |    200   |   200   |  1230 |   250K  |   12      |     13     |    15     |
|  13  |    213   |   213   |  1380 |   350K  |   14,12   |     14     |    16     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 9、11 ~ 12 级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>9、11 ~ 12 级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>7 ~ 10 级野猪骑士的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 13 级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 ~ 12 级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6、11 级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 12 级野猪骑士。</TimelineRow>
        <TimelineRow>8 ~ 10 级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>6 ~ 11 级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6 级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14 本新增 11 级野猪骑士。</TimelineRow>
        <TimelineRow>3 ~ 5 级野猪骑士的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 5、8 级野猪骑士的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8 级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 8 级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>6 级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，并且新增 10 级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>9 级野猪骑士的生命值由 920 降低至 890。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 8 级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 6 级野猪骑士的训练费用降低。</TimelineRow>
        <TimelineRow>新增 9 级野猪骑士，10 级实验室可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>