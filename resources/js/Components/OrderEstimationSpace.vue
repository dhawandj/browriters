<script setup>
import { Drawer } from 'primevue';
import { ref } from 'vue';
import OrderEstimation from './OrderEstimation.vue';
defineProps(['books']);

const visibleBottom = ref(false);
</script>
<template>
    <button
        @click="visibleBottom = true"
        class="rounded-md col-span-1  bg-secondaryAlt p-2 text-center text-sm font-semibold text-yellow-500"
    >
        <i class="pi pi-box" /> Order Details
    </button>
    <Drawer
        v-model:visible="visibleBottom"
        header="Order Details!!"
        position="bottom"
        style="height: auto"
    >
        <OrderEstimation :books="books" />
    </Drawer>
</template>
