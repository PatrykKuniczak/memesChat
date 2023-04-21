import React from "react";
import ReactDOM from "react-dom/client";
import { Manager } from "socket.io-client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "store/store";
import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = API_URL;

export const manager = new Manager(process.env.REACT_APP_WS_URL);
const usersSocket = manager.socket("/users");
const messagesSocket = manager.socket("/messages");

export const VALIDATION_OFF = process.env.REACT_APP_VALIDATION_OFF;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
