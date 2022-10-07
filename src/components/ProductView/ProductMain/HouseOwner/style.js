import styled from "styled-components";

export const OwnerCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid #e6e9ec;
	border-radius: 3px;

	@media (max-width: 1080px) {
		width: 100%;
	}
`;

OwnerCard.PersonInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 0 10px;
`;

OwnerCard.Img = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	cursor: pointer;
`;

OwnerCard.Names = styled.div`
	font-size: 16px;
	line-height: 1.5;
	font-weight: 600;
	color: var(--primaryColor);
`;

OwnerCard.PhoneNumber = styled.div`
	font-size: 16px;
	line-height: 1.5;
	color: var(--secondaryColor);
`;

OwnerCard.Input = styled.input`
	width: 100%;
	font-size: 14px;
	line-height: 143%;
	padding-top: 4px;
	padding-bottom: 4px;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	color: var(--primaryColor);
	margin-top: 20px;
	margin-bottom: ${(props) => (props.mb ? "24px" : {})};
`;

OwnerCard.MessageLabel = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 600;
	color: var(--primaryColor);
`;

OwnerCard.Message = styled.textarea`
	font-size: 12px;
	line-height: 143%;
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	resize: none;
	color: var(--primaryColor);
`;

OwnerCard.CheckboxContainer = styled.div`
	display: flex;
	align-items: flex-start;
	margin-top: 24px;
	margin-bottom: 24px;
`;

OwnerCard.CheckboxContainerInput = styled.input`
	width: 18px;
	height: 18px;
	border: 2px solid #e6e9ec;
`;

OwnerCard.CheckboxContainerLabel = styled.label`
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);
	margin-left: 8px;
`;
