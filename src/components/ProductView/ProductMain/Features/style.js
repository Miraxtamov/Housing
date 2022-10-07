import styled from "styled-components";
import { ReactComponent as airConditioner } from "../../../../assets/icons/airConditioner.svg";
import { ReactComponent as barbeque } from "../../../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../../../assets/icons/dryer.svg";
import { ReactComponent as dumbbell } from "../../../../assets/icons/dumbbell.svg";
import { ReactComponent as lawn } from "../../../../assets/icons/lawn.svg";
import { ReactComponent as laundry } from "../../../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../../../assets/icons/microwave.svg";
import { ReactComponent as outdoorShower } from "../../../../assets/icons/outdoorShower.svg";
import { ReactComponent as refrigerator } from "../../../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../../../assets/icons/sauna.svg";
import { ReactComponent as swimmer } from "../../../../assets/icons/swimmer.svg";
import { ReactComponent as tvCable } from "../../../../assets/icons/tvCabel.svg";
import { ReactComponent as liquidSoap } from "../../../../assets/icons/liquidSoap.svg";
import { ReactComponent as wifi } from "../../../../assets/icons/wifi.svg";
import { ReactComponent as blinds } from "../../../../assets/icons/blinds.svg";
import { ReactComponent as diningRoom } from "../../../../assets/icons/diningRoom.svg";

export const FeaturesContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

FeaturesContainer.Title = styled.div`
	font-size: 18px;
	line-height: 156%;
	font-weight: 600;
	margin-bottom: 24px;
	color: var(--primaryColor);
`;

FeaturesContainer.Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 30px 0;

	@media (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

FeaturesContainer.WrapperBox = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

FeaturesContainer.WrapperSubTitle = styled.div`
	font-size: 14px;
	font-weight: 400;
	line-height: 143%;
	color: var(--secondaryColor);
`;

export const Icons = styled.div``;

Icons.Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 60px;
	background: ${({ bg }) => (bg ? "#F6F8F9" : {})};
`;

Icons.AirConditioner = styled(airConditioner)``;
Icons.Barbecue = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(dumbbell)``;
Icons.Lawn = styled(lawn)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.Outdoor = styled(outdoorShower)``;
Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.Swimmer = styled(swimmer)``;
Icons.TvCable = styled(tvCable)``;
Icons.Liquid = styled(liquidSoap)``;
Icons.Wifi = styled(wifi)``;
Icons.DiningRoom = styled(diningRoom)``;
Icons.Blinds = styled(blinds)``;
