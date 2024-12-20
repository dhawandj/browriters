<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="flex p-4  min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-background"
    >
        <div>
            <Link href="/">
                <div class="p-10">
                    <p class="text-center text-xl">
                        <span class="font-bold text-primary">bro</span
                        >writers.com
                    </p>
                    <p class="text-center text-xs text-secondary">since 2025</p>
                </div>
            </Link>
            <a :href="route('google.login')">

                <p class="p-2 bg-secondaryAlt text-center rounded-lg">
                    <i class="pi pi-google mr-3"/>
                    Google signin
                </p>
            </a>
        </div>

        <div
            class="mt-6 w-full overflow-hidden rounded-lg  bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-secondaryAlt"
        >
            <slot />
        </div>
    </div>
</template>
