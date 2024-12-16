<script setup>
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { useFormatDate } from '../helpers';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import NoDataMessage from '@/Components/NoDataMessage.vue';

defineProps(['orders', 'count', 'currentStatus']);
const formatDate = useFormatDate();
</script>

<template>
    <PrimaryLayout>
        <Head title="admin" />
        <div class="space-y-3">

            <p class="font-semibold text-textPrimary">admin-dashboard</p>
            <div class="grid grid-cols-2 gap-2 text-center">
                <PrimaryLink href="/admin/pickup" :lable="`pickups: ${count.pickup}`" />
                <PrimaryLink href="/admin/write" :lable="`write: ${count.write}`" />
                <PrimaryLink href="/admin/writing" :lable="`writing: ${count.writing}`" />
                <PrimaryLink href="/admin/delivery" :lable="`delivery: ${count.delivery}`" />
            </div>
        </div>

        <div class="space-y-2">
            <h1 class="">{{ currentStatus }} List</h1>
            <NoDataMessage v-if="!orders.length" msg="no records"  />
            <Link
                class="block list-none rounded-md bg-secondaryAlt p-3"
                v-for="order in orders"
                :href="route('admin.order.show', { order: order })"
            >
                <p class="flex justify-between">
                    user:{{ order.user_id }} <span>#{{ order.id }}</span>
                </p>
                <p class="flex justify-between text-sm text-secondary">
                    <span>{{ formatDate(order.created_at) }}</span>
                    <span>Rs:{{ order.amount }}</span>
                </p>
            </Link>
        </div>
    </PrimaryLayout>
</template>
