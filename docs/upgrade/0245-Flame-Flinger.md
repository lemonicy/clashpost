---
title: "部落冲突 coc 攻城烈焰车（投石车）升级数据"
navTitle: "攻城烈焰车"
shownTitle: "攻城烈焰车（投石车）"
description: "这架可爱的攻城机器能投掷出多个烈焰精灵，不仅会给敌方村庄造成重击，还会留下一片持续燃烧的区域。攻城烈焰车的攻击范围很远，足以让自己在攻击时远离危险，但要小心攻击范围更远的防御建筑和陷阱！法术对攻城烈焰车无效。"
module: upgrade-home
imgFolder: home_tech/0245
wiki: https://clashofclans.fandom.com/wiki/Flame_Flinger
canonical: /upgrade/0245-Flame-Flinger
---

- *玩家所说的投石车指的是攻城烈焰车，而不是投石炮，投石炮的数据请参考：[投石炮](/upgrade/030e-Scattershot)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Flame_Flinger.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Flame_Flinger1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Flame_Flinger2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Flame_Flinger3.png" />
        <UnitImg imgTitle="4 级" imgSrc="Flame_Flinger4.png" />
        <UnitImg imgTitle="5 级" imgSrc="Flame_Flinger5.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 攻城烈焰车部署后会投掷烈焰精灵，对敌方建筑造成持续伤害。
3. 攻城烈焰车的伤害机制比较复杂，我们只能得出定性结论，具体伤害无法计算。目前已经确定的是，攻城烈焰车有 3 种伤害：直接高额伤害、直接溅射伤害、后续持续伤害。由于这几种伤害的大小不一样，伤害范围也不是完全重叠，所以实战中烈焰范围内的建筑可能不是同时被摧毁的。
4. 烈焰精灵命中目标后的那一下攻击对墙有 8 倍伤害，但烈焰精灵的灼烧效果对 [城墙](/upgrade/0300-Walls) 没有额外伤害。
5. 攻城烈焰车部署后不能移动，即使没有受到伤害也会自动掉血。[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止它自动掉血。
6. 当攻城烈焰车的血量清零时，攻城烈焰车就会自动解体并释放部落城堡内的部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击方式" pValue="寻找防御建筑攻击" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="攻击距离" pValue="11 格" />
    <UnitProperty pKey="攻击速度" pValue="约 5.4 秒/次<sup>①</sup>" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 4.5 秒<sup>②</sup>" />
    <UnitProperty pKey="移动速度" pValue="0.8 格/秒" />
    <UnitProperty pKey="掉血速度" pValue="每秒 17 血<sup>③</sup>" />
    <UnitProperty pKey="投掷物伤害半径" pValue="1 格" />
    <UnitProperty pKey="熔岩半径" pValue="2.5 格" />
    <UnitProperty pKey="熔岩持续时间" pValue="30 秒" />
    <UnitProperty pKey="所需攻城机器工坊等级" pValue="6" />
    <UnitProperty pKey="所需大本等级" pValue="14" />
    <UnitProperty pKey="建造时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,45000,Elixir" :isDonationCost="true" />
</UnitProperties>

① 目前的公开资料显示攻城烈焰车的攻速是 5 秒每次，但根据我们的测试，攻城烈焰车的实际攻速约为 5.4 秒每次。<br>
② 这是我们团队内部的测试值，仅供参考。<br>
③ 这是烈焰车不受到伤害时的掉血速度。

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 每秒伤害 | 每次伤害 |熔岩的<br>最大伤害<sup>④</sup>|最大<br>存活时间<sup>⑤</sup>| 生命值 | 升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----  |   ----  |             ----            |            ----           |  ----  |   ---  |    ---    |       ----      |      ----     |
|   1  |   124   |   675   |              80             |          100.00 秒        |  1700  |    \   |     \     |         1       |       14      |
|   2  |   137   |   750   |              95             |          105.88 秒        |  1800  |  5.5M  |     3     |        10       |       14      |
|   3  |   151   |   825   |             105             |          111.76 秒        |  1900  |    8M  |     4     |        10       |       14      |
|   4  |   165   |   900   |             120             |          117.64 秒        |  2000  |   10M  |     7     |        11       |       14      |
|   5  |   179   |   975   |             130             |          123.52 秒        |  2100  |   18M  |    12     |        14       |       16      |
</UnitTable>

④ 攻城烈焰车发射出的熔岩伤害类似于 [毒药法术](/upgrade/0180-Poison-Spell)，也就是前期伤害低，兵种或建筑待在熔岩里的时间越长瞬时伤害越高。<br>
⑤ 攻城烈焰车和 [攻城训练营](/upgrade/0243-Siege-Barracks) 及 [滚木车](/upgrade/0244-Log-Launcher) 一样会自己掉血，这个最大存活时间指的是未受到伤害时的存活时间。同样，[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止烈焰车自身掉血。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>攻城机器的建造时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 5 级攻城烈焰车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>2 ~ 4 级攻城烈焰车的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在 16 本新增 5 级攻城烈焰车。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 4 级攻城烈焰车的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级攻城烈焰车的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>攻城烈焰车击中目标后燃烧伤害的范围缩小。</TimelineRow>
        <TimelineRow>击中后燃烧伤害的持续时间从 20 秒延长至 30 秒。</TimelineRow>
        <TimelineRow>所有等级攻城烈焰车的每秒燃烧伤害降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/02/15">
        <TimelineRow>攻击效果将从原本一次投掷 3 个烈焰精灵组成的单一炮弹调整为投掷 3 个单独的烈焰精灵。</TimelineRow>
        <TimelineRow>各等级攻城烈焰车的每次攻击伤害值从 675/725/775/825 提升至 675/750/825/900。</TimelineRow>
        <TimelineRow>间接攻击造成的溅射伤害降低。</TimelineRow>
        <TimelineRow>各等级攻城烈焰车的燃烧最高每秒伤害值从 180/200/220/240 降低至 120/140/160/180。</TimelineRow>
        <TimelineRow>燃烧伤害递增的速度大幅增加。</TimelineRow>
        <TimelineRow>燃烧持续时间略微缩短。</TimelineRow>
        <TimelineRow>攻城烈焰车 AI 优化，变得更加稳定。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>14 本可解锁新攻城机器：攻城烈焰车。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>