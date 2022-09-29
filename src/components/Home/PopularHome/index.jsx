import React from "react";
import popularHomeImg from "../../../assets/imgs/home-carousel2.png";
import Button from "../../Generic/Button";
import { Container } from "./style";

const PopularHome = () => {
	return (
		<Container>
			<Container.BgImg src={popularHomeImg} />
			<Container.Texts className="container">
				<Container.TextsTitle>
					Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
				</Container.TextsTitle>
				<Button type="primary" pl={51} pr={51}>
					Read more
				</Button>
			</Container.Texts>
		</Container>
	);
};

export default PopularHome;
