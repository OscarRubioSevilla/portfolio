<script setup>

import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid'
import RMenu from './RMenue.vue';
import RIcons from './RIcons.vue';
const open = ref(false);


const openMenu = () => open.value = !open.value;

</script>
<template>
    <header class="relative xz" :class="{ 'menu-show': open }">
        <button class="fixed right-4 top-4 z-50 button" @click="openMenu">
            <Bars3Icon v-if="!open" class="h-8 w-8 text-white" />
            <XMarkIcon v-else class="h-8 w-8 text-white" />
        </button>
        <r-menu />
        <r-icons />
    </header>
</template>

<style>

.button {
    background: #6034b7;
    border-radius: 50%;
    padding: 0.5em;
}

</style>