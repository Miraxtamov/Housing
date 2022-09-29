import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "../../Generic/CategoryCard";
import { Container, Wrapper } from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import CategoryCardLoader from "../../Generic/CategoryCardLoader";

const Category = () => {
	const [dataItems, setDataItems] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://houzing-app.herokuapp.com/api/v1/categories/list")
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
		<Wrapper>
			<Container>
				<div className="title">Category</div>
				<div className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</div>
				<Swiper
					slidesPerView={4}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={{
						prevEl: ".prev-button",
						nextEl: ".next-button",
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 2,
						},
						735: {
							slidesPerView: 3,
						},
						900: {
							slidesPerView: 4,
						},
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					{loading ? (
						<>
							<SwiperSlide>
								<CategoryCardLoader />
							</SwiperSlide>
							<SwiperSlide>
								<CategoryCardLoader />
							</SwiperSlide>
						</>
					) : (
						dataItems?.map((value) => {
							return (
								<SwiperSlide key={value.id}>
									<CategoryCard title={value} />
								</SwiperSlide>
							);
						})
					)}
				</Swiper>
			</Container>
			<BsChevronLeft className="prev-button" />
			<BsChevronRight className="next-button" />
		</Wrapper>
	);
};

export default Category;
