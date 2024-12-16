<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import InputError from './InputError.vue';
import { ref } from 'vue';
import axios from 'axios';
const props = defineProps(['order']);

const address = ref('');
const error = ref('');
const loading = ref();

const form = useForm({
    area: props.order?.d_area ?? '',      
    pincode: props.order?.d_pincode ?? '', 
    address: props.order?.d_address ?? '', 
    lat: props.order?.d_lat ?? '',        
    lon: props.order?.d_lon ?? '',        
});

const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
        error.value = 'Geolocation is not supported by your browser.';
        return;
    }
    loading.value = true;
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;

            try {
                // Fetch address from Nominatim
                const response = await axios.get(
                    'https://nominatim.openstreetmap.org/reverse',
                    {
                        params: {
                            format: 'json',
                            lat: latitude,
                            lon: longitude,
                            addressdetails: 1,
                        },
                    },
                );
                console.log(response.data);
                if (response.data && response.data.display_name) {
                    form.address = response.data.display_name;
                    form.area = response.data.address.suburb;
                    form.pincode = response.data.address.postcode;
                    form.lat = response.data.lat;
                    form.lon = response.data.lon;
                    //do something
                } else {
                    error.value = 'Address not found.';
                }
            } catch (err) {
                error.value = 'Failed to fetch address. Please try again.';
                console.error(err);
            } finally {
                loading.value = false;
            }
        },
        (err) => {
            error.value = `Error: ${err.message}`;
        },
    );
};

function storeDeliveryAddress() {
        // todo
    if (!navigator.geolocation) {
        error.value = 'Geolocation is not supported by your browser.';
        return;
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        form.lat = latitude.toString();
        form.lon = longitude.toString();
    });

    form.post(
        route('delivery.store', {
            order: props.order,
        }),
        {
            preserveScroll: true,
            onSuccess: () => console.log('store delivery addres success'),
        },
    );
}
</script>

<template>
    <div class="space-y-3  border-t-4 pt-5 border-secondaryAlt rounded-sm ">
        <p class="font-bold text-textPrimary uppercase">❖ delivery-address</p>
        <p class="text-center text-xs text-yellow-700">
            Auto-fetch may sometimes give incorrect addresses. Please verify
            them.
        </p>

        <div class="grid grid-cols-2 gap-3">
            <div class="">
                <label class="text-sm font-semibold text-secondary" for="d-area"
                    >Area</label
                >
                <input
                    class="w-full rounded-md border-secondary bg-secondaryAlt text-textPrimary shadow-sm focus:border-yellow-500 focus:ring-yellow-600"
                    type="text"
                    v-model="form.area"
                    id="d-area"
                    placeholder="area"
                    autocomplete="off"
                />
                <InputError class="mt-1" :message="form.errors.area" />
            </div>
            <div class=" ">
                <label class="text-sm font-semibold text-secondary" for="d-pin"
                    >Pincode</label
                >

                <input
                    class="w-full rounded-md border-secondary bg-secondaryAlt text-textPrimary shadow-sm focus:border-yellow-500 focus:ring-yellow-600"
                    type="number"
                    v-model="form.pincode"
                    name=""
                    id="d-pin"
                    placeholder="Ex. 56003"
                    autocomplete="off"
                />
                <InputError class="mt-1" :message="form.errors.pincode" />
            </div>
            <div class="relative col-span-2">
                <label
                    class="text-sm font-semibold text-secondary"
                    for="d-address"
                    >Full Address</label
                >
                <p
                    v-if="loading"
                    class="absolute left-[15vh] top-[9vh] bg-secondaryAlt text-sm text-yellow-400"
                >
                    loading...
                </p>
                <textarea
                    class="w-full rounded-md border-secondary bg-secondaryAlt text-textPrimary shadow-sm focus:border-yellow-500 focus:ring-yellow-600"
                    id="d-address"
                    v-model="form.address"
                    rows="4"
                    autocomplete="off"
                ></textarea>
                <InputError class="mt-1" :message="form.errors.address" />
            </div>
            <button class="rounded-md border border-secondary text-secondary  p-2" @click="getCurrentLocation">
                auto Fetch
            </button>
            <button @click="storeDeliveryAddress" class="rounded-md border border-secondary text-yellow-500  p-2">
                save
            </button>
            <InputError
                class="col-span-2"
                :message="form.isDirty ? 'please save it!' : ''"
            />
        </div>
    </div>
</template>
