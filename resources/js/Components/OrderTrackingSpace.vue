<script setup>

import { ref } from 'vue';
import { Drawer } from 'primevue';
defineProps(['books']);

const visibleBottom = ref(false);
</script>
<template>
    <button @click="visibleBottom = true"
        class="col-span-1 rounded-md bg-secondaryAlt p-2 text-center text-sm font-semibold text-yellow-500"
    >
        <i class="pi pi-clock" /> Tracking
    </button>
    <Drawer
        v-model:visible="visibleBottom"
        header="Order Tracking!!"
        position="bottom"
        style="height: auto"
    >
    <div class="borde flex justify-start space-x-6 ">
    <!-- Circles and Borders -->
    <div class="flex flex-col items-center">
        <!-- Circle 1 -->
        <span class="border border-secondaryAlt  p-2 rounded-full flex items-center justify-center w-8 h-8 bg-yellow-500 text-secondaryAlt"><i class="pi pi-check " style="font-size: 1rem; font-weight: bold;"></i></span>
        <p class="border-l-2 h-14"></p>
        <!-- Circle 2 -->
        <span class="border p-2 rounded-full flex items-center justify-center w-8 h-8 bg-gray-300 text-black">2</span>
        <p class="border-l-2 h-14"></p>
        <!-- Circle 3 -->
        <span class="border p-2 rounded-full flex items-center justify-center w-8 h-8 bg-gray-300 text-black">3</span>
        <p class="border-l-2 h-14"></p>
        <!-- Circle 4 -->
        <span class="border p-2 rounded-full flex items-center justify-center w-8 h-8 bg-gray-300 text-black">4</span>
        <p class="border-l-2 h-14"></p>
        <!-- Circle 5 -->
        <span class="border p-2 rounded-full flex items-center justify-center w-8 h-8 bg-gray-300 text-black">5</span>
    </div>

    <!-- Status Texts -->
    <div class="flex flex-col justify-start">
         <span class="h-8 flex items-center text">Order Placed </span>
        <div class="h-14 text-sm text-textPrimary">Estimated pickup in 24 Nov 2023 <p> 9.00am to 8.00pm</p></div>
        <span class="h-8 flex items-center text-sm">Book picked</span>
        <div class="h-14"></div>
        <span class="h-8 flex items-center text-sm">Writing</span>
        <div class="h-14"></div>
        <span class="h-8 flex items-center text-sm">Out for Delivery</span>
        <div class="h-14"></div>
        <span class="h-8 flex items-center text-sm">Delivered</span>
    </div>
</div>

    </Drawer>
</template>
