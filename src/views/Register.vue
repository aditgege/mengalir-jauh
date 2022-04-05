<template>
 <div class="login  min-h-screen max-w-lg flex items-center justify-center  mx-auto py-12 px-6">
    <div class="bg-white w-full rounded-md shadow-md p-6 h-auto">
        <h1 class="text-3xl text-primary-dark font-bold mb-6 border-l-2 px-3 border-1 border-primary-light">Register</h1>
        <div>
            <text-field
                label="Username"
                v-model="username"
            />

            <text-field
                class="mt-3"
                label="Email"
                v-model="email"
            />

            <text-field
                class="mt-3"
                type="password"
                label="password"
                v-model="password"
            />
        </div>
        <div class="flex justify-between w-full mt-5">
            <router-link to="/login" class="font-[0.5em] text-primary-light cursor-pointer  font-bold">
                <small>
                    Login disini
                </small>
            </router-link>
            <button @click="onRegis" class="bg-primary-light px-4 py-2 text-white rounded-md">
                Register
            </button>
        </div>
     </div>
 </div>
</template>
<script setup>
import { ref } from 'vue';
import TextField from '@/components/Form/TexField.vue';
import axios from '@/middleware';
const username = ref('');
const email = ref('');
const password = ref('');

const onRegis = async () => {
    // localStorage.setItem('isAuthenticated', true)
    // // router.push('/')
    await axios.post('/auth/local/register' , {
        username: username.value,
        email: email.value,
        password: password.value
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
</script>