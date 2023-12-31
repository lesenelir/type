/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-openai-b-0', 'text-openai-t-0', 'bg-openai-t-0',
    'bg-openai-b-1', 'text-openai-t-1', 'bg-openai-t-1',
    'bg-openai-b-2', 'text-openai-t-2', 'bg-openai-t-2',
    'bg-openai-b-3', 'text-openai-t-3', 'bg-openai-t-3',
    'bg-openai-b-4', 'text-openai-t-4', 'bg-openai-t-4',
    'bg-openai-b-5', 'text-openai-t-5', 'bg-openai-t-5',
    'bg-openai-b-6', 'text-openai-t-6', 'bg-openai-t-6',
  ],
  theme: {
    extend: {
      colors: {
        openai: {
          'b-0': '#235354',
          't-0': '#FFFFDF',
          'b-1': '#240647',
          't-1': '#D5FDFF',
          'b-2': '#20361B',
          't-2': '#F5C3FC',
          'b-3': '#3A083E',
          't-3': '#D4FDCC',
          'b-4': '#343324',
          't-4': '#FFFFDF',
          'b-5': '#E7F1FE',
          't-5': '#3E46F6',
          'b-6': '#FFFFDF',
          't-6': '#235354',
        }
      },
      keyframes: {
        blink: {
          '0%': {opacity: 1},
          '50%': {opacity: 0},
          '100%': {opacity: 1},
        }
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}
