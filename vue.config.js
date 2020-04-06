const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./Server/public"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
      },
    },
  },
};
