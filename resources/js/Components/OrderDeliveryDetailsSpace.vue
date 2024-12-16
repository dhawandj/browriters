<script setup>
import { useForm } from '@inertiajs/vue3';
import { Drawer, FloatLabel, IconField, InputIcon, InputText } from 'primevue';
import { ref } from 'vue';
import InputError from './InputError.vue';
const props = defineProps(['order']);
const visibleBottom = ref(!props.order?.phone);

const form = useForm({
    pickupAddress: props.order?.p_address ?? '',
    deliveryAddress: props.order?.d_address ?? '',
    pickupPincode: props.order?.p_pincode ?? '',
    phone: props.order?.phone ?? '',
});

function submit() {
    form.post(route('delivery.store', { order: props.order }), {
        onSuccess: () => {
            visibleBottom.value = false;
        },
    });
}
</script>
<template>
    <button
        @click="visibleBottom = true"
        class="rounded-md col-span-2  bg-yellow-500 p-2 text-center text-sm font-semibold text-secondaryAlt"
    >
        <i class="pi pi-truck" /> Delivery Details
    </button>
    <Drawer
        v-model:visible="visibleBottom"
        header="hello bro!!"
        position="bottom"
        style="height: auto"
    >
        <div class="mx-auto max-w-xl space-y-3">
            <p>Fill this to continue bro..</p>
            <FloatLabel variant="on" class="customLabel">
                <IconField>
                    <InputText
                        id="p_address"
                        class="customLabel w-full"
                        v-model="form.pickupAddress"
                        autocomplete="off"
                    />
                    <InputIcon class="pi pi-map-marker" />
                </IconField>
                <label for="p_address">pickup address</label>
            </FloatLabel>
            <InputError :message="form.errors.pickupAddress" class="" />
            <FloatLabel variant="on" class="customLabel">
                <IconField>
                    <InputText
                        id="d_address"
                        class="customLabel w-full"
                        v-model="form.deliveryAddress"
                        autocomplete="off"
                    />
                    <InputIcon class="pi pi-map-marker" />
                </IconField>
                <label for="d_address">Drop address</label>
            </FloatLabel>
            <InputError :message="form.errors.deliveryAddress" class="" />
            <FloatLabel variant="on" class="customLabel">
                <IconField>
                    <InputText
                        id="p_pincode"
                        type="number"
                        class="customLabel w-full"
                        v-model="form.pickupPincode"
                        autocomplete="off"
                    />
                    <InputIcon class="pi pi-thumbtack" />
                </IconField>
                <label for="p_pincode">pickup Pincode</label>
            </FloatLabel>
            <InputError :message="form.errors.pickupPincode" class="" />
            <FloatLabel variant="on" class="customLabel">
                <IconField>
                    <InputText
                        id="phone"
                        type="number"
                        class="customLabel w-full"
                        v-model="form.phone"
                        autocomplete="off"
                    />
                    <InputIcon class="pi pi-phone" />
                </IconField>
                <label for="phone">Phone Number</label>
            </FloatLabel>
            <InputError :message="form.errors.phone" class="" />

            <button
                @click="submit"
                :disabled="form.processing"
                class="w-full rounded-md bg-primary p-2 text-secondaryAlt"
            >
                submit
            </button>
            <div>
                <p>Note*</p>
                <li class="text-center text-sm capitalize text-textPrimary">
                    click on location icon to auto fetch the address
                </li>
            </div>
        </div>
    </Drawer>
</template>

<style>
.customLabel {
    --p-inputtext-background: #2c2e31;

    --p-floatlabel-focus-color: #d1d0c5;
    --p-floatlabel-active-color: #d1d0c5;
    --p-floatlabel-on-active-background: #323437;
    --p-inputtext-focus-border-color: #e2b714;
}
</style>
