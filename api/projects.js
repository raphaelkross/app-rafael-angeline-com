module.exports = (req, res) => {
	
	const projects = [
		{
			title: 'Title 1',
		},
		{
			title: 'Title 1',
		},
	];

	res.setHeader( 'Content-Type', 'application/json' );
	res.end( JSON.stringify( projects ) );
};