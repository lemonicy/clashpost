---
title: "部落冲突 coc 野蛮人攻城槌升级数据"
navTitle: "野蛮人攻城槌"
shownTitle: "野蛮人攻城槌"
description: "四名野蛮人在前方进行一场大型圆木竞赛，以击倒目标，如果他们连接起来，会造成大量额外伤害；然后他们用剑继续战斗！"
module: upgrade-temp
imgFolder: temp/0e01
wiki: https://clashofclans.fandom.com/wiki/Battle_Ram
canonical: /upgrade/0e01-Battle-Ram
---

- *如想查看都城的同名兵种，请访问：[野蛮人攻城槌](/upgrade/2003-Battle-Ram)*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Ram_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Battle_Ram1.png" />
    </UnitImgGroup>
</Panel>
<SmallTitle>重要说明</SmallTitle>

该兵种最后一次推出时部落冲突还没有黄金令牌功能，为了让大家用起来不那么违和，我们决定让黄金令牌减免设置在本页无效。

<SmallTitle>野蛮人攻城锤的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="城墙 (4 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="4" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="首次出手时机" pValue="未知" />
    <UnitProperty pKey="攻击距离" pValue="3 格" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />  
    <UnitProperty pKey="所需大本等级" pValue="1<sup>①</sup>" />
    <UnitProperty pKey="特殊技能" pValue="见说明<sup>②</sup>" />
    <UnitProperty pKey="爆出的野蛮人数量" pValue="4" />
    <UnitProperty pKey="训练所需圣水" pValue="250<sup>③</sup>" />
    <UnitProperty pKey="训练时间" pValue="30" trainingSystem="legacy" :noGoldPass="true" />
</UnitProperties>

① 理论上来说，1 级大本营可以同时解锁野蛮人和野蛮人攻城锤，但因为新手教程会引导玩家升级至 2 本，所以实际上 2 本才能训练和使用野蛮人攻城槌。<br>
② 野蛮人攻城锤攻击后会分裂为 4 个野蛮人。因为它攻击一次之后就会分裂，所以该兵种没有攻速和每秒伤害的概念。<br>
③ 2022 年 6 月更新后，训练部队、配置法术、建造攻城机器不需要资源了，而该兵种最后一次推出时训练费用尚未取消。

<SmallTitle>野蛮人的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
</UnitProperties>

<SmallTitle>野蛮人攻城锤的升级数据</SmallTitle>

<UnitTable>

| 等级 | 每次伤害 |对墙<br>每次伤害| 生命值 |对应的<br>大本等级|
| ---- |  ----   |      ----     |   ---  |       ----     |
|   1  |   115   |       460     |    90  |        1       |
|   2  |   142   |       568     |   111  |        2       |
|   3  |   168   |       672     |   132  |        3       |
|   4  |   195   |       780     |   153  |        4       |
|   5  |   222   |       888     |   174  |        5       |
|   6  |   249   |       996     |   195  |        6       |
|   7  |   276   |      1104     |   216  |        7       |
|   8  |   303   |      1212     |   237  |        8       |
|   9  |   330   |      1320     |   258  |        9       |
|  10  |   357   |      1428     |   279  |       10       |
|  11  |   384   |      1536     |   300  |       11       |
</UnitTable>

<SmallTitle>野蛮人升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |对应的<br>大本等级|
| ---- |   ---   |   ---   |  ---   |       ---      |
|   1  |     9   |     9   |   37   |        1       |
|   2  |    11   |    11   |   46   |        2       |
|   3  |    13   |    13   |   53   |        3       |
|   4  |    15   |    15   |   63   |        4       |
|   5  |    17   |    17   |   72   |        5       |
|   6  |    19   |    19   |   81   |        6       |
|   7  |    21   |    21   |   90   |        7       |
|   8  |    23   |    23   |   98   |        8       |
|   9  |    25   |    25   |  107   |        9       |
|  10  |    27   |    27   |  116   |       10       |
|  11  |    30   |    30   |  125   |       11       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2017/08/31">
        <TimelineRow>该兵种第 2 次推出，有效期至 2017/09/07.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/08/04">
        <TimelineRow>该兵种第 1 次推出，有效期至 2017/08/11.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>