<script setup>
import VueFilePond, { setOptions } from 'vue-filepond';
// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import styles
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const FilePond = VueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
);

const files = ref([
    {
        // source: 'storage/myFiles/1VMlWGm5mSRpRvLyQUazBAfMKLZNkWrTTUtHktqU.jpg',
        source: 'storage/myFiles/MwfFl2GGltCmVbPhbZ7oeClm1NEpan3eRqEDfQZ7.webp',
        options: {
            type: 'local',
        },
    },
]);

const form = useForm({
    book_id: 1,
    myFiles: [],
});
function h_load(e) {
    return console.log('h_load', e);
}
function h_revert(e) {
    return console.log('h_revert', e);
}
function h_remove(e,f) {
    return console.log('h_remove', e,f);
}
</script>
<template>
    <div class="mx-auto border p-1">
        <FilePond
            name="file"
            v-model:files="files"
            :server="{
                url: '',
                process: {
                    url: route('upload', { id: 10 }),
                    method: 'Post',
                },
                load: './',

            }"
            allow-multiple="true"
        />
    </div>
</template>
<style>
/* bordered drop area */
/* .filepond--panel-root {
    background-color: transparent;
    border: 2px solid #0c3b91;
} */
</style>
