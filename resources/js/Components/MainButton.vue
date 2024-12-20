<script setup>
defineProps(['lable']);
</script>
<template>
    <button
        class="rounded-md bg-yellow-500 px-3 py-2 text-xs text-secondaryAlt transition-all duration-300 hover:bg-textPrimary hover:text-secondaryAlt xs:text-sm"
        
    >
        {{ lable ?? 'no name' }}
    </button>
</template>
