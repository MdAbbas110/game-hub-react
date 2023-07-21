import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6c9d6d278c684c17ac27ba32caedfd22'
    }
})