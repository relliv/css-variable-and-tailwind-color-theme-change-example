# Tailwind Dynamic Color Palette Example

CSS Variables:

```css
:root {
  --nx-theme-50: #fffce7;
  --nx-theme-100: #fffac1;
  --nx-theme-200: #fff086;
  --nx-theme-300: #ffe041;
  --nx-theme-400: #ffcb0d;
  --nx-theme-500: #f0b000;
  --nx-theme-600: #d18700;
  --nx-theme-700: #a65f02;
  --nx-theme-800: #894a0a;
  --nx-theme-900: #743d0f;
  --nx-theme-950: #441f04;
}
```

And TailwindCSS config:

```js
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
```

That's all.

> But there is a problem with this method. Tailwind can't track CSS variables and with this method we can't use opacity property over colors like `bg-nx-theme-100/70`.