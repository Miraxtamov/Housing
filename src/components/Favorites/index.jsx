import React, { useEffect, useState } from "react";
import Button from "../Generic/Button";
import Card from "../Generic/Card";
import CardLoader from "../Generic/CardLoader";
import { CardContainer, Container } from "./style";

const Favorites = () => {
	const [dataItems, setDataItems] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://houzing-app.herokuapp.com/api/v1/houses/getAll/favouriteList`,
			{
				method: "GET",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		)
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
	}, []);

	return (
		<Container className="container">
			<Container.Title className="title">Favorite</Container.Title>
			<Container.Description className="description">
				Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
			</Container.Description>
			<CardContainer>
				{loading ? (
					<>
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
			</CardContainer>
			{dataItems?.length ? (
				<Button pl={84} pr={84} type="primary">
					Show More
				</Button>
			) : (
				<CardContainer.NoData>No Data Found</CardContainer.NoData>
			)}
		</Container>
	);
};

export default Favorites;
