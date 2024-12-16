<script setup>
import PrimaryLink from './PrimaryLink.vue';
</script>
<template>
    <div class="space-y-3">
        <p class="font- text-textPrimary capitalize">assignment-writing</p>
        <div class="grid grid-cols-1 gap-2 text-cente">
            <!-- <PrimaryLink :href="route('assignment')" lable="try me" /> -->
            <!-- <PrimaryLink class="text-yellow-500" :href="route('assignment')"  lable="only ₹5/page" /> -->
            <!-- <PrimaryLink  class="col-span-2" :href="route('assignment')" lable="both front and back ₹5/page" /> -->
            <div class="p-2 rounded-md  bg-secondaryAlt  ">
                <p></p>
                <p class="text-sm text-textPrimary "><i class="pi pi-file-edit text-2xl text-primary" />only ₹5/page[both front & back]</p>
            </div>
                
        </div>
    </div>
</template>
