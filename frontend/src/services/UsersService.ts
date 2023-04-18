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
    data: IUserUpdateRequest
): Promise<IUserUpdateResponse> => {
    return await axios.patch(`users/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" }
    });
};
