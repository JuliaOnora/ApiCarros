const { Database } = require("sqlite3");
const path = require("path");
const { DB_rel } = require("dotenv").config().parsed;

const db = new Database(path.resolve() + DB_rel);

module.exports = db;