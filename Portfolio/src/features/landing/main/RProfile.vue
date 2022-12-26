<script setup>
import { PROJECTS } from '@/consts/projects';
import RProject from './RProject.vue';
</script>
<template>
    <section id="profile" class="grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-24">
        <img class="w-3/4 lg:w-100 mx-auto animation-spacecraft" src="/public/landing/profile.png" alt="">
        <div class="lg:px-8 flex flex-col justify-center mb-8 lg:mb-0 gap-4 items-center">
            <div class="w-full">
                <h1 class="lg:text-3xl text-2xl text-black-rock mt-4 lg:mt-0">
                    ¡Hey! Mi nombre es Oscar Rubio
                </h1>
            </div>
            <p class="text-justify text-lg leading-7 text-[#f9f9f9]">
                Desarrollador apasionado, que ama 
                la codificación, el código abierto y la plataforma web. 
                En mi tiempo libre puedes encontrarme tocando la guitarra 
                y aprendiendo cualquier habilidad nueva que me divierta 
                y aporte a lo que tanto me emociona, los retos.
            </p>
        </div>
    </section>
    <section >
        <img src="/landing/swish_solid.png" class="w-100" alt="">
        <div class="bg-secondary px-8 lg:px-24">
            <div class="pt-8 pb-16  text-center flex justify-center items-center">
                <h2 class="lg:text-3xl text-2xl text-white">¡Me encanta colaborar con pequeñas empresas!</h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
.animation-spacecraft {
    animation-name: animate;
    -webkit-animation-name: animate;

    animation-duration: 4s;
    -webkit-animation-duration: 4s;

    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
}

@keyframes animate {
    0% {
        transform: rotate(0);
    }
    50% {
        transform: rotate(15deg);
    }
    100% {
        transform: rotate(0);
    }
}

</style>