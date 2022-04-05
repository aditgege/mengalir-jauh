<template>

    <div class="min-h-screen max-w-2xl  mx-auto py-12 px-6">
        <div class="bg-white w-full rounded-md shadow-md p-6 h-auto">
            <h1 class="text-3xl text-primary-dark font-bold mb-6 border-l-2 px-3 border-1 border-primary-light">Tambah Pendapatan</h1>
            <div class="flex flex-col">
                <text-field
                    label="Nama Pemasukan"
                    v-model="request.name"
                />
                <text-field
                    label="Jumlah"
                    class="my-2"
                    v-model="request.amount"
                />

                <date-picker :model-value="request.date" @update:modelValue="newVal => request.date = newVal">

                </date-picker>
                
            </div>
            <div class="flex justify-end  w-full mt-5">
                <button @click="router.push('/')" class="bg-secondary-lightest-2 px-4 py-2 mr-2 text-primary-dark rounded-md">
                    Kembali
                </button>
                <button @click="save" class="bg-primary-light px-4 py-2 text-white rounded-md">
                    Simpan
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/store';
import { createTransaction } from '@/api/transaction.api';

import TextField from '@/components/Form/TexField.vue';
import DatePicker from '@/components/Form/DatePicker.vue';

const router = useRouter();
const commonStore = useCommonStore();
const request = ref({
    name: '',
    amount: 0,
    date: null,
    isIncove: true
})
const save = async () => {
    await createTransaction(request.value)
    .then(res => {
        console.log(res)
        router.push({ name: 'Home' })
        commonStore.showToast({
            message: 'Data berhasil ditambahkan',
            type: 'success',
            show: true
        })
    }).catch(err => {
        console.log(err)
        commonStore.showToast({
            message: 'Data gagal ditambahkan',
            type: 'error',
            show: true
        })
    })
    
}
</script>