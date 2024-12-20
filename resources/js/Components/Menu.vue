<template>
    <div class="card flex justify-end">
        <i @click="toggle" class="pi pi-cog cursor-pointer" />

        <Menu
            class="customMenu"
            ref="menu"
            id="overlay_menu"
            :model="items"
            :popup="true"
        />
    </div>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';
import { Button, Menu } from 'primevue';
import { ref } from 'vue';

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                command: () => {
                    router.get(route('profile.edit'));
                },
            },
            {
                label: 'myOrders',
                icon: 'pi pi-box',
                command: () => {
                    router.get(route('orders'));
                },
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                    router.post(route('logout'));
                },
            },
        ],
    },
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<style>
.customMenu {
    --p-menu-background: #323437;
    /* --p-content-background: red; */
    /* --p-menu-submenu-label-background: red; */
    /* --p-menu-color:Red; */
}
</style>
