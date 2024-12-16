<script setup>
import { Link } from '@inertiajs/vue3';

defineProps(['lable', 'href']);
</script>
<template>
    <Link
        class="rounded-md bg-secondaryAlt  p-2 text-xs text-secondary transition-all duration-300 hover:bg-textPrimary hover:text-secondaryAlt xs:text-sm"
        :href="href ?? '/'"
        as="button"
    >
        {{ lable ?? 'no name' }}
    </Link>
</template>
