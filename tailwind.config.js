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
            // Font families for Islamic content
            fontFamily: {
                'inter': ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
                'arabic': ['Amiri', 'Traditional Arabic', 'serif'],
            },
            // Border radius using CSS variables
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            // Comprehensive color system
            colors: {
                // shadcn/ui colors using CSS variables
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
                
                // Islamic app specific colors
                // Enhanced emerald palette for Islamic theme
                'emerald': {
                    50: '#ecfdf5',
                    100: '#d1fae5', 
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981', // Primary emerald for app theme
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                
                // Khusyu achievement level colors
                'khusyu': {
                    'level-1': '#ef4444', // red-500 - Ash-Sholah ash-Shuriyyah
                    'level-2': '#f97316', // orange-500 - Al-'Adah bil Ghaflah
                    'level-3': '#eab308', // yellow-500 - Al-Hudhur
                    'level-4': '#22c55e', // green-500 - Al-Khusyu' al-Mutawassith
                    'level-5': '#8b5cf6', // violet-500 - Al-Khusyu' al-Kaamil
                },
                
                // Prayer time colors (if needed for future features)
                'prayer': {
                    'fajr': '#4f46e5',    // indigo for dawn
                    'dhuhr': '#f59e0b',   // amber for noon
                    'asr': '#d97706',     // orange for afternoon
                    'maghrib': '#dc2626', // red for sunset
                    'isha': '#1f2937',    // dark for night
                }
            },
            
            // Animation extensions for smooth interactions
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            
            // Spacing for Islamic content layout
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            
            // Typography scale for Arabic text
            fontSize: {
                'arabic-sm': ['1.125rem', { lineHeight: '1.8' }],
                'arabic-base': ['1.25rem', { lineHeight: '1.8' }],
                'arabic-lg': ['1.5rem', { lineHeight: '1.8' }],
                'arabic-xl': ['1.875rem', { lineHeight: '1.8' }],
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}
