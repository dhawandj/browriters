<script setup lang="ts">

import { Link } from '@inertiajs/vue3';
const props = defineProps(['oldOrders']);

</script>

<template>
        <div class="space-y-3">
            <p class="font-semibold text-textPrimary">Previous Orders</p>
            <div v-for="order in oldOrders"  class=" rounded-md bg-secondaryAlt p-2 space-y-2">
                <div class="grid grid-cols-2 gap-1">
                   <div class="p-1   text-sm overflow-hidden text-secondary font-semibold ">
                    <p >books: <span class="text-textPrimary font-normal">{{ order.books.length }}</span></p>
                    <p >date: <span class="text-textPrimary font-normal">{{ order.date }}</span></p>
                    <!-- <p >Cost:<span class="text-textPrimary font-normal"> $500 </span></p> -->
                   </div>
                   <Link :href="route('order',{order:order})"  class="border-l-4 text-yellow-500  border-secondary grid place-content-center  p-1">see</Link>
                </div>
            </div>
        </div>
</template>