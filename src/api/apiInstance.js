import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://fir-database-a57b8-default-rtdb.firebaseio.com/"
})

export default apiInstance;