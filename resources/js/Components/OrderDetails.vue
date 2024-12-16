<script setup>
import { computed } from 'vue';

 const props =  defineProps(['order']);

// Computed property for formatted date
const formattedDate = computed(() => {
    const date = new Date(props.order.created_at);
    return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
});
</script>
<template>
         <div class="space-y-3">
            <p class="font-semibold text-textPrimary">Orders-details</p>
            <div   class=" rounded-md bg-secondaryAlt p-2 space-y-2">
                <div class="flex items-center gap-2">
                    <div class="grid text-center text-sm text-textPrimary  h-20 w-36 place-content-center rounded-md border border-secondary p-1">
                        <p>#{{ order.id }}</p>
                        <p>orderId</p>
                    </div>
                    <!-- aside -->
                    <div class="w-full overflow-hidden p-1 text-sm text-secondary font-semibold">
                        <p >Date: <span class="text-textPrimary text-xs  font-normal">{{ formattedDate }}</span></p>
                        <p >No books: <span class="text-textPrimary font-normal">{{ order.books.length }}</span></p>
                        <p >Total Cost:<span class="text-textPrimary font-normal">₹{{ order.amount }}</span></p>
                        <p >Order: <span class="text-green-700">conformed</span></p>
                        <p >Category: <span class="text-textPrimary font-normal uppercase">{{ order.books[0].category.name }}</span></p>
                    </div>
                </div>
            </div>
        </div>
</template>