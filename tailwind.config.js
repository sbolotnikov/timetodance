
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'titles': ['GoudyBookletter','Times New Roman'],
    },
    extend: {
      colors: {
        'popup': '#594949',
        'main-bg':'#0C1118',
        'high':'#FA1A1A',

      },
      backgroundImage: {
        'aboutBG': "url('/images/machine.png')",
        
      }
    },
    screens: {
    'xs':{'max':'419px'}, 
    'sm':{'max' :'768px'},
    
    'tablet':{ 'max':'991px'},
      'laptop':'992px',
        // => @media (min-width: 992px) 
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
