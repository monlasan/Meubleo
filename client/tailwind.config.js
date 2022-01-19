module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '780px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1000px',
          },
        },
      });
    },
  ],
};
