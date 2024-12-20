<script setup>
import { ref } from 'vue';

const  toggle = ref(true)
const services = [
    {
        header: 'Our Trust',
        details: [
            'No cheating or fraud',
            '100% transparency in the process',
            'Money-back guarantee if not satisfied',
        ],
    },
    {
        header: 'Quality Assurance',
        details: [
            'Books are handled with utmost care',
            'No damage or exposure to water or liquids during the process',
            'Neat and legible handwriting ensured',
        ],
    },
    {
        header: 'Minimum Orders',
        details: [
            'Minimum order value: ₹150',
            'Additional ₹50 service charge for all orders',
        ],
    },
    {
        header: 'Delivery Terms',
        details: [
            'Free pickup and delivery within Bangalore city limits',
            'Same-day delivery for urgent orders (conditions apply)',
            'Orders outside Bangalore may incur additional charges',
        ],
    },
    {
        header: 'Pricing and Charges',
        details: [
            'Pricing depends on the number of pages and complexity',
            'Special discounts available for bulk orders',
            'Only ₹50 service charge for orders within Bangalore',
        ],
    },
    {
        header: 'Service Rules',
        details: [
            'All orders must be pre-paid at the time of pickup',
            'Cancellations are allowed within 2 hours of order confirmation',
            'Any disputes or issues should be reported within 24 hours of delivery',
        ],
    },
];
</script>

<template>
    <div class="space-y-3">
        <p class=" font-semibold text-textPrimary flex justify-between">
              <span>Service Details</span> <span class="mr-2 text-primary" @click="toggle = !toggle"> {{toggle?'x':'+'  }}</span>  </p>
        <div v-show="toggle"  class="rounded-lg bg-secondaryAlt p-4 text-sm shadow-sm">
            <section v-for="(s, index) in services" :key="index" class="mb-4">
                <header class="mb-2 font-medium text-textPrimary">
                    - {{ s.header }}
                </header>
                <main class="pl-4 text-secondary">
                    <ul class="list-disc">
                        <li
                            v-for="(detail, i) in s.details"
                            :key="i"
                            class="mb-1"
                        >
                            {{ detail }}
                        </li>
                    </ul>
                </main>
            </section>
        </div>
    </div>
</template>
