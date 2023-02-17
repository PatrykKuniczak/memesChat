// service for accessing data

import axios from "axios";
import authHeader from "./auth.header";

interface IUser {
    userId: any;
}

const API_URL = `${process.env.REACT_APP_API_URL} + /api/`;

export const getPublicContent = () => {
    return axios.get(API_URL);
};

export const getUserObject = (userId: IUser) => {
    return axios.get(API_URL + `${userId}`, { headers: authHeader() });
};

export const deleteUser = (userId: IUser) => {
    return axios.delete(API_URL + `${userId}`, { headers: authHeader() });
};

export const updateUser = (userId: IUser) => {
    return axios.patch(API_URL + `${userId}`, { headers: authHeader() });
};
