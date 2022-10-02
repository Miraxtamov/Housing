import React from "react";
import noPicture from "../../../assets/imgs/nopicture.jpg";
import cardUser from "../../../assets/imgs/cardUser.png";
import { CardItem } from "./style";

const Card = ({ info }) => {
	const cardTitle = info?.address || "Title";

	const cardDesc =
		(info?.name || "name") +
		" " +
		(info?.address || "address") +
		" " +
		(info?.city || "City") +
		" " +
		(info?.country || "Country");

	return (
		<>
			<CardItem>
				<CardItem.Img
					src={info?.attachments[0]?.imgPath || noPicture}
					alt="card img"
				/>
				<CardItem.Featured>FEATURED</CardItem.Featured>
				<CardItem.ForSale>FOR SALE</CardItem.ForSale>
				<CardItem.UserContainer>
					<img src={cardUser} alt="user" />
				</CardItem.UserContainer>
				<CardItem.Info>
					<CardItem.InfoTitle>
						{cardTitle.length > 20 ? cardTitle.slice(0, 20) + "..." : cardTitle}
					</CardItem.InfoTitle>
					<CardItem.InfoDescription>
						{cardDesc.length > 25 ? cardDesc.slice(0, 25) + "..." : cardDesc}
					</CardItem.InfoDescription>
					<CardItem.InfoIcons>
						<CardItem.InfoIconsCon>
							<CardItem.InfoIconsIconBed />
							<CardItem.InfoIconsTitle>
								{info?.houseDetails?.beds || 0} Beds
							</CardItem.InfoIconsTitle>
						</CardItem.InfoIconsCon>
						<CardItem.InfoIconsCon>
							<CardItem.InfoIconsIconBath />
							<CardItem.InfoIconsTitle>
								{info?.houseDetails?.bath || 0} Baths
							</CardItem.InfoIconsTitle>
						</CardItem.InfoIconsCon>
						<CardItem.InfoIconsCon>
							<CardItem.InfoIconsIconCar />
							<CardItem.InfoIconsTitle>
								{info?.houseDetails?.garage || 0} Garage
							</CardItem.InfoIconsTitle>
						</CardItem.InfoIconsCon>
						<CardItem.InfoIconsCon>
							<CardItem.InfoIconsIconRuler />
							<CardItem.InfoIconsTitle>
								{info?.houseDetails?.area || 0} Sq Ft
							</CardItem.InfoIconsTitle>
						</CardItem.InfoIconsCon>
					</CardItem.InfoIcons>
				</CardItem.Info>
				<CardItem.Line />
				<CardItem.FooterInfo>
					<CardItem.FooterInfoPrices>
						<CardItem.Discount>{info?.price || 0}/mo</CardItem.Discount>
						<CardItem.Price>{info?.salePrice || 0}/mo</CardItem.Price>
					</CardItem.FooterInfoPrices>
					<CardItem.FooterInfoIcons>
						<CardItem.FooterInfoIconsResize />
						<CardItem.FooterInfoIconsHeart />
					</CardItem.FooterInfoIcons>
				</CardItem.FooterInfo>
			</CardItem>
		</>
	);
};

export default Card;
