import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	background: #f5f7fc;
	padding-top: 48px;
	padding-bottom: 48px;

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
			top: 77%;
			width: 32px;
			height: 32px;
			padding: 8px;
		}
	}

	.prev-button {
		left: 35px;
		right: auto;

		@media (max-width: 1200px) {
			left: 25px;
		}

		@media (max-width: 900px) {
			left: 20px;
		}

		@media (max-width: 500px) {
			left: 120px;
		}

		@media (max-width: 450px) {
			left: 100px;
		}
		
		@media (max-width: 400px) {
			left: 70px;
		}
		
		@media (max-width: 330px) {
			left: 50px;
		}
	}

	.next-button {
		right: 35px;
		left: auto;

		@media (max-width: 1200px) {
			right: 25px;
		}

		@media (max-width: 900px) {
			right: 20px;
		}

		@media (max-width: 500px) {
			right: 120px;
		}

		@media (max-width: 450px) {
			right: 100px;
		}
		
		@media (max-width: 400px) {
			right: 70px;
		}
		
		@media (max-width: 330px) {
			right: 50px;
		}
	}
`;

export const Container = styled.div`
	width: 100%;

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
