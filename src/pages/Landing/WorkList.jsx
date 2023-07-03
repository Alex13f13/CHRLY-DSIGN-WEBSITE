import styled from "styled-components";
import { TEXT_TYPE } from "../../utils/constants";
import { TextSlice } from "../../components/TextSlice";

const StyledWork = styled.div``;

const StyledWorkBar = styled.div`
	height: 10%;
	width: 100%;
	margin-top: 5%;
	display: flex;
	align-items: center;
`;

const Card = styled.div`
	height: 300px;
	width: 200px;
	background-color: #e7e7e7;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #000000;
	font-size: 24px;
	border-radius: 10px;
`;

const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 18px;
	padding: 10%;
	justify-items: center;
`;

export default function WorkList() {
	return (
		<StyledWork>
			<TextSlice
				textExtraStyles={{
					fontSize: "20vw",
					width: "100%",
					overflow: "hidden",
					height: "40%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				textStyles={TEXT_TYPE.h1Main}
			>
				Work
			</TextSlice>
			<TextSlice
				textExtraStyles={{
					fontSize: "1.2vw",
					height: "40%",
					marginLeft: "46%",
					width: "36%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
				textStyles={TEXT_TYPE.mainText}
			>
				Brands are more than just strategy and design. They are living organisms that inspire. To
				provide the highest-end results, we use cutting-edge techniques and tailored processes that
				deliver.
			</TextSlice>
			<StyledWorkBar>
				-----------------------------------------------------------------------------------------------------------------------------------------
				FEATURED WORK
			</StyledWorkBar>
			<CardWrapper>
				<Card>Card 1</Card>
				<Card>Card 2</Card>
				<Card>Card 3</Card>
				<Card>Card 4</Card>
				<Card>Card 5</Card>
				<Card>Card 6</Card>
				<Card>Card 7</Card>
				<Card>Card 8</Card>
				<Card>Card 9</Card>
				<Card>Card 10</Card>
				<Card>Card 11</Card>
				<Card>Card 12</Card>
			</CardWrapper>
		</StyledWork>
	);
}

// https://css-tricks.com/books/greatest-css-tricks/scroll-animation/

// HTML
// <div class="progress"></div>

// CSS
// body {
//   padding: 0;
//   margin: 0;
//   min-height: 500vh;
//   background-color: rgb(139, 201, 228);
//   animation: body 1s linear;
// }
// @keyframes body {
//   to {
//     background-color: rgb(19, 48, 97);
//   }
// }

// .progress {
//   height: 3px;
//   width: 0%;
//   background-color: #fff;
//   position: fixed;
//   top: 0;
//   left: 0;
//   animation: progress 1s linear;
// }
// @keyframes progress {
//   to {
//     background-color: rgb(20, 255, 226);
//     width: 100%;
//   }
// }

// :root * {
//   /* Pause the animation */
//   animation-play-state: paused;
//   /* Bind the animation to scroll */
//   animation-delay: calc(var(--scroll) * -1s);
//   /* These last 2 properites clean up overshoot weirdness */
//   animation-iteration-count: 1;
//   animation-fill-mode: both;
// }

// JS
// window.addEventListener('scroll', () => {
//   document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);
