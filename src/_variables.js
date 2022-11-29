const production = {
  API_URL: "https://jaram-othello-competition-web.vercel.app/",
};

const development = {
  API_URL: "https://jaram-othello-competition-web.vercel.app/",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
