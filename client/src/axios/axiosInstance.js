import axios from "axios";
export const $axios = axios.create({
  baseURL: "https://registration-form-mern-kdrl.onrender.com/",
  timeout: 5000,
});
