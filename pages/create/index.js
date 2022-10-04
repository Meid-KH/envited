import React from "react";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../../components/Button";
import Layout from "../../components/Layout";

import { useForm } from "react-hook-form";

import { FiChevronLeft } from "react-icons/fi";

const index = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		setTimeout(() => {
			router.push("/event");
		}, 600);
		console.log(data);
	};

	return (
		<Layout>
			<Head>
				<title>Envited | Create a new event</title>
				<meta
					name="description"
					content="Envited, create a new event"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<div className="container">
				<div className="flex justify-between flex-col-reverse lg:flex-row items-center___ gap-10 py-10">
					<div className="sticky top-8">
						<Image
							src="/img/event.svg"
							width="440"
							height="775"
							alt="Event"
							className="mx-auto lg:ml-0"
						/>
					</div>

					<div className="text-center lg:text-right flex flex-col items-center lg:items-end justify-between__">
						<Button
							href="/"
							className="w-full max-w-xs flex gap-2 justify-center items-center mb-12"
						>
							<FiChevronLeft
								className="flex-shrink-0"
								size="26"
							/>
							Go back home
						</Button>
						<section>
							<h1 className="text-[64px] leading-[64px]">
								Create a{" "}
								<span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-100">
									new event
								</span>{" "}
							</h1>
							<p className="text-2xl mt-4">
								Create a new event lorem ipsum dolor <br /> sit
								amet consectetur.
							</p>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="text-left mt-14"
							>
								<div className="grid gap-8 lg:grid-cols-2">
									<div className="">
										<input
											type="text"
											placeholder="Event name"
											{...register("eventName", {
												required: true,
											})}
										/>
										{errors.eventName?.type ===
											"required" && (
											<small
												role="alert"
												className="text-alert-danger"
											>
												This field is required
											</small>
										)}
									</div>

									<div className="">
										<input
											type="text"
											placeholder="Host name"
											{...register("hostName", {
												required: true,
											})}
										/>
										{errors.hostName?.type ===
											"required" && (
											<small
												role="alert"
												className="text-alert-danger"
											>
												This field is required
											</small>
										)}
									</div>

									<div className="">
										<input
											type="date"
											{...register("startDate")}
										/>
										{errors.startDate?.type ===
											"required" && (
											<small
												role="alert"
												className="text-alert-danger"
											>
												This field is required
											</small>
										)}
									</div>

									<div className="">
										<input
											type="date"
											{...register("endDate")}
										/>
										{errors.endDate?.type ===
											"required" && (
											<small
												role="alert"
												className="text-alert-danger"
											>
												This field is required
											</small>
										)}
									</div>

									<div className="">
										<input
											type="text"
											placeholder="Event location"
											{...register("eventLocation")}
										/>
										{errors.eventLocation?.type ===
											"required" && (
											<small
												role="alert"
												className="text-alert-danger"
											>
												This field is required
											</small>
										)}
									</div>

									<div className="flex text-left flex-col gap-1">
										<small className="text-text-600">
											Event photo
										</small>
										<input
											type="file"
											{...register("eventPhoto")}
										/>
									</div>

									<Button className="block w-full lg:col-span-2">
										<i>🚀</i> Next
									</Button>
								</div>
							</form>
						</section>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default index;
