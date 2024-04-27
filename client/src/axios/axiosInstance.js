import axios from "axios";
export const $axios = axios.create({
  baseURL: "https://registration-form-api.vercel.app",
  timeout: 5000,
});
