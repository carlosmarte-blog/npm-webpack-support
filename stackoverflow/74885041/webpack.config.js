const port = process.env.PORT || 8080;
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.[fullhash].js",
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

  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};