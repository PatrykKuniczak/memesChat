import { THEME_DARK } from "assets/styles/theme";
import axios from "axios";
import GlobalStyles from "./assets/GlobalStyles.styled";
import Auth from "./pages/auth/Auth";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProtectedPage from "./ProtectedRoute";

//USE THAT IT IF U WANT TO CREATE REQUEST FOR OTHER THAN /API PATH EP. FOR GET AVATAR use join( "/..") from path-browserify
export const API_URL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = API_URL;

const App = () => {
    return (
        <>
            <GlobalStyles />

            <ThemeProvider theme={THEME_DARK}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route
                                index
                                element={
                                    <ProtectedPage>
                                        <Home />
                                    </ProtectedPage>
                                }
                            />
                            <Route
                                path="/auth/:eventType"
                                element={<Auth />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to={"/"} />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
};

export default App;
