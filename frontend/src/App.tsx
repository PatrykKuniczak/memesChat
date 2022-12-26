import GlobalStyles from "./GlobalStyles.styled";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Auth from "./pages/auth/Auth";
import { ThemeProvider } from "styled-components";
import { COLORS } from "./constants/styleConstants";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

const socket = io(`http://localhost:${process.env.REACT_APP_WS_PORT}`);

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={COLORS}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="auth/:type" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;