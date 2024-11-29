---
title: "部落冲突 coc 英雄殿堂升级数据"
navTitle: "英雄殿堂"
shownTitle: "英雄殿堂"
description: "这座华丽的殿堂是为了颂扬村庄里最强大的勇士！前往英雄殿堂，查看所有与英雄相关的信息，并升级英雄。升级英雄殿堂可解锁更多英雄！"
module: upgrade-home
imgFolder: home_buildings/0489
wiki: https://clashofclans.fandom.com/wiki/Hero_Hall
canonical: /upgrade/0489-Hero-Hall
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hero_Hall11_hd.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Hero_Hall1.png" imgHd="Town_Hall1_hd.png" />
        <UnitImg imgTitle="2 级" imgSrc="Hero_Hall2.png" imgHd="Town_Hall2_hd.png" />
        <UnitImg imgTitle="3 级" imgSrc="Hero_Hall3.png" imgHd="Town_Hall3_hd.png" />
        <UnitImg imgTitle="4 级" imgSrc="Hero_Hall4.png" imgHd="Town_Hall4_hd.png" />
        <UnitImg imgTitle="5 级" imgSrc="Hero_Hall5.png" imgHd="Town_Hall5_hd.png" />
        <UnitImg imgTitle="6 级" imgSrc="Hero_Hall6.png" imgHd="Town_Hall6_hd.png" />
        <UnitImg imgTitle="7 级" imgSrc="Hero_Hall7.png" imgHd="Town_Hall7_hd.png" />
        <UnitImg imgTitle="8 级" imgSrc="Hero_Hall8.png" imgHd="Town_Hall8_hd.png" />
        <UnitImg imgTitle="9 级" imgSrc="Hero_Hall9.png" imgHd="Town_Hall9_hd.png" />
        <UnitImg imgTitle="10 级" imgSrc="Hero_Hall10.png" imgHd="Town_Hall10_hd.png" />
        <UnitImg imgTitle="11 级" imgSrc="Hero_Hall11.png" imgHd="Town_Hall11_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 6, 7 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,      1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 2024 年 11 月更新后，你需要在英雄殿堂升级和管理英雄，不能和以前一样直接在阵型中找到英雄升级。
    - 所谓的管理英雄指的是在英雄殿堂中分配战宠、管理装备、查看皮肤、修改防守英雄等快捷方式。
2. 虽然官方将升级操作整合进了英雄殿堂，但升级英雄仍然需要占用建筑工人。
3. 现在 [大本](/upgrade/0400-Town-Hall) 等级不再是限制英雄升级的参数，能不能升级只看英雄殿堂等级。
4. 随着英雄殿堂推出，游戏引入了英雄栏位的概念。
    - 在进攻时，英雄栏位的数量代表可同时上场的英雄数量。
    - 在防守时，英雄栏位会以战旗的形式放置在阵型中，你可以指派一名英雄保卫战旗附近的区域。
6. 如想详细了解英雄系统，请移步：[目前 coc 的英雄系统是什么样的？](/p/6827)

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="4×4" />
    <UnitProperty pKey="判定面积" pValue="3×3" :isJudgeSquare="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 3,
        "type": "cost",
        "gpClass": "building",
        "icon": "Elixir"
    },
    {
        "column": 4,
        "type": "time",
        "gpClass": "building"
    },
    {
        "column": 5,
        "type": "exp",
        "icon": "Exp"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 英雄栏位<br>数量 | 生命值 | 升级费用 | 升级时间 | 升级后可<br>获得的经验 | 所需<br>大本等级 |   解锁英雄   |
|  --- |       ---       |  ---- |   ----   |    ---  |          ---         |       ---        |     ----     |
|   1  |        1        |  2000 |    80k   |  1      |                      |        7         |<a href="/upgrade/0200-Barbarian-King">野蛮人之王</a>|
|   2  |        1        |  2400 |   1.6M   |  2      |                      |        8         |<a href="/upgrade/0201-Archer-Queen">弓箭女皇</a>|
|   3  |        2        |  2800 |   2.3M   |  4      |                      |        9         |<a href="/upgrade/0204-Minion-Prince">亡灵王子</a>|
|   4  |        2        |  3200 |     3M   |  5      |                      |       10         | 无 |
|   5  |        3        |  3600 |     5M   |  6      |                      |       11         |<a href="/upgrade/0202-Grand-Warden">大守护者</a>|
|   6  |        3        |  3800 |     6M   |  7      |                      |       12         | 无 |
|   7  |        4        |  4200 |     9M   |  8      |                      |       13         |<a href="/upgrade/0203-Royal-Champion">飞盾战神</a>|
|   8  |        4        |  4600 |    14M   |  9      |                      |       14         | 无 |
|   9  |        4        |  5000 |    16M   |  12     |                      |       15         | 无 |
|  10  |        4        |  5400 |    18M   |  15     |                      |       16         | 无 |
|  11  |        4        |  5800 |    21M   |  15,12  |                      |       17         | 无 |  

</UnitTable>

<SmallTitle>英雄殿堂的初始等级</SmallTitle>

如果你在 2024 年 11 月更新前已经拥有英雄，那么官方会根据你更新时的英雄等级送你相应等级英雄殿堂和亡灵王子，无需从头开始升级。如果更新时你的英雄尚未升级完成，那么官方会帮你直接秒掉这一级英雄。

官方送的英雄/建筑等级就高不就低。比如说更新时你的四王等级为 60/70/51/20，那么更新后你可以获得 8 级英雄殿堂和 50 级亡灵王子。

<UnitTable class="cp-table-nosticky-column">
    <table>
        <thead>
        <tr>
            <th colspan="4">更新时的英雄等级</th>
            <th colspan="2">官方送的英雄/建筑等级</th>
        </tr>
        <tr>
            <th>野蛮人之王</th>
            <th>弓箭女王</th>
            <th>大守护者</th>
            <th>大守护者</th>
            <th>英雄殿堂</th>
            <th>亡灵王子</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1 - 10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>1</td>
            <td>-</td>
        </tr>
        <tr>
            <td>11 - 20</td>
            <td>1 - 10</td>
            <td>-</td>
            <td>-</td>
            <td>2</td>
            <td>-</td>
        </tr>
        <tr>
            <td>21 - 30</td>
            <td>11 - 30</td>
            <td>-</td>
            <td>-</td>
            <td>3</td>
            <td>-</td>
        </tr>
        <tr>
            <td>31 - 40</td>
            <td>31 - 40</td>
            <td>-</td>
            <td>-</td>
            <td>4</td>
            <td>10</td>
        </tr>
        <tr>
            <td>41 - 50</td>
            <td>41 - 50</td>
            <td>1 - 20</td>
            <td>-</td>
            <td>5</td>
            <td>20</td>
        </tr>
        <tr>
            <td>51 - 65</td>
            <td>51 - 65</td>
            <td>21 - 40</td>
            <td>-</td>
            <td>6</td>
            <td>30</td>
        </tr>
        <tr>
            <td>66 - 75</td>
            <td>66 - 75</td>
            <td>41 - 50</td>
            <td>1 - 25</td>
            <td>7</td>
            <td>40</td>
        </tr>
        <tr>
            <td>76 - 80</td>
            <td>76 - 80</td>
            <td>51 - 55</td>
            <td>26 - 30</td>
            <td>8</td>
            <td>50</td>
        </tr>
        <tr>
            <td>81 - 90</td>
            <td>81 - 90</td>
            <td>56 - 65</td>
            <td>31 - 40</td>
            <td>9</td>
            <td>60</td>
        </tr>
        <tr>
            <td>91 - 95</td>
            <td>91 - 95</td>
            <td>66 - 70</td>
            <td>41 - 45</td>
            <td>10</td>
            <td>70</td>
        </tr>
        </tbody>
    </table>
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/11/25">
        <TimelineRow>游戏新增 17 本，新建筑：英雄殿堂。</TimelineRow>
        <TimelineRow>现在你需要在英雄殿堂升级和管理英雄，不能和以前一样直接在阵型中找到英雄升级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>