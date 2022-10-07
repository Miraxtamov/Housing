import styled from "styled-components";
import { ReactComponent as share } from "../../../assets/icons/share.svg";
import { ReactComponent as save } from "../../../assets/icons/heart.svg";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../../assets/icons/calendar.svg";
import { ReactComponent as file } from "../../../assets/icons/file.svg";

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 20px;

	@media (max-width: 1080px) {
		flex-direction: column;
	}
`;

export const ProductViewLeft = styled.div`
	width: 100%;
`;

ProductViewLeft.Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&.product-house-details-prices {
		align-items: flex-end;

		@media (max-width: 775px) {
			align-items: flex-start;
			flex-direction: column;
			gap: 32px;
		}
	}

	.product-prices {
		flex-direction: column;
		align-items: flex-end;

		.product-prices-price {
			display: flex;
			align-items: flex-start;
		}
	}

	&.products-main-documents {
		@media (max-width: 810px) {
			justify-content: left;
			flex-wrap: wrap;
			gap: 24px;
		}
	}
`;

ProductViewLeft.Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	line-height: 133%;
	letter-spacing: -0.02em;
	color: var(--primaryColor);
	margin-bottom: 8px;

	@media (max-width: 570px) {
		font-size: 20px;
		margin-bottom: 4px;
	}

	@media (max-width: 400px) {
		font-size: 16px;
	}
`;

ProductViewLeft.Description = styled.div`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 400;
	color: var(--secondaryColor);
	margin-bottom: 32px;

	@media (max-width: 400px) {
		font-size: 14px;
		margin-bottom: 24px;
	}
`;

ProductViewLeft.Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 24px 16px;

	.icon-text-product {
		display: flex;
		align-items: center;
	}

	@media (max-width: 600px) {
		flex-wrap: wrap;
	}
`;

ProductViewLeft.Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 60px;
	background: ${({ bg }) => (bg ? "#F6F8F9" : {})};
`;

ProductViewLeft.Share = styled(share)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Save = styled(save)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Bed = styled(bed)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Bath = styled(bath)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Garage = styled(car)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Ruler = styled(ruler)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Calendar = styled(calendar)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.File = styled(file)`
	path {
		fill: var(--secondaryColor);
	}
`;

ProductViewLeft.Text = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 400;
	color: var(--secondaryColor);
	margin-left: 10px;

	&.product-icon-share-save {
		@media (max-width: 570px) {
			display: none;
		}
	}
`;

ProductViewLeft.Sale = styled.div`
	font-size: 12px;
	line-height: 167%;
	font-weight: 400;
	text-decoration-line: line-through;
	color: var(--secondaryColor);
`;

ProductViewLeft.Price = styled.div`
	font-size: 24px;
	font-weight: 600;
	line-height: 133%;
	color: var(--primaryColor);
	letter-spacing: -0.02em;
	margin-left: 8px;
`;

ProductViewLeft.SubTitle = styled.div`
	font-size: 18px;
	font-weight: 600;
	line-height: 156%;
	color: var(--primaryColor);
	margin-top: 48px;
	margin-bottom: 16px;
`;

ProductViewLeft.SubDescription = styled.div`
	color: var(--secondaryColor);
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
`;

ProductViewLeft.ShowMoreBtn = styled.div`
	font-size: 14px;
	line-height: 143%;
	cursor: pointer;
	text-decoration-line: underline;
	margin-top: 24px;
	margin-bottom: 64px;
	color: var(--activeColor);
`;

ProductViewLeft.DownloadName = styled.div`
	font-size: 14px;
	line-height: 143%;
	margin-left: 8px;
	color: var(--secondaryColor);
`;

ProductViewLeft.DownloadText = styled.div`
	font-size: 12px;
	letter-spacing: 0.01em;
	text-decoration-line: underline;
	text-transform: uppercase;
	font-weight: 600;
	line-height: 167%;
	color: var(--activeColor);
	margin-left: 24px;
`;

ProductViewLeft.Line = styled.div`
	border: 1px solid #e6e9ec;
	margin-top: 48px;
	margin-bottom: 48px;

	@media (max-width: 800px) {
		margin-top: 32px;
		margin-bottom: 32px;
	}
`;

ProductViewLeft.Right = styled.div`
	@media (max-width: 1080px) {
		width: 100%;
	}
`;
