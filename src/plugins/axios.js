import axios from "axios";
export default {
    install: (app) => {
        // app.config.globalProperties.axios = axios;

        const instance = axios.create({
            // eslint-disable-next-line no-undef
            baseURL: process.env.VUE_APP_API_URL,
        });
        app.provide('$axios', instance);
    }
}