import styled from "styled-components";
import { Container } from "../FilterSearchButton/style";

export const PropertiesContainer = styled.div`
	margin-top: 54px;
	margin-bottom: 96px;

	@media (max-width: 740px) {
		margin-bottom: 64px;
	}
`;

PropertiesContainer.Title = styled.div`
	font-weight: 600;
	font-size: 28px;
	line-height: 129%;
	text-align: center;
	letter-spacing: -0.02em;
	color: var(--primaryColor);
	margin-bottom: 8px;
`;

PropertiesContainer.Desc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	text-align: center;
	color: var(--secondaryColor);
	margin-bottom: 64px;

	@media (max-width: 500px) {
		margin-bottom: 32px;
	}
`;

PropertiesContainer.CardResultSortBy = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;

	@media (max-width: 500px) {
		display: none;
	}
`;

PropertiesContainer.CardResultSortByResult = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	color: var(--primaryColor);
`;

PropertiesContainer.SpanBold = styled.span`
	font-weight: 600;
	margin-right: 5px;
`;

export const CardResultSortByButton = styled.div`
	color: var(--primaryColor);
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
`;

CardResultSortByButton.Select = styled.select`
	color: var(--primaryColor);
	font-size: 14px;
	line-height: 20px;
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;
`;

CardResultSortByButton.Option = styled.option`
	bottom: none;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

CardsContainer.Cards = styled.div`
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

	@media (max-width: 460px) {
		margin-bottom: 24px;
	}
`;

CardsContainer.CardsNoData = styled.div`
	font-size: 36px;
	font-weight: 600;
	text-align: center;
`;
