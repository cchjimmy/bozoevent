module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    library: {
      type: "umd",
      name: "eventjs"
    }
  },
}