import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	background-color: var(--primaryColor);
`;

Container.Class = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding-top: 48px;
	padding-bottom: 24px;

	@media (max-width: 840px) {
		gap: 48px;
		flex-wrap: wrap;
	}

	@media (max-width: 525px) {
		flex-direction: column;
	}
`;

export const FooterCol = styled.div``;

FooterCol.Title = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 1.5;
	color: var(--defaultColor);
	margin-bottom: 32px;
`;

FooterCol.ImgInfo = styled.div`
	display: flex;
	align-items: flex-start;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 32px;
	}
`;

FooterCol.Info = styled.div`
	color: var(--defaultColor);
	margin-left: 21px;
	font-size: 14px;
	line-height: 143%;
	width: ${(props) => (props.locationDesc ? "256px" : {})};

	@media (max-width: 525px) {
		width: ${(props) => (props.locationDesc ? "100%" : {})};
	}
`;

FooterCol.SocialMedia = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
`;

FooterCol.SocialMediaLink = styled.a`
	font-size: 14px;
	color: var(--defaultColor);

	.footer-social-media-fas {
		font-size: 14px;
		width: 36px;
		height: 36px;
		padding: 11px;
		color: var(--defaultColor);

		&:hover {
			width: 36px;
			height: 36px;
			padding: 11px;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 3px;
		}
	}
`;

FooterCol.ContainerLink = styled.div`
	font-size: 14px;
	line-height: 143%;
	margin-bottom: 20px;

	&:last-of-type {
		margin-bottom: 0;
	}
`;

FooterCol.ContainerLinkLink = styled.a`
	color: var(--defaultColor);

	&:hover {
		opacity: 0.7;
	}
`;

FooterCol.HR = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const FooterCopyright = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;

	@media (max-width: 700px) {
		flex-direction: column;
		text-align: center;
	}
`;

FooterCopyright.LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;

	@media (max-width: 700px) {
		margin-bottom: 24px;
	}
`;

FooterCopyright.Title = styled.div`
	margin-left: 11px;
	font-weight: 600;
	font-size: 18px;
	color: var(--defaultColor);
`;

FooterCopyright.TextArrowLink = styled.div`
	display: flex;
	align-items: center;

	a {
		height: 45px;
	}

	.footer-copyright-up {
		font-size: 45px;
		padding: 15px;
		color: var(--defaultColor);
		background-color: var(--activeColor);
		margin-left: 73px;
		border-radius: 3px;
		cursor: pointer;

		@media (max-width: 750px) {
			margin-left: 10px;
		}
	}
`;

FooterCopyright.Text = styled.div`
	color: var(--defaultColor);
`;
