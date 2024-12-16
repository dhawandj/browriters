<script setup>
import BillEstimation from '@/Components/BillEstimation.vue';
import BooksBilling from '@/Components/BooksBilling.vue';
import ServiceDetails from '@/Components/ServiceDetails.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head } from '@inertiajs/vue3';

const categoryId = 1; //assigment id
const book = 'assignment'; //assigment id
</script>
<template>
    <PrimaryLayout>
        <Head title="Assignment" />

        <BooksBilling :category-id="categoryId" :book="book" />
        <BillEstimation :category-id="categoryId" :book="book" />
        <ServiceDetails />
    </PrimaryLayout>
</template>
