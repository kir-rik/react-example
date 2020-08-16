module.exports = {
  watch: true,
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
