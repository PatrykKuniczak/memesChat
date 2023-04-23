import axios from "axios";
import { IUser } from "components/user/User";
import {
    IUserUpdateRequest,
    IUserUpdateResponse
} from "components/modals/editAccount/useAccountEdit";

export const getUser = async (id: number): Promise<IUser> => {
    const { data } = await axios.get(`users/${id}`);
    return data;
};

export const updateUser = async (
    id: number,
    params: IUserUpdateRequest
): Promise<IUserUpdateResponse> => {
    params.userAvatar = params.userAvatar
        ? new File([params.userAvatar], "params", { type: "image/jpeg" })
        : null;

    const { data } = await axios.patch(`users/${id}`, params, {
        headers: { "Content-Type": "multipart/form-data" }
    });

    return data;
};

export const deleteUser = async (id: number): Promise<null> => {
    const { data } = await axios.delete(`users/${id}`);
    return data;
};
