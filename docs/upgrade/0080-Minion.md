---
title: "部落冲突 coc 亡灵（苍蝇）升级数据"
navTitle: "亡灵"
shownTitle: "亡灵（苍蝇）"
description: "这些飞行的小家伙诞生于暗黑重油。它们在战场上来去自如，不会被搜空地雷检测到，但是在我们的世界里它们很脆弱。"
module: upgrade-home
imgFolder: home_tech/0080
wiki: https://clashofclans.fandom.com/wiki/Minion
canonical: /upgrade/0080-Minion
---

- *如想查看该兵种的强化版本，请访问：[超级亡灵（马云）](/upgrade/0608-Super-Minion)。*
- *如想查看夜世界的异变亡灵，请访问：[夜世界异变亡灵](/upgrade/1003-Beta-Minion)。*
- *如想查看都城的亡灵大军，请访问：[都城亡灵大军](/upgrade/2004-Minion-Horde)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Minion_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Minion1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Minion3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Minion5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Minion6.png" />
        <UnitImg imgTitle="7 - 8 级" imgSrc="Minion7.png" />
        <UnitImg imgTitle="9 级" imgSrc="Minion9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Minion10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Minion11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Minion12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Minion13.png" imgHd="Minion13_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

注：亡灵不能触发 [搜空地雷](/upgrade/0384-Seeking-Air-Mine)。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="2" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.25 格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="1" />
    <UnitProperty pKey="所需大本等级" pValue="7" />
    <UnitProperty pKey="训练时间" pValue="18" trainingSystem="2022" />
</UnitProperties>

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

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |  ---- |   ----  |    ----   |       ----      |      ----     |
|   1  |     38   |    38   |   58  |      \  |     \     |         1       |        7      |
|   2  |     41   |    41   |   63  |     1K  |    0, 8   |         5       |        7      |
|   3  |     44   |    44   |   68  |   2.5K  |    0,12   |         6       |        8      |
|   4  |     47   |    47   |   73  |     5K  |    0,18   |         6       |        8      |
|   5  |     50   |    50   |   78  |    10K  |    1      |         7       |        9      |
|   6  |     54   |    54   |   84  |    15K  |    2      |         8       |       10      |
|   7  |     58   |    58   |   90  |  31.5K  |    2,12   |         9       |       11      |
|   8  |     62   |    62   |   96  |  47.5K  |    3,12   |        10       |       12      |
|   9  |     66   |    66   |  102  |    75K  |    5      |        11       |       13      |
|  10  |     70   |    70   |  108  |   100K  |    6      |        12       |       14      |
|  11  |     74   |    74   |  114  |   115K  |    7      |        13       |       15      |
|  12  |     78   |    78   |  120  |   160K  |   11      |        14       |       16      |
|  13  |     82   |    82   |  126  |   255K  |   14      |        15       |       17      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级亡灵。</TimelineRow>
        <TimelineRow>3 ~ 12 级亡灵的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 12 级亡灵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>10 ~ 11 级亡灵的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 11 级亡灵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 12 级亡灵。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 ~ 11 级亡灵的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6、10 级亡灵的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 ~ 9 级亡灵的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
    <TimelineRow>15 本推出，并在 15 本新增 11 级亡灵。</TimelineRow>
        <TimelineRow>6 ~ 10 级亡灵的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6 级亡灵的升级时间减少。</TimelineRow>
    <TimelineRow>1 ~ 4 级亡灵的伤害增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 10 级亡灵。</TimelineRow>
        <TimelineRow>2 ~ 5、8 级亡灵的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 7 级亡灵的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 7 级亡灵的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>6 级亡灵的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>所有等级亡灵的升级时间减少。</TimelineRow>
    <TimelineRow>2 ~ 6 级亡灵的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>