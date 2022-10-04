import React from "react";
import classNames from "../utils/classNames";

const Layout = ({ children }) => {
	return (
		<>
			{/* <header></header> */}
			<main
				className={classNames(
					"min-h-screen grid place-items-center",
					"bg-text-100 bg-gradient-to-b from-secondary-100 to-secondary-100"
				)}
			>
				{children}
			</main>
			{/* <footer></footer> */}
		</>
	);
};

export default Layout;
