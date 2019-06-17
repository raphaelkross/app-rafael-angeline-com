const { parse } = require('url');
const { projects } = require('./database');

module.exports = (req, res) => {

	const { query } = parse(req.url, true)
	const { slug } = query;

	const project = projects.find(function( item ) {
		return item.slug == slug;
	});

	res.setHeader( 'Content-Type', 'application/json' );
	res.end( JSON.stringify( project ) );
};