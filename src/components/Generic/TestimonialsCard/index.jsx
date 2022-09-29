import React from "react";
import cardUser from "../../../assets/imgs/cardUser.png";
import { CardContainer } from "./style";

const TestimonialsCard = () => {
	return (
		<CardContainer>
			<CardContainer.AboutOpinion>
				“ I believe in lifelong learning and Skola is a great place to learn
				from experts. I've learned a lot and recommend it to all my friends “
			</CardContainer.AboutOpinion>
			<CardContainer.Img src={cardUser} />
			<CardContainer.Name>Marvin McKinney</CardContainer.Name>
			<CardContainer.Jobs>Designer</CardContainer.Jobs>
		</CardContainer>
	);
};

export default TestimonialsCard;
