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
	margin-bottom: 48px;
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

Form.CheckboxRememberForgot = styled.div`
	display: flex;
	justify-content: space-between;
	align-self: flex-start;
	margin-bottom: 28px;
`;

Form.CheckboxRememberForgotCheck = styled.input`
	width: 18px;
	height: 18px;
	border: 2px solid #e6e9ec;
`;

Form.CheckboxRememberForgotLabel = styled.label`
	font-size: 14px;
	line-height: 20px;
	margin-left: 11px;
	color: var(--secondaryColor);
`;

Form.ForgotLink = styled.a`
	color: var(--activeColor);
	text-decoration: underline;
	font-size: 16px;
	line-height: 24px;

	&:hover {
		text-decoration: underline;
	}
`;

Form.Button = styled.button`
	width: 100%;
	font-size: 14px;
	line-height: 143%;
	color: var(--defaultColor);
	background-color: var(--activeColor);
	border: none;
	padding-top: 12px;
	padding-bottom: 12px;
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

Form.Register = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-top: 20px;
	text-align: center;
	color: var(--activeColor);
	font-weight: 500;

	&:hover {
		text-decoration: underline;
	}
`;

Form.Error = styled.div`
	color: red;
	font-size: 14px;
	line-height: 20px;
`;
