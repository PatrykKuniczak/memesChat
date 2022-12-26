import GlobalStyles from "./GlobalStyles.styled";
import React from "react";
import Auth from "./pages/auth/Auth";
import {ThemeProvider} from "styled-components";
import {COLORS} from "./constants/styleConstants";
import {
    BrowserRouter, Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";


const App: React.FC = () => {
    return (
        <>
            <GlobalStyles/>

            <ThemeProvider theme={COLORS}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Outlet/>}>
                            <Route path="auth/:type" element={<Auth/>}/>
                        </Route>
                        <Route path="*" element={<Navigate to={'/'}/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;