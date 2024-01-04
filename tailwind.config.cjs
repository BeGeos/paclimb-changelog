/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Typo
        primary: '#F1AC00', // '#0295A9',
        'bright-text': '#F3F3F3',
        'primary-text': '#313131',
        'secondary-text': '#616161',
        'lightgrey-text': '#919191',
        'very-lightgrey-text': '#D3D3D3',

        // Sunset/sunrise
        shadow: '#C2B8A0',
        'shadow-sun': '#84705D',
        sun: '#E9C46A',

        // Diff levels
        'lev-easy': '#B7DEA9',
        'lev-medium': '#EFE79F',
        'lev-hard': '#EEAAAA',

        // Palette
        'pa-neutral-light-grey': '#F1F0EB',
        'pa-neutral-grey': '#d4d4d4',
        'pa-dark-blue': '#20344D',
        'pa-yellow': '#F1AC00',
        'pa-light-blue': '#80B0BD',
        'pa-bright-blue': '#4f9ce3',
        'pa-brick-red': '#9C482C',
        'pa-wise-green': '#636139',
        'pa-danger-red': '#ef4444',
      },
    },
  },
  plugins: [],
};
