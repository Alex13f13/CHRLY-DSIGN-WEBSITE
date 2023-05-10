import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { useTheme } from "../styles/ThemeContext";
import { THEME } from "../utils/constants";

const StyledHeader = styled.div`
	${({ theme }) => themes[theme]}
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

// eslint-disable-next-line react/prop-types
export default function Header() {
	const { theme, selectTheme } = useTheme();

	return (
		<StyledHeader theme={theme}>
			<Link onClick={() => selectTheme(THEME.PRIMARY)} to={paths.landing}>
				Landing
			</Link>
			<Link onClick={() => selectTheme(THEME.SECONDARY)} to={paths.aboutUs}>
				About Us
			</Link>
			<Link onClick={() => selectTheme(THEME.PRIMARY)} to={paths.legal}>
				Legal
			</Link>
			<Link onClick={() => selectTheme(THEME.PRIMARY)} to={paths.workDetails}>
				Work Details
			</Link>
			<Link onClick={() => selectTheme(THEME.PRIMARY)} to={`${paths.workDetails}?workId=0`}>
				Work 1
			</Link>
			<Link onClick={() => selectTheme(THEME.PRIMARY)} to={`${paths.workDetails}?workId=1`}>
				Work 2
			</Link>
		</StyledHeader>
	);
}
