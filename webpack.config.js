module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    library: {
      type: "umd",
      name: "eventjs"
    }
  },
}