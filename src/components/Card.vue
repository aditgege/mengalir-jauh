<template>
    <div class="rounded-md bg-white shadow-md p-6 flex cursor-pointer" :class="`${className} ${hoverStyle}`" :style="currentStyle">
        <div class="flex my-uto h-full items-center" >
            <slot name="icon"></slot>
        </div>
        <div class="flex justify-end items-center w-full">
            <h1 class="text-primary-dark font-bold text-2xl">Rp.{{  props.amount }}</h1>
        </div>
    </div>
</template>
<script setup>
 import { defineProps, computed } from 'vue';
 const props = defineProps({
    height: {
        type: [String, Number],
        default: 'auto'
    },
    width: {
        type: [String, Number],
        default: 'auto'
    },
    className: {
        type: String,
        default: ''
    },
    amount: {
        type: Number,
        default: 0  
    },
 })
 const currentHeight = computed(() => {
    return props.height === 'auto' ? 'auto' : `${props.height}px`
 })

 const currentWidth = computed(() => {
    if (props.width === 'full') {
        return '100%'
    }else {
        return props.width === 'auto' ? 'auto' : `${props.width}px`
    }
 })

const currentStyle = computed(() => {
    return {
        height: currentHeight.value,
        width: currentWidth.value
    }
})

const hoverStyle = computed(() => {
    return 'hover:bg-gray-200'
})
</script>
