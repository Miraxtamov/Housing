import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--primaryColor);
  color: var(--defaultColor)
  margin-bottom: 10px;
`;

export const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 14px;
	padding-bottom: 14px;

	-webkit-touch-callout: none; // iOS Safari
	-webkit-user-select: none; // Safari
	-moz-user-select: none; // Old versions of Firefox
	-ms-user-select: none; // Internet Explorer/Edge
	user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

	.hamburger-menu {
		display: none;
		color: var(--defaultColor);
		font-size: 20px;
		cursor: pointer;

		@media (max-width: 800px) {
			display: block;
		}
	}

	.user-login {
		cursor: pointer;
		display: none;
		color: var(--defaultColor);

		&:hover {
			opacity: 0.7;
		}

		&:active {
			transform: scale(0.97);
			opacity: 0.7;
		}

		@media (max-width: 580px) {
			display: block;
		}
	}
`;

Nav.Logo = styled.div`
	display: flex;
	align-items: center;
`;

Nav.LogoLink = styled(NavLink)`
	display: flex;
	align-items: center;
`;

Nav.LogoTitle = styled.div`
	margin-left: 11px;
	font-weight: 600;
	font-size: 18px;
	color: var(--defaultColor);
`;

Nav.Navigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.nav__menu--close {
		position: absolute;
		top: 28px;
		left: 21px;
		font-size: 24px;
		display: none;
		cursor: pointer;
		flex-shrink: 0;
		color: var(--primaryColor);
	}

	@media (max-width: 800px) {
		&.navigation__default {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			overflow-y: scroll;
			flex-direction: column;
			padding: 30px;
			padding-top: 100px;
			padding-bottom: 100px;
			transform: translateX(-100%);
			background-color: var(--defaultColor);
			z-index: 99;
		}

		&.open {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			overflow-y: scroll;
			flex-direction: column;
			padding: 30px;
			padding-top: 100px;
			padding-bottom: 100px;
			transform: translateX(0);
			background-color: var(--defaultColor);
			z-index: 99;
		}

		.nav__menu--close {
			display: block;
		}
	}
`;

Nav.NavigationNavList = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

Nav.NavigationNavSocialLinks = styled.div`
	display: none;

	.nav-list-social-link {
		font-size: 14px;
		font-weight: 400;
		line-height: 16px;
		color: var(--primaryColor);
	}

	@media (max-width: 800px) {
		display: flex;
		align-items: center;
		gap: 37px;

		.nav-list-social-link {
			&:hover {
				color: var(--activeColor);
			}
		}
	}
`;

Nav.NavigationNavItem = styled.li`
	margin-right: 64px;

	&:last-of-type {
		margin-right: 0;
	}

	@media (max-width: 860px) {
		margin-right: 50px;
	}

	@media (max-width: 800px) {
		margin: 0;
		margin-bottom: 24px;

		&:last-of-type {
			margin-bottom: 128px;
		}
	}
`;

Nav.NavigationNavLink = styled(NavLink)`
	font-size: 16px;
	color: var(--defaultColor);
	line-height: 1.5;
	font-weight: 400;

	&.active {
		color: var(--activeColor);
	}

	@media (max-width: 800px) {
		font-size: 18px;
		color: var(--primaryColor);
	}
`;

Nav.NavigationNavLogoLink = styled(NavLink)`
	@media (max-width: 580px) {
		display: none;
	}
`;

Nav.NavigationUserLogin = styled.div`
	cursor: pointer;
	display: none;

	&:hover {
		opacity: 0.7;
	}

	&:active {
		transform: scale(0.97);
		opacity: 0.7;
	}
`;
