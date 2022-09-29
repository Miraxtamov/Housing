import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { navbar } from "../utils/navbar";

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
				</Route>
			</Routes>
			<Footer />
		</>
	);
};

export default Root;
