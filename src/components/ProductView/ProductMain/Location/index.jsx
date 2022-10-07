import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapMarker from "../../../../assets/icons/mapMarker.svg";
import { LocationContainer } from "./style";

const Location = ({ house }) => {
	const [center, setCenter] = useState({
		lat: 41.2646,
		lng: 69.2163,
	});

	// const containerStyle = {
	// 	width: "100%",
	// 	height: "416px",

	// 	"media": "@media(max-width: 500px) {
	// 		height: "200px",
	// 	}"
	// };

	const styles = {
		width: "100%",
		height: "416px",
	};

	const onClick = (e) => {
		setCenter({
			lat: e.latLng.lat(),
			lng: e.latLng.lng(),
		});
	};

	return (
		<LocationContainer>
			<LocationContainer.Title>Location</LocationContainer.Title>
			<LocationContainer.Row>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>Address:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.address || "Address"}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>City:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.city || "City"}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>Area:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.area || 0}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
			</LocationContainer.Row>
			<LocationContainer.Row mTmB>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>State/County:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.city || "Country"}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>Zip:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.zipCode || "Zip"}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
				<LocationContainer.RowItem>
					<LocationContainer.SubTitle>Country:</LocationContainer.SubTitle>
					<LocationContainer.SubDesc>
						{house?.country || 0}
					</LocationContainer.SubDesc>
				</LocationContainer.RowItem>
			</LocationContainer.Row>
			{/* Google Map */}
			<LoadScript
				googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
				language="uz"
			>
				<GoogleMap
					onClick={onClick}
					mapContainerStyle={styles}
					center={center}
					zoom={13}
				>
					<Marker icon={mapMarker} position={center} />
				</GoogleMap>
			</LoadScript>
		</LocationContainer>
	);
};

export default Location;
