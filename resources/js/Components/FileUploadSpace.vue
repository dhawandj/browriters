<script setup>
import BookFileUploader from '@/Components/BookFileUploader.vue';
import FileList from '@/Components/FileList.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
const props = defineProps(['book']); //book->files

const fileList = ref([]);

const form = useForm({
    book_id: props.book?.id,
    myFiles: [],
});

function handleFileSelection(event) {
    const selectedFiles = event.target.files;
    console.log(selectedFiles);
    // adding files to form obj
    form.myFiles = Array.from(selectedFiles);
    fileList.value = []; // Clear the current file list
    Array.from(selectedFiles).forEach((file) => {
        const reader = new FileReader();
        const isImageFile = file.type.startsWith('image/'); // Check if the file is an image

        if (isImageFile) {
            // Read and load image files
            reader.onload = (e) => {
                fileList.value.push({
                    name: file.name,
                    size: file.size,
                    status: 'pending',
                    url: e.target.result,
                    isImage: true,
                });
            };
            reader.readAsDataURL(file);
        } else {
            // Handle non-image files with a placeholder
            fileList.value.push({
                name: file.name,
                size: `${(file.size / 1024).toFixed(2)} Kb`,
                status: 'pending',
                url: null,
                isImage: false,
            });
        }
    });
}

function submit() {
    form.post('/upload', {
        onSuccess: (e) => {
            console.log('success', e);
            fileList.value = null;
            form.reset();
        },
        preserveScroll: true,
    });
}

function deleteFile(id) {
    form.delete(route('delete-file', { id: id }), {
        onSuccess: (e) => {
            console.log('success', e);
            fileList.value = null;
            form.reset();
        },
        preserveScroll: true,
    });
}
</script>

<template>
    <div class="space-y-3">
        <p class="font-bold text-textPrimary">upload-files</p>
        <div class="space-y-3">
            <BookFileUploader
                :book
                :form
                @submit="submit"
                @handleFileSelection="handleFileSelection"
            />
            <!-- loop files --> 

            <FileList v-if="fileList?.length" :files="fileList" />
            <FileList :files="book.files" @delFile="deleteFile" />
        </div>
    </div>
</template>
