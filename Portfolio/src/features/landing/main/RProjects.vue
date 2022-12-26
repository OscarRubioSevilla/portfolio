<script setup>
import { PROJECTS } from '@/consts/projects';
import RProject from './RProject.vue';
</script>

<template>
    <section class="bg-white p-8 lg:p-24" id="portfolio">
        <r-project v-for="project, index of PROJECTS" :key="index" :project="project" />
    </section>
</template>