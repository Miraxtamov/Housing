import React from "react";
import { ChooseCards, Container } from "./style";

const Choose = () => {
	return (
		<Container>
			<div className="container">
				<div className="title">Why Choose Us?</div>
				<div className="description">
					Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
				</div>
				<ChooseCards>
					<ChooseCards.Card>
						<ChooseCards.CardDiscord />
						<ChooseCards.CardTitle>Trusted By Thousands</ChooseCards.CardTitle>
						<ChooseCards.CardDesc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCards.CardDesc>
					</ChooseCards.Card>
					<ChooseCards.Card>
						<ChooseCards.CardHouse />
						<ChooseCards.CardTitle>
							Wide Renge Of Properties
						</ChooseCards.CardTitle>
						<ChooseCards.CardDesc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCards.CardDesc>
					</ChooseCards.Card>
					<ChooseCards.Card>
						<ChooseCards.CardCalculator />
						<ChooseCards.CardTitle>Financing Made Easy</ChooseCards.CardTitle>
						<ChooseCards.CardDesc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCards.CardDesc>
					</ChooseCards.Card>
					<ChooseCards.Card>
						<ChooseCards.CardMaps />
						<ChooseCards.CardTitle>See Neighborhoods</ChooseCards.CardTitle>
						<ChooseCards.CardDesc>
							With over 1 million+ homes for sale available on the website,
							Trulia can match you with a house you will want to call home.
						</ChooseCards.CardDesc>
					</ChooseCards.Card>
				</ChooseCards>
			</div>
		</Container>
	);
};

export default Choose;
