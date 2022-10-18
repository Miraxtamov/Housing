import styled from "styled-components";

export const Container = styled.div``;

Container.Title = styled.div`
	font-size: 18px;
	line-height: 156%;
	margin-bottom: 24px;
	font-weight: 600;
	color: var(--primaryColor);
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 820px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 23px;
	}
`;

Wrapper.Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: 23px;
`;

Wrapper.Row = styled.div`
	display: flex;
	align-items: center;
	gap: 79px;

	.progress {
		width: 188px;

		@media (max-width: 380px) {
			width: 150px;
		}
	}

	@media (max-width: 425px) {
		gap: 40px;
	}

	@media (max-width: 380px) {
		gap: 25px;
	}
`;

Wrapper.Desc = styled.div`
	width: 95px;
	font-size: 14px;
	line-height: 143%;
	color: var(--secondaryColor);

	@media (max-width: 820px) {
		width: 115px;
	}
`;

Wrapper.ReviewCards = styled.div`
	margin-top: 27px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 120px;

	@media (max-width: 950px) {
		gap: 100px;
	}

	@media (max-width: 924px) {
		gap: 50px;
	}

	@media (max-width: 874px) {
		gap: 25px;
	}

	@media (max-width: 790px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
