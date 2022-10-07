import React from "react";
import Button from "../../../Generic/Button";
import { Container, Wrapper } from "./style";

const ScheduleTour = () => {
	return (
		<Container>
			<Container.Title>Schedule A Tour</Container.Title>
			<Wrapper>
				<Wrapper.InputWrapper>
					<Wrapper.InputTitle>Date</Wrapper.InputTitle>
					<Wrapper.Input type="date" placeholder="Date" />
				</Wrapper.InputWrapper>
				<Wrapper.InputWrapper>
					<Wrapper.InputTitle>Time</Wrapper.InputTitle>
					<Wrapper.Input type="time" placeholder="Time" />
				</Wrapper.InputWrapper>
			</Wrapper>
			<Wrapper.SubTitle>Your Information</Wrapper.SubTitle>
			<Wrapper>
				<Wrapper.Input type="text" placeholder="Name" />
				<Wrapper.Input type="tel" placeholder="Phone" />
				<Wrapper.Input type="email" placeholder="Email" />
			</Wrapper>
			<Wrapper className="textarea-schedule">
				<Wrapper.Message placeholder="Enter Your Message" />
			</Wrapper>
			<div className="schedule-button">
				<Button mr={0} pl={48} pr={48} type="primary">
					Submit a tour request
				</Button>
			</div>
		</Container>
	);
};

export default ScheduleTour;
