import styled from "styled-components";

export const CardContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

CardContainer.AboutOpinion = styled.div`
	position: relative;
	max-height: 200px;
	min-height: 200px;
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	padding: 40px 48px 61px 48px;
	box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
	border-radius: 3px;
	background-color: var(--defaultColor);

	@media (max-width: 500px) {
		padding: 40px 30px 61px 30px;
	}

	@media (max-width: 370px) {
		max-height: 220px;
		min-height: 220px;
	}
`;

CardContainer.Img = styled.img`
	position: absolute;
	top: 180px;
	width: 38px;
	height: 38px;
	overflow: hidden;

	& > img {
		width: 100%;
	}

	@media (max-width: 370px) {
		top: 200px;
	}
`;

CardContainer.Name = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 1.5;
	margin-bottom: 4px;
	margin-top: 32px;
`;

CardContainer.Jobs = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
`;
