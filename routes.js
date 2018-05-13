/* eslint-env node */

// eslint-disable-next-line no-undef
const routes = (module.exports = require("next-routes")());

routes
	.add("blog", "/blog/:page?")
	.add("category", "/category/:slug/:page?")
	.add("post", "/:slug", "index");
