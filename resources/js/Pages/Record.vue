<script setup>
import BillEstimation from '@/Components/BillEstimation.vue';
import BooksBilling from '@/Components/BooksBilling.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head } from '@inertiajs/vue3';

const categoryId = 2; //record id
const book = 'record'; //book for local storagekey
</script>
<template>
    <PrimaryLayout>
        <Head title="Record" />

        <BooksBilling :category-id="categoryId" :book="book" />
        <BillEstimation :category-id="categoryId" :book="book" />
    </PrimaryLayout>
</template>
