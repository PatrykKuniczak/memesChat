import { THEME_DARK } from "assets/styles/theme";
import GlobalStyles from "./assets/GlobalStyles.styled";
import Auth from "./pages/auth/Auth";
import { ThemeProvider } from "styled-components";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes
} from "react-router-dom";
import Home from "./pages/home/Home";

const App = () => {
	return (
		<>
			<GlobalStyles />

			<ThemeProvider theme={THEME_DARK}>
				<BrowserRouter>
					<Routes>
						<Route element={<Outlet />}>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/auth/:eventType"
								element={<Auth />}
							/>
						</Route>
						<Route
							path="*"
							element={<Navigate to={"/"} />}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
};

export default App;
