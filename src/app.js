const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config } = require("./config/config")
const temabar = require("./routes/temabar");

const app = express();
const basePath = "/api/v1";
const APP_PORT = config.APP_PORT;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // create application/x-www-form-urlencoded parser
app.use(bodyParser.json());

// Routes
app.use(`${basePath}/temabar`, temabar);

// Server
app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}, basePath: ${basePath}`);
});