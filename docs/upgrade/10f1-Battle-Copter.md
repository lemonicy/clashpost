---
title: "部落冲突 coc 夜世界战斗直升机升级数据"
navTitle: "战斗直升机"
shownTitle: "战斗直升机"
description: "快上直升机！建筑大师厌倦了锤城墙，于是他发明了可以飞跃城墙的新一代飞行器。战斗直升机可从远处发射威力巨大的炮弹，也可以使用爆弹冲锋技能靠近目标发动奇袭。"
module: upgrade-bh
imgFolder: bh_tech/10f1
wiki: https://clashofclans.fandom.com/wiki/Battle_Copter
canonical: /upgrade/10f1-Battle-Copter
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Battle_Copter_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>更多图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="王座" imgSrc="Battle_Copter_Altar.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>战斗直升机的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="移动速度" pValue="1.8 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.65 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="6.5 格" />
    <UnitProperty pKey="解锁所需大本营等级" pValue="8" />
</UnitProperties>

<SmallTitle>战斗直升机王座的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="250" />
    <UnitProperty pKey="可建造区域" pValue="仅第二区域" />
</UnitProperties>

<SmallTitle>特殊技能的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="技能名称" pValue="爆弹冲锋" />
    <UnitProperty pKey="技能描述" pValue="见说明<sup>*</sup>" />
    <UnitProperty pKey="能量条充能速度" pValue="14 秒/格" />
    <UnitProperty pKey="技能期间的移动速度" pValue="56" />
    <UnitProperty pKey="1 级能量条爆炸半径" pValue="0.5 格" />
    <UnitProperty pKey="2 级能量条爆炸半径" pValue="2 格" />
    <UnitProperty pKey="3 级能量条爆炸半径" pValue="4 格" />
</UnitProperties>

\* 爆弹冲锋：向地面投掷一颗炸弹，并恢复部分生命值。

<SmallTitle>战斗直升机的升级数据</SmallTitle>

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
| ---- |   ---   |   -----   |   ----  |   ---    |  ---    |          ---         |
|  15  |   112   |   72.8    |   2857  |   2.5M   |    \    |           8          |
|  16  |   116   |   75.4    |   2885  |   2.6M   |    5    |           8          |
|  17  |   119   |   77.35   |   2915  |   2.7M   |    5    |           8          |
|  18  |   123   |   79.95   |   2943  |   2.8M   |    5    |           8          |
|  19  |   126   |   81.9    |   2972  |   2.9M   |    5    |           8          |
|  20  |   130   |   84.5    |   3003  |   3.0M   |    5    |           8          |
|  21  |   134   |   87.1    |   3032  |   3.1M   |    5    |           8          |
|  22  |   137   |   89.05   |   3062  |   3.2M   |    5    |           8          |
|  23  |   141   |   91.65   |   3094  |   3.3M   |    5    |           8          |
|  24  |   144   |   93.6    |   3124  |   3.4M   |    5    |           8          |
|  25  |   148   |   96.2    |   3155  |   3.5M   |    5    |           8          |
|  26  |   153   |   99.45   |   3187  |   3.6M   |    6    |           9          |
|  27  |   157   |   102.05  |   3220  |   3.7M   |    6    |           9          |
|  28  |   162   |   105.3   |   3252  |   3.8M   |    6    |           9          |
|  29  |   166   |   107.9   |   3285  |   3.9M   |    6    |           9          |
|  30  |   171   |   111.15  |   3318  |   4.0M   |    6    |           9          |
|  31  |   175   |   113.75  |   3348  |   4.1M   |    7    |          10          |
|  32  |   180   |   117     |   3375  |   4.2M   |    7    |          10          |
|  33  |   184   |   119.6   |   3402  |   4.3M   |    7    |          10          |
|  34  |   189   |   122.85  |   3429  |   4.4M   |    7    |          10          |
|  35  |   193   |   125.45  |   3456  |   4.5M   |    7    |          10          |
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

|技能<br>等级|对应的<br>英雄等级|炸弹的伤害 | 回血量 |
|    ---    |       ---       |    ---   |   ---  |
|     1     |     15 - 19     |    179   |   550  |
|     2     |     20 - 24     |    209   |   575  |
|     3     |     25 - 29     |    239   |   600  |
|     4     |     30 - 34     |    279   |   625  |
|     5     |        35       |    319   |   650  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 2 级能量条 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-skill-bar-2" class="cp-upgrade-skill">
<Table>

|技能<br>等级|对应的<br>英雄等级|炸弹的伤害 | 回血量 |
|    ---    |       ---       |    ---   |   ---  |
|     1     |     15 - 19     |    274   |  1100  |
|     2     |     20 - 24     |    320   |  1150  |
|     3     |     25 - 29     |    365   |  1200  |
|     4     |     30 - 34     |    426   |  1250  |
|     5     |        35       |    487   |  1300  |
</Table>
</SwitchTabGroup>

<!-- ↓↓↓ 3 级能量条 ↓↓↓ -->
<SwitchTabGroup id="cp-upgrade-skill-bar-3" class="cp-upgrade-skill">
<Table>

|技能<br>等级|对应的<br>英雄等级|炸弹的伤害 | 回血量 |
|    ---    |       ---       |    ---   |   ---  |
|     1     |     15 - 19     |    368   |  1650  |
|     2     |     20 - 24     |    430   |  1725  |
|     3     |     25 - 29     |    491   |  1800  |
|     4     |     30 - 34     |    573   |  1875  |
|     5     |        35       |    655   |  1950  |
</Table>
</SwitchTabGroup>