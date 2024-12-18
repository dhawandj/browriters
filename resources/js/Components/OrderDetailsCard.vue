<script setup>
import { useFormatDate } from '@/Pages/helpers';

defineProps(['order'])
const formatDate = useFormatDate()
</script>
<template>
    <div class="flex h-[25vh] flex-col justify-between rounded-lg border border-slate-700 bg-gradient-to-r from-secondaryAlt to-secondaryAlt p-2 shadow-xl">
        <!-- top -->
        <div class="borde flex justify-between p-2">
            <span><i class="pi pi-book" /> {{ order.books[0].category.name }}</span>
            <span class="text-center">
                    <p class="text-xs">{{ formatDate(order.created_at) }}</p>
                    <!-- <span class="text-sm font-semibold"> <i class="pi pi-box" /> {{ order.id }}</span> -->
            </span>
        </div>
        <!-- bottom  -->
        <div class="borde flex items-center justify-between p-2">
            <span class="text-sm font-semibold">
                <span class="text-sm font-semibold"> <i class="pi pi-box" /> {{ order.id }}</span>

                <p class="text-sm font-semibold">Rs:₹{{ order.amount }}</p>
                <p class="text-sm font-semibold">Books:{{ order.books.length }}</p>
            </span>
            <div>
                    <button class="borde rounded bg-secondaryAlt p-1 text-xs capitalize"> show status</button>
                    <p class="text-center text-xs capitalize text-green-500"> ✔ confirmed</p>
            </div>
        </div>
    </div>
</template>
