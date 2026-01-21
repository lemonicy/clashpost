<script setup>
import Success from "@/components/icon/reminding/Success.vue";
import Warning from "@/components/icon/reminding/Warning.vue";
import Error from "@/components/icon/reminding/Error.vue";
import Info from "@/components/icon/reminding/Info.vue";

const props = defineProps({
    type: {
        type: String,
        default: ""
    }
});

let calloutClass = "cp-callout cp-callout-";
switch (props.type) {
    case "success":
        calloutClass += "success";
        break;
    case "warning":
        calloutClass += "warning";
        break;
    case "error":
        calloutClass += "error";
        break;
    default:
        calloutClass += "info";
}
</script>

<template>
    <div :class="calloutClass">
        <div class="cp-callout-icon" v-if="props.type === 'success'">
            <Success />
        </div>
        <div class="cp-callout-icon" v-else-if="props.type === 'warning'">
            <Warning />
        </div>
        <div class="cp-callout-icon" v-else-if="props.type === 'error'">
            <Error />
        </div>
        <div class="cp-callout-icon" v-else="props.type === 'info'">
            <Info />
        </div>
        <div class="cp-callout-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.cp-callout {
    display: flex;
    padding: 0.5rem 0.75rem;
    margin: 1rem 0;
    border-radius: 0.5rem;

    a {
        /* 提示框里的链接加上下划线，方便视力障碍人士认出链接 */
        color: rgb(0, 95, 204);
        text-decoration: underline;
        border-radius: 0.25rem;
        padding: 0.25rem 0.125rem;
    }

    a:hover, a:focus {
        outline: 0.1rem solid var(--cp-primary-light);
    }
}

.cp-theme-dark .cp-callout {
    a {
        color: rgb(135, 206, 235);

        &:focus {
            outline: 0.1rem solid var(--cp-primary-dark);
        }
    }
}

/* 提示信息的基本样式 */
.cp-callout-icon {
    font-size: 1.125rem;
    margin-right: 0.25rem;
    transform: translateY(0.15rem);

    .cp-icon {
        cursor: unset;
    }
}

.cp-callout-content {
    color: var(--cp-info-text-light);

    p, div, ul, li {
        color: var(--cp-info-text-light);
    }

    p, div, ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    li {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
    }
}

.cp-theme-dark .cp-callout-content {
    color: var(--cp-info-text-dark);
    
    p, div, ul, li {
        color: var(--cp-info-text-dark);
    }
}

/* 不同类型的提示信息样式 */
.cp-callout-info {
    background-color: var(--cp-info-bg-light);
    border: var(--cp-info-border-light);
}

.cp-theme-dark .cp-callout-info {
    background-color: var(--cp-info-bg-dark);
    border: var(--cp-info-border-dark);
}

.cp-callout-success {
    background-color: var(--cp-success-bg-light);
    border: var(--cp-success-border-light);

    .cp-callout-content {
        color: var(--cp-success-text-light);

        p, div, li {
            color: var(--cp-success-text-light);
        }
    }
}

.cp-theme-dark .cp-callout-success {
    background-color: var(--cp-success-bg-dark);
    border: var(--cp-success-border-dark);

    .cp-callout-content {
        color: var(--cp-success-text-dark);

        p, div, li {
            color: var(--cp-success-text-dark);
        }
    }
}

.cp-callout-warning {
    background-color: var(--cp-warning-bg-light);
    border: var(--cp-warning-border-light);

    .cp-callout-content {
        color: var(--cp-warning-text-light);

        p, div, li {
            color: var(--cp-warning-text-light);
        }
    }
}

.cp-theme-dark .cp-callout-warning {
    background-color: var(--cp-warning-bg-dark);
    border: var(--cp-warning-border-dark);

    .cp-callout-content {
        color: var(--cp-warning-text-dark);

        p, div, li {
            color: var(--cp-warning-text-dark);
        }
    }
}

.cp-callout-error {
    background-color: var(--cp-error-bg-light);
    border: var(--cp-error-border-light);

    .cp-callout-content {
        color: var(--cp-error-text-light);

        p, div, li {
            color: var(--cp-error-text-light);
        }
    }
}

.cp-theme-dark .cp-callout-error {
    background-color: var(--cp-error-bg-dark);
    border: var(--cp-error-border-dark);

    .cp-callout-content {
        color: var(--cp-error-text-dark);

        p, div, li {
            color: var(--cp-error-text-dark);
        }
    }
}

/* 攻略区文章的额外标记 */
.cp-callout.cp-callout-post-mark {
    transform: translateY(-0.5rem);
}

/* 旧版浏览器的提示信息 */
.cp-callout.cp-callout-old-browser {
    margin-bottom: -0.5rem;
}
</style>