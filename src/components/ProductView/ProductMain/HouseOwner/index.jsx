import React from "react";
import noUser from "../../../../assets/imgs/nouser.png";
import Button from "../../../Generic/Button";
import { OwnerCard } from "./style";

const HouseOwner = ({ house }) => {
	return (
		<OwnerCard>
			<OwnerCard.PersonInfo>
				<OwnerCard.Img src={noUser} alt="owner img" />
				<div>
					<OwnerCard.Names>
						{`${house?.user?.firstname} ${house?.user?.lastname}`}
					</OwnerCard.Names>
					<OwnerCard.PhoneNumber>(123)456-7890</OwnerCard.PhoneNumber>
				</div>
			</OwnerCard.PersonInfo>
			<OwnerCard.Input type="text" placeholder="Name" />
			<OwnerCard.Input type="tel" placeholder="Phone" />
			<OwnerCard.Input mb type="email" placeholder="Email" />
			<OwnerCard.MessageLabel>Message</OwnerCard.MessageLabel>
			<OwnerCard.Message defaultValue="Hello, I am interested in [New Apartment]" />
			<OwnerCard.CheckboxContainer>
				<OwnerCard.CheckboxContainerInput id="person" type="checkbox" />
				<OwnerCard.CheckboxContainerLabel htmlFor="person">
					By submitting this form I agree to Terms of Use
				</OwnerCard.CheckboxContainerLabel>
			</OwnerCard.CheckboxContainer>
			<Button type={"primary"}>Send request</Button>
		</OwnerCard>
	);
};

export default HouseOwner;
