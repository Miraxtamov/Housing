import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Generic from "../pages/Generic";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { navbar } from "../utils/navbar";
import Favorites from "../components/Favorites";
import ProductView from "../components/ProductView";
import AddNew from "../components/AddNew";

const Root = () => {
	return (
		<>
			<Routes>
				<Route element={<Navbar />}>
					<Route path="/" element={<Navigate to={"/home"} />} />
					{navbar?.map((value) => {
						return (
							<Route key={value.id} path={value.path} element={value.element} />
						);
					})}
					<Route path="/properties/:id" element={<ProductView />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/profile" element={<Generic />} />
					<Route path="/myproperties" element={<Generic />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path={"/post-new-ad"} element={<AddNew />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
};

export default Root;
