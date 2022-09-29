import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;

	@media (max-width: 900px) {
		display: none;
	}

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

		&:after {
			font-size: 15px;
		}

		@media (max-width: 500px) {
			display: none;
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
	}
`;

export const Container = styled.div`
	width: 100%;
	margin-bottom: 88px;

	@media (max-width: 700px) {
		margin-bottom: 50px;
	}

	@media (max-width: 664px) {
		margin-bottom: 32px;
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

export const AllRecommendedCards = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	margin-bottom: 24px;

	@media (max-width: 645px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

AllRecommendedCards.Wrapper = styled.div`
	display: none;
	margin-bottom: 60px;

	@media (max-width: 700px) {
		margin-bottom: 50px;
	}

	@media (max-width: 664px) {
		margin-bottom: 32px;
	}

	@media (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
