import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Wrapper } from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonialsCard from "../../Generic/TestimonialsCard";

const Testimonials = () => {
	return (
		<Wrapper>
			<Container className="container">
				<div className="title">Testimonials</div>
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
						700: {
							slidesPerView: 2,
						},
						1050: {
							slidesPerView: 3,
						},
					}}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<TestimonialsCard />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialsCard />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialsCard />
					</SwiperSlide>
				</Swiper>
			</Container>
			<BsChevronLeft className="prev-button" />
			<BsChevronRight className="next-button" />
		</Wrapper>
	);
};

export default Testimonials;
