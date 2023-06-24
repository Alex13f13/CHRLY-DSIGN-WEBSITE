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
				textStyles={TEXT_TYPE.superTitle}
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
				textStyles={TEXT_TYPE.subtitle}
			>
				Brands are more than just strategy and design. They are living organisms that inspire. To
				provide the highest-end results, we use cutting-edge techniques and tailored processes that
				deliver.
			</TextSlice>
			<StyledWorkBar>
				-----------------------------------------------------------------------------------------------------------------------------------------
				FEATURED WORK
			</StyledWorkBar>
			{/* <TextSlice
						textExtraStyles={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
						textStyles={TEXT_TYPE.title}
					>
						Work List Component
					</TextSlice> */}
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
