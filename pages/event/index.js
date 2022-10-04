import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import {
	FiCalendar,
	FiMapPin,
	FiChevronRight,
	FiChevronLeft,
} from "react-icons/fi";

const index = () => {
	return (
		<div className="grid place-items-center min-h-screen bg-text-100">
			<div className="container">
				{/* <Button href="/" className="w-full max-w-xs flex gap-2 justify-center items-center">
					<FiChevronLeft className="flex-shrink-0" size="26" />
					Go back home
				</Button> */}
				<div className="flex justify-between flex-col-reverse md:flex-row gap-8 mt-8">
					<div className="">
						<header>
							<h1 className="text-5xl font-bold mb-4">
								Birthday Bash
							</h1>
							<p className="text-text-500 text-lg">
								Hosted by <strong>Elysia</strong>
							</p>
						</header>
						<ul className="flex flex-col gap-4 mt-16">
							<li>
								<Link href="/">
									<a className="flex gap-6 justify-between items-center transition-all py-4 hover:px-4 rounded-[10px] hover:bg-secondary-100">
										<div className="flex gap-5">
											<span className="text-primary-200 shadow shadow-black/10 drop-shadow-lg rounded-[10px] w-14 grid place-items-center">
												<FiCalendar size={26} />
											</span>
											<div className="space-y-1">
												<h1 className="text-lg ">
													18 August 6:00PM
												</h1>
												<span className="text-lg text-text-600">
													to{" "}
													<strong>
														19 August 1:00PM
													</strong>{" "}
													UTC +10
												</span>
											</div>
										</div>
										<FiChevronRight
											className="text-text-400"
											size={30}
										/>
									</a>
								</Link>
							</li>

							<li>
								<Link href="/">
									<a className="flex gap-6 justify-between items-center transition-all py-4 hover:px-4 rounded-[10px] hover:bg-secondary-100">
										<div className="flex gap-5">
											<span className="text-primary-200 shadow shadow-black/10 drop-shadow-lg rounded-[10px] w-14 grid place-items-center">
												<FiMapPin size={26} />
											</span>
											<div className="space-y-1">
												<h1 className="text-lg ">
													Street name
												</h1>
												<span className="text-lg text-text-600">
													Suburb, State, Postcode
												</span>
											</div>
										</div>
										<FiChevronRight
											className="text-text-400"
											size={30}
										/>
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="sticky top-8">
						<Image
							src="/img/birthday-cake.png"
							width="500"
							height="500"
							alt="Event"
							layout="fill"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
