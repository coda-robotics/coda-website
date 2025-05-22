module.exports = {
    theme: {
      extend: {
        colors: {
          'footernav-gray': '#FFFFFF'
        },
        colors:{
          'xs': '520px'
        },
        spacing: {
          '30': '30px', 
          '70': '70px', 
          '132': '132px',
          '134': '134px' 
        },
        screens: {
          'mdmain': '902px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  

