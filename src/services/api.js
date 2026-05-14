import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.carqueryapi.com/api/0.3/",
});