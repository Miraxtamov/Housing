import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Generic/Card";
import { AllRecommendedCards, Container, Wrapper } from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Button from "../../Generic/Button";
import CardLoader from "../../Generic/CardLoader";

const RecommendedHome = () => {
	const [dataItems, setDataItems] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://houzing-app.herokuapp.com/api/v1/houses/list")
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
		<>
			<Wrapper>
				<Container>
					<div className="title">Recent Properties for Rent</div>
					<div className="description">
						Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
					</div>
					<Swiper
						slidesPerView={3}
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
								slidesPerView: 1,
							},
							665: {
								slidesPerView: 2,
							},
							940: {
								slidesPerView: 3,
							},
						}}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						{loading ? (
							<>
								<SwiperSlide>
									<CardLoader />
								</SwiperSlide>
								<SwiperSlide>
									<CardLoader />
								</SwiperSlide>
							</>
						) : (
							dataItems?.map((value) => {
								return (
									<SwiperSlide key={value.id}>
										<Card info={value} />
									</SwiperSlide>
								);
							})
						)}
					</Swiper>
				</Container>
				<BsChevronLeft className="prev-button" />
				<BsChevronRight className="next-button" />
			</Wrapper>
			<AllRecommendedCards.Wrapper>
				<div className="title">Recommended</div>
				<div className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</div>
				<AllRecommendedCards>
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
						</>
					) : (
						dataItems?.map((value) => {
							return <Card key={value.id} info={value} />;
						})
					)}
				</AllRecommendedCards>
				<Button type="primary" pl={84} pr={84}>
					Show More
				</Button>
			</AllRecommendedCards.Wrapper>
		</>
	);
};

export default RecommendedHome;
