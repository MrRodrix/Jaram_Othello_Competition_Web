const production = {
  API_URL: "ws://localhost:3000",
};

const development = {
  API_URL: "ws://localhost:3000",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
