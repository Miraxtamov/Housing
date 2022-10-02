import styled from "styled-components";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../../assets/icons/resize.svg";
import { ReactComponent as heart } from "../../../assets/icons/heart.svg";

export const CardItem = styled.div`
	position: relative;
	width: 100%;
	min-height: 250px;
	border: 1px solid #e6e9ec;
	border-radius: 3px;
	background-color: var(--defaultColor);

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
			rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
`;

CardItem.Img = styled.img`
	width: 100%;
	min-height: 220px;
	max-height: 220px;
`;

CardItem.Featured = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	padding: 5px 12px;
	background-color: var(--activeColor);
	border-radius: 3px;
	font-weight: 600;
	font-size: 10px;
	line-height: 13px;
	color: var(--defaultColor);
`;

CardItem.ForSale = styled(CardItem.Featured)`
	left: auto;
	right: 20px;
	background-color: var(--primaryColor);
`;

CardItem.UserContainer = styled.div`
	position: absolute;
	top: 200px;
	right: 20px;
	width: 40px;
	height: 40px;
	overflow: hidden;
	border: 3px solid var(--defaultColor);
	border-radius: 50%;
	box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
	& > img {
		width: 100%;
	}
`;

CardItem.Info = styled.div`
	padding: 24px 20px 16px 20px;
`;

CardItem.InfoTitle = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--primaryColor);
	margin-bottom: 4px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;

CardItem.InfoDescription = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	color: var(--secondaryColor);
	margin-bottom: 16px;
`;

CardItem.InfoIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

CardItem.InfoIconsCon = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 5px;
`;

CardItem.InfoIconsTitle = styled.div`
	font-weight: 400;
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);

	@media (max-width: 645px) {
		font-size: 13px;
	}
	
	@media (max-width: 610px) {
		font-size: 14px;
	}
	
	@media (max-width: 350px) {
		font-size: 13px;
	}
`;

CardItem.InfoIconsIconBed = styled(bed)`
	path {
		fill: var(--secondaryColor);
	}
`;

CardItem.InfoIconsIconBath = styled(bath)`
	path {
		fill: var(--secondaryColor);
	}
`;

CardItem.InfoIconsIconCar = styled(car)`
	path {
		fill: var(--secondaryColor);
	}
`;

CardItem.InfoIconsIconRuler = styled(ruler)`
	path {
		fill: var(--secondaryColor);
	}
`;

CardItem.Line = styled.div`
	border: 1px solid #e6e9ec;
`;

CardItem.FooterInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 20px;
`;

CardItem.FooterInfoPrices = styled.div`
	display: flex;
	flex-direction: column;
`;

CardItem.Discount = styled.div`
	font-size: 12px;
	line-height: 167%;
	text-decoration-line: line-through;
	color: var(--secondaryColor);
`;

CardItem.Price = styled.div`
	font-weight: 600;
	font-size: 16px;
	line-height: 1.5;
	color: var(--primaryColor);
`;

CardItem.FooterInfoIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

CardItem.FooterInfoIconsResize = styled(resize)`
	cursor: pointer;

	path {
		fill: var(--secondaryColor);
	}

	&:active {
		transform: scale(0.97);
	}
`;

CardItem.FooterInfoIconsHeart = styled(heart)`
	cursor: pointer;

	path {
		fill: var(--secondaryColor);
	}

	&:active {
		transform: scale(0.97);
	}
`;
