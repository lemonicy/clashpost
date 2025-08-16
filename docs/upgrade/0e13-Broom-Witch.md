---
title: "部落冲突 coc 扫帚女巫升级数据"
navTitle: "扫帚女巫"
shownTitle: "扫帚女巫"
description: "一名见习女巫，她会在战场上飞来飞去，召唤女巫精灵。她特别不喜欢那些站在塔上的傲慢法师。"
module: upgrade-temp
imgFolder: temp/0e13
wiki: https://clashofclans.fandom.com/wiki/Broom_Witch
canonical: /upgrade/0e13-Broom-Witch
---

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">扫帚女巫</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">女巫精灵</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 扫帚女巫 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Broom_Witch_info.png" :imgAlt="$frontmatter.navTitle"
    description="一名见习女巫，她会在战场上飞来飞去，召唤女巫精灵。她特别不喜欢那些站在塔上的傲慢法师。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Broom_Witch1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 扫帚女巫是动漫与部落活动中的两个临时兵种之一，在活动中获取 3 000 魔法水晶（任务点数）即可解锁该兵种。它在 2025 年 8 月返场一次。
2. 与大雪怪类似，扫帚女巫在受到伤害时可分裂出女巫精灵。
3. 与熔岩猎犬类似，扫帚女巫有三段攻击偏好。当场上有法师塔时优先攻击法师塔，没有法师塔时优先攻击防御建筑，没有防御建筑时才攻击其他建筑、敌方英雄和援军。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="法师塔" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="4 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="3.5 格" />
    <UnitProperty pKey="可分裂的女巫精灵数量" pValue="24" />
    <UnitProperty pKey="所需训练营等级" pValue="1" />  
    <UnitProperty pKey="所需大本等级" pValue="6" />    
    <UnitProperty pKey="训练时间" pValue="150" trainingSystem="2022" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 生命值 | 对应的<br>大本等级|
| ---- |   ---   |   ---   |  ---   |        ----     |
|   1  |   100   |   100   |   800  |         6       |
|   2  |   120   |   120   |  1000  |         7       |
|   3  |   140   |   140   |  1400  |         8       |
|   4  |   170   |   170   |  1800  |         9       |
|   5  |   200   |   200   |  2200  |        10       |
|   6  |   230   |   230   |  2600  |        11       |
|   7  |   260   |   260   |  3000  |        12       |
|   8  |   290   |   290   |  3400  |        13       |
|   9  |   320   |   320   |  3800  |        14       |
|  10  |   350   |   350   |  4200  |        15       |
|  11  |   380   |   380   |  4600  |        16       |
|  12  |   400   |   400   |  4700  |        17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 女巫精灵 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Witch_Spirit.png" imgAlt="扫帚女巫召唤的精灵"
    description="这些淘气的小火花看起来很可爱，但可以对附近的防御造成大量伤害。"
    :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Witch_Spirit1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

与小雪怪类似，女巫精灵攻击一次后就会死亡，[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备也无法阻止。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型 1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害加成" pValue="防御建筑 (4 倍伤害)" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.8 格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1<sup>①</sup>" />
    <UnitProperty pKey="移动速度" pValue="5 格/秒" />
    <UnitProperty pKey="攻击时机" pValue="到达目标后 0.5 秒<sup>②</sup>" />
    <UnitProperty pKey="攻击距离" pValue="2 格" />
</UnitProperties>

① 在考虑女巫精灵与 [隐形弹簧](/upgrade/0381-Spring-Trap)、[镜像法术](/upgrade/0105-Clone-Spell) 或 [回溯法术](/upgrade/0107-Recall-Spell) 的相互作用时，女巫精灵应被视为 1 人口。<br>
② 根据解析安装包的结果，女巫精灵的攻击速度是一秒一次，但实际上女巫精灵的首次攻击时机为到达目标后 0.5 秒，且攻击一次后就会死亡，因此其攻速值无意义。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |每次伤害<br>(对普通建筑)|每次伤害<br>(对防御建筑)|  生命值 |
| ---- |          ---         |          ---         |   ---   | 
|   1  |           7          |          28          |   300   | 
|   2  |          10          |          40          |   325   | 
|   3  |          15          |          60          |   350   | 
|   4  |          20          |          80          |   375   | 
|   5  |          25          |         100          |   400   | 
|   6  |          30          |         120          |   425   | 
|   7  |          35          |         140          |   450   | 
|   8  |          40          |         160          |   475   | 
|   9  |          45          |         180          |   500   | 
|  10  |          50          |         200          |   525   | 
|  11  |          55          |         220          |   550   |
|  12  |          56          |         224          |   555   |
</UnitTable>
</SwitchTabGroup>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/08/11">
        <TimelineRow>该兵种第 2 次推出，有效期至 2025/08/19.</TimelineRow>
        <TimelineRow>与上次推出时相比，6 - 7 本的扫帚女巫略微加强。</TimelineRow>
        <TimelineRow>与上次推出时相比，6 本的女巫精灵略微加强。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/08/08">
        <TimelineRow>该兵种第 1 次推出，有效期至 2024/08/31.</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>