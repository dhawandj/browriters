<script setup>
import { Badge, OverlayBadge, Tag } from 'primevue';
import PrimaryLink from './PrimaryLink.vue';
import { Link } from '@inertiajs/vue3';
</script>
<template>
    <div class="space-y-3">
        <!-- <p class="font-semibold text-textPrimary">record-writing</p> -->
        <!-- <div class="grid grid-cols-2 gap-2 text-center">
            <PrimaryLink />
            <PrimaryLink class="text-yellow-500" :href="route('record')"  lable="only ₹6/page" />
            <PrimaryLink  class="col-span-2" lable="check estimation" />
        </div> -->
        <div class="text-center">
            <!-- <p class="bg-secondaryAlt p-2  inline-flex  justify-center gap-3 items-center rounded-lg  text-center text-secondary"> -->
            <!-- <i class="pi pi-box" /> -->
            <!-- <span class="text-primary">myOrders</span> -->
            <Link :href="route('orders')">
                <Tag
                    value="show  my orders "
                    icon="pi pi-box"
                    severity="secondary"
                    class="text-lg"
                    style="color: #e2b714"
                ></Tag
            ></Link>
            <!-- </p> -->
        </div>

        <div class="border-t p-3 border-secondaryAlt">
            <div class=" text-secondary">
                <div>
                    <p class="text-xs">
                        <strong>© browriters.com. 2025</strong> 
                        <!-- <p class="text-xs">- Your Trusted Partner for   Writing Services</p> -->
                        <p class="text-xs">- support@browriters.com</p>
                        <p class="text-xs">- now in Banglore</p>
                        <p class="text-xs">- Privacy & Terms</p>
                        <p class="text-xs">- FAQs</p>
                        <p class="text-xs">- partner</p>
                        
                    </p>
                </div>

                <div class="space-x-4 text-end mt-2">
                    <i class="pi pi-facebook cursor-pointer hover:text-textPrimary"/>
                    <i class="pi pi-telegram" />
                    <i class="pi pi-instagram" />
                    <i class="pi pi-youtube" />
                    <i class="pi pi-twitter" />
                </div>
            </div>
        </div>
    </div>
</template>
