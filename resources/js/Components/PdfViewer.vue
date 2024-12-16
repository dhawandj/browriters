<script setup>
import PDF from 'pdf-vue3';
defineProps(['src']);
</script>

<template>
    <div class="border">
        <PDF class="border"   :src="'/storage/' + src" />
    </div>
    <!-- <PDF :src="BASE64" /> -->
    <!-- <PDF :src="Uint8Array" /> -->
</template>
