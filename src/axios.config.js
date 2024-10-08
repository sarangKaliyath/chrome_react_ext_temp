import axios from "axios";
const PROD_BASE_URL = process.env.PROD_BASE_URL;

const axiosInstance = axios.create({
  baseURL: "https://od-app-2y6f.onrender.com/api/",
  //   timeout: "10000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
