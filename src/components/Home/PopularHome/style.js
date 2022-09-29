import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 96px;

	@media (max-width: 900px) {
		margin-bottom: 80px;
	}

	@media (max-width: 800px) {
		margin-bottom: 70px;
	}

	@media (max-width: 500px) {
		margin-bottom: 64px;
	}
`;

Container.BgImg = styled.img`
	width: 100%;
	height: 571px;
	filter: brightness(30%);

	@media (max-width: 400px) {
		height: 712px;  
	}
`;

Container.Texts = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

Container.TextsTitle = styled.div`
	width: 567px;
	font-size: 28px;
	font-weight: 600;
	line-height: 129%;
	text-align: center;
	letter-spacing: -0.02em;
	color: var(--defaultColor);
	margin-bottom: 48px;

	@media (max-width: 625px) {
		width: 100%;
	}

	@media (max-width: 550px) {
		margin-bottom: 35px;
	}

	@media (max-width: 400px) {
		margin-bottom: 24px;
	}
`;
