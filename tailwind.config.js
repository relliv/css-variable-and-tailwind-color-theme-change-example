export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        'nx-theme': {
          50: 'var(--nx-theme-50)',
          100: 'var(--nx-theme-100)',
          200: 'var(--nx-theme-200)',
          300: 'var(--nx-theme-300)',
          400: 'var(--nx-theme-400)',
          500: 'var(--nx-theme-500)',
          600: 'var(--nx-theme-600)',
          700: 'var(--nx-theme-700)',
          800: 'var(--nx-theme-800)',
          900: 'var(--nx-theme-900)',
          950: 'var(--nx-theme-950)',
        },
      },
    },
  },
  plugins: [],
};
