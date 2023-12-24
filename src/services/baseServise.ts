
import axios from "axios";

const httpInstance =  axios.create({
    baseURL: "https://stapi.co/api/",
    headers: {
        "Content-type": "application/json"
    }
});

httpInstance.interceptors.response.use((response) => {
    //TODO: check some statuses
    return response.data;
}, (error) => {
    //TODO: handle err.
    return Promise.reject(error);
});

export default httpInstance;