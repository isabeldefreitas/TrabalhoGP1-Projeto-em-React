import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-restful-trabalho-final-copia-production.up.railway.app/api"
});