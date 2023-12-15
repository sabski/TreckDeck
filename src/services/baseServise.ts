
import axios from "axios";

const httpInstamce =  axios.create({
    baseURL: "https://stapi.co/api/",
    headers: {
        "Content-type": "application/json"
    }
});

httpInstamce.interceptors.response.use(( response) => {
    //TODO: check some statuses
    return response.data;
}, (error) => {
    //TODO: handle err.
    return Promise.reject(error);
});

export default httpInstamce;