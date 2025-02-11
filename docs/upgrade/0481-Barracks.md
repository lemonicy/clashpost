---
title: "部落冲突 coc 训练营升级数据"
navTitle: "训练营"
shownTitle: "训练营"
description: "在训练营训练部队助您征战。升级训练营可解锁更高级的兵种，助您在史诗般的战斗中赢得胜利。"
module: upgrade-home
imgFolder: home_buildings/0481
wiki: https://clashofclans.fandom.com/wiki/Barracks
canonical: /upgrade/0481-Barracks
---

- *如想查看训练黑水兵的训练营，请访问：[暗黑训练营](/upgrade/0482-Dark-Barracks)。*
- *如想查看夜世界的建筑大师训练营，请访问：[夜世界建筑大师训练营](/upgrade/1280-Builder-Barracks)。*
- *都城的训练营比较多，这里就不放链接了，如有需求请自行前往相关页面查看。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Barracks18.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="训练营" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Barracks5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Barracks6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Barracks7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Barracks8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Barracks9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Barracks10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Barracks11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Barracks12.png" />
        <UnitImg imgTitle="13 级" imgSrc="Barracks13.png" />
        <UnitImg imgTitle="14 级" imgSrc="Barracks14.png" />
        <UnitImg imgTitle="15 级" imgSrc="Barracks15.png" />
        <UnitImg imgTitle="16 级" imgSrc="Barracks16.png" />
        <UnitImg imgTitle="17 级" imgSrc="Barracks17.png" imgHd="Barracks17_hd.png" />
        <UnitImg imgTitle="18 级" imgSrc="Barracks18.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 17" />
    <BuildingNumRow title="建筑数量" num="1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="提速所需宝石数" pValue="30<sup>*</sup>" />
</UnitProperties>

\* 30 宝石是训练营 + [暗黑训练营](/upgrade/0482-Dark-Barracks) + [攻城机器工坊](/upgrade/0486-Workshop) 捆绑提速一小时的价格，这些建筑不能单独提速。一般来说购买训练药水更划算。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 4,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  生命值 | 升级费用 |  升级时间  |升级后可获<br>得的经验| 所需<br>大本等级 | 解锁的兵种 |
| ---- |   ---  |   ----  |     ---    |         ---        |       ---       |    ---    |
|    1 |   250  |    100  |  0,0, 0,10 |                    |         1       |<a href="/upgrade/0000-Barbarian">野蛮人</a>|
|    2 |   290  |    500  |  0,0, 0,30 |                    |  1<sup>#</sup>  |<a href="/upgrade/0001-Archer">弓箭手</a>|
|    3 |   330  |   2500  |  0,0, 5    |                    |  1<sup>#</sup>  |<a href="/upgrade/0002-Giant">巨人</a>|
|    4 |   370  |   5000  |  0,0,30    |                    |         2       |<a href="/upgrade/0003-Goblin">哥布林</a>|
|    5 |   420  |    20k  |  0, 4      |                    |         3       |<a href="/upgrade/0004-Wall-Breaker">炸弹人</a>|
|    6 |   470  |   120k  |  0,12      |                    |         4       |<a href="/upgrade/0005-Balloon">气球兵</a>|
|    7 |   520  |   270k  |  0,18      |                    |         5       |<a href="/upgrade/0006-Wizard">法师</a>|
|    8 |   580  |   800k  |  1         |                    |         6       |<a href="/upgrade/0007-Healer">天使</a>|
|    9 |   650  |     1M  |  1,12      |                    |         7       |<a href="/upgrade/0008-Dragon">飞龙</a>|
|   10 |   730  |   1.4M  |  2,12      |                    |         8       |<a href="/upgrade/0009-P.E.K.K.A">皮卡超人</a>|
|   11 |   810  |   2.6M  |  3         |                    |         9       |<a href="/upgrade/000a-Baby-Dragon">飞龙宝宝</a>|
|   12 |   900  |   3.7M  |  5         |                    |        10       |<a href="/upgrade/000b-Miner">掘地矿工</a>|
|   13 |   980  |   6.5M  |  6         |                    |        11       |<a href="/upgrade/000c-Electro-Dragon">雷电飞龙</a>|
|   14 |  1050  |     7M  |  7         |                    |        12       |<a href="/upgrade/000d-Yeti">大雪怪</a>|
|   15 |  1150  |    10M  |  7,4       |                    |        13       |<a href="/upgrade/000e-Dragon-Rider">龙骑士</a>|
|   16 |  1250  |    11M  |  8         |                    |        14       |<a href="/upgrade/000f-Electro-Titan">雷霆泰坦</a>|
|   17 |  1350  |  12.6M  | 12         |                    |        15       |<a href="/upgrade/0010-Root-Rider">根蔓骑士</a>|
|   18 |  1450  |    21M  | 15         |                    |        16       |<a href="/upgrade/0011-Thrower">巨矛投手</a>|
</UnitTable>

\# 根据安装包解析的结果，玩家可以在 1 本把训练营升到 3 级，但这仅仅是理论上的，实际上新手教程会直接引导玩家升到 2 本，根本没有在 1 本升级训练营的机会。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/10">
        <TimelineRow>2 ~ 4 级训练营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 16 本新增 18 级训练营。</TimelineRow>    
        <TimelineRow>5、11 ~ 17 级训练营的升级时间减少。</TimelineRow>
        <TimelineRow>14、17 级训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>16 ~ 17 级训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 15 本新增 17 级训练营。</TimelineRow>    
        <TimelineRow>15 ~ 16 级训练营的升级时间减少。</TimelineRow>
        <TimelineRow>9 ~ 10 级训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">  
        <TimelineRow>14 ~ 15 级训练营的升级费用和时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 14 本新增 16 级训练营，可解锁新兵种：雷霆泰坦。</TimelineRow>
        <TimelineRow>四个训练营合并为一个，更新后的兵种训练时间等同于更新前四个训练营的训练时间。</TimelineRow>
        <TimelineRow>训练营升级时兵种可继续训练部队，但训练速度减半（训练时间翻倍）。</TimelineRow>
        <TimelineRow>5 ~ 15 级训练营的升级费用和升级时间增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>6 ~ 12 级训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>13 本新增 15 级训练营，新兵种：龙骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>1 ~ 2、11 ~ 12 级训练营的升级费用降低。</TimelineRow>
        <TimelineRow>3、10 ~ 13 级训练营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13 本推出，并在 13 本新增 14 级训练营，可解锁新兵种：大雪怪。</TimelineRow>
    </TimelineItem>
        <TimelineItem date="2019/04/02">
        <TimelineRow>9 ~ 12 级训练营的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 13 级训练营的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>