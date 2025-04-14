---
title: "部落冲突 coc 地狱飞龙（煤气龙）升级数据"
navTitle: "地狱飞龙"
shownTitle: "地狱飞龙（煤气龙）"
description: "地狱飞龙不会因为落单而狂暴，因为它学会了将怒火转化为一道烈焰射线，而且射线造成的伤害会随着时间递增！"
module: upgrade-home
imgFolder: home_tech/0604
wiki: https://clashofclans.fandom.com/wiki/Inferno_Dragon
canonical: /upgrade/0604-Inferno-Dragon
---

- *如想查看该兵种的普通版本，请访问：[飞龙宝宝](/upgrade/000a-Baby-Dragon)。*
- *如想查看都城的地狱飞龙，请访问：[都城地狱飞龙](/upgrade/200e-Inferno-Dragon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Inferno_Dragon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Inferno_Dragon6.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

地狱飞龙的技能（地狱烈焰）：持续攻击同一目标时，地狱飞龙的攻击伤害会随着时间递增。初始伤害切换二段伤害需要 1.7 秒，二段到三段需要 1.5 秒。也就是说从初始伤害到最高伤害需要 3.2 秒。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="15" />
    <UnitProperty pKey="移动速度" pValue="2.25 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.128 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="技能冷却时间" pValue="0.6 秒" />
    <UnitProperty pKey="最低飞龙宝宝等级" pValue="6" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="8,8,24000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  初始秒伤  |  1.7 秒后秒伤  | 3.2 秒后秒伤 | 生命值 |所需大本等级|
| ---- |    ----   |      ----     |     ----    |  ---- |    ----   |
|   6  |     75    |      150      |     1500    |  1900 |     12    |
|   7  |     79    |      158      |     1580    |  2050 |     13    |
|   8  |     83    |      166      |     1660    |  2200 |     14    |
|   9  |     85    |      170      |     1700    |  2300 |     15    |
|  10  |     86    |      174      |     1740    |  2400 |     16    |
|  11  |     88    |      178      |     1780    |  2500 |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>地狱飞龙的训练时间由 2:15 改为 2:08</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 11 级飞龙宝宝，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 10 级飞龙宝宝，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 9 级飞龙宝宝，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>地狱飞龙烈焰射线攻击伤害递增的速度变慢 0.2 秒。 这意味着地狱飞龙的攻击伤害达到最高值所需要的时间稍稍变长。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/29">
        <TimelineRow>地狱飞龙的移动速度从 20 下降到 18。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 8 级飞龙宝宝，超级部队的等级也相应更新。</TimelineRow>
        <TimelineRow>7 级地狱飞龙每秒伤害值从 80 ~ 1600 降低为 79 ~ 1580，生命值降低 50。</TimelineRow>
        <TimelineRow>地狱飞龙烈焰射线冷却时间从 0.5 秒提高到 0.6 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>地狱飞龙到达最高伤害需要的时间缩短，之前从初始伤害到最高伤害需要 5.25 秒，现在只需 3 秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>新的超级兵种：地狱飞龙。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>