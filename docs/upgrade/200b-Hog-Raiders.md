---
title: "部落冲突 coc 都城野猪突袭队（野猪特攻队）升级数据"
navTitle: "野猪突袭队"
shownTitle: "野猪突袭队（野猪特攻队）"
description: "野猪骑士和野猪飞骑的完美结合，掀起一场野猪突袭派对！"
module: upgrade-capital
imgFolder: capital_tech/200b
wiki: https://clashofclans.fandom.com/wiki/Hog_Raiders
canonical: /upgrade/200b-Hog-Raiders
---

- *如想查看家乡的野猪骑士，请访问：[野猪骑士](/upgrade/0081-Hog-Rider)。*
- *如想查看夜世界的野猪飞骑，请访问：[夜世界野猪飞骑](/upgrade/100a-Hog-Glider)。*
- *如想查看飞行堡垒的派生兵种骷髅飞骑，请访问该页面后切换到骷髅飞骑：[都城骷髅飞骑](/upgrade/2008-Flying-Fortress)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">野猪突袭队</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">野猪飞骑</SwitchTab>
    <SwitchTab tabId="cp-unit-item-2">野猪骑士</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 野猪突袭队 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Raiders_info.png" imgAlt="野猪突袭队"
    description="野猪骑士和野猪飞骑的完美结合，掀起一场野猪突袭派对！" />

<SmallTitle>重要说明</SmallTitle>

1. 野猪突袭队的解锁条件是建造 [野猪突袭队训练营](/upgrade/234b-Hog-Raider-Barracks)，而这需要部落解锁飞龙悬崖，且 [都城大本营](/upgrade/2400-Capital-Hall) 达到 6 级。
2. 野猪突袭队在部署之前是一个整体，你不能把野猪飞骑和野猪骑士分开部署。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="野猪突袭队的配兵人口" pValue="15" />
    <UnitProperty pKey="野猪突袭队含有" pValue="野猪飞骑 ×1<br>野猪骑士 ×2" />
</UnitProperties>
</SwitchTabGroup>

<!-- ↓↓↓ 野猪飞骑 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Glider_info.png" imgAlt="野猪飞骑"
    description="当之无愧的空中骑士！他们是翻越城墙的专家，但不太擅长平稳着陆，容易撞上建筑。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Hog_Glider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 野猪飞骑的技能（奇袭俯冲）：野猪飞骑的首次攻击将使被击中的敌方防御建筑瘫痪一段时间，然后他将跳下滑翔翼，变回普通的野猪骑士。
2. 如果野猪飞骑在攻击目标建筑前被击落，他将失去飞行能力，变回普通野猪骑士。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击方式" pValue="撞击后分裂为野猪骑士" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="野猪飞骑的防守人口" pValue="5" />
    <UnitProperty pKey="首次进攻时机" pValue="到达目标后 0.2 秒" />
    <UnitProperty pKey="移动速度" pValue="2.3 格/秒" />
    <UnitProperty pKey="攻击距离" pValue="0.25 格" />
</UnitProperties>
<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 撞击伤害 |  生命值 |
| ---- |  ----   |  ----   |
|   1  |   120   |   650   |
|   2  |   130   |   700   |
|   3  |   140   |   750   |
|   4  |   150   |   800   |
|   5  |   160   |   850   |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 野猪骑士 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-2" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Rider_info.png" imgAlt="野猪骑士"
    description="滑翔翼被摧毁后，战场上将出现一人一猪两位勇士，他们可以轻松跃过城墙，继续为您战斗。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Hog_Rider1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

和家乡的 [野猪骑士](/upgrade/0081-Hog-Rider) 一样，都城的野猪其实也可以敏捷地跃过城墙，优先攻击敌方的防御建筑。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="野猪骑士的防守人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="2.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1.0 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.75 格" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 |
| ---- |  ----   |  ----   |  ----  |
|   1  |   130   |   130   |   880  |
|   2  |   145   |   145   |   960  |
|   3  |   160   |   160   |  1040  |
|   4  |   175   |   175   |  1120  |
|   5  |   190   |   190   |  1200  |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/05/02">
        <TimelineRow>野猪突袭队随着部落都城玩法一同推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>