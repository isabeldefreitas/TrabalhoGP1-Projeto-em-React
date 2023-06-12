import axios from "axios";

export const api = axios.create({
    baseURL: "https://lovely-gnome-d6a950.netlify.app/"
});