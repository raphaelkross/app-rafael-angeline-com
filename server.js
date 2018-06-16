/* eslint-env node */

const express = require("express");
const next = require("next");
const routes = require("./routes");
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	const server = express();

	server.use("/static*", express.static(path.join(__dirname, "/static")));

	server.use(handler);

	server.listen(port);
});
