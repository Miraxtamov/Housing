import styled from "styled-components";
import { ReactComponent as discordChoose } from "../../../assets/icons/discordChoose.svg";
import { ReactComponent as houseChoose } from "../../../assets/icons/houseChoose.svg";
import { ReactComponent as calculatorChoose } from "../../../assets/icons/calculatorChoose.svg";
import { ReactComponent as mapsChoose } from "../../../assets/icons/mapsChoose.svg";

export const Container = styled.div`
	padding-top: 48px;
	padding-bottom: 48px;
	background: #f5f7fc;
	margin-bottom: 96px;

	@media (max-width: 800px) {
		margin-bottom: 80px;
	}

	@media (max-width: 545px) {
		margin-bottom: 60px;
	}

	@media (max-width: 370px) {
		margin-bottom: 32px;
	}
`;

export const ChooseCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 77px;

	@media (max-width: 1150px) {
		gap: 60px;
	}

	@media (max-width: 1050px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 545px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 32px;
	}
`;

ChooseCards.Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

ChooseCards.CardDiscord = styled(discordChoose)``;
ChooseCards.CardHouse = styled(houseChoose)``;
ChooseCards.CardCalculator = styled(calculatorChoose)``;
ChooseCards.CardMaps = styled(mapsChoose)``;

ChooseCards.CardTitle = styled.div`
	font-weight: 600;
	font-size: 18px;
	line-height: 156%;
	color: var(--primaryColor);
	margin-top: 24px;
	margin-bottom: 8px;
	white-space: nowrap;
`;

ChooseCards.CardDesc = styled.div`
	font-size: 16px;
	line-height: 1.5;
	color: var(--secondaryColor);
`;
