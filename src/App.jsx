import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./router/Router";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
