---
title: "部落冲突 coc 灵蛇飞桶升级数据"
navTitle: "灵蛇飞桶"
shownTitle: "灵蛇飞桶"
description: "农历新年到，灵蛇从天降！这些绿油油的家伙危险又有趣，它们会狠狠撕咬防御建筑。灵蛇还还可以爬过城墙，当它们成群结队时更加危险！"
module: upgrade-temp
imgFolder: temp/0e15
wiki: https://clashofclans.fandom.com/wiki/Snake_Barrel
canonical: /upgrade/0e15-Snake-Barrel
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">灵蛇飞桶</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">灵蛇</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 灵蛇飞桶 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Snake_Barrel_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<!-- <SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <!-- <UnitImg imgTitle="所有等级" imgSrc="Snake_Barrel1.png" />
    </UnitImgGroup>
</Panel> -->

<SmallTitle>重要说明</SmallTitle>

1. 灵蛇飞桶在 2025 年 2 月的灵蛇庆典活动中首次推出，在奖励之路中获得 100 红灯笼（任务点数）即可解锁。
2. 部署灵蛇飞桶后，它会飞向最近的防御建筑并释放灵蛇。如果在死亡前未成功释放灵蛇，则在死亡时释放。

<SmallTitle>灵蛇飞桶的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="1.2格" />
    <UnitProperty pKey="攻击的目标" pValue="地面目标" />
    <UnitProperty pKey="占据人口" pValue="8" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5 格" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />  
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="30" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 |  分裂出的<br>灵蛇数量|  生命值 | 对应的<br>大本等级|
| ---- |   ---   |         ---         |   ---   |        ----     |
|   1  |    22   |          8          |   222   |         6       |
|   2  |    28   |          9          |   288   |         7       |
|   3  |    35   |          10         |   355   |         8       |
|   4  |    42   |          11         |   422   |         9       |
|   5  |    48   |          12         |   488   |        10       |
|   6  |    55   |          13         |   555   |        11       |
|   7  |    62   |          14         |   622   |        12       |
|   8  |    68   |          15         |   688   |        13       |
|   9  |    75   |          16         |   755   |        14       |
|  10  |    82   |          17         |   822   |        15       |
|  11  |    86   |          18         |   866   |        16       |
|  12  |    88   |          20         |   888   |        17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 灵蛇 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Snake_info.png" imgAlt="灵蛇飞桶召唤的灵蛇" description="这些绿色的危险生物从地底钻出来，想尝尝战斗的滋味！它们会爬过城墙，用牙齿撕咬一切！它们成群结队时更加危险！" />

<!-- <SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <!-- <UnitImg imgTitle="所有等级" imgSrc="Snake_Barrel1.png" />
    </UnitImgGroup>
</Panel> -->

<SmallTitle>灵蛇的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="移动速度" pValue="3 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.4 格" />
    <UnitProperty pKey="每秒伤害" pValue="50" />
    <UnitProperty pKey="每次伤害" pValue="50" />
    <UnitProperty pKey="生命值" pValue="200" />
</UnitProperties>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/02/07">
        <TimelineRow>该兵种第 1 次推出，是 2025 年灵蛇庆典活动中的两个临时兵种之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>