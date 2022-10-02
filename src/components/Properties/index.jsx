import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterSearchButton from "../FilterSearchButton";
import Button from "../Generic/Button";
import Card from "../Generic/Card";
import CardLoader from "../Generic/CardLoader";
import {
	CardResultSortByButton,
	CardsContainer,
	PropertiesContainer,
} from "./style";

const Properties = () => {
	const { search } = useLocation();
	const [dataItems, setDataItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list${search || ""}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error("unable to fetch data");
				} else return res.json();
			})
			.then((result) => {
				setDataItems(result?.data);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [search]);

	return (
		<>
			<FilterSearchButton />
			<PropertiesContainer className="container">
				<PropertiesContainer.Title>
					{dataItems?.category?.name || "Properties"}
				</PropertiesContainer.Title>
				<PropertiesContainer.Desc>
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</PropertiesContainer.Desc>
				<PropertiesContainer.CardResultSortBy>
					<PropertiesContainer.CardResultSortByResult>
						<PropertiesContainer.SpanBold>
							{dataItems?.length || 0}
						</PropertiesContainer.SpanBold>
						results
					</PropertiesContainer.CardResultSortByResult>
					<CardResultSortByButton>
						<CardResultSortByButton.Select>
							<CardResultSortByButton.Option value="Sort by: Newest Listings">
								Sort by: Newest Listings
							</CardResultSortByButton.Option>
						</CardResultSortByButton.Select>
					</CardResultSortByButton>
				</PropertiesContainer.CardResultSortBy>
				<CardsContainer>
					<CardsContainer.Cards>
						{loading ? (
							<>
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
								<CardLoader />
							</>
						) : dataItems?.length ? (
							dataItems?.map((value) => {
								return <Card key={value.id} info={value} />;
							})
						) : (
							""
						)}
					</CardsContainer.Cards>
					{dataItems?.length ? (
						<Button pl={84} pr={84} type="primary">
							Show More
						</Button>
					) : (
						<CardsContainer.CardsNoData>No Data Found</CardsContainer.CardsNoData>
					)}
				</CardsContainer>
			</PropertiesContainer>
		</>
	);
};

export default Properties;
