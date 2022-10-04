import Link from "next/link";
import React from "react";
import classNames from "../utils/classNames";

const Button = ({ children, className, href, ...props }) => {
	const commonClasses = `select-none text-center text-white text-xl font-bold rounded-[10px] p-4 bg-gradient-to-r from-primary-200 to-primary-100 tracking-wide ring-secondary-300 ring-offset-2 focus:ring-4`;
	return (
		<>
			{href ? (
				<Link href={href}>
					<a
						className={classNames(className, commonClasses)}
						{...props}
					>
						{children}
					</a>
				</Link>
			) : (
				<button
					className={classNames(className, commonClasses)}
					{...props}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
