/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        'dark': {
          "primary": "#111827",
          "accent": "black",
          "secondary": '#e6c9a2',
          "neutral": '111827',
          "info": 'white', //card
          "primary-content": "#1f2937",
          "info-content": "white"
        }
      },
      {
        'light': {
          // "primary": "#a07dda",
          // "primary": "#061244",
          "primary": "white",
          "accent": "#0e1927",
          "secondary": '#e6c9a2',
          "neutral": 'white',
          "info": 'black', //card
          "primary-content": "#f3f4f6",
          "info-content": "black"
        }
      },
    ]
  }
}
