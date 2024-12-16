<script setup>
import PrimaryLink from './PrimaryLink.vue';
</script>
<template>
    <div class="space-y-3">
        <p class="font-semibold text-textPrimary">record-writing</p>
        <div class="grid grid-cols-2 gap-2 text-center">
            <PrimaryLink />
            <PrimaryLink class="text-yellow-500" :href="route('record')"  lable="only ₹6/page" />
            <PrimaryLink  class="col-span-2" lable="check estimation" />
        </div>
    </div>
</template>
