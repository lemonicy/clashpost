<script setup>
const props = defineProps({
    propertyKey: {
        type: Boolean,
        default: false
    },
    theadIcon: {
        type: Boolean,
        default: false
    },
    sidebarItemIcon: {
        type: Boolean,
        default: false
    }
});

let svgDomClass;
if (props.propertyKey) {
    svgDomClass = "cp-icon cp-icon-property-key";
} else if (props.theadIcon) {
    svgDomClass = "cp-icon cp-icon-thead-key";
} else if (props.sidebarItemIcon) {
    svgDomClass = "cp-icon cp-icon-sidebar-item";
} else {
    svgDomClass = "cp-icon";
}
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="svgDomClass" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
</template>