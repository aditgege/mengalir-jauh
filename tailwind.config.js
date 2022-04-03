// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   #258000
// #258000
// #8EBF00
// #D4DF00
// #FBD303
// #FFB222
// #FF9B44
// #FF8E66
// #FF8E88
// #FFAAAD
// #FFCCD8
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0A2F51',
        'primary-light': '#0E4D64',
        'primary-lighter': '#137177',
        'primary-lightest': '#188977',
        'primary-lightest-1': '#1D9A6C',
        'primary-lightest-2': '#39A96B',
        'primary-lightest-3': '#56B870',
        'primary-lightest-4': '#74C67A',
        'primary-lightest-5': '#99D492',
        'primary-lightest-6': '#BFE1B0',
        'primary-lightest-7': '#DEEDCF',

        'secondary-dark': '#258000',
        'secondary-light': '#258000',
        'secondary-lighter': '#8EBF00',
        'secondary-lightest': '#D4DF00',
        'secondary-lightest-1': '#FBD303',
        'secondary-lightest-2': '#FFB222',
        'secondary-lightest-3': '#FF9B44',
        'secondary-lightest-4': '#FF8E66',
        'secondary-lightest-5': '#FF8E88',
        'secondary-lightest-6': '#FFAAAD',
        'secondary-lightest-7': '#FFCCD8',
        
        

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}