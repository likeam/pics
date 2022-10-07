import axios from "axios";

export default axios.create({

    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization:' Client-ID XvqqYpGQN48PE-Txe2ofCSBxUNIre2_nlSrMt6WeHco'
    }
});