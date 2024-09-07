import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		width: {
  			p1: '100px',
  			p2: '200px',
  			p3: '300px',
  			p4: '400px',
  			p5: '500px',
  			p6: '600px',
  			p7: '700px',
  			p8: '800px',
  			p9: '900px',
  			p10: '1000px',
  			p11: '1100px',
  			p12: '1200px',
  			p13: '1300px'
  		},
  		maxWidth: {
  			p1: '100px',
  			p2: '200px',
  			p3: '300px',
  			p4: '400px',
  			p5: '500px',
  			p6: '600px',
  			p7: '700px',
  			p8: '800px',
  			p9: '900px',
  			p10: '1000px',
  			p11: '1100px',
  			p12: '1200px',
  			p13: '1300px'
  		},
  		colors: {
  			smokey: {
  				DEFAULT: '#03060B'
  			},
  			theme1: {
  				'100': '#010106',
  				'200': '#01030b',
  				'300': '#020411',
  				'400': '#020516',
  				'500': '#03071e',
  				'600': '#0b1b73',
  				'700': '#142fca',
  				'800': '#5068ee',
  				'900': '#a8b4f6',
  				DEFAULT: '#03071e'
  			},
  			theme2: {
  				'100': '#0b0105',
  				'200': '#160209',
  				'300': '#21040e',
  				'400': '#2c0513',
  				'500': '#370617',
  				'600': '#880f39',
  				'700': '#d9185b',
  				'800': '#ed5d90',
  				'900': '#f6aec7',
  				DEFAULT: '#370617'
  			},
  			theme3: {
  				'100': '#160103',
  				'200': '#2b0206',
  				'300': '#410209',
  				'400': '#57030b',
  				'500': '#6a040f',
  				'600': '#b90719',
  				'700': '#f7192f',
  				'800': '#f96574',
  				'900': '#fcb2ba',
  				DEFAULT: '#6a040f'
  			},
  			theme4: {
  				'100': '#1f0001',
  				'200': '#3e0103',
  				'300': '#5d0104',
  				'400': '#7d0206',
  				'500': '#9d0208',
  				'600': '#e1030b',
  				'700': '#fc2f36',
  				'800': '#fd7479',
  				'900': '#febabc',
  				DEFAULT: '#9d0208'
  			},
  			theme5: {
  				'100': '#2a0000',
  				'200': '#540000',
  				'300': '#7d0000',
  				'400': '#a70000',
  				'500': '#d00000',
  				'600': '#ff0e0e',
  				'700': '#ff4a4a',
  				'800': '#ff8787',
  				'900': '#ffc3c3',
  				DEFAULT: '#d00000'
  			},
  			theme6: {
  				'100': '#2c0900',
  				'200': '#591201',
  				'300': '#851c01',
  				'400': '#b22502',
  				'500': '#dc2f02',
  				'600': '#fd4a1d',
  				'700': '#fd7755',
  				'800': '#fea48e',
  				'900': '#fed2c6',
  				DEFAULT: '#dc2f02'
  			},
  			theme7: {
  				'100': '#2e1201',
  				'200': '#5c2401',
  				'300': '#8b3602',
  				'400': '#b94903',
  				'500': '#e85d04',
  				'600': '#fc7826',
  				'700': '#fd9a5c',
  				'800': '#fdbb92',
  				'900': '#feddc9',
  				DEFAULT: '#e85d04'
  			},
  			theme8: {
  				'100': '#311c01',
  				'200': '#613802',
  				'300': '#925404',
  				'400': '#c37105',
  				'500': '#f48c06',
  				'600': '#faa434',
  				'700': '#fbbb67',
  				'800': '#fcd29a',
  				'900': '#fee8cc',
  				DEFAULT: '#f48c06'
  			},
  			theme9: {
  				'100': '#322101',
  				'200': '#644202',
  				'300': '#966303',
  				'400': '#c88304',
  				'500': '#faa307',
  				'600': '#fbb637',
  				'700': '#fcc969',
  				'800': '#fddb9b',
  				'900': '#feedcd',
  				DEFAULT: '#faa307'
  			},
  			theme10: {
  				'100': '#352600',
  				'200': '#6a4c00',
  				'300': '#9f7200',
  				'400': '#d49800',
  				'500': '#ffba08',
  				'600': '#ffc83b',
  				'700': '#ffd56c',
  				'800': '#ffe39d',
  				'900': '#fff1ce',
  				DEFAULT: '#ffba08'
  			},
  			theme11: {
  				DEFAULT: '#fffaed'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
