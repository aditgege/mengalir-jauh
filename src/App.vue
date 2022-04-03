<template>
  <div id="app" class="bg-primary-dark">
  <TransitionRoot
    :show="loading.isLoading"
    enter="transition-opacity ease-linear duration-200"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity ease-linear duration-200"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <MainLoading/>
  </TransitionRoot>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainLoading from '@/components/Loading/MainLoading.vue'
import { useLoadingStore } from './store';
import { TransitionRoot } from '@headlessui/vue'

const loading = useLoadingStore();

</script>

<style>

</style>
