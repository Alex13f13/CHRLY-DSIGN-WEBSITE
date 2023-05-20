import { Link } from "react-router-dom";
import { paths } from "../router/paths";
import styled from "styled-components";
import { themes } from "../styles/themes";
import { useTheme } from "../styles/ThemeContext";
import { Button } from "./Button";
import { useState } from "react";

const StyledHeader = styled.div`
	${({ theme }) => themes[theme]}
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

const StyledTop = styled.div`
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const StyledBody = styled.div`
	height: 90vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
export default function Header() {
	const { theme } = useTheme();
	const [open, setOpen] = useState(false);

	const handleMenu = () => {
		setOpen(!open);
	};

	const sendEmail = () => {
		window.open("mailto:hello@chrlydsign.com");
	};

	return (
		<StyledHeader theme={theme}>
			<StyledTop>
				<img src="" alt="CHRLY DSIGN LOGO" />
				<div>
					{open ? (
						<Button onClick={handleMenu}>
							CLOSE
							<img src="" alt="icon" />
						</Button>
					) : (
						<Button onClick={handleMenu}>
							MENU
							<img src="" alt="icon" />
						</Button>
					)}
					<Button onClick={sendEmail}>
						LET’S TALK
						<img src="" alt="icon" />
					</Button>
				</div>
			</StyledTop>
			{open && (
				<StyledBody>
					<Link onClick={handleMenu} to={paths.landing}>
						Home
					</Link>
					<Link onClick={handleMenu} to={paths.aboutUs}>
						About Us
					</Link>
					<Link onClick={handleMenu} to={paths.legal}>
						Legal
					</Link>
					{/* <Link to={`${paths.workDetails}?workId=0`}>Work 1</Link>
			<Link to={`${paths.workDetails}?workId=1`}>Work 2</Link> */}
					<div>
						<p>hello@chrlydsign.com</p>
						<p>Follow on Instagram</p>
					</div>
				</StyledBody>
			)}
		</StyledHeader>
	);
}
