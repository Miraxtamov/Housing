import React from "react";
import inputHome from "../../assets/icons/inputHome.svg";
import filter from "../../assets/icons/filter.svg";
import search from "../../assets/icons/search.svg";
import Button from "../Generic/Button";
import { Container, FilterSearchContainer } from "./style";

const FilterSearchButton = () => {
	return (
		<Container className="container">
			<FilterSearchContainer>
				<Container.InputWrapper>
					<img className="filter-input-home" src={inputHome} alt="input home" />
					<Container.Input placeholder="Enter an address, neighborhood, city, or ZIP code" />
				</Container.InputWrapper>
				<div className="carousel-flex-btns">
					<Button
						className="carousel-filter-btn"
						type={"secondary"}
						pl={16}
						pr={16}
					>
						<FilterSearchContainer.BtnImg src={filter} alt="filter" />
						Advanced
					</Button>
					<Button
						className="carousel-filter-btn"
						type={"primary"}
						pl={54}
						pr={54}
					>
						<FilterSearchContainer.BtnImg src={search} alt="search" />
						Search
					</Button>
				</div>
			</FilterSearchContainer>
		</Container>
	);
};

export default FilterSearchButton;
