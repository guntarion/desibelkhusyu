/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
    	extend: {
    		fontFamily: {
    			inter: [
    				'var(--font-inter)',
    				'ui-sans-serif',
    				'system-ui'
    			],
    			arabic: [
    				'Amiri',
    				'Traditional Arabic',
    				'serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			emerald: {
    				'50': '#ecfdf5',
    				'100': '#d1fae5',
    				'200': '#a7f3d0',
    				'300': '#6ee7b7',
    				'400': '#34d399',
    				'500': '#10b981',
    				'600': '#059669',
    				'700': '#047857',
    				'800': '#065f46',
    				'900': '#064e3b'
    			},
    			khusyu: {
    				'level-1': '#ef4444',
    				'level-2': '#f97316',
    				'level-3': '#eab308',
    				'level-4': '#22c55e',
    				'level-5': '#8b5cf6'
    			},
    			prayer: {
    				fajr: '#4f46e5',
    				dhuhr: '#f59e0b',
    				asr: '#d97706',
    				maghrib: '#dc2626',
    				isha: '#1f2937'
    			}
    		},
    		animation: {
    			'fade-in': 'fadeIn 0.5s ease-in-out',
    			'slide-up': 'slideUp 0.3s ease-out',
    			'scale-in': 'scaleIn 0.2s ease-out',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		keyframes: {
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			slideUp: {
    				'0%': {
    					transform: 'translateY(10px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			scaleIn: {
    				'0%': {
    					transform: 'scale(0.95)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'scale(1)',
    					opacity: '1'
    				}
    			},
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
    		spacing: {
    			'18': '4.5rem',
    			'88': '22rem'
    		},
    		fontSize: {
    			'arabic-sm': [
    				'1.125rem',
    				{
    					lineHeight: '1.8'
    				}
    			],
    			'arabic-base': [
    				'1.25rem',
    				{
    					lineHeight: '1.8'
    				}
    			],
    			'arabic-lg': [
    				'1.5rem',
    				{
    					lineHeight: '1.8'
    				}
    			],
    			'arabic-xl': [
    				'1.875rem',
    				{
    					lineHeight: '1.8'
    				}
    			]
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
