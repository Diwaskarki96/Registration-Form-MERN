import axios from "axios";
export const $axios = axios.create({
  baseURL: "https://registration-form-api.onrender.com",
  timeout: 5000,
});
