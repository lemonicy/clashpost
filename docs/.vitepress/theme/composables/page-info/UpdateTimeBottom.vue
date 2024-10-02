<script setup>
import Time from '@/components/Time.vue';

const props = defineProps({
    lastUpdated: {
        type: [String, Number],
        default: 0
    }
});
</script>

<template>
    <div id="cp-update-time-bottom" v-if="props.lastUpdated">
        <Time :datetime="props.lastUpdated" />更新
    </div>
</template>

<style>
#cp-update-time-bottom {
    display: flex;
    justify-content: flex-end;
    font-size: 0.9375rem;
    margin-top: 1rem;
    color: var(--cp-grey-text-light);
    white-space: pre;
    
    * {
        color: var(--cp-grey-text-light);
    }

    time {
        display: inline-block;
    }
}

.cp-theme-dark #cp-update-time-bottom {
    color: var(--cp-grey-text-light);
    
    * {
        color: var(--cp-grey-text-light);
    }
}
</style>