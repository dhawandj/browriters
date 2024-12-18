<script setup>
import { Tag } from 'primevue';
import PrimaryLink from './PrimaryLink.vue';
import { Link } from '@inertiajs/vue3';
</script>
<template>
    <div class="space-y-3 ">
        <p class="text-end ">  <i class="pi pi-user  "/></p>
        <div class="p-10" >

            <p class="text-center text-xl"> <span class="text-primary font-bold">bro</span>writers.com </p>
            <p class="text-xs text-center text-secondary">since 2025</p>
        </div>
         <p class="text-center text-sm">Useful things for students</p>
         <p class="text-center"> <i class="pi pi-bolt text-primary "/></p>
        <div class="grid grid-cols-1 gap-2 text-cente max-w-md mx-auto">
            <!-- <PrimaryLink :href="route('assignment')" lable="try me" /> -->
            <!-- <PrimaryLink class="text-yellow-500" :href="route('assignment')"  lable="only ₹5/page" /> -->
            <!-- <PrimaryLink  class="col-span-2" :href="route('assignment')" lable="both front and back ₹5/page" /> -->
            <div class="p-2 rounded-md text-textPrimary  bg-secondaryAlt  space-y-4 capitalize  ">
                <Link :href="route('assignment')" >
                <div class="flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer">
                    <i class="pi pi-book text-primary "/>
                    <div class="">Assignment writing
                        <p class="text-xs text-end font-semibold text-secondary">only ₹5/page</p>
                    </div>
                    <i class="pi pi-angle-right text-secondary "/>
                </div>
                </Link>
                <div class="flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer">
                    <i class="pi pi-book text-primary "/>
                    <div class="" >Record writing
                        <Tag severity="secondary" class="text-xs "  style="color: #E2B714;"  value="New"></Tag>
                        <p class="text-xs text-end font-semibold text-secondary">only ₹5/page</p>
                    </div>
                    <i class="pi pi-angle-right text-secondary "/>
                </div>
                
                <div class="flex p-2 justify-between items-center border-b border-background hover:bg-background transition duration-300 rounded-lg cursor-pointer">
                    <i class="pi pi-book text-primary "/>
                    <div>Observation writing
                        <p class="text-xs text-end font-semibold text-secondary">only ₹5/page</p>
                    </div>
                    <i class="pi pi-angle-right text-secondary "/>
                </div>
               
            </div>
                
        </div>
    </div>
</template>
