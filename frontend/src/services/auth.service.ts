// authentication service
// login(): POST {username, password} & save JWT to Local Storage
// logout(): remove JWT from Local Storage
// register(): POST {username, email, password}
// getCurrentUser(): get stored user information (including JWT)

import axios from "axios";

const API_URL = "http://localhost:3030/api/auth/";

export const register = (username: string, password: string) => {
    console.log(API_URL + "register");
    return axios.post(API_URL + "register", {
        username,
        password
    });
};

export const login = (username: string, password: string) => {
    return axios
        .post(API_URL + "login", {
            username,
            password
        })
        .then(response => {
            console.log("login res", response);
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
};
