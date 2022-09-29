import styled from "styled-components";

const getType = (type) => {
	switch (type) {
		case "secondary":
			return {
				border: "1px solid #e6e9ec",
				color: "var(--primaryColor)",
			};
		case "primary":
			return {
				background: "var(--activeColor)",
				color: "var(--defaultColor)",
				border: "none",
			};
		default:
			return {
				border: "1px solid #E6E9EC",
				color: "var(--defaultColor)",
			};
	}
};

export const Container = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 143%;
	border-radius: 2px;
	padding-top: 12px;
	padding-bottom: 12px;
	display: inline-block;
	align-items: center;
	display: flex;
	margin-right: ${({ mr }) => `${mr}px`};
	margin-left: ${({ ml }) => `${ml}px`};
	margin-top: ${({ mt }) => `${mt}px`};
	margin-bottom: ${({ mb }) => `${mb}px`};
	padding-right: ${({ pr }) => `${pr}px`};
	padding-left: ${({ pl }) => `${pl}px`};
	padding-top: ${({ pt }) => `${pt}px`};
	padding-bottom: ${({ pb }) => `${pb}px`};
	cursor: pointer;

	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	${({ type }) => getType(type)}

	&:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;
