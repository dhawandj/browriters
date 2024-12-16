<script setup>
import { ref, computed } from 'vue';
const props = defineProps(['books']);

// const books = ref(JSON.parse(localStorage.getItem('assignment')) || []);
//  const books =  useBook('assignment', 1);
// const books = useBook(props.book, props.categoryId);
const books = ref(props.books);

// Constants for charges
const GST_RATE = 0.18; // 18%
const SERVICE_CHARGE = 50;
const DELIVERY_CHARGE = 0;

// Computed property to calculate the total cost of all books
const subTotal = computed(() => {
    return books.value.reduce((sum, book) => sum + book.pages * 5, 0);
});

// Computed property to calculate GST
const gst = computed(() => {
    return subTotal.value * GST_RATE;
});

// Computed property to calculate the Grand Total
const grandTotal = computed(() => {
    return (
        subTotal.value +
        gst.value +
        SERVICE_CHARGE +
        DELIVERY_CHARGE
    ).toFixed(2);
});

// Utility function for rounding to 2 decimal places
function roundToTwoDecimals(value) {
    return parseFloat(value.toFixed(2));
    // return value;
}
</script>

<template>
    <!-- <pre>{{ books }}</pre> -->
    <div class="space-y-3">
        <p class="font-semibold text-textPrimary">Bill-estimation</p>
        <div class="grid grid-cols-1 gap-2 p-1">
            <div class="space-y-1 rounded-md bg-secondaryAlt px-3 py-2 text-xs text-secondary transition-all duration-300 xs:text-sm">
                <table class="min-w-full">
                    <thead>
                        <tr class="text-sm text-textPrimary">
                            <th class="text-start">Books</th>
                            <th class="">Pages</th>
                            <th class=""></th>
                            <th class="text-xs">₹5/page</th>
                            <th class=""></th>
                            <th class="">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="book in books"
                            :key="book.name"
                            class="border-t border-secondaryAlt text-xs text-primary "
                        >
                            <td class="p-2 ">{{ book.name }}</td>
                            <td class="p-2">{{ book.pages }}</td>
                            <td class="p-2">x</td>
                            <td class="p-2">₹5</td>
                            <td class="p-2">=</td>
                            <td class="p-2">₹{{ book.pages * 5 }}</td>
                        </tr>
                    </tbody>
                    <tfoot class="text-textPrimary">
                        <tr class="border-t border-secondaryAlt text-xs">
                            <td colspan="5" class="p-2 text-end">Subtotal</td>
                            <td class="p-2">₹{{ subTotal }}</td>
                        </tr>
                        <tr class="border-t border-secondaryAlt text-xs">
                            <td colspan="5" class="p-2 text-end">GST (18%)</td>
                            <td class="p-2">₹{{ roundToTwoDecimals(gst) }}</td>
                        </tr>
                        <tr class="border-t border-secondaryAlt text-xs">
                            <td colspan="5" class="p-1.5 text-end">
                                Service Charge
                            </td>
                            <td class="p-1.5">₹{{ SERVICE_CHARGE }}</td>
                        </tr>
                        <tr class="border-t border-secondaryAlt text-xs">
                            <td colspan="5" class="p-1.5 text-end ">
                                Delivery Charge
                            </td>
                            <td class="p-1.5">₹{{ DELIVERY_CHARGE }}</td>
                        </tr>
                        <tr class="border-t border-secondaryAlt text-xs">
                            <td colspan="5" class="p-1.5 text-end font-bold ">
                                Grand Total
                            </td>
                            <td class="p-1.5 font-bold text-green-500">₹{{ grandTotal }}</td>
                        </tr>
                    </tfoot>
                </table>
                <!-- something  -->
        </div>
        <p>2025 also who will write assigniment and records bro </p>
</div>
</div>
</template>
