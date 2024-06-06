const express = require("express");
const cors = require("cors");

const app = express();

const port = 8000;

const sequelize = require("./config/sequelize.config");

app.use(express.json());
app.listen(port, () => {
	console.log(`Listening on port ${port} for requests to respond to`);
});


sequelize.sync();