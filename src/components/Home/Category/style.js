import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;

	.prev-button,
	.next-button {
		position: absolute;
		top: 50%;
		z-index: 5;
		font-size: 15px;
		color: var(--primaryColor);
		border-radius: 50%;
		width: 45px;
		height: 45px;
		padding: 12px;
		background: var(--defaultColor);
		border: 1px solid #e6e9ec;
		cursor: pointer;
		box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
		filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
			drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
			drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));

		&:hover {
			box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.5);
		}

		@media (max-width: 500px) {
			top: 95%;
			width: 32px;
			height: 32px;
			padding: 8px;
		}
	}

	.prev-button {
		left: -65px;
		right: auto;

		@media (max-width: 1270px) {
			left: -55px;
		}

		@media (max-width: 1250px) {
			left: -45px;
		}

		@media (max-width: 1230px) {
			left: -35px;
		}

		@media (max-width: 1210px) {
			left: -20px;
		}

		@media (max-width: 500px) {
			left: 100px;
		}

		@media (max-width: 400px) {
			left: 80px;
		}

		@media (max-width: 350px) {
			left: 60px;
		}
	}

	.next-button {
		right: -65px;
		left: auto;

		@media (max-width: 1270px) {
			right: -55px;
		}

		@media (max-width: 1250px) {
			right: -45px;
		}

		@media (max-width: 1230px) {
			right: -35px;
		}

		@media (max-width: 1210px) {
			right: -20px;
		}

		@media (max-width: 500px) {
			right: 100px;
		}

		@media (max-width: 400px) {
			right: 80px;
		}

		@media (max-width: 350px) {
			right: 60px;
		}
	}
`;

export const Container = styled.div`
	width: 100%;
	margin-bottom: 96px;

	@media (max-width: 700px) {
		margin-bottom: 50px;
	}

	@media (max-width: 664px) {
		margin-bottom: 64px;
	}

	.swiper {
		padding-bottom: 32px;
	}

	.swiper-wrapper {
		gap: 20px;
	}

	.swiper-pagination-bullet {
		background: var(--activeColor);
	}

	.swiper-horizontal > .swiper-pagination-bullets,
	.swiper-pagination-bullets.swiper-pagination-horizontal,
	.swiper-pagination-custom,
	.swiper-pagination-fraction {
		bottom: 0;
	}
`;
