import React from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import inputHome from "../../assets/icons/inputHome.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import AdvancedModal from "../AdvancedModal";
import { Container, FilterSearchContainer } from "./style";
import UseReplace from "../../hooks/useReplace";

const FilterSearchButton = () => {
	const content = <AdvancedModal />;
	const navigate = useNavigate();

	const onChange = ({ target }) => {
		const { name, value } = target;
		navigate(UseReplace(name, value));
	};

	return (
		<Container className="container">
			<FilterSearchContainer>
				<Container.InputWrapper>
					<img className="filter-input-home" src={inputHome} alt="input home" />
					<Container.Input
						onChange={onChange}
						name="region"
						placeholder="Enter an address, neighborhood, city, or ZIP code"
					/>
				</Container.InputWrapper>
				<div className="carousel-flex-btns">
					<Popover trigger="click" placement="bottomRight" content={content}>
						<>
							<FilterSearchContainer.Btn className="carousel-filter-btn-secondary">
								<FilterSearchContainer.BtnImg src={filter} alt="filter" />
								Advanced
							</FilterSearchContainer.Btn>
						</>
					</Popover>
					<FilterSearchContainer.Btn className="carousel-filter-btn-primary">
						<FilterSearchContainer.BtnImg src={search} alt="search" />
						Search
					</FilterSearchContainer.Btn>
				</div>
			</FilterSearchContainer>
		</Container>
	);
};

export default FilterSearchButton;
