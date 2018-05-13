/* eslint-env node */

const express = require("express");
const next = require("next");
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	express()
		.use(handler)
		.listen(port);
});
