import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhotoBox from "./PhotoBox";
import ProductMain from "./ProductMain";
import { Container } from "./style";

const ProductView = () => {
	const [house, setHouse] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch(
			`https://houzing-app.herokuapp.com/api/v1/houses/${id?.replace(":", "")}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setHouse(res?.data));
	}, [id]);

	return (
		<Container>
			<PhotoBox house={house} />
			<ProductMain house={house} />
		</Container>
	);
};

export default ProductView;
