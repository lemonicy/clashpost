---
title: "部落冲突 coc 暗黑训练营升级数据"
navTitle: "暗黑训练营"
shownTitle: "暗黑训练营"
description: "暗黑训练营将向源于暗黑重油的生物敞开大门。升级暗黑训练营解锁更多有独特战斗力的部队。"
module: upgrade-home
imgFolder: home_buildings/0482
wiki: https://clashofclans.fandom.com/wiki/Dark_Barracks
canonical: /upgrade/0482-Dark-Barracks
---

- *如想查看训练圣水兵的训练营，请访问：[训练营](/upgrade/0481-Barracks)。*
- *如想查看夜世界的建筑大师训练营，请访问：[夜世界建筑大师训练营](/upgrade/1280-Builder-Barracks)。*
- *都城的训练营比较多，这里就不放链接了，如有需求请自行前往相关页面查看。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Dark_Barracks12_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="暗黑训练营" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Dark_Barracks1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Dark_Barracks2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Dark_Barracks3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Dark_Barracks4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Dark_Barracks5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Dark_Barracks6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Dark_Barracks7.png" />
        <UnitImg imgTitle="8 级" imgSrc="Dark_Barracks8.png" />
        <UnitImg imgTitle="9 级" imgSrc="Dark_Barracks9.png" />
        <UnitImg imgTitle="10 级" imgSrc="Dark_Barracks10.png" />
        <UnitImg imgTitle="11 级" imgSrc="Dark_Barracks11.png" />
        <UnitImg imgTitle="12 级" imgSrc="Dark_Barracks12.png" imgHd="Dark_Barracks12_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7 -17" />
    <BuildingNumRow title="建筑数量" num="    0,     1" />
</BuildingNum>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
</UnitProperties>

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

| 等级 | 生命值 | 升级费用 | 升级时间 | 升级后可获<br>得的经验 | 所需<br>大本等级 | 解锁的兵种 |
| ---- |  ---- |   ----  |    ---   |          ---         |       ---       |    ---    |
|    1 |   500 |   200k  |   0, 8   |                      |         7       |<a href="/upgrade/0080-Minion">亡灵</a>|
|    2 |   550 |   600k  |   1      |                      |         7       |<a href="/upgrade/0081-Hog-Rider">野猪骑士</a>|
|    3 |   600 |     1M  |   1,12   |                      |         8       |<a href="/upgrade/0082-Valkyrie">瓦基丽武神</a>|
|    4 |   650 |   1.6M  |   2      |                      |         8       |<a href="/upgrade/0083-Golem">戈仑石人</a>|
|    5 |   700 |   2.2M  |   2,12   |                      |         9       |<a href="/upgrade/0084-Witch">女巫</a>|
|    6 |   750 |   2.9M  |   3      |                      |         9       |<a href="/upgrade/0085-Lava-Hound">熔岩猎犬</a>|
|    7 |   800 |     4M  |   5      |                      |        10       |<a href="/upgrade/0086-Bowler">巨石投手</a>|
|    8 |   850 |     7M  |   6      |                      |        11       |<a href="/upgrade/0087-Ice-Golem">戈仑冰人</a>|
|    9 |   900 |   7.2M  |   7      |                      |        12       |<a href="/upgrade/0088-Headhunter">英雄猎手</a>|
|   10 |   950 |    10M  |   8      |                      |        13       |<a href="/upgrade/0089-Apprentice-Warden">守护者学徒</a>|
|   11 |  1000 |    12M  |   9      |                      |        14       |<a href="/upgrade/008a-Druid">德鲁伊</a>|
|   12 |  1050 |    20M  |  12      |                      |        15       |<a href="/upgrade/008b-Furnace">烈焰熔炉</a>|
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/24">  
        <TimelineRow>15 本新增 12 级暗黑训练营，新兵种：烈焰熔炉。</TimelineRow>
        <TimelineRow>10 ~ 11 级暗黑训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">  
        <TimelineRow>5 ~ 11 级暗黑训练营的升级时间减少。</TimelineRow>
        <TimelineRow>8 ~ 9 级暗黑训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>10 级暗黑训练营的升级时间减少。</TimelineRow>
        <TimelineRow>10 级暗黑训练营的升级费用降低。</TimelineRow>
        <TimelineRow>14 本新增 11 级暗黑训练营，新兵种：德鲁伊。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>1 ~ 4 级暗黑训练营的升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">  
        <TimelineRow>13 本新增 10 级暗黑训练营。</TimelineRow>
        <TimelineRow>9 级暗黑训练营的升级时间减少。</TimelineRow>
        <TimelineRow>9 级暗黑训练营的升级费用降低。</TimelineRow>       
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>两个训练营合并为一个，更新后的兵种训练时间等同于更新前两个训练营的训练时间。</TimelineRow>
        <TimelineRow>训练营升级时兵种可继续训练部队，但训练速度减半（训练时间翻倍）。</TimelineRow>
        <TimelineRow>1 ~ 7 级暗黑训练营的升级时间增加。</TimelineRow>
        <TimelineRow>8 ~ 9 级暗黑训练营的升级时间减少。</TimelineRow>
        <TimelineRow>1 ~ 9 级暗黑训练营的升级费用增加。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>1 ~ 6 级暗黑训练营的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>所有等级暗黑训练营的升级费用降低。</TimelineRow>
        <TimelineRow>1 ~ 4、8 级暗黑训练营的升级费时间减少。</TimelineRow>
    </TimelineItem>
     <TimelineItem date="2020/06/22">
        <TimelineRow>12 本新增 9 级暗黑训练营。</TimelineRow>
    </TimelineItem>   
        <TimelineItem date="2019/04/02">
        <TimelineRow>所有等级暗黑训练营的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>