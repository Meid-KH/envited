import "../styles/tailwind.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress
				// nonce="my-nonce"
				color={"#E87BF8"}
				height={5}
				// startPosition={0.3}
				// stopDelayMs={200}
				// showOnShallow={true}
			/>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
