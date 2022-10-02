import React from "react";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import inputHome from "../../../assets/icons/inputHome.svg";
import filter from "../../../assets/icons/filter.svg";
import search from "../../../assets/icons/search.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import homeCarousel1 from "../../../assets/imgs/home-carousel1.png";
import homeCarousel2 from "../../../assets/imgs/home-carousel2.png";
import Button from "../../Generic/Button";
import AdvancedModal from "../../AdvancedModal";
import { Container, ContainerFilter, Wrapper } from "./style";
import { FilterSearchContainer } from "../../FilterSearchButton/style";
import UseReplace from "../../../hooks/useReplace";

const CarouselSec = () => {
	const content = <AdvancedModal />;
	const navigate = useNavigate();

	const onChange = ({ target }) => {
		const { name, value } = target;
		navigate(UseReplace(name, value));
	};

	return (
		<Wrapper>
			<ContainerFilter className="container media-none-filter">
				<FilterSearchContainer>
					<ContainerFilter.InputWrapper>
						<img
							className="filter-input-home"
							src={inputHome}
							alt="input home"
						/>
						<ContainerFilter.Input
							onChange={onChange}
							name="region"
							placeholder="Enter an address, neighborhood, city, or ZIP code"
						/>
					</ContainerFilter.InputWrapper>
					<div className="carousel-flex-btns">
						<Popover trigger="click" placement="bottomRight" content={content}>
							<>
								<Button
									className="carousel-filter-btn"
									type={"secondary"}
									pl={16}
									pr={16}
								>
									<FilterSearchContainer.BtnImg src={filter} alt="filter" />
									Advanced
								</Button>
							</>
						</Popover>
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
			</ContainerFilter>
			<Container>
				<Swiper
					slidesPerView={1}
					loop={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<Container.Img src={homeCarousel1} alt="Carousel house" />
						<Container.CarouselInfo>
							<Container.CarouselInfoTitle>
								Skyper Pool Partment
							</Container.CarouselInfoTitle>
							<Container.CarouselInfoDesc>
								112 Glenwood Ave Hyde Park, Boston, MA
							</Container.CarouselInfoDesc>
							<Container.CarouselInfoIconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconBed />
									<Container.CarouselInfoInfo>
										4 beds
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconBath />
									<Container.CarouselInfoInfo>
										5 baths
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconCar />
									<Container.CarouselInfoInfo>
										1 Garage
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconRuler />
									<Container.CarouselInfoInfo>
										1200 Sq Ft
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
							</Container.CarouselInfoIconInfo>
							<Container.CarouselInfoPrice>
								$5,250/mo
							</Container.CarouselInfoPrice>
							<Button pl={51} pr={51}>
								Read more
							</Button>
						</Container.CarouselInfo>
					</SwiperSlide>
					<SwiperSlide>
						<Container.Img src={homeCarousel2} alt="Carousel house" />
						<Container.CarouselInfo>
							<Container.CarouselInfoTitle>
								New Apartment Nice Wiew
							</Container.CarouselInfoTitle>
							<Container.CarouselInfoDesc>
								Quincy St, Brooklyn, NY, USA
							</Container.CarouselInfoDesc>
							<Container.CarouselInfoIconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconBed />
									<Container.CarouselInfoInfo>
										2 beds
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconBath />
									<Container.CarouselInfoInfo>
										1 baths
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconCar />
									<Container.CarouselInfoInfo>
										1 Garage
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
								<Container.IconInfo>
									<Container.CarouselInfoIconRuler />
									<Container.CarouselInfoInfo>
										2400 Sq Ft
									</Container.CarouselInfoInfo>
								</Container.IconInfo>
							</Container.CarouselInfoIconInfo>
							<Container.CarouselInfoPrice>
								$7,250/mo
							</Container.CarouselInfoPrice>
							<Button pl={51} pr={51}>
								Read more
							</Button>
						</Container.CarouselInfo>
					</SwiperSlide>
				</Swiper>
			</Container>
			<ContainerFilter className="container media-bottom-filter">
				<FilterSearchContainer className="media-bottom-filter-wrapper">
					<ContainerFilter.InputWrapper>
						<img
							className="filter-input-home"
							src={inputHome}
							alt="input home"
						/>
						<ContainerFilter.Input
							onChange={onChange}
							name="region"
							placeholder="Enter an address, neighborhood, city, or ZIP code"
						/>
					</ContainerFilter.InputWrapper>
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
			</ContainerFilter>
		</Wrapper>
	);
};

export default CarouselSec;
