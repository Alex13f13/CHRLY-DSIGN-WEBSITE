import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import Button from "./Button";
import { useTheme } from "../styles/ThemeContext";

export default function Header() {
	const { toggleTheme, theme } = useTheme();
	return (
		<div>
			<Button onClick={toggleTheme} theme={theme}>
				Cambiar tema
			</Button>
			<ul>
				<li>
					<Link to={paths.landing}>Landing</Link>
				</li>
				<li>
					<Link to={paths.aboutUs}>About Us</Link>
				</li>
				<li>
					<Link to={paths.legal}>Legal</Link>
				</li>
				<li>
					<Link to={paths.workDetails}>Work Details</Link>
				</li>
				<li>
					<Link to={`${paths.workDetails}?workId=0`}>Work 1</Link>
				</li>
				<li>
					<Link to={`${paths.workDetails}?workId=1`}>Work 2</Link>
				</li>
			</ul>
		</div>
	);
}
