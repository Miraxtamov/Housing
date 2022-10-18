import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 96px;

	@media (max-width: 740px) {
		margin-bottom: 64px;
	}
`;

Container.Title = styled.div`
	margin-top: 64px;
`;

Container.Description = styled.div`
	margin-bottom: 64px;
`;

export const CardContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	margin-bottom: 48px;

	@media (max-width: 950px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 610px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

CardContainer.NoData = styled.div`
	font-size: 36px;
	font-weight: 600;
	text-align: center;
`;
