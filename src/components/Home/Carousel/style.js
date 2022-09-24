import styled from "styled-components";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../../assets/icons/ruler.svg";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	.carousel-flex-btns {
		display: flex;
		gap: 20px;
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 571px;
	position: relative;
	margin-bottom: 96px;

	.swiper-button-prev,
	.swiper-button-next {
		color: var(--defaultColor);
		border-radius: 50%;
		padding: 22px;
		background: rgba(255, 255, 255, 0.2);

		@media (max-width: 480px) {
			display: none;
		}
	}

	.swiper-button-prev:hover,
	.swiper-button-next:hover {
		opacity: 0.7;
	}

	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: 15px;
	}

	.swiper-pagination-bullet {
		background: var(--defaultColor);
		opacity: 1;
	}

	.swiper-horizontal > .swiper-pagination-bullets,
	.swiper-pagination-bullets.swiper-pagination-horizontal,
	.swiper-pagination-custom,
	.swiper-pagination-fraction {
		bottom: 24px;

		@media (max-width: 480px) {
			display: none;
		}
	}

	@media (max-width: 755px) {
		height: 620px;
	}

	@media (max-width: 480px) {
		height: 712px;
	}
`;

Container.Img = styled.img`
	width: 100%;
	height: 571px;
	filter: brightness(35%);

	@media (max-width: 755px) {
		height: 620px;
	}

	@media (max-width: 480px) {
		height: 712px;
	}
`;

Container.CarouselInfo = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media (max-width: 755px) {
		transform: translate(-50%, -70%);
	}

	@media (max-width: 480px) {
		transform: translate(-50%, -100%);
	}

	@media (max-width: 360px) {
		width: 90%;
	}
`;

Container.CarouselInfoTitle = styled.div`
	font-size: 44px;
	font-weight: 700;
	line-height: 1.5;
	letter-spacing: -0.02em;
	color: var(--defaultColor);
	margin-bottom: 8px;

	@media (max-width: 800px) {
		font-size: 40px;
	}

	@media (max-width: 650px) {
		font-size: 36px;
	}

	@media (max-width: 480px) {
		font-size: 32px;
		font-weight: 600;
	}

	@media (max-width: 380px) {
		font-size: 30px;
	}

	@media (max-width: 350px) {
		font-size: 28px;
	}
`;

Container.CarouselInfoDesc = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	color: var(--defaultColor);
	margin-bottom: 24px;

	@media (max-width: 380px) {
		font-size: 14px;
	}
`;

Container.CarouselInfoIconInfo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	gap: 24px;

	@media (max-width: 650px) {
		margin-bottom: 16px;
	}

	@media (max-width: 360px) {
		gap: 16px;
	}

	@media (max-width: 345px) {
		gap: 15px;
	}
`;

Container.IconInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`;

Container.CarouselInfoIconBed = styled(bed)`
	path {
		fill: var(--defaultColor);
	}
`;
Container.CarouselInfoIconBath = styled(bath)`
	path {
		fill: var(--defaultColor);
	}
`;
Container.CarouselInfoIconCar = styled(car)`
	path {
		fill: var(--defaultColor);
	}
`;
Container.CarouselInfoIconRuler = styled(ruler)`
	path {
		fill: var(--defaultColor);
	}
`;

Container.CarouselInfoInfo = styled.div`
	font-weight: 400;
	font-size: 16px;
	line-height: 1.5;
	color: var(--defaultColor);

	@media (max-width: 345px) {
		font-size: 14px;
	}
`;

Container.CarouselInfoPrice = styled.div`
	font-weight: 600;
	font-size: 28px;
	line-height: 129%;
	letter-spacing: -0.02em;
	color: var(--defaultColor);
	margin-bottom: 48px;

	@media (max-width: 500px) {
		margin-bottom: 24px;
	}
`;

export const ContainerFilter = styled.div`
	padding-top: 10px;
	padding-bottom: 10px;
	background-color: var(--defaultColor);

	&.media-none-filter {
		@media (max-width: 755px) {
			display: none;
		}
	}

	&.media-bottom-filter {
		display: none;

		@media (max-width: 755px) {
			display: block;
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translate(-50%, 140%);
			z-index: 2;
			width: fit-content;
			padding: 24px;
		}

		@media (max-width: 580px) {
			transform: translate(-50%, 130%);
		}

		@media (max-width: 480px) {
			transform: translate(-50%, 160%);
		}

		.carousel-flex-btns {
			display: flex;
			gap: 20px;
		}
	}

	.media-bottom-filter-wrapper {
		@media (max-width: 755px) {
			flex-direction: column;
		}
	}
`;

ContainerFilter.InputWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;

	.filter-input-home {
		position: absolute;
		top: 50%;
		left: 26px;
		transform: translate(-50%, -50%);
	}
`;

ContainerFilter.Input = styled.input`
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	padding: 12px 16px 12px 44px;
	border: 1px solid #e6e9ec;
	border-radius: 2px;
	outline: none;
	color: var(--primaryColor);

	::placeholder {
		color: var(--primaryColor);
	}
`;
