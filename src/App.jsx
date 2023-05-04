import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router/Router";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "./styles/ThemeContext";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<Router />
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
