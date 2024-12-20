<script setup>
defineProps(['lable']);
</script>
<template>
    <button
        class="rounded-md flex  justify-center gap-3 items-center  bg-yellow-500 px-3 py-2 text-xs text-secondaryAlt transition-all duration-300 hover:bg-textPrimary hover:text-secondaryAlt xs:text-sm"
        
    >
        <i class="pi pi-money-bill" />
        {{ lable ?? 'no name' }}
    </button>
</template>
