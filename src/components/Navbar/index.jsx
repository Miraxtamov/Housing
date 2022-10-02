import React, { useState } from "react";
import {
	FaBars,
	FaSignInAlt,
	FaTimes,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import userLogin from "../../assets/icons/userLogin.svg";
import logo from "../../assets/icons/logo.svg";
import { Container, Nav } from "./style";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import { user } from "../../utils/user";
import { Popover } from "antd";

const Navbar = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const content = () => {
		return user.map((value) => (
			<Nav.NavigationUserNavbar key={value.id}>
				<Nav.NavigationUserLi onClick={() => navigate(value?.path)}>
					{value?.title}
				</Nav.NavigationUserLi>
			</Nav.NavigationUserNavbar>
		));
	};

	return (
		<>
			<Container>
				<Nav className="container">
					<FaBars
						className="nav__menu--open hamburger-menu"
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Nav.LogoLink to="/">
						<img src={logo} alt="logo" />
						<Nav.LogoTitle>Houzing</Nav.LogoTitle>
					</Nav.LogoLink>
					<Nav.Navigation
						className={`navigation__default ${isOpen ? "open" : ""}`}
					>
						<Nav.NavigationNavList>
							{navbar?.map((value) => {
								return (
									<Nav.NavigationNavItem key={value.id}>
										<Nav.NavigationNavLink
											onClick={() => setIsOpen(!isOpen)}
											to={value.path}
										>
											{value.title}
										</Nav.NavigationNavLink>
									</Nav.NavigationNavItem>
								);
							})}
							<Nav.NavigationNavSocialLinks>
								<FaFacebookF className="nav-list-social-link" />
								<FaTwitter className="nav-list-social-link" />
								<FaInstagram className="nav-list-social-link" />
								<FaLinkedinIn className="nav-list-social-link" />
							</Nav.NavigationNavSocialLinks>
						</Nav.NavigationNavList>
						<FaTimes
							className="nav__menu--close"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</Nav.Navigation>
					{localStorage.getItem("token") ? (
						<Popover trigger="click" placement="bottomRight" content={content}>
							<>
								<Nav.NavigationUserLogin src={userLogin} alt="user login" />
							</>
						</Popover>
					) : (
						<>
							<Nav.NavigationNavLogoLink to="signin">
								<Button pl={40} pr={40}>
									Login
								</Button>
							</Nav.NavigationNavLogoLink>
							<FaSignInAlt
								onClick={() => navigate("/signin")}
								className="user-login"
								alt="user login"
							/>
						</>
					)}
				</Nav>
			</Container>
			<Outlet />
		</>
	);
};

export default Navbar;
