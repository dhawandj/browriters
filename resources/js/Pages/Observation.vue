<script setup>
import BillEstimation from '@/Components/BillEstimation.vue';
import BooksBilling from '@/Components/BooksBilling.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head } from '@inertiajs/vue3';

const categoryId = 3; //record id
const book = 'observation'; //book for local storagekey
</script>
<template>
    <PrimaryLayout>
        <Head title="Observation" />

        <BooksBilling :category-id="categoryId" :book="book" />
        <BillEstimation :category-id="categoryId" :book="book" />
    </PrimaryLayout>
</template>
