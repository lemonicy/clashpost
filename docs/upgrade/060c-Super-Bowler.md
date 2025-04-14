---
title: "部落冲突 coc 超级巨石投手（超级蓝胖、超蓝）升级数据"
navTitle: "超级巨石投手"
shownTitle: "超级巨石投手（超级蓝胖、超蓝）"
description: "如今，超级巨石投手拥有了他想要的一切：一副抓得更稳的手套、更舒服的鞋子，还有很多大到离谱的巨石。"
module: upgrade-home
imgFolder: home_tech/060c
wiki: https://clashofclans.fandom.com/wiki/Super_Bowler
canonical: /upgrade/060c-Super-Bowler
---

- *如想查看该兵种的普通版本，请访问：[巨石投手](/upgrade/0086-Bowler)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Bowler.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Bowler4.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级巨石投手的技能（三重打击）：超级巨石投手扔出的石头可以连续弹跳击中 3 个目标，并能造成额外溅射伤害。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.6 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="30" />
    <UnitProperty pKey="移动速度" pValue="1.75 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3 格<sup>*</sup>" />
    <UnitProperty pKey="最低巨石投手等级" pValue="4" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,675,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 超级巨石投手扔出去的石头落地后可以造成三次伤害。石头的第一个落地距离超级蓝胖 3 格，第二个落点距离蓝胖 6 格，第三个是 9 格。和普通蓝胖类似，超级蓝胖只能看到第一个目标，二次伤害和三次伤害都是顺带的，它并不知道石头会溅到哪儿。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  |  每次伤害  | 生命值 |所需大本等级|
| ---- |    ----   |    ----   |  ---- |    ----   |
|   4  |    170    |    374    |  1600 |     12    |
|   5  |    185    |    407    |  1800 |     13    |
|   6  |    200    |    440    |  2000 |     14    |
|   7  |    215    |    473    |  2200 |     15    |
|   8  |    230    |    506    |  2400 |     16    |
|   9  |    245    |    539    |  2600 |     17    |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>超级巨石投手的训练时间由 5:00 改为 4:10</TimelineRow>
        <TimelineRow>17 本新增 9 级巨石投手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 8 级巨石投手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15 本新增 7 级巨石投手，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>新超级兵：超级巨石投手。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>