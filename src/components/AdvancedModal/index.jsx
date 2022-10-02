import React from "react";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hooks/useReplace";
import Button from "../Generic/Button";
import {
	ModalAddressContainer,
	ModalButtonContainer,
	ModalContainer,
} from "./style";

const AdvancedModal = () => {
	const navigate = useNavigate();

	const onChange = ({ target }) => {
		const { name, value } = target;
		navigate(UseReplace(name, value));
	};

	return (
		<ModalContainer>
			<ModalContainer.Title>Address</ModalContainer.Title>
			<ModalAddressContainer>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="country"
					placeholder="Country"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="region"
					placeholder="Region"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="city"
					placeholder="City"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="zip-code"
					placeholder="Zip code"
				/>
			</ModalAddressContainer>
			<ModalContainer.Title>Apartment info</ModalContainer.Title>
			<ModalAddressContainer>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="rooms"
					placeholder="Rooms"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="size"
					placeholder="Size"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="sort"
					placeholder="Sort"
				/>
			</ModalAddressContainer>
			<ModalContainer.Title>Price</ModalContainer.Title>
			<ModalAddressContainer>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="max-price"
					placeholder="Max-price"
				/>
				<ModalAddressContainer.Input
					onChange={onChange}
					name="min-price"
					placeholder="Min-price"
				/>
			</ModalAddressContainer>
			<ModalButtonContainer>
				<Button type="secondary" pl={40} pr={40}>
					Cancel
				</Button>
				<Button type="primary" pl={38} pr={38}>
					Submit
				</Button>
			</ModalButtonContainer>
		</ModalContainer>
	);
};

export default AdvancedModal;
