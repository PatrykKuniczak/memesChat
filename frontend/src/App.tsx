import { THEME_DARK } from "assets/styles/theme";
import GlobalStyles from "./assets/GlobalStyles.styled";
import Auth from "./pages/auth/Auth";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProtectedPage from "./ProtectedRoute";

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
