---
title: "部落冲突 coc 骷髅陷阱升级数据"
navTitle: "骷髅陷阱"
shownTitle: "骷髅陷阱"
description: "骷髅兵虽然脆弱，但异常狡猾，他们出其不意地伏击毫无戒备的敌军部队，并分散敌军注意力！您可以将骷髅陷阱的目标设置为地面部队或空中部队。"
module: upgrade-home
imgFolder: home_buildings/0385
wiki: https://clashofclans.fandom.com/wiki/Skeleton_Trap
canonical: /upgrade/0385-Skeleton-Trap
---

- 本页内容不是空中炸弹，如想查看空中炸弹的数据，请访问：[空中炸弹](/upgrade/0382-Air-Bomb)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Skeleton_Trap_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="地面模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Skeleton_Trap1.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Skeleton_Trap3.png" />
    </UnitImgGroup>
    <UnitImgGroup title="空中模式" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Skeleton_Trap1_Air.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Skeleton_Trap3_Air.png" />
    </UnitImgGroup>
    <UnitImgGroup title="未重新布置" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2 级" imgSrc="Skeleton_Trap1_unarmed.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Skeleton_Trap3_unarmed.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 7, 8 - 9, 10 - 13, 14 - 17" />
    <BuildingNumRow title="建筑数量" num="    0,     2,       3,       4" />
</BuildingNum>

<SmallTitle>骷髅陷阱的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="1×1" />
    <UnitProperty pKey="作用类型" pValue="召唤骷髅" />
    <UnitProperty pKey="作用目标" pValue="可调地面或空中目标" />
    <UnitProperty pKey="召唤间隔时间" pValue="0.15 秒" />
    <UnitProperty pKey="触发半径" pValue="5 格" />
</UnitProperties>

<SmallTitle>骷髅的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="攻击的目标" pValue="可调地面或空中目标" />
    <UnitProperty pKey="移动速度" pValue="24 (地面)<br>17.6 (空中)" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格 (地面)<br>0 (空中)" />
    <UnitProperty pKey="每秒伤害" pValue="25" />
    <UnitProperty pKey="攻速" pValue="0.7 秒/次" />
    <UnitProperty pKey="每次伤害" pValue="17.5" />
    <UnitProperty pKey="生命值" pValue="30" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "building",
        "icon": "Gold"
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

| 等级 | 骷髅数量 | 升级费用 | 升级时间 |升级后可<br>获得的经验|所需<br>大本等级|
| ---- |   ---   |   ---   |   ---   |         ---        |      ---      |
|   1  |    2    |     6k  |   0     |                    |        8      |
|   2  |    3    |   300k  |   0, 5  |                    |        8      |
|   3  |    4    |   800k  |   0,10  |                    |        9      |
|   4  |    5    |   1.1M  |   0,20  |                    |       10      |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/12/12">
        <TimelineRow>所有等级骷髅陷阱的升级费用降低。</TimelineRow>
        <TimelineRow>3 ~ 4级骷髅陷阱的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>3 ~ 4 级骷髅陷阱的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新解锁一个骷髅陷阱。</TimelineRow>
        <TimelineRow>2 ~ 3 级骷髅陷阱的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 4 级骷髅陷阱的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>游戏新增 13 本，并在 13 本新增 4 级搜空地雷。</TimelineRow>
        <TimelineRow>13 本新解锁一个搜空地雷。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>玩家上线后，所有的陷阱将自动被重新布置，重新布置不再需要花费金币。然而，如果玩家不上线，陷阱就不会被重新布置，所以你仍然可以攻击到陷阱失效的村庄。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>