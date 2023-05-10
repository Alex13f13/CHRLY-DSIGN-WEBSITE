import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router/Router";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import Content from "./components/Content";
import { ThemeProvider } from "./styles/ThemeContext";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<Content>
					<Router />
					<Footer />
				</Content>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
