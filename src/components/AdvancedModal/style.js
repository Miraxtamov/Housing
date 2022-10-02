import styled from "styled-components";

export const ModalContainer = styled.div``;

ModalContainer.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin-bottom: 10px;
	padding-left: 14px;

	@media (max-width: 390px) {
		padding-left: 10px;
	}
`;

export const ModalAddressContainer = styled.div`
	display: flex;
	align-items: center;
	padding-left: 14px;
	padding-right: 14px;
	column-gap: 20px;
	padding-bottom: 20px;

	@media (max-width: 1150px) {
		flex-direction: column;
		gap: 20px;
	}

	@media (max-width: 1000px) {
		gap: 10px;
	}

	@media (max-width: 390px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

ModalAddressContainer.Input = styled.input`
	font-size: 14px;
	line-height: 143%;
	color: var(--primaryColor);
	padding: 12px 4px 12px 16px;
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	outline: none;

	&:focus {
		border: 1px solid var(--activeColor);
	}

	@media (max-width: 1150px) {
		width: 100%;
	}
`;

export const ModalButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
	border-radius: 0px 0px 5px 5px;
	width: 100%;
	margin-top: 20px;
	margin-bottom: 20px;

	@media (max-width: 390px) {
		flex-direction: column;
	}
`;
