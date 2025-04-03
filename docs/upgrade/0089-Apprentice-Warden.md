---
title: "部落冲突 coc 守护者学徒（小咏王）升级数据"
navTitle: "守护者学徒"
shownTitle: "守护者学徒（小咏王）"
description: "虽然守护者学徒雄心勃勃，但他只是一位学徒，所以他只能使用神奇的生命光环和没那么神奇的弹弓助部队一臂之力。"
module: upgrade-home
imgFolder: home_tech/0089
wiki: https://clashofclans.fandom.com/wiki/Apprentice_Warden
canonical: /upgrade/0089-Apprentice-Warden
---

- *如想查看大守护者，请访问：[大守护者（咏王）](/upgrade/0202-Grand-Warden)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Apprentice_Warden_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Apprentice_Warden1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Apprentice_Warden2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Apprentice_Warden3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Apprentice_Warden4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 守护者学徒拥有和 [大守护者](/upgrade/0202-Grand-Warden)<sup>*</sup> 类似的生命光环效果，这个光环效果可以为周围的部队提供生命值加成。
   - \* 这里指带上 [生命宝石](/upgrade/0781-Life-Gem) 这个初始装备后的大守护者，下同。
2. 和大守护者类似，守护者学徒的光环对自己无效，但对附近的其他守护者学徒有效。如果使用多个守护者学徒，他们可以互相加血。
3. 守护者学徒的光环对英雄有效。
4. 守护者学徒的光环加成没有上限，4 级守护者学徒能实实在在地给 95 级 [蛮王](/upgrade/0200-Barbarian-King) 加 2900 多血，而大守护者由于上限的存在，只能给加 575 血。
5. 虽然守护者学徒能给高血量兵种加的血比大守护者多，但是它的光环效果会被大守护者覆盖，因为大守护者的光环加成比例是更高的，只是那个上限影响了大守护者的发挥。
6. 守护者学徒没有类似大守护者的飞行模式，但它拥有大守护者的跳墙能力。
7. 虽然从纸面上来说守护者学徒攻击时没有首选目标，但他更愿意跟随附近的部队，并与大部队一起攻击同样的目标，只要这些部队数量够多。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.9 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="5 格" />
    <UnitProperty pKey="光环半径" pValue="7 格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="10" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="10,10,450,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 |光环<br>加血比例| 生命值 | 升级花费| 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |      ----     |  ---- |  ----   |   ----  |       ----      |      ----     |
|   1  |    170   |   153   |       20%     |  1500 |    \    |     \   |         1       |       13      |
|   2  |    185   |   166.5 |       22%     |  1650 |    90K  |   6     |        11       |       13      |
|   3  |    200   |   180   |       24%     |  1800 |   135K  |   7,12  |        12       |       14      |
|   4  |    215   |   193.5 |       26%     |  1950 |   160K  |   8,18  |        13       |       15      |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 4 级守护者学徒的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>守护者学徒的训练时间由 4:00 改为 2:50</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 4 级守护者学徒的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>3 ~ 4 级守护者学徒的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/03/26">
        <TimelineRow>所有等级守护者学徒的光环加血比例减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>3 ~ 4 级守护者学徒的升级时间减少。</TimelineRow>
    <TimelineRow>3 级守护者学徒的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>13 本可解锁新兵种：守护者学徒。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>