import React from "react";
import { Container } from "./style";

const Button = ({ children, type, mr, ml, mb, mt, pr, pl, pb, pt, w }) => {
	return (
		<Container
			mr={mr}
			ml={ml}
			mb={mb}
			mt={mt}
			pr={pr}
			pl={pl}
			pb={pb}
			pt={pt}
			w={w}
			type={type}
			children={children}
		>
			{children}
		</Container>
	);
};

export default Button;
