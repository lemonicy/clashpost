---
title: "部落冲突 coc 地震法术升级数据"
navTitle: "地震法术"
shownTitle: "地震法术"
description: "用强烈的地震摧毁地面目标吧！地震法术造成的伤害受建筑最大生命值影响。对同一目标重复施放地震法术，造成的伤害将会递减。但是，没有任何城墙能抵抗四次地震法术！"
module: upgrade-home
imgFolder: home_tech/0181
wiki: https://clashofclans.fandom.com/wiki/Earthquake_Spell
canonical: /upgrade/0181-Earthquake-Spell
---

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Earthquake_Spell.png" :imgAlt="$frontmatter.navTitle"
    description="用强烈的地震摧毁地面目标吧！<br>地震法术造成的伤害受建筑最大生命值影响。对同一目标重复施放地震法术，造成的伤害将会递减。但是，没有任何城墙能抵抗四次地震法术！"
    :isSmallImg="true" />

<SmallTitle>重要说明</SmallTitle>

1. 4 瓶地震可以摧毁任何等级的 [城墙](/upgrade/0300-Walls)。
2. 从 6 级开始，地震法术可以对地面部队造成伤害。
3. 如果玩家操作得当，地震法术实际震开的范围会大于理论数据，参见[『部落冲突』科普向之地震法术](/p/897)。
4. 地震法术不能对 [储金罐](/upgrade/0404-Gold-Storage)、[圣水瓶](/upgrade/0405-Elixir-Storage) 和 [暗黑重油罐](/upgrade/0406-Dark-Elixir-Storage) 造成伤害。
5. 当多瓶地震法术同时使用时，其伤害会有所不同。总体上来说，多个地震攻击建筑的伤害递减，对城墙递增。为方便起见，我们称第一瓶地震法术造成的伤害为**基准伤害**。如果你对具体公式感兴趣，那就展开看看吧！

<Panel>

设第一瓶地震法术的伤害为 1，则对**部队和建筑**来说，每一瓶地震的伤害按下面规律递减：

$$
1, \frac{1}{3}, \frac{1}{5}, \frac{1}{7}, \ldots
$$

也就是说：第一瓶伤害最高，后面每一瓶伤害越来越低，总伤害是把这些“递减分数”加起来。

举例：

- 第三瓶 5 级地震（基准伤害为 29%）对建筑的伤害为：

$$
\displaystyle 29\% \times \frac{1}{5} = 5.80\%
$$

- 前三瓶 5 级地震对建筑的总伤害为：

$$
\displaystyle 29\% \times (1 + \frac{1}{3} + \frac{1}{5}) \approx 44.47\%
$$

这种增长非常慢，所以用地震拆建筑几乎不现实。

对**城墙**来说，地震法术的伤害机制有所不同，这里直接给出例子。

举例：前三瓶 5 级地震法术对城墙的伤害分别为：

$$
\begin{align}
    1 \times 29\% + \frac{(1 - 1)^2}{20} = 29\%  \\
    \frac{1}{2} \times 29\% + \frac{(2 - 1)^2}{20} = 19.5\% \\
    \frac{1}{3} \times 29\% + \frac{(3 - 1)^2}{20} \approx 29.67\%
\end{align}
$$

合计：$78.17\%$.

在上述公式中，$\displaystyle \frac{(n - 1)^2}{20}$ 其实就是 $[5 \times (n - 1)^2] \, \%$（$n$ 为正整数）。

由于地震法术对城墙的伤害有一个二次增长的项，所以伤害增长很快。按计算器不难得到，不论你的地震法术是几级，3 瓶地震法术都不能摧毁城墙，但 4 瓶一定可以，这也是玩家之间广为流传的结论。

对普通玩家来说，看到这里已经足够了。接下来我们尝试严谨的数学表达。

**前方高能**：下方内容涉及调和数与渐近近似，阅读时需要一定数学基础。

设 $k$ 为基准伤害，$H_{max}$ 为部队、建筑或城墙的最大生命值，则

- 对部队和建筑来说，第 $n$ 瓶地震法术的伤害为：
    
$$
f(n) = \displaystyle \frac{k}{2n - 1} \cdot H_{max}
$$

- 对城墙来说，第 $n$ 瓶地震法术的伤害为：
    
$$
g(n) = \displaystyle [\frac{k}{n} + \frac{(n - 1)^2}{20}] \cdot H_{max}
$$

要计算前 $n$ 瓶地震法术对部队、建筑或城墙的总伤害，需要对调和级数求和。这个和式不能化成简单的初等函数形式，但可以用调和数或对数近似来表示。然而，即使把最终结果用优雅的公式写出来，求和的式子也并不会更好算。因此，当 $n$ 比较小时，我们建议直接按计算器；当 $n$ 较大时，可使用后文给出的近似公式。

在下方的公式中，$\displaystyle h(n) = \sum_{i = 1}^{n} \frac{1}{i}$，$\gamma \approx 0.5772$.

- 对部队和建筑来说，前 $n$ 瓶地震法术的总伤害为：

$$
\begin{align}
S(n) = \,     & k \cdot [h(2n) - \frac{1}{2} h(n)] \cdot H_{max} \\
     \approx \, & k \cdot [\frac{1}{2} \ln n + \ln 2 + \frac{1}{2} \gamma] \cdot H_{max}
\end{align}
$$

- 对城墙来说，前 $n$ 瓶地震法术的总伤害为：
    
$$
\begin{align}
T(n) =\,     & [k \cdot h(n) + \frac{n(n - 1)(2n - 1)}{120}] \cdot H_{max} \\
     \approx \, & [k \cdot (\ln n + \gamma + \frac{1}{2n}) + \frac{n(n - 1)(2n - 1)}{120}] \cdot H_{max}
\end{align}
$$

现在我们来解答一个很多人都疑惑的问题：假设地震法术无限供应，我们可以只使用地震法术摧毁建筑吗？

答案是可以的，数学比较好的玩家可能知道，调和级数是发散的，即总和可以无限增大。理论上来说，摧毁建筑需要的地震法术数量列举如下：

- 1 级：137255
- 2 级：18056
- 3 级：1921
- 4 级：419
- 5 级及以上：139

结论给出来了，感兴趣的玩家可以去私服试试。
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="作用半径" pValue="3.5 格" />
    <UnitProperty pKey="作用类型" pValue="百分比范围伤害" />
    <UnitProperty pKey="作用目标" pValue="地面部队、建筑和城墙" />
    <UnitProperty pKey="法术持续时间" pValue="震 5 次，共持续 2 秒" />
    <UnitProperty pKey="占用的法术空间" pValue="1" />
    <UnitProperty pKey="所需暗黑法术工厂等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="法术配置时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |基准伤害<br>(对建筑)|基准伤害<br>(对部队)|作用半径 | 升级花费 | 升级时间 |所需<br>实验室等级|所需<br>大本等级|
| ---- |        ---       |         ---       |  ---   |   ----  |   ----   |       ----     |      ----     |
|   1  | 14.5%<sup>①</sup>|          \        | 3.5 格 |     \   |    \     |         1      |        8      |
|   2  |        17%       |          \        | 3.8 格 |     6K  |   0,12   |         6      |        8      |
|   3  |        21%       |          \        | 4.1 格 |    12K  |   1      |         7      |        9      |
|   4  |        25%       |          \        | 4.4 格 |  25.5K  |   3      |         8      |       10      |
|   5  |        29%       |          \        | 4.7 格 |    42K  |   3,12   |         9      |       11      |
|   6  |        29%       |         5%        | 4.7 格 |   120K  |   8      |        12      |       14      |
|   7  |        29%       |        10%        | 4.7 格 |   200K  |   9      |        14      |       16      |
|   8  |        29%       | 14.5%<sup>②</sup> | 4.7 格 |   330K  |   13,12  |        16      |       18      |
</UnitTable>

① 1 级地震对建筑的基准伤害是 14.5%，但游戏内显示 14%.<br>
② 8 级地震对部队的基准伤害是 14.5%，但游戏内显示 14%.

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>现在地震法术可以对部队造成伤害了。</TimelineRow>
        <TimelineRow>推出 6 ~ 8 级地震法术。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>法术的配置时间取消，但新增了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>2 ~ 5 级地震法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>5 级地震法术的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5 级地震法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>5 级地震法术的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>2 ~ 3 级地震法术的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>4 ~ 5 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 4 级地震法术的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>11 本新增 5 级地震法术。</TimelineRow>
        <TimelineRow>更新后，地震等级越高，作用范围越大，之前固定为 4 格半径。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>