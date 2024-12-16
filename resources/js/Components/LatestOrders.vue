<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps(['latestOrders']);

</script>
<template>
          <div class="space-y-3">
            <p class="font-semibold text-textPrimary">Orders</p>
            <div v-for="order in latestOrders"  class=" rounded-md bg-secondaryAlt p-2 space-y-2">
                <div class="flex items-center gap-2">
                    <div class="grid text-center text-sm text-textPrimary  h-20 w-36 place-content-center rounded-md border border-secondary p-1">
                        <p>#{{ order.id }}</p>
                        <p>orderId</p>
                    </div>
                    <!-- aside -->
                    <div class="w-full overflow-hidden p-1 text-sm text-secondary font-semibold">
                        <p >No books: <span class="text-textPrimary font-normal">{{order.books.length}}</span></p>
                        <p >Total Cost:<span class="text-textPrimary font-normal">₹{{order.amount}} </span></p>
                        <p >date: <span class="text-textPrimary font-normal">{{order.date}}</span></p>
                        <p >order: <span class="text-green-700">conformed</span></p>
                    </div>
                </div>
                <Link class="w-full block  bg-background p-2  text-center text-yellow-500" :href="route('order',{order:order})">see more </Link>  
            </div>
        </div>
</template>