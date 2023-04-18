import axios from "axios";
import { IUsers } from "components/users/Users";

export const getAllUsers = async (): Promise<IUsers> => {
    const { data } = await axios.get("users");
    return data;
};

export const getAvatar = async (
    id: number | null | undefined
): Promise<Blob> => {
    const { data } = await axios.get(`users-avatar/${id}`, {
        responseType: "blob"
    });
    return data;
};

export const deleteAvatar = async (
    id: number | null | undefined
): Promise<null> => {
    return await axios.delete(`users-avatar/${id}`);
};
