import React, { useState } from "react";
import { useQuery } from "react-query";
import { CategoryCard1 } from "./style";
import categoryBg from "../../../assets/imgs/categoryBg.png";
import categoryHouse from "../../../assets/icons/categoryHouse.svg";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title }) => {
	// const [dataItems, setDataItems] = useState();
	const navigate = useNavigate();

	const goto = (id) => {
		navigate(`/properties?category_id=${id}`);
	};

	useQuery(
		["category"],
		() => {
			return fetch(
				"https://houzing-app.herokuapp.com/api/v1/categories/list"
			).then((res) => res.json());
		},
		{
			onSuccess: (res) => {
				// setDataItems(res?.data || []);
				// console.log(res?.data);
			},
			onError: (err) => {
				console.log(err);
			},
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	);

	return (
		<CategoryCard1 onClick={() => goto(title.id)}>
			<CategoryCard1.Img src={categoryBg} alt="category house" />
			<CategoryCard1.SvgTitle>
				<CategoryCard1.Svg src={categoryHouse} />
				<CategoryCard1.Title>{title?.name || "Category"}</CategoryCard1.Title>
			</CategoryCard1.SvgTitle>
		</CategoryCard1>
	);
};

export default CategoryCard;
