const { projects } = require('./database');

module.exports = (req, res) => {
	res.setHeader( 'Content-Type', 'application/json' );
	res.end( JSON.stringify( projects ) );
};