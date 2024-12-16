<script setup>
import { Image } from 'primevue';
import Modal from './Modal.vue';
import { nextTick, ref } from 'vue';
import PdfViewer from './PdfViewer.vue';
import NoDataMessage from './NoDataMessage.vue';

 const props =  defineProps(['files']);
 defineEmits(['delFile'])

 const toggle = ref(false)
 const activeUrl = ref('/myFiles/FDdXbPVSD863eEnScAaWMDUBx95qH1KOo0Hw3alx.pdf')

 console.log(props.files);
function url(file) {
    if (file.isImage) {
        return file.url
    }
    return`/storage/${file.url}`
}

function isPreviewableFile(url) {
    if (url) {
         const disallowedExtensions = ['.pdf', '.zip'];
    return !disallowedExtensions.some(ext => url.toLowerCase().includes(ext));
}
    }

function openFileModal(url) {
    toggle.value =true
    // console.log(url);
    nextTick(()=>activeUrl.value = url)
    
}    

function closeFileModal() {
    toggle.value =false
    activeUrl.value = null
}
</script>
<template>
    <NoDataMessage v-if="files.length<=0" msg="no files uploaded"  />
    <div class="max-h-[30vh] space-y-2  overflow-y-auto  p-2">
        <div v-for="file in files"   class="relative flex items-center gap-4 rounded-md border border-secondary bg-secondaryAlt p-2">
            <!-- Display image or file placeholder -->
            <div class="flex h-10 w-10 items-center justify-center rounded bg-gray-200">
                <!-- <img
                    v-if="file.url"
                    :src="url(file)"
                    class="h-full w-full rounded object-cover "
                /> -->
                <Image  v-if="isPreviewableFile(file.url)" :src="url(file)" alt="Image"  preview />

                <span @click="openFileModal(file.url)"  v-else class="text-sm font-bold text-gray-500"> 📄 </span>
            </div>
            <!-- File details -->
            <div class="font-medium dark:text-white" >
                <div class="max-h-6 max-w-[20vh] overflow-hidden text-textPrimary">{{ file.name }}</div>
                <div  class="flex w-[30vh] justify-between text-sm text-gray-400">
                    <span >Size: {{ `${(file.size / 1024).toFixed(2)} Kb`}}</span>
                </div>
                <!-- <p class="text-red-500 text-xs">file type not allowed </p> -->
            </div>
            <span v-if="file?.status"  class="absolute right-[2vh] top-[2.5vh] text-orange-400">{{ file?.status}}</span>
            <span v-if="!file?.status" @click="$emit('delFile',file.id)"   class="absolute text-lg  right-[2vh] top-[2vh] text-red-400  px-2">&times;</span>
        </div>
        <Modal :show="toggle" @close="closeFileModal">
            <div class="max-h-[90vh] overscroll-y-auto">
                <p @click="closeFileModal"  class="text-end text-red-500 mb-3  bg-secondaryAlt">close &times;</p>
                <PdfViewer v-if="activeUrl"  :src="activeUrl"   />
            </div>
        </Modal>

    </div>
</template>
