---
title: "部落冲突 coc 超级法师（超法）升级数据"
navTitle: "超级法师"
shownTitle: "超级法师（超法）"
description: "超级法师全身充满了魔法能量！他可能是实验室里最聪明的人，但也有可能会把实验室炸上天。"
module: upgrade-home
imgFolder: home_tech/0609
wiki: https://clashofclans.fandom.com/wiki/Super_Wizard
canonical: /upgrade/0609-Super-Wizard
---

- *如想查看该兵种的普通版本，请访问：[法师](/upgrade/0006-Wizard)。*
- *如想查看夜世界的电火法师，请访问：[夜世界电火法师](/upgrade/100b-Electrofire-Wizard)。*
- *如想查看都城的超级法师，请访问：[都城超级法师](/upgrade/2005-Super-Wizard)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Wizard_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Wizard9.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级法师的技能（链式魔法）：超级法师的链式魔法攻击可以弹射伤害多个目标，只要这些目标在他初始目标的溅射范围内。它就可以同时对多个目标造成伤害。
2. 超级法师的闪电链和 [雷电飞龙](/upgrade/000c-Electro-Dragon) 不同，雷电飞龙的每次连锁有一定延迟，而超级法师除了正在攻击的目标之外，其他目标是一起掉血的。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="链式伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="连锁距离" pValue="3 格" />
    <UnitProperty pKey="最大目标数" pValue="10" />
    <UnitProperty pKey="连锁延迟" pValue="0.128 秒" />
    <UnitProperty pKey="连锁后保留的伤害" pValue="40%" />
    <UnitProperty pKey="最低法师等级" pValue="9" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  | 直接伤害 | 连锁伤害 | 生命值 |所需大本等级|
| ---- |    ----   |  ----   |   ---   |  ----  |    ----   |
|   9  |    220    |   440   |   176   |   450  |     12    |
|  10  |    240    |   480   |   192   |   500  |     13    |
|  11  |    260    |   520   |   208   |   540  |     15    |
|  12  |    275    |   550   |   220   |   580  |     16    |
|  13  |    290    |   580   |   232   |   620  |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间被取消。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级法师，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 12 级法师，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级法师，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/01/20">
    <TimelineRow>超级法师连锁后的伤害由 60%降低到 40%。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
    <TimelineRow>新超级兵：超级法师。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>