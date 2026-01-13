---
title: "部落冲突 coc 精制台升级数据"
navTitle: "精制台"
shownTitle: "精制台"
description: "建造精工防御，按需升级它们的属性！精工防御将持续至当前精制阶段结束，新的防御将在下个阶段替代它们！尝试各种防御组合，说不定就能发现新的最爱！"
module: upgrade-home
imgFolder: home_buildings/048a
wiki: https://clashofclans.fandom.com/wiki/Crafting_Station
canonical: /upgrade/048a-Crafting-Station
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Crafting_Station_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 16, 17 - 18" />
    <BuildingNumRow title="建筑数量" num="     0,       1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 精制台只在最高大本等级解锁（目前是 17 本）。
2. 精制台有三种防御模式，你可以在这三种防御模式中自由切换。
3. 建造精制台以及切换防御模式均无需花费时间和资源，也无需空闲的建筑工人。
4. 精制台的防御模式本质上是不同的防御建筑，我们将这类建筑称为精工防御。
5. 切换防御模式本质上是选择一个精工防御，做出选择后精制台会被你选择的精工防御替代。
6. 你可以将精工防御视为隐藏建筑，只有当你在精制台中选择后，它才能保卫你的村庄，没有选中就只能放仓库当废铁。
7. 精工防御每三个月推出一批，每批三个建筑。新一批精工防御推出后，旧防御会消失，玩家需要重新升级。
8. 新一批精工防御推出后，精制台的防御模式会重置，玩家需要从最新一批精工防御中重新选择一个。
9. 新的大本等级推出后，之前的最高大本等级会暂时保留精制台访问权限。如果新一批精工防御推出后玩家仍未升级 [大本营](/upgrade/0400-Town-Hall)，则精制台会被移除。
10. 精制台不能升级，能升级的是精工防御。每个精工防御都有三个模组，升级不同的模组会提升不同的属性。
11. 对于同一精工防御，玩家只能同时升级一个模组，但玩家可以同时升级多个精工防御。
12. 升级精工防御的模组和升级防御建筑的方式类似，升级完成后可获得 [经验值](/p/1444)，可使用宝石或 [魔法物品](/p/1073)（建筑之书、建筑之锤）立即完成，[黄金令牌](/p/1001) 的建筑加成对精工防御的模组升级也有效。
13. 精工防御升级过程中仍然可以保卫村庄，其等级等于升级前的等级。
14. 精工防御的初始等级为 3 级（三个模组均为 1 级），最高可升至 30 级（三个模组均为 10 级）。
15. 如想查看精工防御的数据，请前往 [临时单位](/upgrade/category/temp) 版块。

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="3×3" />
    <UnitProperty pKey="判定面积" pValue="2×2" :isJudgeSquare="true" />
    <UnitProperty pKey="生命值" pValue="1 000<sup>*</sup>" />
    <UnitProperty pKey="升级费用" pValue="无" />
    <UnitProperty pKey="升级时间" pValue="无" />
</UnitProperties>

\* 只有当玩家没有选择精工防御时，精制台的生命值才是 1 000. 如果玩家已选择精工防御，则精制台的生命值等于精工防御的生命值。