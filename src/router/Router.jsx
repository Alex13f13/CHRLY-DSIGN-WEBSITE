import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import AboutUs from "../pages/AboutUs/AboutUs";
import Landing from "../pages/Landing/Landing";
import Legal from "../pages/Legal";
import Cookies from "../pages/Cookies";
import NotFound from "./NotFound";
import WorkDetails from "../pages/WorkDetails";
import PruebaComp from "../components/PruebaComp";

export default function Router() {
	return (
		<Routes>
			<Route path={paths.landing} element={<Landing />} index />
			<Route path={paths.aboutUs} element={<AboutUs />} />
			<Route path={paths.legal} element={<Legal />} />
			<Route path={paths.cookies} element={<Cookies />} />
			<Route path={paths.workDetails} element={<WorkDetails />} />
			<Route path="/a" element={<PruebaComp />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
