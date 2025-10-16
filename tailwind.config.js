module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Agricultural Green
        primary: {
          DEFAULT: "#2D5016", // Deep agricultural green
          50: "#F1F8E9", // Light green tint
          100: "#DCEDC8", // Lighter green
          200: "#C5E1A5", // Light green
          300: "#AED581", // Medium light green
          400: "#9CCC65", // Medium green
          500: "#8BC34A", // Standard green
          600: "#689F38", // Darker green
          700: "#558B2F", // Dark green
          800: "#33691E", // Very dark green
          900: "#2D5016", // Deep agricultural green
        },
        
        // Secondary Colors - Rich Earth Brown
        secondary: {
          DEFAULT: "#8B4513", // Rich earth brown
          50: "#FBF2ED", // Light brown tint
          100: "#F4E4D6", // Lighter brown
          200: "#E8C5A0", // Light brown
          300: "#DCA76A", // Medium light brown
          400: "#D08934", // Medium brown
          500: "#C46B00", // Standard brown
          600: "#A0561A", // Darker brown
          700: "#8B4513", // Rich earth brown
          800: "#76340F", // Very dark brown
          900: "#61230B", // Deepest brown
        },
        
        // Accent Colors - Technology Blue
        accent: {
          DEFAULT: "#1E88E5", // Technology blue
          50: "#E3F2FD", // Light blue tint
          100: "#BBDEFB", // Lighter blue
          200: "#90CAF9", // Light blue
          300: "#64B5F6", // Medium light blue
          400: "#42A5F5", // Medium blue
          500: "#2196F3", // Standard blue
          600: "#1E88E5", // Technology blue
          700: "#1976D2", // Dark blue
          800: "#1565C0", // Very dark blue
          900: "#0D47A1", // Deepest blue
        },
        
        // Background Colors
        background: "#FAFAFA", // Clean canvas
        surface: {
          DEFAULT: "#F5F5F5", // Subtle card elevation
          light: "#FFFFFF", // Pure white
          dark: "#EEEEEE", // Darker surface
        },
        
        // Text Colors
        text: {
          primary: "#212121", // High contrast
          secondary: "#757575", // Clear hierarchy
          disabled: "#BDBDBD", // Disabled text
          hint: "#9E9E9E", // Hint text
        },
        
        // Status Colors
        success: {
          DEFAULT: "#4CAF50", // Natural growth green
          light: "#C8E6C9", // Light success
          dark: "#388E3C", // Dark success
        },
        warning: {
          DEFAULT: "#FF9800", // Harvest orange
          light: "#FFE0B2", // Light warning
          dark: "#F57C00", // Dark warning
        },
        error: {
          DEFAULT: "#D32F2F", // Respectful red
          light: "#FFCDD2", // Light error
          dark: "#C62828", // Dark error
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E0E0E0", // Neutral border
          light: "#F5F5F5", // Light border
          dark: "#BDBDBD", // Dark border
        },
      },
      
      fontFamily: {
        // Headlines and CTAs
        inter: ['Inter', 'sans-serif'],
        // Body text
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Accents and testimonials
        merriweather: ['Merriweather', 'serif'],
        // Default sans-serif
        sans: ['Source Sans Pro', 'Inter', 'sans-serif'],
        // Default serif
        serif: ['Merriweather', 'serif'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '6xl': ['3.75rem', { lineHeight: '1.3' }],
      },
      
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'agricultural': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'agricultural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'gentle-bounce': 'gentleBounce 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(-3px)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          'transition': 'all 300ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.transition-content': {
          'transition': 'all 400ms cubic-bezier(0, 0, 0.2, 1)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}