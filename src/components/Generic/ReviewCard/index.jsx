import React from "react";
import { FaStar } from "react-icons/fa";
import noUser from "../../../assets/imgs/nouser.png";
import { CardContainer } from "./style";

const ReviewsCard = () => {
	return (
		<CardContainer>
			<img className="review-card-img" src={noUser} alt="no user" />
			<CardContainer.Name>Jane Cooper</CardContainer.Name>
			<CardContainer.DateStar>
				<CardContainer.SubDesc>April 6, 2021 at 3:21 AM</CardContainer.SubDesc>
				<CardContainer.StarWrapper>
					<FaStar className="review-card-star" />
					<FaStar className="review-card-star" />
					<FaStar className="review-card-star" />
					<FaStar className="review-card-star" />
					<FaStar className="review-card-star" />
					<div className="review-ball">(5 reviews)</div>
				</CardContainer.StarWrapper>
			</CardContainer.DateStar>
			<CardContainer.Desc>
				Every single thing we tried with John was delicious! Found some awesome
				places we would definitely go back to on our trip. John was also super
				friendly and passionate about Beşiktaş and Istanbul.
			</CardContainer.Desc>
		</CardContainer>
	);
};

export default ReviewsCard;
