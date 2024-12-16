<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import InputError from './InputError.vue';
import { ref } from 'vue';
const props = defineProps(['order']);

const form = useForm({
    name: props.order?.name ?? '',      
    phone: props.order?.phone ?? '',        
});


function storeContactDetails() {


    form.post(
        route('contact.store', {
            order: props.order,
        }),
        {
            preserveScroll: true,
            onSuccess: () => console.log('store pickup success'),
        },
    );
}
</script>

<template>
    <div class="space-y-3  border-t-4 pt-5 border-secondaryAlt rounded-sm ">
        <p class="font-bold text-textPrimary uppercase">❖ contact-details</p>
        <div class="grid grid-cols-2 gap-3">
            <div class="">
                <label class="text-sm font-semibold text-secondary" for="name"
                    >name</label
                >
                <input
                    class="w-full rounded-md border-secondary bg-secondaryAlt text-textPrimary shadow-sm focus:border-yellow-500 focus:ring-yellow-600"
                    type="text"
                    v-model="form.name"
                    id="name"
                    placeholder="bro.."
                    autocomplete="off"
                />
                <InputError class="mt-1" :message="form.errors.name" />
            </div>
            <div class=" ">
                <label class="text-sm font-semibold text-secondary" for="phone"
                    >Phone</label
                >

                <input
                    class="w-full rounded-md border-secondary bg-secondaryAlt text-textPrimary shadow-sm focus:border-yellow-500 focus:ring-yellow-600"
                    type="number"
                    v-model="form.phone"
                    name=""
                    id="phone"
                    placeholder="Ex. 90023..."
                    autocomplete="off"
                />
                <InputError class="mt-1" :message="form.errors.phone" />
            </div>
            <button @click="storeContactDetails" class="col-span-2 rounded-md border border-secondary text-yellow-500  p-2">
                save
            </button>
            <InputError
                class="col-span-2"
                :message="form.isDirty ? 'please save it!' : ''"
            />
        </div>
    </div>
</template>
