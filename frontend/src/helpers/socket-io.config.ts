import {Manager} from "socket.io-client";

const manager = new Manager(`http://localhost:${process.env.REACT_APP_WS_PORT}`);

const userSocket = manager.socket("/user");
const messageSocket = manager.socket("/message");


export {userSocket, messageSocket}