import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapMarker from "../../assets/icons/mapMarker.svg";
import { Container, NewSectionWrapper } from "./style";

const AddNew = () => {
	const [center, setCenter] = useState({
		lat: 41.2646,
		lng: 69.2163,
	});

	const containerStyle = {
		width: "100%",
		height: "480px",
	};

	const onClick = (e) => {
		setCenter({
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		});
	};

	return (
		<Container className="container">
			<div className="add-new-head-title">Add new property</div>
			<Container.NewSectionContainer>
				<NewSectionWrapper>
					<NewSectionWrapper.Title>Contact information</NewSectionWrapper.Title>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input
							placeholder="Property title*"
							type="text"
						/>
						<NewSectionWrapper.Input placeholder="Type" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper mbn>
						<NewSectionWrapper.Input
							mbm
							placeholder="Property Description*"
							type="text"
						/>
					</NewSectionWrapper.InputWrapper>
				</NewSectionWrapper>
				<NewSectionWrapper>
					<NewSectionWrapper.Title>Additional</NewSectionWrapper.Title>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Property ID" type="text" />
						<NewSectionWrapper.Select>
							<option value="Parent property">Parent property</option>
						</NewSectionWrapper.Select>
						<NewSectionWrapper.Select>
							<option value="Status">Status</option>
						</NewSectionWrapper.Select>
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Label" type="text" />
						<NewSectionWrapper.Input placeholder="Material" type="text" />
						<NewSectionWrapper.Input placeholder="Rooms" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Beds" type="text" />
						<NewSectionWrapper.Input placeholder="Baths" type="text" />
						<NewSectionWrapper.Input placeholder="Garages" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Year bulid" type="text" />
						<NewSectionWrapper.Input
							placeholder="Home area (sqft)"
							type="text"
						/>
						<NewSectionWrapper.Input placeholder="Lot dimensions" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper mbn>
						<NewSectionWrapper.Input
							placeholder="Lot area (sqft)"
							type="text"
						/>
					</NewSectionWrapper.InputWrapper>
				</NewSectionWrapper>
				<NewSectionWrapper>
					<NewSectionWrapper.Title>Price</NewSectionWrapper.Title>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Price ($)" type="text" />
						<NewSectionWrapper.Input placeholder="Price Prefix" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper mbn>
						<NewSectionWrapper.Input placeholder="Price Suffix" type="text" />
						<NewSectionWrapper.Input placeholder="Price Custom" type="text" />
					</NewSectionWrapper.InputWrapper>
				</NewSectionWrapper>
				<NewSectionWrapper>
					<NewSectionWrapper.Title>Location</NewSectionWrapper.Title>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Select>
							<option value="Regions">Regions</option>
						</NewSectionWrapper.Select>
						<NewSectionWrapper.Input
							placeholder="Friendly address"
							type="text"
						/>
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Map location" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper style={{ gap: "0" }}>
						<LoadScript
							googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
							language="uz"
						>
							<GoogleMap
								onClick={onClick}
								mapContainerStyle={containerStyle}
								center={center}
								zoom={13}
							>
								<Marker icon={mapMarker} position={center} />
							</GoogleMap>
						</LoadScript>
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper mbn>
						<NewSectionWrapper.Input placeholder="Latidude" type="text" />
						<NewSectionWrapper.Input placeholder="Logtitude" type="text" />
					</NewSectionWrapper.InputWrapper>
				</NewSectionWrapper>
				<NewSectionWrapper>
					<NewSectionWrapper.Title>Media</NewSectionWrapper.Title>
					<NewSectionWrapper.MediaSubTitle>
						Featured
					</NewSectionWrapper.MediaSubTitle>
					<NewSectionWrapper.ImgWrapper>
						<NewSectionWrapper.MediaItem />
						<NewSectionWrapper.MediaItem />
						<NewSectionWrapper.MediaItem />
						<NewSectionWrapper.MediaItem />
					</NewSectionWrapper.ImgWrapper>
					<NewSectionWrapper.MediaBtn>Upload</NewSectionWrapper.MediaBtn>
					<NewSectionWrapper.MediaSubTitle mtn>
						Gallery
					</NewSectionWrapper.MediaSubTitle>
					<NewSectionWrapper.MediaBtn>Upload</NewSectionWrapper.MediaBtn>
					<NewSectionWrapper.MediaSubTitle>
						Attachment
					</NewSectionWrapper.MediaSubTitle>
					<NewSectionWrapper.MediaDownName>
						<NewSectionWrapper.DownIcon />
						<NewSectionWrapper.DownName>
							test_property.pdf
						</NewSectionWrapper.DownName>
					</NewSectionWrapper.MediaDownName>
					<NewSectionWrapper.MediaBtn>Upload</NewSectionWrapper.MediaBtn>
					<NewSectionWrapper.InputWrapper>
						<NewSectionWrapper.Input placeholder="Video link" type="text" />
					</NewSectionWrapper.InputWrapper>
					<NewSectionWrapper.InputWrapper mbn>
						<NewSectionWrapper.Input placeholder="Virtual tour" type="text" />
					</NewSectionWrapper.InputWrapper>
				</NewSectionWrapper>
				<NewSectionWrapper>
					
				</NewSectionWrapper>
			</Container.NewSectionContainer>
		</Container>
	);
};

export default AddNew;
