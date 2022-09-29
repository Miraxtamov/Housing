import React from "react";
import CarouselSec from "./Carousel";
import Category from "./Category";
import Choose from "./Choose";
import PopularHome from "./PopularHome";
import RecentPropertiesRent from "./RecentPropertiesRent";
import RecommendedHome from "./Recommended";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<>
			<CarouselSec />
			<div className="container">
				<RecommendedHome />
			</div>
			<Choose />
			<div className="container">
				<Category />
			</div>
			<PopularHome />
			<div className="container">
				<RecentPropertiesRent />
			</div>
			<Testimonials />
		</>
	);
};

export default Home;
