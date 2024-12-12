---
title: "部落冲突 coc 超级野蛮人（超蛮、超级黄毛）升级数据"
navTitle: "超级野蛮人"
shownTitle: "超级野蛮人（超蛮、超级黄毛）"
description: "生命值更高、力量更强、速度更快，最重要的是秀发更浓密。成为超级野蛮人是每个普通野蛮人的梦想！"
module: upgrade-home
imgFolder: home_tech/0600
wiki: https://clashofclans.fandom.com/wiki/Super_Barbarian
canonical: /upgrade/0600-Super-Barbarian
---

- *如想查看该兵种的普通版本，请访问：[野蛮人](/upgrade/0000-Barbarian)。*
- *如想查看都城的超级野蛮人，请访问：[都城超级野蛮人](/upgrade/2000-Super-Barbarian)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Barbarian_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Barbarian8.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级野蛮人的技能（狂暴）：在部署后的 8 秒内狂暴，获得额外的移动速度和伤害。狂暴状态下伤害提高 70%，速度为 36（也即 4.5 格/秒）。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.8 秒/次" />
    <UnitProperty pKey="首次出手时机" pValue="到达目标后 0.7 秒" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="最低野蛮人等级" pValue="8" />
    <UnitProperty pKey="最低大本等级" pValue="11" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="25" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害 | 每次伤害 |狂暴状态<br>每秒伤害|狂暴状态<br>每次伤害| 生命值 |所需大本等级|
| ---- |   ----   |   ----  |         ---       |        ---       |   ---  |     ---   |
|   8  |    180   |   144   |         306       |       244.8      |  1000  |     11    |
|   9  |    200   |   160   |         340       |       272        |  1100  |     12    |
|  10  |    220   |   176   |         374       |       299.2      |  1200  |     14    |
|  11  |    240   |   192   |         408       |       326.4      |  1300  |     15    |
|  12  |    250   |   200   |         425       |       340        |  1350  |     16    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2024/09/09">
        <TimelineRow>12 级超级野蛮人的每秒伤害减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>10 ~ 12 级超级野蛮人的生命值减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16 本推出，并在 16 本新增 12 级野蛮人，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>15 本推出，并在 15 本新增 11 级野蛮人，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>14 本推出，并在 14 本新增 10 级野蛮人，超级部队的等级也相应更新。</TimelineRow>
        <TimelineRow>修复了狂暴野蛮人、超级野蛮人和隐秘弓箭手的技能持续时间计时不太准确的问题。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从 7 天缩短为 3 天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为 25,000 暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>部落冲突新增“超级兵种”玩法，超级野蛮人是首批推出的超级兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>