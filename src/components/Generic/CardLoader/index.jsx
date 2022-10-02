import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
	<ContentLoader
		speed={2}
		width={"100%"}
		height={431}
		viewBox="0 0 380 435"
		backgroundColor="#f0f0f0"
		foregroundColor="#dedede"
		{...props}
	>
		<rect x="0" y="0" rx="3" ry="3" width="380" height="250" />
		<rect x="0" y="274" rx="0" ry="0" width="214" height="15" />
		<rect x="0" y="300" rx="0" ry="0" width="327" height="15" />
		<rect x="0" y="406" rx="0" ry="0" width="67" height="7" />
		<rect x="0" y="420" rx="0" ry="0" width="67" height="12" />
		<rect x="0" y="330" rx="0" ry="0" width="50" height="50" />
		<rect x="80" y="330" rx="0" ry="0" width="50" height="50" />
		<rect x="160" y="330" rx="0" ry="0" width="50" height="50" />
		<rect x="240" y="330" rx="0" ry="0" width="50" height="50" />
		<rect x="277" y="410" rx="0" ry="0" width="83" height="17" />
	</ContentLoader>
);

export default CardLoader;
