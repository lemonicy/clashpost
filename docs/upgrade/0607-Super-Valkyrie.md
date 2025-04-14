---
title: "部落冲突 coc 超级瓦基丽武神升级数据"
navTitle: "超级瓦基丽武神"
shownTitle: "超级瓦基丽武神"
description: "比起普通的瓦基丽武神，超级瓦基丽武神无论在哪一方面都更加优秀，而且她们也暴躁得多！"
module: upgrade-home
imgFolder: home_tech/0607
wiki: https://clashofclans.fandom.com/wiki/Super_Valkyrie
canonical: /upgrade/0607-Super-Valkyrie
---

- *如想查看该兵种的普通版本，请访问：[瓦基丽武神](/upgrade/0082-Valkyrie)。*
- *如想查看作为临时兵种推出的超级强化版本，请访问：[铁臂终结者](/upgrade/0e19-The-Disarmer)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Valkyrie_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Valkyrie7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级武神的技能（临别赠礼）：死亡时丢下一个狂暴法术。

<SmallTitle>超级武神的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="最低武神等级" pValue="7" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="10,10,450,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>超级武神死亡后丢下的狂暴法术的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="伤害提升" pValue="160%" />
    <UnitProperty pKey="移动速度提升" pValue="26<sup>*</sup>" />
    <UnitProperty pKey="持续时间" pValue="10 秒" />
</UnitProperties>

\* 这里的 8 点移动速度等于 1 格/秒，26 点移动速度就是 3.25 格/秒。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  |  每次伤害  | 生命值 |所需大本等级|
| ---- |    ----   |    ----   |  ---- |    ----   |
|   7  |    250    |    275    |  2400 |     12    |
|   8  |    300    |    330    |  2700 |     13    |
|   9  |    325    |    357.5  |  2900 |     14    |
|  10  |    350    |    385    |  3400 |     15    |
|  11  |    375    |    412.5  |  3900 |     16    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>超级瓦基丽武神的训练时间由 3:45 改为 2:55</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级瓦基丽武神，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>    
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 10 级瓦基丽武神，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/06/27">
        <TimelineRow>攻击速度：从 1.8 秒缩短至 1.1 秒。</TimelineRow>
        <TimelineRow>移动速度：从每秒 3.5 格降低至每秒 3 格。</TimelineRow>
        <TimelineRow>狂暴法术范围：从 3.5 格提升至 4 格。</TimelineRow>
        <TimelineRow>所有等级超级瓦基丽武神的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 9 级瓦基丽武神，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>新超级兵：超级瓦基丽武神。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>