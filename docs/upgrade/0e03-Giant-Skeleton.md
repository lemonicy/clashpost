---
title: "部落冲突 coc 骷髅巨人升级数据"
navTitle: "骷髅巨人"
shownTitle: "骷髅巨人"
description: "骷髅巨人从小就骨骼粗大，他能炸毁的可不只是城墙。被消灭后，他的超大炸弹能对周围的一切造成伤害。"
module: upgrade-temp
imgFolder: temp/0e03
wiki: https://clashofclans.fandom.com/wiki/Giant_Skeleton
canonical: /upgrade/0e03-Giant-Skeleton
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Giant_Skeleton_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Giant_Skeleton1.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="防御建筑" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="1.5 格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2 秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1 格" />
    <UnitProperty pKey="死亡爆炸半径" pValue="2 格" />
    <UnitProperty pKey="死亡爆炸延时" pValue="2 秒" />
    <UnitProperty pKey="所需训练营等级" pValue="3" />
    <UnitProperty pKey="所需大本等级" pValue="1<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="30" :isTrainingTime="true" />
</UnitProperties>

\* 理论上来说，1 级大本营可以解锁骷髅巨人，但因为新手教程会引导玩家升级至 2 本，所以实际上 2 本才能训练和使用骷髅巨人。

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 | 每秒伤害 | 每次伤害 | 死亡伤害 | 生命值 |对应的<br>大本等级|
| ---- |  ----   |  ----   |    ---  |  ----  |        ---      |
|   1  |    22   |    44   |    800  |  1000  |         2       |
|   2  |    28   |    56   |   1000  |  1200  |         3       |
|   3  |    38   |    76   |   1200  |  1400  |         4       |
|   4  |    48   |    96   |   1400  |  1700  |         6       |
|   5  |    62   |   124   |   1600  |  2200  |         8       |
|   6  |    86   |   172   |   1800  |  3100  |         9       |
|   7  |   100   |   200   |   2000  |  3600  |        10       |
|   8  |   114   |   228   |   2200  |  4100  |        11       |
|   9  |   128   |   256   |   2400  |  4400  |        12       |
|  10  |   142   |   284   |   2600  |  4700  |        14       |
|  11  |   156   |   312   |   2800  |  5000  |        15       |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2022/10">
        <TimelineRow>该兵种第 4 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2018/10">
        <TimelineRow>该兵种第 3 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/12/28">
        <TimelineRow>该兵种第 2 次推出，有效期至 2018/01/03.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2017/10">
        <TimelineRow>该兵种第 1 次推出。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>