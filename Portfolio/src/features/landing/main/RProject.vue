<script setup>

import { defineProps } from 'vue';
import { getImageUrl } from '@/utils/url';

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    linkName: {
        type: String,
        required: false,
        default: 'Ir a website'
    }
});


</script>
<template>
    <div class="mt-8">
        <div class="bg-white rounded-lg shadow-2xl flex flex-col lg:flex-row">
            <img :src="getImageUrl(`landing/portfolio/${project.image}`)" 
                :alt="project.name" 
                class="lg:w-1/3 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" 
            />
            <div class="px-16 p-y6 flex flex-col justify-center gap-2 mt-4 lg:mt-0">
                <h2 class="font-bold text-center text-xl lg:text-3xl mb-2 text-black-rock">{{ project.name }}</h2>
                <div class="text-xs text-center lg:text-left text-primary">
                    {{ project.tags.join(' ') }}
                </div>
            </div>
            <div class="px-4 py-4 lg:px-16 lg:p-y6 text-center flex flex-col justify-center gap-4">
                <a 
                    class="hover:scale-105 hover:transition-transform" 
                    v-if="project.link"
                    target="_blank" 
                    :href="project.link">{{ linkName }}</a>
                <a v-if="project.repo" class="hover:scale-105 hover:transition-transform" 
                    target="_blank" 
                    :href="project.repo"> Ver repo</a>
            </div>
        </div>
    </div>
</template>