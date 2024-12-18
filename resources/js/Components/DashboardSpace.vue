<script setup>
import { onMounted } from 'vue';
import PrimaryLink from './PrimaryLink.vue';


</script>

<template>
  <!-- Apply a specific ID for targeting Vanta.js background animation -->
  <div  class="space-y-3">
    <p class="font-semibold text-textPrimary">dashboard</p>
    <div class="grid grid-cols-2 gap-2 text-center">
      <PrimaryLink :href="route('orders')" lable="myOrders" />
      <PrimaryLink lable="profile" />
    </div>
  </div>
</template>



