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
