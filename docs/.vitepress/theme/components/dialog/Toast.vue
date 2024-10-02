<script>
/**
 * 根据提示信息的类型给出 div 的 class 字符串
 * 
 * @param {String} type 提示信息的类型，含 info、warning、error 三种
 * @returns div 的 class 字符串
 */
 function getToastClassFromType(type) {
    let returnedClass = "cp-toast";
    switch (type) {
        case "success":
            returnedClass += " cp-toast-success";
            break;
        case "warning":
            returnedClass += " cp-toast-warning";
            break;
        case "error":
            returnedClass += " cp-toast-error";
            break;
        default:
            returnedClass += " cp-toast-info";
    }

    return returnedClass;
}

/**
 * 生成一个提示信息
 * 
 * @param {String} text 提示信息的文字
 * @param {Object} options 设置项
 */
export function generateToast(text, options = {}) {
    const blocking = options.blocking ?? false;
    const type = options.type ?? "info";
    const showDuration = options.showDuration ?? 5000;
    const position = options.position ?? "bottom";

    // 如果设置为阻塞的 Toast，当页面中有其他 Toast 时，则不再生成
    if (blocking) return;

    // 生成 toast 的 DOM 元素
    // 如果已有 container，则重新生成时直接在已有的 container 上加新的 toast
    let toastContainer = document.querySelector(".cp-toast-container");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.setAttribute("class", "cp-toast-container");
        document.body.appendChild(toastContainer);
        // 加个定时器，让动画播放完
        setTimeout(() => {
            toastContainer.classList.add("cp-toast-show");
        }, 10);
    }
    const toastDiv = document.createElement("div");
    toastDiv.innerHTML = text;
    const toastClass = getToastClassFromType(type, position);
    toastDiv.setAttribute("class", toastClass);
    toastContainer.appendChild(toastDiv);

    // 给不同位置的 div 添加 class
    if (position === "top") {
        toastContainer.classList.add("cp-fixed-top");
    } else {
        toastContainer.classList.add("cp-fixed-bottom");
    }

    // 给 container 设置高度
    const containerChildCount = toastContainer.childElementCount;
    const containerHeightRem = containerChildCount * 3.5;
    toastContainer.style.height =  containerHeightRem + "rem";

    setTimeout(() => {
        setTimeout(() => {
            const containerChildCount = toastContainer.childElementCount;
            const containerHeightRem = (containerChildCount - 1) * 3.5;
            toastContainer.style.height =  containerHeightRem + "rem";
            toastContainer.removeChild(toastDiv);
            // 如果 toastContainer 没有子元素了，则移除整个 container
            if (containerChildCount - 1 === 0) {
                toastContainer.classList.remove("cp-toast-show");
                // 为了动画播放完毕，需要延迟一段时间后移除
                setTimeout(() => {
                    document.body.removeChild(toastContainer);
                }, 300);
            }
        }, showDuration);
    });
}
</script>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: ""
    }
});

const toastClass = getToastClassFromType(props.type);
</script>

<template>
    <div class="cp-toast-container">
        <div :class="toastClass"></div>
    </div>
</template>

<style lang="scss">
.cp-toast-container {
    width: 100%;
    height: 0;
    display: flex; /* 展示出来时为 flex */
    flex-direction: column;
    align-items: center; /* 让 div 居中 */
    position: fixed;
    top: unset;
    bottom: -4rem;
    z-index: 9999;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.cp-toast-container.cp-fixed-top {
    flex-direction: column-reverse;
    top: -4rem;
    bottom: unset;
}

.cp-toast-container.cp-toast-show {
    bottom: 1.5rem;
}

.cp-toast-container.cp-fixed-top.cp-toast-show {
    top: 4.5rem;
}

.cp-toast {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    padding: 0.375rem 0.5rem;
    border-radius: 0.5rem;
    position: relative;
    /* top 和 bottom 实际上是由 js 设置的，-100vh 是为了防止动画播放完毕后 div 走出屏幕 */
    top: unset;
    bottom: 0;
}

.cp-toast-container.cp-fixed-top .cp-toast {
    top: 0;
    bottom: unset;
}

.cp-toast-info {
    color: var(--cp-info-text-light);
    background-color: var(--cp-info-bg-light);
    border: var(--cp-info-border-light);
}

.cp-theme-dark .cp-toast-info {
    color: var(--cp-info-text-dark);
    background-color: var(--cp-info-bg-dark);
    border: var(--cp-info-border-dark);
}

.cp-toast-success {
    color: var(--cp-success-text-light);
    background-color: var(--cp-success-bg-light);
    border: var(--cp-success-border-light);
}

.cp-theme-dark .cp-toast-success {
    color: var(--cp-success-text-dark);
    background-color: var(--cp-success-bg-dark);
    border: var(--cp-success-border-dark);
}

.cp-toast-warning {
    color: var(--cp-warning-text-light);
    background-color: var(--cp-warning-bg-light);
    border: var(--cp-warning-border-light);
}

.cp-theme-dark .cp-toast-warning {
    color: var(--cp-warning-text-dark);
    background-color: var(--cp-warning-bg-dark);
    border: var(--cp-warning-border-dark);
}

.cp-toast-error {
    color: var(--cp-error-text-light);
    background-color: var(--cp-error-bg-light);
    border: var(--cp-error-border-light);
}

.cp-theme-dark .cp-toast-error {
    color: var(--cp-error-text-dark);
    background-color: var(--cp-error-bg-dark);
    border: var(--cp-error-border-dark);
}
</style>