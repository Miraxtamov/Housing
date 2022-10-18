import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;

	.review-card-img {
		width: 52px;
		height: 52px;
		margin-bottom: 10px;
	}
`;

CardContainer.Name = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
	color: var(--primaryColor);
	margin-bottom: 4px;
`;

CardContainer.DateStar = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	margin-bottom: 20px;

	@media (max-width: 400px) {
		gap: 15px;
		margin-bottom: 16px;
	}
`;

CardContainer.SubDesc = styled.div`
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);
	white-space: nowrap;

	@media (max-width: 370px) {
		font-size: 12px;
	}

	@media (max-width: 335px) {
		font-size: 10px;
	}
`;

CardContainer.StarWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 5px;

	@media (max-width: 345px) {
		gap: 4px;
	}

	.review-card-star {
		font-size: 10px;
		line-height: 11px;
		color: #cab877;
	}

	.review-ball {
		font-size: 12px;
		line-height: 167%;
		color: var(--secondaryColor);
		margin-left: 8px;
		white-space: nowrap;

		@media (max-width: 950px) {
			margin-left: 5px;
		}
	}
`;

CardContainer.Desc = styled.div`
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);
`;
