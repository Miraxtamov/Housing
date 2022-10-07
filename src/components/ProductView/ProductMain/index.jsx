import React from "react";
import Features from "./Features";
import HouseOwner from "./HouseOwner";
import Location from "./Location";
import PropertyDetails from "./PropertyDetails";
import Reviews from "./Reviews";
import ScheduleTour from "./ScheduleTour";
import { Container, ProductViewLeft } from "./style";

const ProductMain = ({ house }) => {
	console.log(house);
	return (
		<Container className="container">
			<ProductViewLeft>
				<ProductViewLeft.Wrapper>
					<ProductViewLeft.Title>
						{house?.address || "Luxury Family Loft by Victoria Park"}
					</ProductViewLeft.Title>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Icons>
							<div className="icon-text-product">
								<ProductViewLeft.Icon bg>
									<ProductViewLeft.Share />
								</ProductViewLeft.Icon>
								<ProductViewLeft.Text className="product-icon-share-save">
									Share
								</ProductViewLeft.Text>
							</div>
							<div className="icon-text-product">
								<ProductViewLeft.Icon bg>
									<ProductViewLeft.Save />
								</ProductViewLeft.Icon>
								<ProductViewLeft.Text className="product-icon-share-save">
									Save
								</ProductViewLeft.Text>
							</div>
						</ProductViewLeft.Icons>
					</ProductViewLeft.Wrapper>
				</ProductViewLeft.Wrapper>

				{/* <ProductViewLeft.Wrapper> */}
				<ProductViewLeft.Description>
					{house?.city || "City"} {house?.country || "Country"}{" "}
					{house?.description || "Description"}
				</ProductViewLeft.Description>
				{/* </ProductViewLeft.Wrapper> */}

				<ProductViewLeft.Wrapper className="product-house-details-prices">
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.Icons>
							<div className="icon-text-product">
								<ProductViewLeft.Bed />
								<ProductViewLeft.Text>
									{house?.houseDetails?.bed || 0} Beds
								</ProductViewLeft.Text>
							</div>
							<div className="icon-text-product">
								<ProductViewLeft.Bath />
								<ProductViewLeft.Text>
									{house?.houseDetails?.bath || 0} Bath
								</ProductViewLeft.Text>
							</div>
							<div className="icon-text-product">
								<ProductViewLeft.Garage />
								<ProductViewLeft.Text>
									{house?.houseDetails?.garage || 0} Garage
								</ProductViewLeft.Text>
							</div>
							<div className="icon-text-product">
								<ProductViewLeft.Ruler />
								<ProductViewLeft.Text>
									{house?.houseDetails?.area || 0} Area
								</ProductViewLeft.Text>
							</div>
							<div className="icon-text-product">
								<ProductViewLeft.Calendar />
								<ProductViewLeft.Text>Year Built: 2001</ProductViewLeft.Text>
							</div>
						</ProductViewLeft.Icons>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.Wrapper className="product-prices">
						<div className="product-prices-price">
							<ProductViewLeft.Sale>{`${house?.price} /mo`}</ProductViewLeft.Sale>
							<ProductViewLeft.Price>{`${house?.salePrice} /mo`}</ProductViewLeft.Price>
						</div>
						<ProductViewLeft.Text>Est. Mortgage</ProductViewLeft.Text>
					</ProductViewLeft.Wrapper>
				</ProductViewLeft.Wrapper>
				<ProductViewLeft.SubTitle>Description</ProductViewLeft.SubTitle>
				<ProductViewLeft.SubDescription>
					Occupying over 8,000 square feet, perched over 1,100 feet in the air
					with breathtaking panoramic 360-degree views of all of New York City
					and the surrounding tri-state area, The 82nd Floor at 432 Park Avenue
					has been completely reimagined by one of the most sought-after design
					houses in London and represents an utterly unique opportunity to own a
					grobally significant property
				</ProductViewLeft.SubDescription>
				<ProductViewLeft.ShowMoreBtn>Show more</ProductViewLeft.ShowMoreBtn>
				{/* Documents */}
				<ProductViewLeft.SubTitle>Documents</ProductViewLeft.SubTitle>
				<ProductViewLeft.Wrapper className="products-main-documents">
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.File />
						<ProductViewLeft.DownloadName>
							test_property.pdf
						</ProductViewLeft.DownloadName>
						<ProductViewLeft.DownloadText>
							DOWNLOAD
						</ProductViewLeft.DownloadText>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.File />
						<ProductViewLeft.DownloadName>
							test_property.pdf
						</ProductViewLeft.DownloadName>
						<ProductViewLeft.DownloadText>
							DOWNLOAD
						</ProductViewLeft.DownloadText>
					</ProductViewLeft.Wrapper>
					<ProductViewLeft.Wrapper>
						<ProductViewLeft.File />
						<ProductViewLeft.DownloadName>
							test_property.pdf
						</ProductViewLeft.DownloadName>
						<ProductViewLeft.DownloadText>
							DOWNLOAD
						</ProductViewLeft.DownloadText>
					</ProductViewLeft.Wrapper>
				</ProductViewLeft.Wrapper>
				<ProductViewLeft.Line />

				{/* Location */}
				<Location house={house} />
				<ProductViewLeft.Line />

				{/* Property Details */}
				<PropertyDetails house={house} />
				<ProductViewLeft.Line />

				{/* Features */}
				<Features />
				<ProductViewLeft.Line />

				{/* Schedule Tour */}
				<ScheduleTour />
				<ProductViewLeft.Line />

				{/* Reviews */}
				<Reviews />
				<ProductViewLeft.Line />
			</ProductViewLeft>
			{/* House owner */}
			<ProductViewLeft.Right>
				<HouseOwner house={house} />
			</ProductViewLeft.Right>
		</Container>
	);
};

export default ProductMain;
