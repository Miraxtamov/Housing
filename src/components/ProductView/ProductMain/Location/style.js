import styled from "styled-components";

export const LocationContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

LocationContainer.Title = styled.div`
	font-size: 18px;
	line-height: 156%;
	font-weight: 600;
	color: var(--primaryColor);
	margin-bottom: 24px;
`;

LocationContainer.Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: ${(props) => (props.mTmB ? "24px" : {})};
	margin-bottom: ${(props) => (props.mTmB ? "24px" : {})};

	@media (max-width: 650px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 24px;
	}
`;

LocationContainer.RowItem = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

LocationContainer.SubTitle = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 600;
	color: var(--primaryColor);
`;

LocationContainer.SubDesc = styled.div`
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);
	margin-left: 8px;
`;
