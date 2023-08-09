import $api from "../../../http";
import { API_URLS } from "../../../constants";

export const fetchProfile = async () => {
    const data = await $api.get(API_URLS.getProfile);
    console.log(data);
}