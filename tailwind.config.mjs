/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette vert luxe complète et cohérente
        primary: {
          50: 'hsl(158 65% 98%)',   // Vert très clair
          100: 'hsl(158 65% 95%)',  // Vert clair
          200: 'hsl(158 65% 90%)',  // Vert plus clair
          300: 'hsl(158 65% 85%)',  // Vert moyen-clair
          400: 'hsl(158 65% 65%)',  // Vert moyen
          500: 'hsl(158 65% 55%)',  // Vert principal
          600: 'hsl(158 65% 45%)',  // Vert foncé (couleur principale)
          700: 'hsl(158 65% 35%)',  // Vert très foncé
          800: 'hsl(158 65% 30%)',  // Vert ultra foncé
          900: 'hsl(158 65% 25%)',  // Vert profond
          950: 'hsl(158 65% 15%)',  // Vert noir
          DEFAULT: 'hsl(158 65% 45%)', // Couleur par défaut
          foreground: '#FFFFFF',
        },
        // Neutres avec teinte verte subtile
        background: 'hsl(158 65% 99%)',
        foreground: 'hsl(158 65% 10%)',
        muted: {
          DEFAULT: 'hsl(158 30% 70%)',
          foreground: 'hsl(158 30% 60%)',
        },
        secondary: {
          DEFAULT: 'hsl(158 65% 96%)',
          foreground: 'hsl(158 65% 10%)',
        },
        accent: {
          DEFAULT: 'hsl(158 65% 45%)',
          foreground: '#FFFFFF',
        },
        border: 'hsl(158 65% 90%)',
        input: 'hsl(158 65% 98%)',
        ring: 'hsl(158 65% 45%)',
        card: {
          DEFAULT: 'hsl(158 65% 99%)',
          foreground: 'hsl(158 65% 10%)',
        },
        popover: {
          DEFAULT: 'hsl(158 65% 99%)',
          foreground: 'hsl(158 65% 10%)',
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(30 95 79 / 0.05)',
        'sm': '0 1px 3px 0 rgb(30 95 79 / 0.1), 0 1px 2px -1px rgb(30 95 79 / 0.1)',
        'md': '0 4px 6px -1px rgb(30 95 79 / 0.1), 0 2px 4px -2px rgb(30 95 79 / 0.1)',
        'lg': '0 10px 15px -3px rgb(30 95 79 / 0.1), 0 4px 6px -4px rgb(30 95 79 / 0.1)',
        'xl': '0 20px 25px -5px rgb(30 95 79 / 0.1), 0 8px 10px -6px rgb(30 95 79 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(30 95 79 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(30 95 79 / 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
