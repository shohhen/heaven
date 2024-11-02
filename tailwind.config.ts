// tailwind.config.ts
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				light: '#E6E6FA',
  				DEFAULT: '#9370DB',
  				dark: '#000080'
  			},
  			secondary: {
  				light: '#98FB98',
  				DEFAULT: '#66CDAA',
  				dark: '#2F4F4F'
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', ...defaultTheme.fontFamily.sans],
  			heading: ['Montserrat', ...defaultTheme.fontFamily.sans]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [],
}

export default config