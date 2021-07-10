const dotenv = require("dotenv");
dotenv.config();

const CONSTANTS = {
  host: "localhost",
  user: process.env.NODE_ENV === "DEV" ? "root" : "phpmyadmin",
  password: process.env.NODE_ENV === "DEV" ? "" : "phpmyadmin",
  database:
    process.env.NODE_ENV === "DEV" || process.env.NODE_ENV === "TEST"
      ? "marble"
      : "marble",
  PORT:
    process.env.NODE_ENV === "DEV" || process.env.NODE_ENV === "TEST"
      ? 3300
      : 3300,
};

module.exports = CONSTANTS;
