<script setup>
defineProps(['msg'])
</script>
<template>
    <p class="rounded-md bg-secondaryAlt p-3 text-center text-blue-500">
        {{ msg??'no data found!' }}
    </p>
</template>
