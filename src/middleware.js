import axios from 'axios'
const instance = axios.create({
    // eslint-disable-next-line no-undef
    baseURL: process.env.VUE_APP_API_URL,
})


export default instance