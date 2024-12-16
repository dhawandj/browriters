<script setup>
import PrimaryLayout from '@/Layouts/PrimaryLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { statusUpdate, useFormatDate } from '../helpers';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import OrderDetails from '@/Components/OrderDetails.vue';
import NoDataMessage from '@/Components/NoDataMessage.vue';
import { Image } from 'primevue';
import FileList from '@/Components/FileList.vue';
const props = defineProps(['order']);
const formatDate = useFormatDate();
const { lable, order_status } = statusUpdate(props.order.order_status);
</script>

<template>
    <PrimaryLayout>
        <Head title="admin" />

        <OrderDetails :order="order" />
        <div class="space-y-3">
            <p class="font-semibold text-textPrimary">
                status update [{{ order.order_status }}]
            </p>
            <div class="grid grid-cols-2 gap-2 text-center">
                <PrimaryLink
                    method="patch"
                    class="col-span-2 text-primary"
                    :href="
                        route('update.order.status', {
                            status: order_status,
                            order: order,
                        })
                    "
                    :lable="' ▶︎ ' + lable+' ◀ '"
                />
            </div>
        </div>

        <div class="space-y-3">
            <p class="font-semibold text-textPrimary">pickup address</p>
            <div class="grid grid-cols-2 gap-2 text-center">
                <NoDataMessage v-if="!order.d_address"  class="col-span-2" />

                <p class="col-span-2 text-start text-textPrimary rounded-md bg-secondaryAlt p-3 ">
                    {{ order.p_address }}
                </p>
            </div>
        </div>
        <div class="space-y-3">
            <p class="font-semibold text-textPrimary">delivery address</p>
            <div class="grid grid-cols-2 gap-2 text-center">
                <NoDataMessage v-if="!order.d_address" class="col-span-2" />
                <p class="col-span-2 text-start text-textPrimary rounded-md bg-secondaryAlt p-3 ">
                    {{ order.d_address }}
                </p>
            </div>
        </div>
        <div class="space-y-3">
            <p class="font-semibold text-textPrimary">contact details</p>
            <div class="grid grid-cols-2 gap-2 text-center">
                <PrimaryLink :lable="order.contact??'no phone 1'" />
                <PrimaryLink :lable="order.phone??'no phone 2'" />
            </div>
        </div>
        <div class="space-y-3 ">
            <p class="font-semibold text-textPrimary">books&files</p>
            <div v-for="book in order.books"  class="grid grid-cols-2 gap-2 text-center">
                <p class=" col-span-2  text-center text-textPrimary rounded-md bg-secondaryAlt p-3 ">{{ book.name }} : {{book.pages}} pages  </p>
                <p class=" text-start text-textPrimary rounded-md bg-secondaryAlt p-3 ">see {{ book.files.length }} files</p>
                 <a class="text-start text-textPrimary rounded-md bg-secondaryAlt p-3"   v-if="book.files.length>0"  :href="route('download-zip',{book:book})">downlaod-all</a>
                <div class="col-span-2 ">
                    <FileList :files="book.files"  />
                </div>
            </div>
        </div>
    </PrimaryLayout>
</template>
