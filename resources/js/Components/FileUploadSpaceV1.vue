<script setup>
import BookFileUploderV1 from './BookFileUploderV1.vue';
defineProps(['books']);
</script>
<template>
    <div class="space-y-3">
        <p class="font-bold uppercase text-textPrimary">upload-files</p>
        <div class="borde rounded-md bg-secondaryAlt p-1 text-textPrimary">
            <BookFileUploderV1 v-for="book in books" :book="book" :key="book.id" />
        </div>
    </div>
</template>
