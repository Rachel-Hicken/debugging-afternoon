import axios from 'axios';

const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(res => res.data);
}

export default {
    getAllProducts
}