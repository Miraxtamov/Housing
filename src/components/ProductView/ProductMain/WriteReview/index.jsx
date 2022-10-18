import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../../Generic/Button";
import { Container, WrapperInput } from "./style";

const WriteReview = () => {
	return (
		<Container>
			<Container.Title>Write a Review</Container.Title>
			<Container.Wrapper className="write-review-wrapper">
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Cleanliness</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Accuracy</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Communication</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Location</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Check-in</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
				<Container.Wrapper className="write-review-desc-star">
					<Container.SubDesc>Value</Container.SubDesc>
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
					<FaStar className="write-review-star" />
				</Container.Wrapper>
			</Container.Wrapper>
			<WrapperInput>
				<WrapperInput.Input placeholder="Name" type="text" />
				<WrapperInput.Input placeholder="Email" type="email" />
			</WrapperInput>
			<WrapperInput>
				<WrapperInput.Message placeholder="Enter Your Message" />
			</WrapperInput>
			<div className="write-review-btn">
				<Button type="primary" pl={48} pr={48}>
					Send your review
				</Button>
			</div>
		</Container>
	);
};

export default WriteReview;
