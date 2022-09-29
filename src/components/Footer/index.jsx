import React from "react";
import logo from "../../assets/icons/logo.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import { BsChevronUp } from "react-icons/bs";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { Container, FooterCol, FooterCopyright } from "./style";

const Footer = () => {
	return (
		<Container>
			<Container.Class className="container">
				<FooterCol>
					<FooterCol.Title>Contact Us</FooterCol.Title>
					<FooterCol.ImgInfo>
						<img src={location} alt="location" />
						<FooterCol.Info locationDesc>
							329 Queensberry Street, North Melbourne VIC 3051, Australia.
						</FooterCol.Info>
					</FooterCol.ImgInfo>
					<FooterCol.ImgInfo>
						<img src={phone} alt="phone" />
						<FooterCol.Info>123 456 7890</FooterCol.Info>
					</FooterCol.ImgInfo>
					<FooterCol.ImgInfo>
						<img src={email} alt="email" />
						<FooterCol.Info>support@houzing.com</FooterCol.Info>
					</FooterCol.ImgInfo>
					<FooterCol.SocialMedia>
						<FooterCol.SocialMediaLink href="#">
							<FaFacebookF className="footer-social-media-fas" />
						</FooterCol.SocialMediaLink>
						<FooterCol.SocialMediaLink href="#">
							<FaTwitter className="footer-social-media-fas" />
						</FooterCol.SocialMediaLink>
						<FooterCol.SocialMediaLink href="#">
							<FaInstagram className="footer-social-media-fas" />
						</FooterCol.SocialMediaLink>
						<FooterCol.SocialMediaLink href="#">
							<FaLinkedinIn className="footer-social-media-fas" />
						</FooterCol.SocialMediaLink>
					</FooterCol.SocialMedia>
				</FooterCol>
				<FooterCol>
					<FooterCol.Title>Discover</FooterCol.Title>
					<div>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Chicago
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Los Angeles
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Miami
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								New York
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
					</div>
				</FooterCol>
				<FooterCol>
					<FooterCol.Title>Lists by Category</FooterCol.Title>
					<div>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Apartments
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Condos
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Houses
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Offices
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Retail
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Villas
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
					</div>
				</FooterCol>
				<FooterCol>
					<FooterCol.Title>Lists by Category</FooterCol.Title>
					<div>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								About Us
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Terms & Conditions
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Support Center
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
						<FooterCol.ContainerLink>
							<FooterCol.ContainerLinkLink href="#">
								Contact Us
							</FooterCol.ContainerLinkLink>
						</FooterCol.ContainerLink>
					</div>
				</FooterCol>
			</Container.Class>
			<FooterCol.HR />
			<FooterCopyright className="container">
				<FooterCopyright.LogoLink to="/">
					<img src={logo} alt="logo" />
					<FooterCopyright.Title>Houzing</FooterCopyright.Title>
				</FooterCopyright.LogoLink>
				<FooterCopyright.TextArrowLink>
					<FooterCopyright.Text>
						Copyright © {new Date().getFullYear()} CreativeLayers. All Right
						Reserved.
					</FooterCopyright.Text>
					<a href="#">
						<BsChevronUp className="footer-copyright-up" />
					</a>
				</FooterCopyright.TextArrowLink>
			</FooterCopyright>
		</Container>
	);
};

export default Footer;
