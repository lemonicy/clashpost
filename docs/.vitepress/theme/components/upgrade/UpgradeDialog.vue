<script>
/**
 * 判断是否为升级数据的详情页
 * 
 * @param {String} link 页面的规范链接
 */
function isUpgradeDetails(link) {
    if (link && link.startsWith("/upgrade/")) {
        const unitId = link.substring(9, 13);
        return unitId.match(/^[0-9a-f]{4}$/);
    }
    return false;
}
</script>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: null
    }
});

const link = props.link;
let hasTrainingDialog = false;
let hasV1TrainingDialog = false;
let hasV2TrainingDialog = false;
let hasNewestTrainingDialog = true;
let hasJudgeSquare = false;
let hasDailyCost = false;

if (link && isUpgradeDetails(link)) {
    // 提取链接中的序号
    const unitId = link.substring(9, 13);
    const unitIdFirst2 = unitId.substring(0, 2); // 序号中的前两个字符
    const unitIdFirst3 = unitId.substring(0, 3); // 序号中的前三个字符

    // 判断这个页面是否为英雄
    const isHeroHome = ["020", "021", "022", "023"].includes(unitIdFirst3);
    const isHeroBh = unitIdFirst3 === "10f";
    const isHero = isHeroHome || isHeroBh;

    // 判断这个页面是否为战宠
    const isPet = ["028", "029", "02a", "02b"].includes(unitIdFirst3);
    
    // 判断这个页面是否为建筑
    const buildingPrefixArr = ["03", "04", "05", "11", "12", "22", "23", "24", "25"];
    const isBuilding = buildingPrefixArr.includes(unitIdFirst2);

    // 确定是否展示训练弹窗
    const isTroops = ["00"].includes(unitIdFirst2);
    const isSpells = ["01"].includes(unitIdFirst2);
    const isSiegeMachine = ["024", "025", "026", "027"].includes(unitIdFirst3);
    const tempTroops = ["0e"].includes(unitIdFirst2);
    hasTrainingDialog = isTroops || isSpells || isSiegeMachine || tempTroops;

    // 只有在确定拥有训练弹窗时才运行这一段
    if (hasTrainingDialog) {
        // 是否使用旧版训练系统的说明文字，其中 v1 指的是 2022/10/10 更新前的训练系统，v2 指的是 2022/10/10 更新后、2025/03/24 更新前的训练系统。
        const v1TrainingSystemUnits = ["0e01", "0e02", "0e04", "0e05", "0e81"];
        const v2TrainingSystemUnits = [
            "0e00", "0e03", "0e06", "0e07", "0e08", "0e09",
            "0e0a", "0e0b", "0e0c", "0e0d", "0e0e", "0e0f",
            "0e10", "0e11", "0e12", "0e13", "0e14", "0e15", 
        ];
        hasV1TrainingDialog = v1TrainingSystemUnits.includes(unitId);
        hasV2TrainingDialog = v2TrainingSystemUnits.includes(unitId);
        if (hasV1TrainingDialog || hasV2TrainingDialog) {
            hasNewestTrainingDialog = false;
        }
    }

    // 建筑和英雄的页面都有判定面积
    hasJudgeSquare = isHero || isBuilding;

    // 英雄和战宠才有日均花费
    hasDailyCost = isHero || isPet;
}

</script>

<template>
    <Dialog dialogId="cp-training-dialog-2025" title="注意" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasTrainingDialog && hasNewestTrainingDialog">
        2025 年 3 月更新后，兵种训练时间、法术配置时间和攻城机器建造时间均被取消。<br>
        如果你对 coc 训练机制的变迁感兴趣，请移步这篇文章：<a href="/p/4727">coc 的部队训练机制经历过哪些变迁？</a>
    </Dialog>
    <Dialog dialogId="cp-training-dialog-2022" title="注意" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasTrainingDialog && hasV2TrainingDialog">
        该兵种最后一次推出时，训练时间尚未被取消，这里显示的是 2022/10 更新后、2025/03 更新前的部队的训练时间。<br>
        要想讲清楚当时的训练机制，需要补充大量背景知识，这里就不做介绍，感兴趣的玩家请移步这篇文章：<a href="/p/4727">coc 的部队训练机制经历过哪些变迁？</a>
    </Dialog>
    <Dialog dialogId="cp-training-dialog-legacy" title="注意" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasTrainingDialog && hasV1TrainingDialog">
        该兵种最后一次推出时，训练时间尚未被取消。该兵种最后一次推出时是四训练营时代，不过为例方便起见，这里显示的是单训练营时代（2022/10 - 2025/03）的训练时间。<br>
        要想讲清楚当时的训练机制，需要补充大量背景知识，这里就不做介绍，感兴趣的玩家请移步这篇文章：<a href="/p/4727">coc 的部队训练机制经历过哪些变迁？</a>
    </Dialog>
    <Dialog dialogId="cp-judge-square-dialog" title="什么是判定面积？" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasJudgeSquare">
        所有建筑都有占地面积，也有判定面积。而仔细看不难发现远程兵种并非直接攻击建筑物边缘，而是去攻击稍微靠里一点的地方，这个范围就是判定面积。虽然说兵种只要打在建筑的占地面积之内就可以造成伤害，但是兵种只有够得着判定面积才会去攻击。<br><br>
        判定面积有两个最常见的应用场景：<br>
        1. 计算女王和建筑之间的距离。<br>
        2. 估算电龙能不能连锁到某个建筑。<br>
        但是请注意：某些建筑比较特殊，不建议用判定面积理论判断，<strong>如果涉及到了兵营、实验室、攻城机器工坊这几个建筑，请谨慎使用此理论。</strong>
    </Dialog>
    <Dialog dialogId="cp-daily-cost-dialog" title="开月卡之后日均消耗为什么会增加？" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasDailyCost">
        启用月卡的升级时间加成后，游戏会删掉时间的零头，所以升级时间的减免比例实际上要比游戏中标注的 10%、15%、20%
        略高一些，而升级花费的减免比例和标注值是一样的。也就是说开月卡之后游戏实际上是更肝了，但肝度增加有限。<br>
        如想了解详细的月卡减免算法，请参考这篇文章：<a href="/p/1001">部落冲突月度挑战 (月卡、黄金令牌) 机制详解</a>)。
    </Dialog>
</template>