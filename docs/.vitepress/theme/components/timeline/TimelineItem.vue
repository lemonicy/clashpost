<script setup>
const props = defineProps({
    date: {
        type: String,
        default: ""
    },
    historyBottom: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="cp-timeline-list-item" v-if="props.historyBottom">
        <div class="cp-timeline-date">加载完毕</div>
        <div class="cp-timeline-content">
            网站记录的更新历史都在这里了，如想查看游戏的所有更新历史，请访问：
            <a href="/p/1384" target="_blank">部落冲突历年更新（导航帖）</a>。
        </div>
    </div>
    <div class="cp-timeline-list-item" v-else>
        <div class="cp-timeline-date">
            <time>{{ props.date }}</time>
        </div>
        <div class="cp-timeline-content">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/mixins.scss';

.cp-timeline-list-item {
    position: relative;
    list-style: none;
    margin: 0 0 1rem 0;
    padding: 0.5rem 1rem 0.75rem 1rem;
    border-radius: 0.5rem;
    border: var(--cp-border-light);
}

.cp-theme-dark .cp-timeline-list-item {
    border: var(--cp-border-dark);
}

@media (min-width: $cp-col-tablat-big) {
    .cp-timeline-list-item:nth-child(2n+1) {
        margin: 0 1rem 1rem 0;
    }

    .cp-timeline-list-item:nth-child(2n) {
        margin: 0 0 1rem 0;
    }
}

.cp-timeline-date {
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.cp-timeline-content ul {
    margin: 0 0 0rem 1rem;
}
</style>