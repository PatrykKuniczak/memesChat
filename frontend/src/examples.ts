// import {useCallback, useEffect, useState} from "react";
// import {userSocket} from "./helpers/socket-io.config";


// const [isConnected, setIsConnected] = useState(userSocket.connected);
//
// useEffect(() => {
//     userSocket.on('connect', () => setIsConnected(true));
//
//     userSocket.on('disconnect', () => setIsConnected(false));
//
//     return () => {
//         userSocket.off('connect');
//         userSocket.off('disconnect');
//     };
// }, []);
//
// const createUser = useCallback(() => userSocket.emit("createUser", {}), []);
//
// useEffect(() => {
//     userSocket.on("createdUser", res => {
//         console.log(res)
//     })
// }, []);


export default {}