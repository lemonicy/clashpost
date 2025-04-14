---
title: "部落冲突 coc 超级巨人升级数据"
navTitle: "超级巨人"
shownTitle: "超级巨人"
description: "身为普通巨人的大表哥，超级巨人体型更庞大，且擅长砸开城墙，为自己开路。他们的腰带是在村庄每年的大胃王比赛中赢得的。"
module: upgrade-home
imgFolder: home_tech/0602
wiki: https://clashofclans.fandom.com/wiki/Super_Giant
canonical: /upgrade/0602-Super-Giant
---

- *如想查看该兵种的普通版本，请访问：[巨人](/upgrade/0002-Giant)。*
- *如想查看夜世界的巨人拳击手，请访问：[夜世界巨人拳击手](/upgrade/1002-Boxer-Giant)。*
- *如想查看都城的超级巨人，请访问：[都城超级巨人](/upgrade/2002-Super-Giant)。*
- *如想查看作为临时兵种以及英雄装备派生兵种的巨人终极强化版，请访问：[霸天巨人](/upgrade/0e17-Giant-Giant)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Giant_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Giant9.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级巨人的技能（城墙克星）：对 [城墙](/upgrade/0300-Walls) 造成 5 倍伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="10" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="最低巨人等级" pValue="9" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="5,5,15000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害 | 每次伤害 | 对墙的每次伤害 | 生命值 |所需大本等级|
| ---- |   ----   |   ----  |      ----     |  ---- |    ----   |
|   9  |    130   |   260   |      1300     |  4000 |     12    |
|  10  |    140   |   280   |      1400     |  4200 |     13    |
|  11  |    150   |   300   |      1500     |  4400 |     15    |
|  12  |    160   |   320   |      1600     |  4600 |     16    |
|  13  |    170   |   340   |      1700     |  4800 |     17    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>17 本推出，并在 17 本新增 13 级巨人，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 12 级巨人，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级巨人，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>所有等级的超级巨人生命值降低 200。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>部落冲突新增“超级兵种”玩法，超级巨人是首批推出的超级兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>