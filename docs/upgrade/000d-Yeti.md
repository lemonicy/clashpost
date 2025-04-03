---
title: "部落冲突 coc 大雪怪升级数据"
navTitle: "大雪怪"
shownTitle: "大雪怪"
description: "这个毛茸茸的家伙力气很大，他喜欢极寒天气，对自己的小雪怪们情有独钟。千万不要伤害大雪怪，否则小雪怪们会要你好看。"
module: upgrade-home
imgFolder: home_tech/000d
wiki: https://clashofclans.fandom.com/wiki/Yeti
canonical: /upgrade/000d-Yeti
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">大雪怪</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">小雪怪</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 大雪怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Yeti_info.png" imgAlt="大雪怪"
    description="这个毛茸茸的家伙力气很大，他喜欢极寒天气，对自己的小雪怪们情有独钟。千万不要伤害大雪怪，否则小雪怪们会要你好看。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Yeti1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Yeti2.png" />
        <UnitImg imgTitle="3 - 4 级" imgSrc="Yeti3.png" />
        <UnitImg imgTitle="5 级" imgSrc="Yeti5.png" />
        <UnitImg imgTitle="6 级" imgSrc="Yeti6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Yeti7.png" imgHd="Yeti7_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

每受到 600 伤害，大雪怪就会释放一个小雪怪，大雪怪死亡后会释放剩余的全部小雪怪。

<SmallTitle>大雪怪的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="18" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="所需训练营等级" pValue="14" />
    <UnitProperty pKey="所需大本等级" pValue="12" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="9,9,27000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 5,
        "type": "cost",
        "gpClass": "research",
        "icon": "Elixir"
    },
    {
        "column": 6,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 |拥有的<br>小雪怪数量| 生命值 | 升级花费|  升级时间  |所需实验室<br>等级|所需<br>大本等级|
| ---- |   ----   |   ----  |        ----       |  ---- |   ----  |    ----   |      ----      |     ----      |
|   1  |    230   |    230  |          8        |  2900 |      \  |     \     |        1       |      12       |
|   2  |    250   |    250  |          9        |  3200 |     5M  |     4     |       10       |      12       |
|   3  |    270   |    270  |         10        |  3500 |   6.5M  |     5     |       11       |      13       |
|   4  |    290   |    290  |         11        |  3700 |    10M  |     7,12  |       12       |      14       |
|   5  |    310   |    310  |         12        |  3900 |    12M  |     8     |       13       |      15       |
|   6  |    330   |    330  |         13        |  4100 |  14.5M  |     9     |       14       |      16       |
|   7  |    350   |    350  |         13        |  4300 |  22.5M  |    15     |       15       |      17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 小雪怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Yetimite_info.png" imgAlt="小雪怪"
    description="这些小家伙看上去很可爱，但如果大雪怪受伤，他们会变得无比焦虑。如果大雪怪被伤到了一定程度，他们会义无反顾地涌向最近的防御建筑。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Yetimi7te1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Yetimite2.png" />
        <UnitImg imgTitle="3 - 5 级" imgSrc="Yetimite3.png" />
        <UnitImg imgTitle="6 级" imgSrc="Yetimite6.png" />
        <UnitImg imgTitle="7 级" imgSrc="Yetimite7.png" imgHd="Yetimite7_hd.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 小雪怪本身不会触发陷阱，但是大雪怪踩中的 [弹簧](/upgrade/0381-Spring-Trap)、[大炸弹](/upgrade/0383-Giant-Bomb) 等陷阱可能会伤害到小雪怪。
2. 小雪怪对防御建筑的伤害是 4 倍，对带有武器的 [大本营](/upgrade/0400-Town-Hall) 是 2 倍，对不带武器的大本以及其他资源建筑为二分之一。
    - 大本营的武器在升级时应视为不带武器的大本。
    - 此处我们**不**将 [铁匠铺](/upgrade/0488-Blacksmith) 视为资源建筑。
3. 小雪怪攻击时会先接近目标建筑，然后在短暂停顿后跳到建筑身上并造成伤害。在跳跃状态下，小雪怪是无敌的，且不能被其他单位锁定。

<SmallTitle>小雪怪的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好1" pValue="防御建筑<br>(4 倍伤害)" />
    <UnitProperty pKey="攻击偏好2" pValue="激活的大本<br>(2 倍伤害)" />
    <UnitProperty pKey="攻击衰减" pValue="资源类建筑<br>(伤害减半)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1<sup>①</sup>" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击时机" pValue="到达目标后 0.5 秒<sup>②</sup>" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
</UnitProperties>

① 在考虑小雪怪与 [隐形弹簧](/upgrade/0381-Spring-Trap)、[镜像法术](/upgrade/0105-Clone-Spell) 或 [回溯法术](/upgrade/0107-Recall-Spell) 的相互作用时，小雪怪应被视为 1 人口。<br>
② 根据解析安装包的结果，小雪怪的攻击速度是一秒一次，但实际上小雪怪攻击一次后就会死亡，而小雪怪的首次攻击时机为到达目标后 0.5 秒，因此小雪怪的攻速值无意义。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|大雪怪等级| 每次伤害|对防御建筑的<br>每次伤害|对已激活大本<br>的每次伤害|对资源建筑的<br>每次伤害| 生命值 |
|   ---   |  ----  |          ---         |           ----          |         ----         |  ----  |
|    1    |   56   |          224         |            112          |          28          |   300  |
|    2    |   64   |          256         |            128          |          32          |   350  |
|    3    |   72   |          288         |            144          |          36          |   400  |
|    4    |   78   |          312         |            156          |          39          |   450  |
|    5    |   84   |          336         |            168          |          42          |   500  |
|    6    |   88   |          352         |            176          |          44          |   550  |
|    7    |   90   |          360         |            180          |          45          |   575  |

</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>在 17 本新增 7 级大雪怪。</TimelineRow>
        <TimelineRow>2 ~ 6 级大雪怪的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 3、5 ~ 6 级大雪怪的升级费用降低。</TimelineRow>
        <TimelineRow>小雪怪和小冰怪占据的人口数由 3 调整为 1.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>大雪怪的训练时间由 3:00 改为 2:30</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 6 级大雪怪的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>4 ~ 5 级大雪怪的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/17">
        <TimelineRow>在 16 本新增 6 级大雪怪。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 5 级大雪怪的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 5 级大雪怪。</TimelineRow>
        <TimelineRow>2 ~ 3 级大雪怪的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>2 ~ 4 级大雪怪的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 级大雪怪的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14 本新增 4 级大雪怪。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>小雪怪对防御建筑的伤害仍然是 4 倍，但对带有武器的大本削弱为 2 倍，资源建筑削弱为二分之一。</TimelineRow>
        <TimelineRow>大守护者不再跟随小雪怪。</TimelineRow>
        <TimelineRow>天鹰火炮不再将小雪怪作为目标。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/01/16">
        <TimelineRow>小雪怪不再触发陷阱。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>12 本可解锁新兵种：大雪怪。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>