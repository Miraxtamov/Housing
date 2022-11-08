import styled from "styled-components";
import { ReactComponent as download } from "../../assets/icons/file.svg";

export const Container = styled.div`
	.add-new-head-title {
		font-size: 28px;
		line-height: 129%;
		font-weight: 600;
		letter-spacing: -0.02em;
		margin-top: 34px;
		margin-bottom: 32px;
		color: var(--primaryColor);
	}
`;

Container.NewSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const NewSectionWrapper = styled.div`
	padding: 24px 30px 48px 30px;
	border: 1px solid #e6e9ec;
	background: var(--defaultColor);
	box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
	border-radius: 3px;
`;

NewSectionWrapper.Title = styled.div`
	font-size: 18px;
	font-weight: 600;
	line-height: 156%;
	margin-bottom: 40px;
	color: var(--primaryColor);
`;

NewSectionWrapper.InputWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 20px;
	margin-bottom: ${(props) => (props.mbn ? "0" : "44px")};

	@media (max-width: 750px) {
		flex-direction: column;
		gap: 44px;
	}
`;

NewSectionWrapper.Input = styled.input`
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	color: var(--primaryColor);
	padding-top: 4px;
	padding-bottom: ${(props) => (props.mbm ? "64px" : "4px")};

	::placeholder {
		color: var(--secondaryColor);
	}

	&:focus {
		border-bottom: 2px solid var(--activeColor);
	}
`;

NewSectionWrapper.Select = styled.select`
	width: 100%;
	font-size: 14px;
	line-height: 143%;
	font-weight: 400;
	border: none;
	outline: none;
	border-bottom: 2px solid #e6e9ec;
	color: var(--secondaryColor);
	padding-top: 4px;
	padding-bottom: 4px;
`;

NewSectionWrapper.MediaSubTitle = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	color: var(--primaryColor);
	margin-bottom: ${(props) => (props.mtn ? "0" : "16px")};
`;

NewSectionWrapper.ImgWrapper = styled.div`
	width: fit-content;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
`;

NewSectionWrapper.MediaItem = styled.div`
	width: 150px;
	height: 150px;
	background: #c4c4c4;
	border-radius: 3px;
`;

NewSectionWrapper.MediaBtn = styled.button`
	font-size: 14px;
	font-weight: 143%;
	line-height: 20px;
	cursor: pointer;
	border-radius: 2px;
	padding: 12px 40px;
	margin-top: 24px;
	margin-bottom: 44px;
	align-items: center;
	border: 1px solid var(--activeColor);
	color: var(--activeColor);
	background-color: var(--defaultColor);
	user-select: none;

	&:active {
		transform: scale(0.98);
		opacity: 0.7;
	}
`;

NewSectionWrapper.MediaDownName = styled.div`
	display: flex;
	align-items: center;
`;

NewSectionWrapper.DownIcon = styled(download)``;

NewSectionWrapper.DownName = styled.div`
	font-size: 14px;
	line-height: 143%;
	font-weight: 400;
	color: var(--secondaryColor);
	margin-left: 8px;
`;
