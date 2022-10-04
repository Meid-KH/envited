/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
				},
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				primary: {
					100: "#E87BF8",
					200: "#8456EC",
					300: "#501FC1",
					400: "#240D57",
				},
				secondary: {
					100: "#F6F2FF",
					200: "#EDE5FF",
					300: "#CCB6FF",
				},
				text: {
					100: "#FBFAFF",
					200: "#F2F2",
					300: "#E0E0E0",
					400: "#BDBDBD",
					500: "#828282",
					600: "#4F4F4F",
				},
				alert: {
					warning: "#FFD7E0",
					danger: "#E61445",
					info: "#D3FFE2",
					success: "#00805E",
				},
			},
			fontFamily: {
				heading: ["Helvatica", "Inter", "sans-serif"],
				main: [
					"-apple-system",
					"BlinkMacSystemFont",
					"Inter",
					"sans-serif",
				],
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
