const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/user.route");
const { inventoryItemRouter } = require("./routes/inventory_item.route");

const app = express();

const port = 8000;

const sequelize = require("./config/sequelize.config");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/api/v1/users", userRouter);
app.use("/api/v1/items", inventoryItemRouter);
app.listen(port, () => {
	console.log(`Listening on port ${port} for requests to respond to`);
});

sequelize.sync();
