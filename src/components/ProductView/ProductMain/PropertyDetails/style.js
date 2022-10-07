import styled from "styled-components";

export const PropertyDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

PropertyDetailContainer.Title = styled.div`
	font-size: 18px;
	line-height: 156%;
	font-weight: 600;
	color: var(--primaryColor);
	margin-bottom: 24px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 730px) {
		flex-direction: column;
		gap: 24px;
	}
`;

Wrapper.Col = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

Wrapper.Box = styled.div`
	display: flex;
	align-items: center;
`;

Wrapper.SubTitle = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 600;
	color: var(--primaryColor);
`;

Wrapper.SubDesc = styled.div`
	font-size: 14px;
	line-height: 143%;
	margin-left: 8px;
	color: var(--secondaryColor);
`;
