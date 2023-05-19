import styled from "styled-components";
import { themes } from "../styles/themes";
import { THEME } from "../utils/constants";
import { forwardRef } from "react";

const StyledFooter = styled.section`
	${({ theme }) => themes[theme]}
	height: 40vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

// eslint-disable-next-line react/prop-types
export default function FooterBase({ theme = THEME.primary }, ref) {
	return (
		<StyledFooter ref={ref} theme={theme}>
			<div>
				<img src="" alt="CHRLY DSIGN LOGO" />
				<p>Digital Multimedia Branding</p>
			</div>
			<div>
				<a href="#">Home</a>
				<a href="#">What we do</a>
				<a href="#">About us</a>
				<a href="#">Evolve</a>
				<a href="#">Work</a>
				<a href="#">Awards</a>
			</div>
			<div>
				<div>
					<p>Contact:</p>
					<a href="#">
						<img src="" alt="hello@chrlydsign.com" />
					</a>
				</div>
				<div>
					<p>Collabs / Jobs:</p>
					<a href="#">
						<img src="" alt="talent@chrlydsign.com" />
					</a>
				</div>
			</div>
			<div>
				<p>© All rigths reserved 2022, CHRLY DSIGN®</p>
				<div>
					<p>Follow on Instagram</p>
					<p>Web terms and conditions</p>
					<p>Privacy policy</p>
				</div>
			</div>
		</StyledFooter>
	);
}

export const Footer = forwardRef(FooterBase);
