import React from "react";
import { Progress } from "antd";
import { Container, Wrapper } from "./style";

const Reviews = () => {
	const progressStyle = {
		format: (percent) => percent / 10,
		status: "active",
		width: "100%",
		size: "small",
	};

	return (
		<Container>
			<Container.Title>4.67 (14 reviews)</Container.Title>
			<Wrapper>
				<Wrapper.Column>
					<Wrapper.Row>
						<Wrapper.Desc>Cleanliness</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={47} />
					</Wrapper.Row>
					<Wrapper.Row>
						<Wrapper.Desc>Communication</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={49} />
					</Wrapper.Row>
					<Wrapper.Row>
						<Wrapper.Desc>Check-in</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={49} />
					</Wrapper.Row>
				</Wrapper.Column>
				<Wrapper.Column>
					<Wrapper.Row>
						<Wrapper.Desc>Accuracy</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={47} />
					</Wrapper.Row>
					<Wrapper.Row>
						<Wrapper.Desc>Location</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={49} />
					</Wrapper.Row>
					<Wrapper.Row>
						<Wrapper.Desc>Value</Wrapper.Desc>
						<Progress className="progress" {...progressStyle} percent={49} />
					</Wrapper.Row>
				</Wrapper.Column>
			</Wrapper>
		</Container>
	);
};

export default Reviews;
