<!-- SFC file -->
<template>
  <div class="flex flex-col">
    <span class="mb-2 text-lg text-primary-lighter">Tanggal</span>
    <litepie-datepicker
      :pickerValue="modelValue"
      as-single
      placeholder="DD/MM/YYYY"
      v-slot="{ value, placeholder, clear }"
      @update:modelValue="onInput"
    >
      <div class="flex">
        <div class="flex-1">
          <button
            type="button"
            class="w-full px-2 bg-gray-50 text-primary-light hover:text-gray-900 leading-6 py-2 sm:px-6 border-2 border-primary-lighter rounded-md flex items-left justify-left space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition ease-out duration-300"
          >
            <span class="text-primary-lighter text-left">
              {{ value || placeholder }}
            </span>
          </button>
        </div>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="ml-4 block px-3 flex-none bg-indigo-50 text-primary-dark hover:text-primary-lighter leading-6 py-2 sm:px-6 border-2 border-primary-lighter rounded-md flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-300 focus:outline-none transition ease-out duration-300"
            @click="clear"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </litepie-datepicker>
  </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';
    import LitepieDatepicker from 'litepie-datepicker';

    // eslint-disable-next-line no-unused-vars
    const props = defineProps({
      modelValue: {
        type: String,
        default: '',
      },
    })

    const emit = defineEmits(['update:modelValue'])

    function onInput(value) 
    { 
      emit('update:modelValue', value[0])
    }
      
</script>