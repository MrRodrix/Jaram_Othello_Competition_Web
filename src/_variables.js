const production = {
  API_URL: "http://othello-api.jaram.net/",
};

const development = {
  API_URL: "http://othello-api.jaram.net/",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
