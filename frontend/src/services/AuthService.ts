import axios from "axios";
import { IAuthRequest } from "components/Form/useForm";

export const sendAuthRequest = async ({
    username,
    password,
    event
}: IAuthRequest) => {
    const { data } = await axios.post(`/auth/${event}`, {
        username,
        password
    });
    return data;
};
