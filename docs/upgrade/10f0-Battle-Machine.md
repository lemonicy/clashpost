---
title: "部落冲突 coc 夜世界战争机器升级数据"
navTitle: "战争机器"
shownTitle: "战争机器"
description: "建筑大师的获奖发明，可以粉碎敌方建筑。只有它才能证明谁是这里最好的建筑工人！解锁电磁战锤技能，狠狠地击打敌人！"
module: upgrade-bh
imgFolder: bh_tech/10f0
wiki: https://clashofclans.fandom.com/wiki/Battle_Machine
canonical: /upgrade/10f0-Battle-Machine
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Machine_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="废墟" imgSrc="Battle_Machine_Ruin.png" />
        <UnitImg imgTitle="王座" imgSrc="Battle_Machine_Altar.png" />
        <UnitImg imgTitle="升级中" imgSrc="Battle_Machine_Updating.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>战争机器的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2.0 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1.25 格" />
    <UnitProperty pKey="解锁所需大本营等级" pValue="5" />
</UnitProperties>

<SmallTitle>战争机器王座的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="250" />
    <UnitProperty pKey="可建造区域" pValue="仅第一区域" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="电磁战锤" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="能量条充能速度" pValue="13 秒/格" />
    <UnitProperty pKey="技能生效时间" pValue="3 次攻击" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="最大连锁距离" pValue="3 格" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="1 级能量条伤害衰减" pValue="100% (不能连锁)" />
    <UnitProperty pKey="2 级能量条伤害衰减" pValue="50%" />
    <UnitProperty pKey="3 级能量条伤害衰减" pValue="30%" />
</UnitProperties>

\* 电磁战锤：在接下来的几次攻击造成额外伤害，并恢复部分生命值。如果启用技能时能量条达到 2 级，则接下来的几次攻击含有连锁效果。

<SmallTitle>战争机器的升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir2"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 |  每次伤害  |  生命值  | 升级花费 | 升级时间 |所需夜世界<br>大本营等级|
| ---- |   ---   |   -----   |   ----  |   ---    |    ---  |          ---         |
|   1  |   125   |   150     |   3000  |   0.9M   |  0,12   |           5          |
|   2  |   127   |   152.4   |   3070  |   1.0M   |  0,12   |           5          |
|   3  |   130   |   156     |   3140  |   1.1M   |  0,12   |           5          |
|   4  |   132   |   158.4   |   3210  |   1.2M   |  1      |           5          |
|   5  |   135   |   162     |   3280  |   1.2M   |  1      |           5          |
|   6  |   137   |   164.4   |   3350  |   1.5M   |  1,12   |           6          |
|   7  |   140   |   168     |   3420  |   1.6M   |  1,12   |           6          |
|   8  |   142   |   170.4   |   3490  |   1.7M   |  2      |           6          |
|   9  |   145   |   174     |   3560  |   1.8M   |  2      |           6          |
|  10  |   147   |   176.4   |   3630  |   1.9M   |  2,12   |           6          |
|  11  |   150   |   180     |   3700  |   2.1M   |  2,12   |           7          |
|  12  |   154   |   184.8   |   3770  |   2.2M   |  3      |           7          |
|  13  |   157   |   188.4   |   3840  |   2.3M   |  3      |           7          |
|  14  |   160   |   192     |   3910  |   2.4M   |  3,12   |           7          |
|  15  |   164   |   196.8   |   3980  |   2.5M   |  3,12   |           7          |
|  16  |   167   |   200.4   |   4050  |   2.6M   |  4      |           7          |
|  17  |   170   |   204     |   4120  |   2.7M   |  4      |           7          |
|  18  |   174   |   208.8   |   4190  |   2.8M   |  4      |           7          |
|  19  |   177   |   212.4   |   4260  |   2.9M   |  4      |           7          |
|  20  |   180   |   216     |   4330  |   3.0M   |  4      |           7          |
|  21  |   186   |   223.2   |   4400  |   3.1M   |  5      |           8          |
|  22  |   192   |   230.4   |   4470  |   3.2M   |  5      |           8          |
|  23  |   198   |   237.6   |   4540  |   3.3M   |  5      |           8          |
|  24  |   204   |   244.8   |   4610  |   3.4M   |  5      |           8          |
|  25  |   210   |   252     |   4680  |   3.5M   |  5      |           8          |
|  26  |   218   |   261.6   |   4750  |   3.6M   |  6      |           9          |
|  27  |   226   |   271.2   |   4820  |   3.7M   |  6      |           9          |
|  28  |   234   |   280.8   |   4890  |   3.8M   |  6      |           9          |
|  29  |   242   |   290.4   |   4960  |   3.9M   |  6      |           9          |
|  30  |   250   |   300     |   5030  |   4.0M   |  6      |           9          |
|  31  |   258   |   309.6   |   5100  |   4.1M   |  7      |          10          |
|  32  |   266   |   319.2   |   5170  |   4.2M   |  7      |          10          |
|  33  |   274   |   328.8   |   5240  |   4.3M   |  7      |          10          |
|  34  |   282   |   338.4   |   5310  |   4.4M   |  7      |          10          |
|  35  |   290   |   348     |   5380  |   4.5M   |  7      |          10          |
</UnitTable>

<SmallTitle>特殊技能的升级数据</SmallTitle>

<SwitchTabs contentClass="cp-upgrade-skill">
    <SwitchTab tabId="cp-upgrade-skill-bar-1" :activeTab="true">1 级能量条</SwitchTab>
    <SwitchTab tabId="cp-upgrade-skill-bar-2">2 级能量条</SwitchTab>
    <SwitchTab tabId="cp-upgrade-skill-bar-3">3 级能量条</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 1 级能量条 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-skill-bar-1" class="cp-upgrade-skill">
<Table>

|技能<br>等级|对应的<br>英雄等级|技能下的<br>每秒伤害|技能下的<br>每次伤害| 回血量 | 目标数量 |
|    ---    |       ---       |        ---       |         ---       |  ----  |   ---   |
|     1     |      5 - 9      |        360       |         432       |   800  |    1    |
|     2     |     10 - 14     |        400       |         480       |   850  |    1    |
|     3     |     15 - 19     |        440       |         528       |   900  |    1    |
|     4     |     20 - 24     |        480       |         576       |   950  |    1    |
|     5     |     25 - 29     |        520       |         624       |  1000  |    1    |
|     6     |     30 - 34     |        560       |         672       |  1050  |    1    |
|     7     |       35        |        600       |         716       |  1100  |    1    |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 2 级能量条 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-skill-bar-2" class="cp-upgrade-skill">
<Table>

|技能<br>等级|对应的<br>英雄等级|技能下的<br>每秒伤害|技能下的<br>每次伤害| 回血量 | 目标数量 |
|    ---    |       ---       |        ---       |         ---       |  ----  |   ---   |
|     1     |      5 - 9      |        585       |         702       |  1600  |    1    |
|     2     |     10 - 14     |        650       |         780       |  1700  |    1    |
|     3     |     15 - 19     |        715       |         858       |  1800  |    2    |
|     4     |     20 - 24     |        780       |         936       |  1900  |    2    |
|     5     |     25 - 29     |        845       |        1014       |  2000  |    2    |
|     6     |     30 - 34     |        910       |        1092       |  2100  |    2    |
|     7     |       35        |        975       |        1170       |  2200  |    2    |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 3 级能量条 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-skill-bar-3" class="cp-upgrade-skill">
<Table>

|技能<br>等级|对应的<br>英雄等级|技能下的<br>每秒伤害|技能下的<br>每次伤害| 回血量 | 目标数量 |
|    ---    |       ---       |        ---       |         ---       |  ----  |   ---   |
|     1     |      5 - 9      |        810       |         972       |  2400  |    1    |
|     2     |     10 - 14     |        900       |        1080       |  2550  |    1    |
|     3     |     15 - 19     |        990       |        1188       |  2700  |    3    |
|     4     |     20 - 24     |       1080       |        1296       |  2850  |    3    |
|     5     |     25 - 29     |       1170       |        1404       |  3000  |    3    |
|     6     |     30 - 34     |       1260       |        1512       |  3150  |    3    |
|     7     |       35        |       1350       |        1620       |  3300  |    3    |
</Table>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/10/20">
        <TimelineRow>将技能的生效时间恢复为三次攻击。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/10/09">
        <TimelineRow>将技能的生效时间更改为两次攻击。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/05/15">
        <TimelineRow>新增 31 - 35 级战争机器。</TimelineRow>
        <TimelineRow>现在夜世界英雄的技能强度分成了三个充能等级，充能等级越高，技能越强。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/22">
        <TimelineRow>提升了 21 至 30 级战争机器的每秒伤害值。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>移除战争的恢复时间。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界 9 本开放，战争机器可升至 30 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>巨型加农炮不再对战争机器造成多倍伤害。</TimelineRow>
        <TimelineRow>所有等级战争机器的恢复时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2018/03/05">
        <TimelineRow>夜世界 8 本开放，战争机器可升至 25 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/09/27">
        <TimelineRow>夜世界 7 本开放，战争机器可升至 20 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/06/27">
        <TimelineRow>夜世界 6 本开放，战争机器可升至 10 级。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>