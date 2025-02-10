---
title: "部落冲突 coc 部队发射器升级数据"
navTitle: "部队发射器"
shownTitle: "部队发射器"
description: ""
module: upgrade-home
imgFolder: home_tech/0247
wiki: https://clashofclans.fandom.com/wiki/Troop_Launcher
canonical: /upgrade/0247-Troop-Launcher
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Troop_Launcher_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<!-- <SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 级" imgSrc="Troop_Launcher1.png" />
        <UnitImg imgTitle="2 级" imgSrc="Troop_Launcher2.png" />
        <UnitImg imgTitle="3 级" imgSrc="Troop_Launcher3.png" />
        <!-- <UnitImg imgTitle="4 级" imgSrc="Troop_Launcher4.png" />
    </UnitImgGroup>
</Panel> -->

<SmallTitle>重要说明</SmallTitle>

1. 如果你不了解攻城机器的基础设定，请阅读这篇文章：[浅谈攻城机器的一些基础设定](/p/6912)。
2. 部队发射器部署后会向我方部队发射一桶一桶的部队。
    - 部队发射器发射部队时会同时发射自带部队和城堡内的援军，每次发射的配置为 [巨人](/upgrade/0002-Giant)、[野蛮人](/upgrade/0000-Barbarian)、[弓箭手](/upgrade/0001-Archer)、[炸弹人](/upgrade/0004-Wall-Breaker) 和 一个 [部落城堡](/upgrade/0407-Clan-Castle) 内的部队，其中巨人最先出来。
    - 城堡内部队的出现顺序与这篇文章所述相同：[援军的出现顺序](/p/593)。
3. 部队发射器部署后不能移动，即使没有受到伤害也会自动掉血。[大守护者](/upgrade/0202-Grand-Warden) 的 [永恒书卷](/upgrade/0780-Eternal-Tome) 装备无法阻止部队发射器自身掉血。
5. 部队发射器中的部队等级取决于部队发射器的等级，而非玩家在 [实验室](/upgrade/0483-Laboratory) 中的部队等级。
6. 当部队发射器的血量清零，或发射完所有自带部队时，部队发射器就会自动解体并释放部落城堡内的部队。部队发射器解体后，只有尚未发射的自带部队会消失，援军会正常出来。