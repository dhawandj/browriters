<script setup>
import { ref } from 'vue';
import FilePond from './FilePond.vue';
const toggle = ref(false);
defineProps(['book']);
</script>
<template>
    <div class="border-b border-background">
        <div @click="toggle = !toggle" class="flex items-center justify-center gap-2 rounded-lg bg-secondaryAlt px-2">
            <div class="bordr inline-block p-2"><i class="pi pi-book text-yellow-500" /></div>
            <p class="borde flex flex-1 justify-between border-secondary py-2">
                <span>{{ book.name }}<p v-if="toggle" class="touch-pan-up text-xs uppercase text-secondary">Pages:{{ book.pages }}</p></span>
                <span>{{ toggle ? '-' : '+' }}</span>
            </p>
        </div>
        <!-- conatiner -->
        <Transition name="slide-fade">
            <div v-show="toggle" class="borde">
                <!-- <p class=" p-2 rounded-md text-center bg-secondary ">selecl files her</p> -->
                <FilePond  :book_id="book.id" :files="book.files"/>
            </div>
        </Transition>
    </div>
</template>
<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
