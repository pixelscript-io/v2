const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend: {
			colors: {
				'ps-blue': '#0F62FE',
				'ps-medBlue': '#050E21',
				'ps-darkBlue': '#010711'
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			}
		}
	}
}
