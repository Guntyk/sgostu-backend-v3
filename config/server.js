module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  name: "strapi::cors",
  config: {
    headers: [
      "accept-language",
      "Token",
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
    ],
    origin: [
      "http://sgostu.com.ua",
      "http://sgostu.com.ua:3000",
      "http://localhost:8080",
      "http://localhost:3000",
      "http://localhost:1337",
      "http://localhost:8000",
    ],
  },
});
