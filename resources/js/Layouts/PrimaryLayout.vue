<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import MyTransition from '@/Components/MyTransition.vue';

const page = usePage();
const showBack = computed(() => !page.url.startsWith('/home1'));
function back() {
    window.history.back();
}
</script>
<template>
    <!-- <MyTransition> -->
        <section class="">
            <nav class="sticky top-0 flex z-50  justify-between bg-background p-3">
                <span v-if="showBack" class=""  @click="back"><i class="pi pi-arrow-left p-1"/> </span>
                <Link :href="route('home')"> <span class="font-semibold text-yellow-400">bro</span>writers.com </Link>
            </nav>
            <main class="h-svh space-y-10 overflow-y-aut p-3">
                <slot />
            </main>
        </section>
    <!-- </MyTransition> -->
</template>
