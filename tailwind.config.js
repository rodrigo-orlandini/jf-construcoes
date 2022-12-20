/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'8': 'repeat(8, 1fr)'
			},	
			gridTemplateRows: {
				'7': 'repeat(7, 5vw)'
			},

			fontFamily: {
				sans: "Jost"
			},
			colors: {
				gray: {
					300: "#D9D9D9",
					800: '#303030'
				}
			}
		},
	},
	plugins: [],
}