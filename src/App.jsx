import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";
import Content from "./components/Content";
import { ThemeProvider } from "./styles/ThemeContext";
import Popup from "./components/Popup";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<Popup />
				<Content>
					<Router />
				</Content>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
