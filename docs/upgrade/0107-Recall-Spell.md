---
title: "部落冲突 coc 回溯法术（召回法术）升级数据"
navTitle: "回溯法术"
shownTitle: "回溯法术（召回法术）"
description: "进攻效果不佳？想换个方向出击？回溯法术可将部队、英雄和战宠召回部署栏，让你可以重新部署召回的单位，再次进攻。"
module: upgrade-home
imgFolder: home_tech/0107
wiki: https://clashofclans.fandom.com/wiki/Recall_Spell
canonical: /upgrade/0107-Recall-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Recall_Spell.png" :imgAlt="$frontmatter.navTitle"
    :description="$frontmatter.description"
    :isSmallImg="true" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="召回后待部署" imgSrc="Recall_Spell_With_Spirit_thumb.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 回溯法术对我方英雄有效，对攻城机器无效。
2. 计算回溯法术召回的人口时，英雄算 25 人口，战宠算 20，[凤凰蛋](/upgrade/0287-Phoenix) 不算人口。
3. 回溯法术可以召回蝙蝠、骷髅、大宝宝等派生兵种。
4. 召回的兵种可保留状态，比如说召回时不满血的兵种重新部署后仍然不满血。
5. [蛮王](/upgrade/0200-Barbarian-King) 开大后蛮王和野蛮人的狂暴效果<sup>①</sup>、[女王](/upgrade/0201-Archer-Queen) 开大的隐身效果<sup>②</sup>、[大守护者](/upgrade/0202-Grand-Warden) 的无敌效果<sup>③</sup>在召回后有效时间不会暂停。已知 85 级女王技能 6.8 秒，如果你在女王开大的瞬间就召回，并且等 5 秒再部署出去，那么女王技能还剩 1.8 秒。
   - ① 需要 [野蛮人木偶](/upgrade/0700-Barbarian-Puppet) 装备。
   - ② 需要 [隐形药水瓶](/upgrade/0741-Invisibility-Vial) 装备。
   - ③ 需要 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备。
6. [镜像法术](/upgrade/0105-Clone-Spell) 复制出的部队以及被 [凤凰](/upgrade/0287-Phoenix) 复活的英雄在召回后其有效时间会暂停。已知 10 级凤凰的无敌时间是 8 秒，如果你在女王复活 5 秒后召回，不管你等多久再重新部署，重新部署后都能剩下 3 秒的无敌时间。
7. 如果召回时部队正受毒药效果<sup>④</sup>影响，那么重新部署之后部队仍然是中毒状态。如果部署后不吃毒，那么部队的中毒效果遵循走出毒药圈时的机制；如果部署后吃毒，那么部队遵循毒药叠加机制。参见：[【毒药法术原理】9项实验让你怀疑你从未用过毒药法术](/p/1505)。
   - ④ 包括 [毒药法术](/upgrade/0180-Poison-Spell) 的毒药效果、被 [英雄猎手](/upgrade/0088-Headhunter) 攻击的中毒效果和 14 级及以上 [大本营](/upgrade/0400-Town-Hall) 被摧毁后的毒雾效果。
8. 如果部队被召回后没有再部署出去，那么战斗结束后部队会全部消失，不能回收到兵营。如果英雄被召回后没有再部署出去，那么战斗结束后英雄的血量等于召回那一刻的血量。由于战宠不需要恢复，因此不管战斗结束时战宠血量如何，以及是否被召回，战斗结束后战宠一定满血。
9.  回溯法术召回部队时是大单位的先被召回，重新部署到战场上时是大单位先出来，与 [城堡援军出来的顺序](/p/593) 相反。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="5 格" />
    <UnitProperty pKey="作用类型" pValue="召回场上的部队" />
    <UnitProperty pKey="作用目标" pValue="我方部队、英雄和战宠" />
    <UnitProperty pKey="占用的法术空间" pValue="2" />
    <UnitProperty pKey="所需法术工厂等级" pValue="7" />
    <UnitProperty pKey="所需大本等级" pValue="13" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 2,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 3,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |可召回的<br>人口数| 升级花费 |  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |       ----     |    ---   |    ---    |       ----      |      ----    |
|   1  |        83      |     \    |     \     |         1       |       13     |
|   2  |        89      |   7.5M   |     7     |        11       |       13     |
|   3  |        95      |     8M   |     9     |        12       |       14     |
|   4  |       101      |     9M   |    11     |        13       |       15     |
|   5  |       107      |    13M   |    13     |        14       |       16     |
|   6  |       113      |    21M   |    15     |        15       |       17     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>3 ~ 4 级回溯法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 6 级回溯法术。</TimelineRow>
        <TimelineRow>2、5 级回溯法术的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 5 级回溯法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>4 级回溯法术的升级时间减少。</TimelineRow>
        <TimelineRow>3 ~ 4 级回溯法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 5 级回溯法术。</TimelineRow>
        <TimelineRow>2 ~ 4 级回溯法术的升级时间减少。</TimelineRow>
        <TimelineRow>3 级回溯法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/01/23">
        <TimelineRow>各等级回溯法术可召回的部队单位都增加 11。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 13 本新增法术：回溯法术（召回法术）。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>