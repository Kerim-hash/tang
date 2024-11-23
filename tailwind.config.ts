import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    corePlugins: {
      preflight: false,
    },
    container: {
      center: true,
    },
    extend: {
      letterSpacing: {
        tight: '-.030em',
      },
      height: {
        'screen-minus-127': 'calc(100vh - 119px)',
        'screen-minus-74': 'calc(100vh - 74px)'
      },
      colors: {
        primary: '#A9448B',
        secondary: '#5B5B6E',
        background: '#EDEDED',
        accent: '#DED1DC',
        textPrimary: '#3B3B58',
        textSecondary: '#4F4F4F',
        link: '#A73B70',
        gray: '#333',
      },
      fontFamily: {
        oxygen: ['"Oxygen"', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      lineHeight: {
        '70p4': '70.4px',
        '28p': '28px',
        '22p4': '22.4px',
        '20p8': '20.8px', // line height for subtitle
        '26p4': '26.4px',
        'title-line': '1.2', // Custom line height for title
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '2.5rem',
        '6xl': '4rem',
        title: ['4rem', { lineHeight: '1.2' }], // Title with custom font size and line height
        desc1: '20px',
        desc2: '16px',
        subtitle: '16px', // Font size for subtitle
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        '4xl': '40px',
        '6xl': '72px',
        '9xl': '140px',
        full: '50%',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        header: '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        '.btn': {
          '@apply inline-flex items-center justify-center px-4 py-2 font-medium leading-5 transition-colors duration-150 border border-transparent rounded-6xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary': {},
        },
        '.btn-primary': {
          '@apply bg-primary text-white hover:bg-opacity-90': {},
        },
        '.btn-secondary': {
          '@apply bg-secondary text-white hover:bg-opacity-90': {},
        },
        '.btn-outlined': {
          '@apply border-primary text-primary bg-transparent hover:bg-primary hover:text-white': {},
        },
        '.btn-disabled': {
          '@apply opacity-50 cursor-not-allowed': {},
        },
        '.btn-sm': {
          '@apply px-3 py-1.5 text-sm': {},
        },
        '.btn-md': {
          '@apply px-4 py-2 text-base': {},
        },
        '.btn-lg': {
          '@apply px-4 py-4 text-xl': {},
          '@screen md': {
            '@apply tracking-wide px-6 py-7 text-lg text-desc1': {}, // для экранов от md размер остаётся 4xl
          },
        },
        '.title': {
          '@apply tracking-tight text-4xl text-textPrimary font-normal leading-title-line': {},
          // Мобильная адаптивность для title
          '@screen sm': {
            '@apply text-2xl leading-tight': {}, // уменьшаем размер и интерлинейку для экранов sm
          },
          '@screen md': {
            '@apply text-title': {}, // для экранов от md размер остаётся 4xl
          },
        },
        '.desc1': {
          '@apply font-openSans text-lg font-normal leading-28p': {},
          '@screen sm': {
            '@apply text-desc1': {}, // уменьшаем размер и интерлинейку для экранов sm
          },
        },
        '.desc2': {
          '@apply font-openSans text-desc2 text-textSecondary font-normal leading-22p4': {},
        },
        '.subtitle': {
          '@apply text-subtitle font-bold leading-20p8': {},
        },
      });
    },
  ],
};
export default config;
