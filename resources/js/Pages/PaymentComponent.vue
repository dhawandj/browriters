<script setup>
import MainButton from '@/Components/MainButton.vue';
import axios from 'axios';
import { router, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import MySpinner from '@/Components/MySpinner.vue';

const props = defineProps(['totalAmount', 'booksData']);
const page = usePage();

const minimumAmount = 200;
const isLoading = ref(false);
/**
 * Create a Razorpay order by sending a request to the backend.
 * @returns {Object} - Contains orderId, razorpayKey, and amount
 */
const createOrder = async () => {
    isLoading.value = true; // Show loading overlay
    console.log('amount', props.totalAmount);
    try {
        const response = await axios.post('/razorpay/create-order', {
            amount: props.totalAmount, // Amount in INR
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.error || 'Failed to create order',
        );
    }
};

/**
 * Verify the Razorpay payment by sending payment details to the backend.
 * @param {Object} paymentResponse - The response from Razorpay containing payment details.
 */
const verifyPayment = async (paymentResponse) => {
    try {
        const response = await axios.post('/razorpay/verify-payment', {
            razorpay_payment_id: paymentResponse.razorpay_payment_id,
            razorpay_order_id: paymentResponse.razorpay_order_id,
            razorpay_signature: paymentResponse.razorpay_signature,
            // books: JSON.parse(localStorage.getItem('books')),
            books: props.booksData,
        });
        // alert(response.data.message);
        // todo::
        //after payment success
        //save the local data to db
        // clear local db
        console.log('user', page.props.auth.user);
        console.log(response);
        localStorage.clear();
        router.get(
            route('order', {
                order: response.data.paymentDetails.order,
            }),
        );
        console.log('after router fineshed');
    } catch (error) {
        isLoading.value = false;

        alert('Payment verification failed!', error);
    } finally {
        isLoading.value = false;
        console.log('finally');
    }
};

/**
 * Initiate the Razorpay payment process.
 */
const initiatePayment = async () => {
    //check ueser is logged in
    const user = usePage().props.auth.user;
    if (user === null) {
        return router.get(route('login'), { pervious: 'bar' });
    }
    //minimu payment more than 200rs
    if (props.totalAmount<minimumAmount) {
        console.log(props.totalAmount);
        alert('minimum amount 200rs ')
        return
    }
    try {
        // Step 1: Create Order
        const { orderId, razorpayKey, amount } = await createOrder();
        // Step 2: Configure Razorpay options
        const options = {
            key: razorpayKey,
            amount: amount, // Convert to paise
            currency: 'INR',
            name: 'browriters.com',
            description: 'Test Transaction',
            order_id: orderId,
            handler: (paymentResponse) => verifyPayment(paymentResponse),
            theme: {
                color: '#f2c627',
            },
            modal: {
                ondismiss: function () {
                    console.log('closed modal');
                    isLoading.value = false
                },
            },
        };

        // Step 3: Open Razorpay modal
        const rzp = new Razorpay(options);
        rzp.open();
    } catch (error) {
        isLoading.value = false;
        alert('Error initiating payment: ' + error.message);
    }
};
</script>

<template>
    <!-- Loading overlay -->
   <MySpinner v-if="isLoading" />

    <!-- Main Button -->
    <MainButton
        class="w-full"
        @click="initiatePayment"
        :lable="`make payment ₹${totalAmount}`"
    />
</template>
