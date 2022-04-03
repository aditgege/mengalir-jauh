<template>
    <div>
        <span class="mb-3 text-black text-lg" :class="isFocus ? 'text-primary-dark': 'text-primary-lighter'">{{ label }}</span>
        <input 
            :value="inputValue" 
            :type="type" 
            @focus="isFocus = !isFocus"
            @blur="isFocus = !isFocus"
            class="mt-1 focus:ring-primary-dark focus:border-primary-dark block w-full shadow-sm sm:text-s border-2 px-3  h-10 border-primary-lighter rounded-md" :placeholder="placeholder">
        <div v-if="error">
            <p class="text-red-500 text-xs italic">{{ error }}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';

const error = ref(null)
const isFocus = ref(false)

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    label: {
        type: String,
        default: 'Label'
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
    get() {
        console.log(props.modelValue)
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    }
})

</script>