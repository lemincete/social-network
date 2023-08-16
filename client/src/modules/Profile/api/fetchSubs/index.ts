import $api from "../../../../http";

import { ISubs } from "../../../../types";

export const fetchSubs = async (): Promise<ISubs | string> => {
    try {
        const { data } = await $api.get<ISubs>('profile/subs');
        return data
    } catch (e: any) {
        return e.response.data.message
    }
}