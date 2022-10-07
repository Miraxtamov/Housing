import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	.schedule-button {
		width: 280px;

		@media (max-width: 580px) {
			margin-left: auto;
			margin-right: auto;
		}

		@media (max-width: 330px) {
			width: 275px;
		}
	}
`;

Container.Title = styled.div`
	font-size: 18px;
	font-weight: 600;
	line-height: 156%;
	margin-bottom: 24px;
	color: var(--primaryColor);
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	&.textarea-schedule {
		margin-top: 24px;

		@media (max-width: 580px) {
			gap: 44px;
		}
	}

	@media (max-width: 580px) {
		flex-direction: column;
		gap: 44px;
	}
`;

Wrapper.InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

Wrapper.Input = styled.input`
	width: 100%;
	font-size: 14px;
	line-height: 143%;
	padding-top: 4px;
	padding-bottom: 4px;
	color: var(--primaryColor);
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

Wrapper.InputTitle = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 600;
	margin-bottom: 8px;
	color: var(--primaryColor);
`;

Wrapper.Message = styled.textarea`
	width: 100%;
	height: 100px;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	resize: none;
	margin-bottom: 24px;

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

Wrapper.SubTitle = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 1.5;
	margin-top: 48px;
	margin-bottom: 24px;
	color: var(--primaryColor);
`;
