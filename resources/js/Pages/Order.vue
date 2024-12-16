<script setup>
import OrderDetails from '@/Components/OrderDetails.vue';
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';

import { Head } from '@inertiajs/vue3';

import { ref } from 'vue';

import FileUploadSpaceV1 from '@/Components/FileUploadSpaceV1.vue';
import { FloatLabel, IconField, InputIcon, InputText } from 'primevue';
import OrderDeliveryDetailsSpace from '@/Components/OrderDeliveryDetailsSpace.vue';
import OrderDetailsCard from '@/Components/OrderDetailsCard.vue';
import OrderEstimationSpace from '@/Components/OrderEstimationSpace.vue';
import OrderTrackingSpace from '@/Components/OrderTrackingSpace.vue';

defineProps(['order']);

const toggle = ref(false);
</script>
<template>
    <PrimaryLayout>
        <Head title="order" />

        <!-- <OrderDetails :order="order" /> -->
        <OrderDetailsCard :order="order" />

        <div class="grid grid-cols-2 gap-3">
            <OrderDeliveryDetailsSpace :order="order" />
            <OrderEstimationSpace :books="order.books" />
            <OrderTrackingSpace />
        </div>

        <!-- <Stepper :order="order" /> -->

        <!-- <FileUploadSpace
            v-for="book in order.books"
            :book="book"
            :key="book.id"
        /> -->

        <!-- <PickupAddress  key="p" :order="order" />
        <DeliveryAddress key="d"  :order="order" />
        <ContactDetails :order="order" /> -->
        <FileUploadSpaceV1 :books="order.books" />
    </PrimaryLayout>
</template>
