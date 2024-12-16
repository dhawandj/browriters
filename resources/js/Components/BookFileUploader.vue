<script setup>
import { watchEffect } from 'vue';
import InputError from './InputError.vue';
import MainButton from './MainButton.vue';
import { ProgressBar } from 'primevue';
const props = defineProps(['book', 'form']);
defineEmits(['handleFileSelection', 'submit']);
// Watch for changes in `form.errors.myFiles`

</script>
<template>
    <div class="grid grid-cols-3 gap-2 p-2 text-textPrimary">
        <input
            @change="$emit('handleFileSelection', $event)"
            multiple
            type="file"
            :id="book.id"
            class="hidden"
        />
        <span class="col-span-3 rounded-sm font-semibold text-textPrimary"><span class="text-secondary"># </span>{{ book.name }} <span class="text-secondary text-sm ">pages:{{ book.pages }}</span></span>
        <!-- <div class="rounded-md  text-sm  text-secondary  p-2 text-center uppercase">
            pages:{{ book.pages }}
        </div> -->
        <label
            class="col-span-1 block border border-secondary  rounded-md bg-secondaryAlt p-2 text-center"
            :for="book.id"
            >choose</label
        >
        <!-- <div class="col-span-1 rounded-md bg-secondaryAlt p-2 text-center">
            dele all
        </div> -->
        <MainButton
            class="col-span-2 disabled:opacity-25"
            @click="$emit('submit')"
            :lable="`upload files`"
        />
        <InputError
            :message="form.errors?.myFiles"
            class="col-span-3 text-end"
        />
        <ProgressBar v-if="form.progress"  :value="form.progress?.percentage"> {{form.progress?.percentage }}/100 </ProgressBar>

    </div>
</template>
