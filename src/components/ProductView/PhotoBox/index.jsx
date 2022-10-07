import React from "react";
import houseImg from "../../../assets/imgs/home-carousel1.png";
import noPicture from "../../../assets/imgs/nopicture.jpg";
import { PhotoBoxContainer } from "./style";

const PhotoBox = ({ house }) => {
	return (
		<PhotoBoxContainer className="container">
			<PhotoBoxContainer.Wrapper>
				<div>
					<PhotoBoxContainer.Img
						src={house?.attachments[0]?.imgPath || noPicture}
						alt="product view photo"
					/>
				</div>
				<PhotoBoxContainer.Right>
					<PhotoBoxContainer.Img src={houseImg} alt="product view photo" />
					<PhotoBoxContainer.Img src={houseImg} alt="product view photo" />
					<PhotoBoxContainer.Img src={houseImg} alt="product view photo" />
					<PhotoBoxContainer.Img src={houseImg} alt="product view photo" />
				</PhotoBoxContainer.Right>
			</PhotoBoxContainer.Wrapper>
		</PhotoBoxContainer>
	);
};

export default PhotoBox;
