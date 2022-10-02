import Favorites from "../components/Favorites";
import Generic from "../pages/Generic";

export const user = [
	{ id: 1, title: "My profile", path: "/profile", element: <Generic /> },
	{
		id: 2,
		title: "My Properties",
		path: "/myproperties",
		element: <Generic />,
	},
	{ id: 3, title: "Favorites", path: "/favorites", element: <Favorites /> },
];
