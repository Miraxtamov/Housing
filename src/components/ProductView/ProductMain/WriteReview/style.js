import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 96px;

	@media (max-width: 450px) {
		margin-bottom: 64px;
	}

	.write-review-btn {
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
	line-height: 156%;
	font-weight: 600;
	color: var(--primaryColor);
	margin-bottom: 34px;

	@media (max-width: 450px) {
		margin-bottom: 24px;
	}
`;

Container.Wrapper = styled.div`
	display: flex;
	align-items: center;

	&.write-review-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 24px;

		@media (max-width: 700px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.write-review-star {
		font-size: 10px;
		line-height: 11px;
		color: #cab877;
		margin-left: 5px;
	}
`;

Container.SubDesc = styled.div`
	width: 115px;
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);
	margin-right: 74px;
`;

export const WrapperInput = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	@media (max-width: 520px) {
		flex-direction: column;
	}
`;

WrapperInput.Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

WrapperInput.Input = styled.input`
	width: 100%;
	font-size: 14px;
	line-height: 143%;
	padding-top: 4px;
	padding-bottom: 4px;
	color: var(--primaryColor);
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	margin-top: 47px;

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}

	&::placeholder {
		color: var(--secondaryColor);
	}

	@media (max-width: 520px) {
		margin-top: 40px;
	}
`;

WrapperInput.Message = styled.textarea`
	width: 100%;
	height: 100px;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	resize: none;
	margin-bottom: 24px;
	margin-top: 24px;
	color: var(--primaryColor);

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}

	&::placeholder {
		color: var(--secondaryColor);
	}

	@media (max-width: 520px) {
		margin-top: 40px;
	}
`;
