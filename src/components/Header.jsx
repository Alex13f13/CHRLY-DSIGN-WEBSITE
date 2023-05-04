import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import ThemeToggleButton from "../styles/ThemeToggleButton";

export default function Header() {
	return (
		<div>
			<ThemeToggleButton />
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
