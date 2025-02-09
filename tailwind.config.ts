import type { Config } from 'tailwindcss';
export default {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
theme: {
extend: {
  colors: {
  primary: '#333',
  },
},

},
plugins: [],
} satisfies Config;

