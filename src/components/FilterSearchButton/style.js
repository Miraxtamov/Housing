import styled from "styled-components";

export const Container = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;
	background-color: var(--defaultColor);

	.carousel-flex-btns {
		display: flex;
		gap: 20px;
	}
`;

export const FilterSearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

Container.InputWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;

	.filter-input-home {
		position: absolute;
		top: 50%;
		left: 26px;
		transform: translate(-50%, -50%);
	}
`;

Container.Input = styled.input`
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	padding: 12px 16px 12px 44px;
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	outline: none;
	color: var(--primaryColor);

	::placeholder {
		color: var(--primaryColor);
	}
`;

FilterSearchContainer.BtnImg = styled.img`
	margin-right: 8px;
`;

FilterSearchContainer.Btn = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 143%;
	border-radius: 2px;
	padding-top: 12px;
	padding-bottom: 12px;
	display: flex;
	align-items: center;
	cursor: pointer;

	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	&:active {
		transform: scale(0.98);
		opacity: 0.7;
	}

	&.carousel-filter-btn-secondary {
		border: 1px solid #e6e9ec;
		padding-left: 12px;
		padding-right: 12px;

		@media (max-width: 420px) {
			padding-left: 18px;
			padding-right: 18px;
		}

		@media (max-width: 380px) {
			padding-left: 15px;
			padding-right: 15px;
		}

		@media (max-width: 350px) {
			padding-left: 15px;
			padding-right: 15px;
		}

		@media (max-width: 340px) {
			padding-left: 10px;
			padding-right: 10px;
		}
	}

	&.carousel-filter-btn-primary {
		background: var(--activeColor);
		border: 1px solid var(--activeColor);
		padding-left: 54px;
		padding-right: 54px;
		color: var(--defaultColor);

		@media (max-width: 420px) {
			padding-left: 32px;
			padding-right: 32px;
		}

		@media (max-width: 380px) {
			padding-left: 25px;
			padding-right: 25px;
		}

		@media (max-width: 350px) {
			padding-left: 15px;
			padding-right: 15px;
		}
	}
`;
