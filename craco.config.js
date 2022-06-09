module.exports = {
  mode: "development",
  resolve:{
    alias:{
      path: require.resolve("path-browserify")
    }
  },
    style: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
  };
