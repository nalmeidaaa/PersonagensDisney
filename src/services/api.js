import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.disneyapi.dev",
    timeout: 10000,
});
