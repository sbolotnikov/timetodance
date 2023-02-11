
module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'titles': ['GoudyBookletter','Times New Roman'],
    },
    extend: {
      colors: {
        'brightAccent':'#784D54',//'#8C564A',
        'darkAccent':'#351018',//'#593240',
        'yellow1':'#DBD2AA',
        'myBlack':'#00010D',
        'nude1':'#BFA595',
        'popup': '#594949',
        'main-bg':'#0C1118',
        'high':'#FA1A1A',

      },
      backgroundImage: {
        'heroImg': "url('/images/backgroundhero.jpg')",
        'mainImg': "url('/images/main.png')",
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
