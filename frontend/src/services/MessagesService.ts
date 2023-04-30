import axios from "axios";

export const fetchAllMessages = async () => {
    const { data } = await axios.get("messages");
    return data;
};