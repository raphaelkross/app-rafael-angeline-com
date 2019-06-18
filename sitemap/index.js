const sm = require('sitemap');

module.exports = (req, res) => {
	
	const pages = [
		'',
		'about',
		'work',
		'contact',
		'project/rafael-angeline',
		'project/recroom',
		'project/magia-egipcia',
		'project/deezign',
	];

	const sitemap = sm.createSitemap({
		hostname: 'https://rafaelangeline.com',
		cacheTime: 1600000,
	});

	pages.forEach(function( page ) {
		sitemap.add( { url: '/' + page, changefreq: 'monthly' } );
	});

	res.setHeader( 'Content-Type', 'application/xml' );
	res.end( sitemap.toString() );
};