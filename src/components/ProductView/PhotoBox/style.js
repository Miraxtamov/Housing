import styled from "styled-components";

export const PhotoBoxContainer = styled.div`
	margin-top: 24px;
	margin-bottom: 24px;
`;

PhotoBoxContainer.Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 400px;
	grid-gap: 20px;

	@media (max-width: 760px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 500px) {
		grid-template-rows: 200px;
	}
`;

PhotoBoxContainer.Img = styled.img`
	width: 100%;
	height: 100%;

	&:nth-child(n + 3) {
		@media (max-width: 500px) {
			display: none;
		}
	}
`;

PhotoBoxContainer.Right = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 190px 190px;
	grid-gap: 20px;

	@media (max-width: 500px) {
		grid-template-rows: 94px;
	}
`;
