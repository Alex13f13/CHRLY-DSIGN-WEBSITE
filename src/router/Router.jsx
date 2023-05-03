import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import AboutUs from "../pages/AboutUs";
import Landing from "../pages/Landing";
import Legal from "../pages/Legal";
import NotFound from "./NotFound";

export default function Router() {
	return (
		<Routes>
			<Route path={paths.landing} element={<Landing />} index />
			<Route path={paths.aboutUs} element={<AboutUs />} />
			<Route path={paths.legal} element={<Legal />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
