import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 64px;
	padding-bottom: 64px;
`;

export const Form = styled.form`
	width: 580px;
	padding: 24px 30px 48px 30px;
	background: var(--defaultColor);
	border: 1px solid #e6e9ec;
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;

	@media (max-width: 660px) {
		width: 100%;
	}
`;

Form.Title = styled.div`
	color: var(--primaryColor);
	font-weight: 600;
	font-size: 18px;
	line-height: 28px;
	margin-bottom: 44px;
`;

Form.Input = styled.input`
	color: var(--primaryColor);
	outline: none;
	border: none;
	border-bottom: 2px solid #e6e9ec;

	&::placeholder {
		color: var(--secondaryColor);
		line-height: 20px;
	}

	padding: 4px 4px 4px 0;
	color: var(--primaryColor);
	width: 100%;
	font-size: 14px;

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

Form.Button = styled.button`
	font-size: 14px;
	line-height: 143%;
	width: 100%;
	background-color: var(--activeColor);
	color: var(--defaultColor);
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
	border-radius: 2px;
	cursor: pointer;
	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-khtml-user-select: none; // Konqueror HTML
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	&:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

Form.Error = styled.div`
	font-size: 14px;
	line-height: 143%;
	color: red;
`;
