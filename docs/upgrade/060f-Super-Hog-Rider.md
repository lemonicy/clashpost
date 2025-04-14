---
title: "部落冲突 coc 超级野猪骑士升级数据"
navTitle: "超级野猪骑士"
shownTitle: "超级野猪骑士"
description: "野猪和骑士这对可怕的组合如今实力更加强劲。他们既可一起冲锋陷阵，也能分开行动，继续并肩作战。"
module: upgrade-home
imgFolder: home_tech/060f
wiki: https://clashofclans.fandom.com/wiki/Super_Hog_Rider
canonical: /upgrade/060f-Super-Hog-Rider
---

- *如想查看该兵种的普通版本，请访问：[野猪骑士](/upgrade/0081-Hog-Rider)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">超级野猪骑士</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">超级野猪</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">超级骑士</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 超级野猪骑士 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Hog_Rider_info.png" imgAlt="超级野猪骑士"
    description="野猪和骑士这对可怕的组合如今实力更加强劲。他们既可一起冲锋陷阵，也能分开行动，继续并肩作战。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Hog_Rider10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级野猪骑士的技能（分头作战）：被击倒后，野猪和骑士会分开，成为相互独立的部队。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="12" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
    <UnitProperty pKey="最低野猪骑士等级" pValue="10" />
    <UnitProperty pKey="最低大本等级" pValue="13" />
    <UnitProperty pKey="强化费用" pValue="2.5 万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3 天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="6,6,270,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  |  每次伤害  | 生命值 |所需大本等级|
| ---- |    ----   |    ----   |  ---- |    ----   |
|  10  |    190    |    190    |  1500 |     13    |
|  11  |    210    |    210    |  1600 |     14    |
|  12  |    230    |    230    |  1700 |     15    |
|  13  |    250    |    250    |  1800 |     16    |
|  14  |    270    |    270    |  1900 |     17    |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 超级野猪 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Hog_info.png" imgAlt="超级野猪"
    description="没有骑士的野猪也能跃过城墙、攻击防御建筑。所以骑士一开始存在的意义是什么？" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Hog10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  |  每次伤害  | 生命值 |所需大本等级|
| ---- |    ----   |    ----   |  ---- |    ----   |
|  10  |     50    |     50    |   800 |     13    |
|  11  |     55    |     55    |   900 |     14    |
|  12  |     60    |     60    |  1000 |     15    |
|  13  |     65    |     65    |  1050 |     16    |
|  14  |     70    |     70    |  1100 |     17    |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 超级骑士 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Rider_info.png" imgAlt="超级骑士"
    description="没有野猪的骑士依旧势不可挡，他会抡起锤子攻击所有周围的目标。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Rider10.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级骑士对城墙有两倍伤害，不过超级骑士没有攻击偏好。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="2 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 对墙每次伤害 | 生命值 |所需大本等级|
| ---- |   ----  |   ----  |     ----    |  ---- |    ----   |
|  10  |   190   |   190   |     380     |  550  |     13    |
|  11  |   210   |   210   |     420     |  625  |     14    |
|  12  |   230   |   230   |     460     |  700  |     15    |
|  13  |   250   |   250   |     500     |  750  |     16    |
|  14  |   270   |   270   |     540     |  800  |     17    |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>17 本新增 14 级野猪骑士，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>超级野猪骑士的训练时间由 1:50 改为 1:41</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16 本新增 13 级野猪骑士，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>新超级兵：超级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>