import GlobalStyles from "./GlobalStyles.styled";
import React, {useEffect, useState} from "react";
import {io} from "socket.io-client";


const socket = io(`http://localhost:${process.env.REACT_APP_WS_PORT}`);

const App: React.FC = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return (<>
            <GlobalStyles/>
            {isConnected ?
                <div>
                    Połączono
                </div> :
                <div>
                    Nie połączono, ładuję
                </div>}
        </>
    );
}

export default App;