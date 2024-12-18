<script setup>
import VueFilePond, { setOptions } from 'vue-filepond';
import { router } from '@inertiajs/vue3';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import { ref } from 'vue';

const props = defineProps(['book_id', 'files']);

const FilePond = VueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview,
);
// files->file->url
const files = ref(
    props.files.map((file) => ({
        source: file.name,
        options: {
            type: 'local',
        },


    })),
);
function h_deleteFile(errors, file) {
    console.log(file.filename, file, file.source);
    router.delete(route('delete', { fileName: file.filename }), {
        preserveScroll: true,
    });
}

function h_processFile(error,file) {
    console.log('error',error,'file=',file);
    
}
function h_fineshe() {
    console.log('finshed');
}
</script>
<template>
    <FilePond
        name="file"
        v-model:files="files"
        itemInsertInterval="5000"
        maxParallelUploads="5"
        :allowReorder="true"
        @addfile="h_processFile"
        @processfiles="h_fineshe"
        :server="{
            url: '',
            process: {
                url: route('upload', { id: book_id }),
                method: 'Post',
                // onload: (response) => console.log(response,'dj') ,
                // onerror: (response) => response.data,
                // ondata: (formData) => {
                //     formData.append('Hello', 'World');
                //     return formData;
                // },
            },
            load: '/mj/',
            revert: null,
        }"
        allow-multiple="true"
        accepted-file-types="image/*, image/png, application/pdf"
        @removefile="h_deleteFile"
    />
</template>
<style>
/* bordered drop area */
.filepond--panel-root {
    background-color: transparent;
    /* border: 2px solid#646669; */
}
/* the text color of the drop label*/
.filepond--drop-label {
    color: #d1d0c5;
}

/* underline color for "Browse" button */
.filepond--label-action {
    text-decoration-color: #aaa;
}
.filepond--credits {
    display: none;
}
</style>
