<script setup>
import AssignmentSpace from '@/Components/AssignmentSpace.vue';
import DashboardSpace from '@/Components/DashboardSpace.vue';
import HeroSpace from '@/Components/HeroSpace.vue';  
import RecordSpace from '@/Components/RecordSpace.vue';
import ServiceDetails from '@/Components/ServiceDetails.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>
<template>
    <PrimaryLayout>
        <Head title="home" />

        <!-- <object data="/storage/myFiles/FDdXbPVSD863eEnScAaWMDUBx95qH1KOo0Hw3alx.pdf" class="w-svw"></object> -->
        <!-- <HeroSpace /> -->
        <AssignmentSpace />
        <!-- <DashboardSpace /> -->
        <RecordSpace />
        <!-- <ServiceDetails /> -->
    </PrimaryLayout>
</template>

