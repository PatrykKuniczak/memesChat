import axios from "axios";

export const updateInterceptor = (token: string | null) => {
    axios.interceptors.request.use(
        config => {
            config.headers["Authorization"] = token ? `Bearer ${token}` : null;
            return config;
        },
        error => Promise.reject(error)
    );
};
