---
title: "部落冲突 coc 超级大雪怪升级数据"
navTitle: "超级大雪怪"
shownTitle: "超级大雪怪"
description: "这个神秘的蒙面大雪怪蓄势待发！每当他受到伤害，都会召唤出电力十足的小雪怪，电击最近的建筑，引发毁灭性的连锁反应！"
module: upgrade-home
imgFolder: home_tech/0610
wiki: https://clashofclans.fandom.com/wiki/Super_Yeti
canonical: /upgrade/0610-Super-Yeti
---

- *如想查看该兵种的普通版本，请访问：[大雪怪](/upgrade/000d-Yeti)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">超级大雪怪</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">雷电小雪怪</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 超级大雪怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Yeti_info.png" imgAlt="超级大雪怪"
    description="这个神秘的蒙面大雪怪蓄势待发！每当他受到伤害，都会召唤出电力十足的小雪怪，电击最近的建筑，引发毁灭性的连锁反应！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Yeti1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级大雪怪的技能（闪电狂袭）：超级大雪怪受伤时会分裂出雷电小雪怪，具体来说是每受到 400 点伤害分裂一个，分裂完为止。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="35" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.8 格" />
    <UnitProperty pKey="最低大雪怪等级" pValue="3" />
    <UnitProperty pKey="最低大本等级" pValue="13" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="18,18,54000,Elixir" :isDonationCost="true" />
</UnitProperties>


<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|     等级    | 每秒伤害 | 每次伤害 |分裂的雷电<br>小雪怪数量| 生命值 |所需大本等级|
|     ----    |   ---   |   ----  |          ---         |  ---- |    ----   |
|1<sup>*</sup>|   360   |   360   |           7          |  4600 |     12    |
|2<sup>*</sup>|   390   |   390   |           8          |  5000 |     12    |
|      3      |   415   |   415   |           9          |  5400 |     13    |
|      4      |   440   |   440   |          10          |  5800 |     14    |
|      5      |   465   |   465   |          11          |  6200 |     15    |
|      6      |   495   |   495   |          12          |  6600 |     16    |
|      7      |   525   |   525   |          13          |  7000 |     17    |
</UnitTable>

\* 1 - 2 级超级大雪怪只在 [奖章活动](/p/7015) 中出现，不能通过常规方式得到。

</SwitchTabGroup>

<!-- ↓↓↓ 雷电小雪怪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Electromite_info.png" imgAlt="雷电小雪怪"
    description="超级大雪怪受伤时，这些带电的小家伙会立刻行动，电击最近的建筑，引发惊人的连锁反应！"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Electromite1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 雷电小雪怪可以跳过城墙。
2. 雷电小雪怪攻击一次后就会死亡，[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备也无法阻止。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面辅助单位" />
    <UnitProperty pKey="攻击偏好" pValue="建筑 (4 倍伤害)<sup>①</sup>" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="连锁距离" pValue="3 格以内" />
    <UnitProperty pKey="最大目标数量" pValue="3 (含初始目标)" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="连锁衰减" pValue="20% (逐级递减)" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="目标数量" pValue="3" />
    <UnitProperty pKey="占据人口" pValue="3<sup>②</sup>" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击时机" pValue="到达目标后 0.5 秒<sup>③</sup>" />
    <UnitProperty pKey="攻击距离" pValue="2.5 格" />
</UnitProperties>

① 雷电小雪怪优先攻击建筑（注意并不一定是防御建筑），如果有城堡部队或英雄攻击它，它可以反击，反击完后继续攻击建筑。如果所有的建筑均被 [隐形法术](/upgrade/0106-Invisibility-Spell) 隐形，或被 [蔓生法术](/upgrade/0185-Overgrowth-Spell) 缠绕，则雷电小雪怪会攻击最近的目标。<br>
② 在考虑雷电小雪怪与 [隐形弹簧](/upgrade/0381-Spring-Trap)、[镜像法术](/upgrade/0105-Clone-Spell) 或 [回溯法术](/upgrade/0107-Recall-Spell) 的相互作用时，雷电小雪怪应被视为 3 人口。<br>
③ 根据解析安装包的结果，雷电小雪怪的攻击速度是一秒一次，但实际上雷电小雪怪的首次攻击时机为到达目标后 0.5 秒，且攻击一次后就会死亡，因此其攻速值无意义。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|     等级    | 每次伤害 | 对建筑的<br>每次伤害 | 生命值 |所需大本等级|
|     ----    |   ----  |         ---         |  ---  |    ----   |
|1<sup>*</sup>|    56   |         224         |  300  |     12    |
|2<sup>*</sup>|    64   |         256         |  350  |     12    |
|      3      |    72   |         288         |  400  |     13    |
|      4      |    78   |         312         |  450  |     14    |
|      5      |    84   |         336         |  500  |     15    |
|      6      |    88   |         352         |  550  |     16    |
|      7      |    90   |         360         |  575  |     17    |
</UnitTable>

\* 1 - 2 级雷电小雪怪只在 [奖章活动](/p/7015) 中出现，不能通过常规方式得到。
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/05/12">
        <TimelineRow>超级大雪怪于 2025 年 5 月的“迷你大舞台”活动中正式推出，并作为永久兵种加入游戏。</TimelineRow>
        <TimelineRow>与之前相比，6 - 7 级超级大雪怪可分裂出的雷电小雪怪数量略微减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>官方确认之前添加超级大雪怪并非有意为之，并移除了该兵种。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>新增超级大雪怪。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>