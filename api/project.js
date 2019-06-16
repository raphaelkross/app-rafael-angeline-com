const { parse } = require('url');

module.exports = (req, res) => {

	const { query } = parse(req.url, true)
	const { slug } = query;

	const project = {
		title: 'Title',
		slug: slug,
	};

	res.setHeader( 'Content-Type', 'application/json' );
	res.end( JSON.stringify( project ) );
};