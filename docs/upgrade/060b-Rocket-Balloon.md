---
title: "部落冲突 coc 火箭气球兵（超球）升级数据"
navTitle: "火箭气球兵"
shownTitle: "火箭气球兵（超球）"
description: "气球兵重装升级为火箭气球兵，最新配备的两个火箭助推器都已通过严格的安全检查，助力气球快速飞入战场！"
module: upgrade-home
imgFolder: home_tech/060b
wiki: https://clashofclans.fandom.com/wiki/Rocket_Balloon
canonical: /upgrade/060b-Rocket-Balloon
---

- *如想查看该兵种的普通版本，请访问：[气球兵](/upgrade/0005-Balloon)。*
- *如想查看都城的火箭气球兵，请访问：[都城火箭气球兵](/upgrade/2006-Rocket-Balloon)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Rocket_Balloon_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Rocket_Balloon8.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

火箭气球兵的技能（急速飞行）：在部署后的 4 秒内提升移动速度。加速状态下火箭气球兵的移动速度是 64，即 8 格/秒。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="8" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="3 秒/次" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.75 秒" />
    <UnitProperty pKey="攻击距离" pValue="0 (建筑头顶)" />
    <UnitProperty pKey="死亡伤害半径" pValue="1.2 格" />
    <UnitProperty pKey="死亡伤害延迟" pValue="0.416 秒" />
    <UnitProperty pKey="最低气球兵等级" pValue="8" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="4,4,12000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|      等级     |  每秒伤害  | 每次伤害 | 死亡伤害 | 生命值 |所需大本等级|
|      ---      |    ----   |  ----   |    ----  |  ----  |    ----   |
| 5<sup>*</sup> |    170    |   510   |    300   |   390  |      8    |
| 6<sup>*</sup> |    220    |   660   |    400   |   545  |      9    |
| 7<sup>*</sup> |    260    |   780   |    500   |   690  |     11    |
|       8       |    270    |   810   |    580   |   840  |     12    |
|       9       |    280    |   840   |    620   |   940  |     13    |
|      10       |    285    |   855   |    650   |  1040  |     14    |
|      11       |    290    |   870   |    700   |  1140  |     16    |
|      12       |    304    |   912   |    730   |  1240  |     17    |
</UnitTable>

\* 5 - 7 级火箭气球兵只在 [奖章活动](/p/7015) 中出现，不能通过常规方式得到。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/06/16">
        <TimelineRow>在 17 本新增 12 级气球兵，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/04/09">
        <TimelineRow>8 ~ 10 级火箭气球兵的每秒伤害提升。</TimelineRow>
        <TimelineRow>8 ~ 10 级火箭气球兵的死亡伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 11 级气球兵，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少 0.5 格（超级飞龙除外，这玩意削了 1 格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/06/15">
        <TimelineRow>新超级兵：火箭气球兵。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>