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
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

CardContainer.NoData = styled.div`
	font-size: 36px;
	font-weight: 600;
	text-align: center;
`;
