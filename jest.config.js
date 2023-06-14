module.exports = {
  preset: "babel-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
};
