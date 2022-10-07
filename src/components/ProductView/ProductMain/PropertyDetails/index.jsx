import React from "react";
import { PropertyDetailContainer, Wrapper } from "./style";

const PropertyDetails = ({ house }) => {
	return (
		<PropertyDetailContainer>
			<PropertyDetailContainer.Title>
				Property Details
			</PropertyDetailContainer.Title>
			<Wrapper>
				<Wrapper.Col>
					<Wrapper.Box>
						<Wrapper.SubTitle>Property ID:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.id || "no id"}</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Price:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.price || 0}</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Property Size:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.area || 10} Sq Ft</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Year Bulit:</Wrapper.SubTitle>
						<Wrapper.SubDesc>
							{house?.houseDetails?.yearBuilt || "No information provided"}
						</Wrapper.SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
				<Wrapper.Col>
					<Wrapper.Box>
						<Wrapper.SubTitle>Bedrooms:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.houseDetails?.beds || 0}</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Bathrooms:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.houseDetails?.bath || 0}</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Garage:</Wrapper.SubTitle>
						<Wrapper.SubDesc>
							{house?.houseDetails?.garage || 0}
						</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Garage size:</Wrapper.SubTitle>
						<Wrapper.SubDesc>{house?.houseDetails?.area || 0}</Wrapper.SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
				<Wrapper.Col>
					<Wrapper.Box>
						<Wrapper.SubTitle>Property Type:</Wrapper.SubTitle>
						<Wrapper.SubDesc>Apartment</Wrapper.SubDesc>
					</Wrapper.Box>
					<Wrapper.Box>
						<Wrapper.SubTitle>Property Status:</Wrapper.SubTitle>
						<Wrapper.SubDesc>For Sale</Wrapper.SubDesc>
					</Wrapper.Box>
				</Wrapper.Col>
			</Wrapper>
		</PropertyDetailContainer>
	);
};

export default PropertyDetails;
