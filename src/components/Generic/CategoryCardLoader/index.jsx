import React from "react";
import ContentLoader from "react-content-loader";

const CategoryCardLoader = (props) => (
	<ContentLoader
		speed={2}
		width={"100%"}
		height={350}
		viewBox="0 0 285 350"
		backgroundColor="#f0f0f0"
		foregroundColor="#dedede"
		{...props}
	>
		<rect x="0" y="0" rx="3" ry="3" width="285" height="350" />
	</ContentLoader>
);

export default CategoryCardLoader;
