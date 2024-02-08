import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/tayfunyaltur/demodb";

const api = axios.create({
    baseURL, // Replace with your API base URL
});

api.interceptors.request.use(
    (config) => {
        return {
            ...config,
            url: baseURL + config.url,
        };
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
