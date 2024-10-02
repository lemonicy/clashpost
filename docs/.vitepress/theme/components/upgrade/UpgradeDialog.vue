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
let hasTrainingTime = false;
let hasJudgeSquare = false;
let hasDailyCost = false;
let hasOldTrainingDialog = false;

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

    // 是否使用旧版训练系统的说明文字
    const oldTrainingSystemUnits = ["0e00", "0e01", "0e02", "0e04", "0e05", "0e81"];
    hasOldTrainingDialog = oldTrainingSystemUnits.includes(unitId);

    // 只有家乡的兵种、法术和攻城机器有训练时间（法术配置时间）
    const isSiegeMachine = ["024", "025", "026", "027"].includes(unitId);
    hasTrainingTime = unitIdFirst2 == "00" || unitIdFirst2 == "01" || isSiegeMachine || !hasOldTrainingDialog;

    // 建筑和英雄的页面都有判定面积
    hasJudgeSquare = isHero || isBuilding;

    // 英雄和战宠才有日均花费
    hasDailyCost = isHero || isPet;
}

</script>

<template>
    <Dialog dialogId="cp-training-dialog" title="注意" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasTrainingTime">
        2022 年 10 月更新后，同一种训练营被合并为一个，更新后的训练时间等于更新前四个圣水训练营或两个暗黑训练营的训练时间。<br>
        同时，训练营、法术工厂、攻城机器工坊升级时不再停止训练，但是训练速度会减半（训练时间翻倍）。
    </Dialog>
    <Dialog dialogId="cp-old-training-dialog" title="注意" :hasSecondaryBtn="false"
        :hasPrimaryBtn="true" primaryText="我知道了" v-if="hasOldTrainingDialog">
        2022 年 10 月更新后，同一种训练营被合并为一个，并且训练营、法术工厂、攻城机器工坊升级时不再停止训练。虽然该兵种推出时游戏尚未做出这项改动，但是为了简单起见，这里显示的是更新后的训练时间。<br>
        如想了解老版本的训练系统，请移步：<a href="/p/4727">多训练营时代的训练机制是什么样的？</a>
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