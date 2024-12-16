<script setup>
import LatestOrders from '@/Components/LatestOrders.vue';
import OldOrders from '@/Components/OldOrders.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
const props = defineProps(['oldOrders','latestOrders']);
</script>

<template>
    <PrimaryLayout>
        <Head title="orders" />

        <LatestOrders :latest-orders="latestOrders" />
        <OldOrders  :oldOrders="oldOrders" />
      
    </PrimaryLayout>
</template>
