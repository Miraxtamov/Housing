import React from "react";
import { icons } from "../../../../utils/icons";
import { FeaturesContainer, Icons } from "./style";

const Features = () => {
	return (
		<FeaturesContainer>
			<FeaturesContainer.Title>Features</FeaturesContainer.Title>
			<FeaturesContainer.Wrapper>
				{icons?.map((value) => {
					return (
						<FeaturesContainer.WrapperBox key={value.id}>
							<Icons.Wrapper>{value.icon}</Icons.Wrapper>
							<FeaturesContainer.WrapperSubTitle>
								{value.subtitle}
							</FeaturesContainer.WrapperSubTitle>
						</FeaturesContainer.WrapperBox>
					);
				})}
			</FeaturesContainer.Wrapper>
		</FeaturesContainer>
	);
};

export default Features;
