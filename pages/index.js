import Head from "next/head";
import Image from "next/future/image";
import classNames from "../utils/classNames";
import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Envited</title>
				<meta
					name="description"
					content="Envited, easily host and share events"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<div className="container">
				<div className="flex justify-between items-center flex-col-reverse lg:flex-row gap-10 py-10">
					<div className="sticky top-8">
						<Image
							src="/img/event.svg"
							width="440"
							height="775"
							alt="Event"
						/>
						<Button
							href="/create"
							className="block w-full max-w-xs mt-6 lg:hidden mx-auto"
						>
							<i>🎉</i> Create my event
						</Button>
					</div>
					<div className="text-center lg:text-right flex flex-col items-center lg:items-end">
						<h1 className="text-[64px] leading-[64px]">
							Imagine if{" "}
							<span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-100">
								Snapchat
							</span>{" "}
							had events.
						</h1>
						<p className="text-2xl mt-4">
							Easily host and share events with your friends{" "}
							<br />
							across any social media.
						</p>
						<Button
							href="/create"
							className="w-full max-w-xs mt-14 hidden lg:block"
						>
							<i>🎉</i> Create my event
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
}
