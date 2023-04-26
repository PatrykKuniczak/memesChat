import axios from "axios";

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
