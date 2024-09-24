const { google } = require("googleapis");
const credentials = require("../islandwaterflow-436512-229e0d4149cb.json");

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

module.exports = { sheets };
