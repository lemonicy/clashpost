---
title: "部落冲突 coc 特斯拉电磁塔（电塔）升级数据"
navTitle: "特斯拉电磁塔"
shownTitle: "特斯拉电磁塔（电塔）"
description: "隐藏在地下的特斯拉电磁塔就像一个危险陷阱！法师在这个防御建筑中注入了雷电的力量，当敌军地面或空中部队靠近时，特斯拉电磁塔会弹出并运用雷电之力攻击这些倒霉蛋。"
module: upgrade-home
imgFolder: home_buildings/0307
wiki: https://clashofclans.fandom.com/wiki/Hidden_Tesla
canonical: /upgrade/0307-Hidden-Tesla
---

- *如想查看 12 本的自带武器，请访问 [巨型特斯拉电磁塔](/upgrade/030c-Giga-Tesla)。*
- *如想查看夜世界的特斯拉电磁塔，请访问：[夜世界特斯拉电磁塔](/upgrade/1103-Hidden-Tesla)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hidden_Tesla16.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="特斯拉电磁塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Hidden_Tesla1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Hidden_Tesla2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Hidden_Tesla3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Hidden_Tesla4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Hidden_Tesla5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Hidden_Tesla6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Hidden_Tesla7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Hidden_Tesla8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Hidden_Tesla9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Hidden_Tesla10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Hidden_Tesla11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Hidden_Tesla12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Hidden_Tesla13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Hidden_Tesla14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Hidden_Tesla15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Hidden_Tesla16.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7, 8, 9 - 11, 12 - 17" />
    <BuildingNumRow title="建筑数量" num="    0, 2, 3,      4,       5" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="触发距离" pValue="6 格" />   
    <UnitProperty pKey="射程" pValue="7 格" />
    <UnitProperty pKey="攻速" pValue="0.6 秒/次" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 6,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |   ---  |   ---   |    ---    |        ---          |       ---      |
|   1  |    34   |   20.4  |   600  |  250k   |   0, 2    |                     |        7       |
|   2  |    40   |   24    |   630  |  350k   |   0, 3    |                     |        7       |
|   3  |    48   |   28.8  |   660  |  500k   |   0, 4    |                     |        7       |
|   4  |    55   |   33    |   690  |  600k   |   0, 6    |                     |        8       |
|   5  |    64   |   38.4  |   730  |  800k   |   0,12    |                     |        8       |
|   6  |    75   |   45    |   770  |  1.2M   |   1       |                     |        8       |
|   7  |    87   |   52.2  |   810  |  1.4M   |   1, 6    |                     |        9       |
|   8  |    99   |   59.4  |   850  |  1.6M   |   1,12    |                     |       10       |
|   9  |   110   |   66    |   900  |  2.1M   |   1,18    |                     |       11       |
|  10  |   120   |   72    |   980  |    3M   |   2       |                     |       12       |
|  11  |   130   |   78    |  1100  |  3.1M   |   2,12    |                     |       13       |
|  12  |   140   |   84    |  1200  |  3.7M   |   3       |                     |       13       |
|  13  |   150   |   90    |  1350  |  5.1M   |   4       |                     |       14       |
|  14  |   160   |   96    |  1450  |  6.5M   |   5       |                     |       15       |
|  15  |   170   |  102    |  1550  |  8.2M   |   6       |                     |       16       |
|  16  |   180   |  108    |  1650  | 20.5M   |  15       |                     |       17       |
| ⚡1  |   185   |  111    |  1650  |   10M   |   4       |                     |       17       |
| ⚡2  |   185   |  111    |  1700  |    6M   |   6       |                     |       17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3、7 ~ 11、13 ~ 15 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 5、7、9 ~ 15 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17 本新增 16 级特斯拉电磁塔。</TimelineRow>
        <TimelineRow>4、5、12 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>12 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>7 ~ 8、11 ~ 15 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 15 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/09/09">
        <TimelineRow>超级充能推出，特斯拉电磁塔是第一批可以充能的建筑之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>10 ~ 14 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>13 ~ 14 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 15 级特斯拉电磁塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 ~ 14 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 9、13 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 14 级特斯拉电磁塔。</TimelineRow>
        <TimelineRow>10 ~ 12 级特斯拉电磁塔的升级时间减少。</TimelineRow>
        <TimelineRow>10 ~ 12 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>8 ~ 13 级特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 12 级特斯拉电磁塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 13 级特斯拉电磁塔。</TimelineRow>
        <TimelineRow>1 ~ 9 级特斯拉电磁塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>13 本新增 12 级特斯拉电磁塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本开放，新增 11 级特斯拉电磁塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>10 级特斯拉电磁塔的生命值由 950 提高到 980。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 8 级电塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 9 级电塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>