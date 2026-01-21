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
    <svg xmlns="http://www.w3.org/2000/svg" :class="svgDomClass" fill="none" viewBox="0 0 24 24" width="24" height="24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
</template>