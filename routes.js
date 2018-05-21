/* eslint-env node */

// eslint-disable-next-line no-undef
const routes = (module.exports = require("next-routes")());

routes
	.add("about", "/about")
	.add("work", "/work")
	.add("contact", "/contact")
	.add("blog", "/blog/:page?")
	.add("category", "/category/:slug/:page?")
	.add("post", "/:slug", "single")
	.add("home", "/", "index");
