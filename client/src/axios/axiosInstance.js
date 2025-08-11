import axios from "axios";
export const $axios = axios.create({
  baseURL: "http://localhost:8888/",
  timeout: 5000,
});
