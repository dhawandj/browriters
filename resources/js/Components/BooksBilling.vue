<script setup>
import { computed, onMounted, ref } from 'vue';
import PrimaryLink from './PrimaryLink.vue';
import { Toast, useToast } from 'primevue';
import { useBook } from '@/Pages/useBook';
import MainButton from './MainButton.vue';

const props = defineProps(['categoryId','book']);

const toast = useToast();
const toastBreakpoints = {
    '960px': { width: '50%', left: '25%' }, // For screens 960px and above
    '640px': { width: '90%', left: '5%' }, // For screens between 640px and 960px
    '0px': { width: '90%', left: '5%' }, // For screens below 640px
};
const message = ' first check estimation after payment, you can  upload files ';
const show = () => {
    toast.add({
        severity: 'warn',
        summary: 'Info',
        detail: message,
        life: 3000,
    });
};

const books = useBook(props.book, props.categoryId);
const length = computed(() => books.value.length + 1);

function addBook() {
    books.value.push({ name: `book ${length.value}`, pages: 1, categoryId: props.categoryId });
}

function deleteBook() {
    if (books.value.length > 0) {
        books.value.pop();
    } else {
        console.log('No books to delete');
    }
}
</script>

<template>
    <div class="space-y-3">
        <p class="font-semibold text-textPrimary">Add books</p>
        <div class="borde grid grid-cols-2 gap-2 p-1">
            <Toast :breakpoints="toastBreakpoints" />
            <header
                class="borde col-span-2 grid grid-cols-4 gap-1 text-center capitalize text-secondary"
            >
                <p class="rounded-md p-1 font-semibold">books</p>
                <p class="rounded-md p-1 font-semibold">pages</p>
                <p class="col-span-2 rounded-md p-1 font-semibold">
                    upload files
                </p>
            </header>
            <section
                v-for="book in books"
                :key="book.name"
                class="borde col-span-2 grid grid-cols-4 gap-2 text-center text-textPrimary"
            >
                <p class="rounded-sm bg-secondaryAlt p-1">{{ book.name}}</p>
                <input
                    class="rounded-sm border-none bg-secondaryAlt p-1 text-center"
                    type="number"
                    :id="book.name"
                    v-model.number="book.pages"
                />
                <button
                    @click="show"
                    class="col-span-2 rounded-sm bg-secondaryAlt p-1 text-secondary transition-all duration-300 ease-in hover:text-yellow-500"
                >
                    choose files
                </button>
            </section>

            <button
                class="rounded-md bg-secondaryAlt px-3 py-2 text-xs text-error transition-all duration-300 hover:bg-textPrimary hover:text-secondaryAlt xs:text-sm"
                @click="deleteBook"
            >
                Delete
            </button>
            <button
                class="rounded-md bg-secondaryAlt px-3 py-2 text-xs text-green-600 transition-all duration-300 hover:bg-textPrimary hover:text-secondaryAlt xs:text-sm"
                @click="addBook"
            >
                Add Book {{ length }}
            </button>
            <!-- <PrimaryLink
                class="col-span-2 text-yellow-500"
                :href="route('assignment')"
                preserve-scroll
                lable="estimate bill"
            /> -->
            <MainButton  id="Bill-estimation"  lable="estimate bill" @click="$emit('estimate')" class="col-span-2"  />
        </div>
    </div>
</template>
