<template>
 <div class="login  min-h-screen max-w-lg flex items-center justify-center  mx-auto py-12 px-6">
    <div class="bg-white w-full rounded-md shadow-md p-6 h-auto">
        <h1 class="text-3xl text-primary-dark font-bold mb-6 border-l-2 px-3 border-1 border-primary-light">Login</h1>
        <div>
            <text-field
                label="username"
                v-model="identifier"
            />

            <text-field
                class="mt-3"
                type="password"
                label="password"
                v-model="password"
            />
        </div>
        <div class="flex justify-between  w-full mt-5">
            <small @click="registerPage" class="font-[0.5em] text-primary-light cursor-pointer  font-bold">
                Daftar disini
            </small>
            <button @click="onlogin" class="bg-primary-light px-4 py-2 text-white rounded-md">
                Login
            </button>
        </div>
     </div>
 </div>
</template>
<script setup>
import TextField from '@/components/Form/TexField.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/store/auth';
import { useCommonStore } from '@/store/index'
import axios from '@/middleware'


const router = useRouter();
const store = useAuth();
const commonStore = useCommonStore();
const identifier = ref('');
const password = ref('');
const registerPage = () => {
    router.push({ name: 'Register' })
}
const onlogin = async () => {
    commonStore.$patch({
        isLoading: true
    })
    await axios.post('/auth/local' ,{
        identifier: identifier.value,
        password: password.value
    })
    .then(res => {
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('token', res.data.jwt)
        store.$patch({
            isAuthenticated: true,
            user: res.data.user,
            token: res.data.jwt
        })

        commonStore.$patch({
            isLoading: false
        })

        router.push('/')
    })
    .catch(err => {
        commonStore.$patch({
            isLoading: false
        })
        console.log(err)
    })
}
</script>