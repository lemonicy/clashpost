---
title: "部落冲突 coc 炸弹塔升级数据"
navTitle: "炸弹塔"
shownTitle: "炸弹塔"
description: "炸弹塔可以投掷炸弹轰炸附近的地面部队，被摧毁后会产生一个大爆炸！近战部队最好离它远点吧！"
module: upgrade-home
imgFolder: home_buildings/0308
wiki: https://clashofclans.fandom.com/wiki/Bomb_Tower
canonical: /upgrade/0308-Bomb-Tower
---

- *如想查看都城的炸弹塔，请访问：[都城炸弹塔](/upgrade/2205-Bomb-Tower)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Bomb_Tower12.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="炸弹塔" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Bomb_Tower1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Bomb_Tower2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Bomb_Tower3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Bomb_Tower4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Bomb_Tower5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Bomb_Tower6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Bomb_Tower7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Bomb_Tower8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Bomb_Tower9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Bomb_Tower10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Bomb_Tower11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Bomb_Tower12.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1-7, 8-9, 11-17" />
    <BuildingNumRow title="建筑数量" num="  0,   1,     2" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.5 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="射程" pValue="6 格" />
    <UnitProperty pKey="攻速" pValue="1.1 秒/次" />
    <UnitProperty pKey="被摧毁时的自爆半径" pValue="2.75 格" />
    <UnitProperty pKey="自爆延时" pValue="1 秒" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 7,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |被摧毁后的<br>自爆伤害| 生命值 | 升级费用 |  升级时间  |升级后可<br>获得的经验| 所需<br>大本等级 |
| ---- |   ---   |   ---   |         ---        |   ---  |   ---   |    ---    |         ---         |       ---      |
|   1  |    24   |   26.4  |         150        |   650  |   700k  |    0,18   |                     |        8       |
|   2  |    28   |   30.8  |         180        |   700  |     1M  |    1      |                     |        8       |
|   3  |    32   |   35.2  |         220        |   750  |   1.6M  |    1,12   |                     |        9       |
|   4  |    40   |   44    |         260        |   850  |     2M  |    2      |                     |       10       |
|   5  |    48   |   52.8  |         300        |  1050  |   2.8M  |    2,12   |                     |       11       |
|   6  |    56   |   61.6  |         350        |  1300  |     2M  |    2      |                     |       11       |
|   7  |    64   |   70.4  |         400        |  1600  |     6M  |    4      |                     |       12       |
|   8  |    72   |   79.2  |         450        |  1900  |     7M  |    4,12   |                     |       13       |
|   9  |    84   |   92.4  |         500        |  2300  |     8M  |    5      |                     |       14       |
|  10  |    94   |  103.4  |         550        |  2500  |  10.5M  |    6      |                     |       15       |
|  11  |   104   |  114.4  |         600        |  2700  |  15.3M  |   11      |                     |       16       |
|  12  |   114   |  125.4  |         650        |  2900  |    20M  |   15      |                     |       17       |
| ⚡1  |   119   |  130.9  |         650        |  2900  |    10M  |    4      |                     |       17       |
| ⚡2  |   119   |  130.9  |         650        |  3000  |     6M  |    6      |                     |       17       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>6 级炸弹塔的升级时间减少。</TimelineRow>
        <TimelineRow>6 级炸弹塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 12 级炸弹塔。</TimelineRow>
        <TimelineRow>5、7 ~ 11 级炸弹塔的升级时间减少。</TimelineRow>
        <TimelineRow>6、8 ~ 11 级炸弹塔的升级费用降低。</TimelineRow>
        <TimelineRow>炸弹塔成为第二批可以充能的建筑。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>7 ~ 10 级炸弹塔的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 10 级炸弹塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级炸弹塔。</TimelineRow>
        <TimelineRow>所有等级炸弹塔的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 6、9 级炸弹塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>7 ~ 8 级炸弹塔的升级时间减少。</TimelineRow>
        <TimelineRow>7 ~ 8 级炸弹塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 10 级炸弹塔。</TimelineRow>
        <TimelineRow>4 ~ 9 级炸弹塔的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 8 级炸弹塔的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 9 级炸弹塔。</TimelineRow>
        <TimelineRow>1 ~ 6 级炸弹塔的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 6 级炸弹塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>13 本新增 8 级炸弹塔。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/02/28">
        <TimelineRow>5 ~ 7 级炸弹塔的血量由 1000/1200/1400 调整为 1050/1300/1600。</TimelineRow>
        <TimelineRow>5 ~ 7 级炸弹塔的每秒伤害由 46/52/60 调整为 48/56/64。</TimelineRow>
        <TimelineRow>6 ~ 7 级炸弹塔的摧毁爆炸伤害由 340/380 调整为 350/400。</TimelineRow>
    </TimelineItem> 
        <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 6 级炸弹塔的升级费用降低。</TimelineRow>
        <TimelineRow>1 ~ 5 级炸弹塔的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>