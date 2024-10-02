<script setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress';
import { hideAllDialogs } from '@/components/dialog/Dialog.vue';

const router = useRouter();
const networkWarningRef = ref();
let networkWarningTimer = null;

function showNetworkWarning() {
    const networkWarningDom = networkWarningRef.value;
    // 当模板没有网络警告图标时切换页面，networkWarningDom 为 null
    if (networkWarningDom) {
        networkWarningDom.style.display = "flex";
    }
}

function hideNetworkWarning() {
    const networkWarningDom = networkWarningRef.value;
    // 当新进入的模板没有网络警告图标时，networkWarningDom 为 null
    if (networkWarningDom) {
        networkWarningDom.style.display = "";
    }
    clearTimeout(networkWarningTimer);
}

// 新页面开始加载时执行
router.onBeforeRouteChange = () => {
    // 等待 0.8 秒显示 WiFi 警告图标
    networkWarningTimer = setTimeout(() => {
        showNetworkWarning();
    }, 800);
}

// 新页面加载完成后执行
router.onAfterRouteChanged = () => {
    // 取消 WiFi 警告图标，如果尚未显示出来则打断定时器
    hideNetworkWarning();
    // 隐藏弹窗
    hideAllDialogs();
}
</script>

<template>
    <div class="cp-loading-icon" ref="networkWarningRef">
        <Pic :lazyLoading="false" src="https://static.clashpost.com/global/WiFiIcon.png" alt="网络连接慢" :convertWebp="false" />
    </div>
</template>

<style lang="scss">
.cp-loading-icon {
    width: 5rem;
    height: 4rem;
    /* 如果默认为 flex，则组件加载的时候会有个先加载出来后隐藏的流程，不如让它加载出来的时候默认处于隐藏状态，需要的时候再显示 */
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: calc(50% - 2.5rem);
    left: calc(50% - 2rem);
    z-index: 9999;
    border-radius: 0.5rem;
}
</style>