import $api from "../../../../http";

export const fetchUpdateProfile = async (profile: { name: string, surname: string, gender: string, password: string, email: string, image: string }) => {
    try {
        const { data } = await $api.post('profile/update', { ...profile })
    } catch (e) {
        console.log(e);
    }


}