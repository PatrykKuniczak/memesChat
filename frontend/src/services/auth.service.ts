/**
 * authentication service
 */

import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

/**
 * register(): POST {username, email, password}
 */
export const register = (username: string, password: string) => {
    return axios.post(API_URL + "api/auth/register", {
        username,
        password
    });
};

/**
 * login(): POST {username, password} & save JWT to Local Storage
 */
export const login = (username: string, password: string) => {
    return axios
        .post(API_URL + "api/auth/login", {
            username,
            password
        })
        .then(response => {
            console.log("login response:", response);
            if (response.data.accessToken) {
                console.table(
                    "set access token:",
                    response.data.accessToken.split(".")
                );
                localStorage.setItem("userJwtToken", JSON.stringify(response.data));
            }

            return response.data;
        });
};

/**
 * logout(): remove JWT from Local Storage
 */
export const logout = () => {
    localStorage.removeItem("userJwtToken");
};

/**
 * getCurrentUser(): get stored user information (including JWT)
 */
export const getCurrentUser = () => {
    const userStr = localStorage.getItem("userJwtToken");
    if (userStr) return JSON.parse(userStr);
};
