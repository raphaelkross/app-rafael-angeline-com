const database = {
	projects: [
		{
			title: 'Rafael Angeline',
			slug: 'rafael-angeline',
			summary: {
				title: 'Rafael Angeline',
				date: 'July 20th, 2018',
				stack: 'React, next.js, now.sh',
				link: 'https://github.com/raphaelkross/app-rafael-angeline-com',
			},
			description: 'Rafael Angeline personal open-sourced project made using React, Next and deployed at Now Cloud.',
			excerpt: 'This portfolio is open-source and built using React and Next. Deployed using now.sh serverless cloud.',
			content: `
				<h4>Problem</h4>
				<h3>Creating my new website.</h3>
				<p>
					Updating my website was in my to-do list a long time already, when I finally got 
					a bit of time to do it, I thought &#8220;Why not use some modern stack like React, 
					Next.JS and integrate it with Now.sh Serverless Deployments?&#8221;.
				</p>
				<p>
					Would be a great opportunity to showcase the skills I got after working in a 
					few Web Apps projects and here we are; besides that, I made my portfolio open 
					source and everybody may check the code at <a href="https://github.com/raphaelkross/app-rafael-angeline-com" target="_blank" rel="noopener">GitHub</a>.
				</p>
				<p>
					I also wanted to make it fully tested using Jest and document all the components 
					available in a style guide &#8211; those were nice-to-have but in the end, 
					I just added this to project&#8217;s requirements.
				</p>
				<h3>The solution stack.</h3>
				<p>
					The project is composed by a simple API to fetch projects, sitemap generator and the website itself.
				</p>
				<p>
					Using Now.sh Serverless deployment every page and function becomes a lambda function, which cost way less than keeping a server instance while keeping performance and scability up.
				</p>
				<p>
					The sitemap and API is powered by Node.JS - while the front-end is powered by Next.js.
				</p>
				<h3>Tests with Jest</h3>
				<p>Jest was used to test the components and keep everything under control. Since I do not update the website too much, it's easier to avoid bugs keeping the tests up-to-date.</p>
				<p class="framed-img">
					<img src="/static/projects/jest-test-running.png" alt="Rafael Angeline Project - Jest tests passing" title="Rafael Angeline Project - Jest tests passing">
				</p>
				<p>All green, all good! <3</p>
			`,
		},
		{
			title: 'Recroom',
			slug: 'recroom',
			summary: {
				title: 'Recroom',
				date: 'October 10th, 2018',
				stack: 'Vue.JS',
				link: false,
			},
			description: 'Intranet social network built to reward employees from a company. Real time chat, likes, sharing, etc.',
			excerpt: 'Intranet social network built to reward employees from a company. Real time chat, likes, sharing, etc.',
			content: `
				<h4>Problem</h4>
				<h3>Building an internal social network.</h3>
				<p>
					Recroom is intended to enable employees to reward each other with compliments, likes and points. 
				</p>
				<p>
					The idea is to replicate the behavior of Facebook - for example, but still allowing colleagues to give points 
					that are later converted to benefits inside the company, for example.
				</p>
				<p>
					The biggest challenges were the features to-be developed, since each one required a great control of state and sync of data. <br>
					Beside that, real-time chattings, polls and leaderboards were developed to increase platform engagement.
				</p>
				<h3>The solution stack.</h3>
				<p>
					We've used Vue.JS Enterprise Boilerplate to build our solution. This already gives us 
					a good structure to routes, standards, tests and mocks.
				</p>
				<p>
					We started to develop our styleguide with buttons, blocks, grids and other isolated components but static.
				</p>
				<p>
					After that, using the mock system we prepared our HoC to bring dynamic data and manage/update it.
				</p>
			`,
		},
		{
			title: 'Magia Egipcia',
			slug: 'magia-egipcia',
			summary: {
				title: 'Magia Egipcia',
				date: 'May 20th, 2019',
				stack: 'React, Next, Now',
				link: 'https://magiaegipcia.com',
			},
			description: 'SEO experience to ensure a service can be found at search engines based on city/state.',
			excerpt: 'SEO experience to ensure a service can be found at search engines based on city/state.',
			content: `
				<h4>Problem</h4>
				<h3>A SEO Experience.</h3>
				<p>
					Magia Egipcia is a SEO experience focused on how to use Serverless and auto-generated pages to improve conversion and ranking at search results.
				</p>
				<p>
					The biggest issue was to build and mantain about 5 pages while still generating around 12k pages at sitemap automatically based on cities and neighborhoods.
				</p>
				<p class="framed-img">
					<img src="/static/projects/magia-egipcia-editor.png" alt="Magia Egipcia SEO Experience" title="Magia Egipcia SEO Experience">
				</p>
				<h3>The solution stack.</h3>
				<p>
					The project is composed by a sitemap generator and the website itself, that's pretty much focused on performance and auto-generated content.
				</p>
				<p>
					Using Now.sh Serverless deployment every page and function becomes a lambda function, which cost way less than keeping a server instance while keeping performance and scability up.
				</p>
				<p>
					The sitemap and API is powered by Node.JS - while the front-end is powered by Next.js.
				</p>
			`,
		},
		{
			title: 'Deezign',
			slug: 'deezign',
			summary: {
				title: 'Deezign',
				date: 'March 15th, 2019',
				stack: 'WordPress, WooCommerce, WP REST API',
				link: 'https://deezign.com.br',
			},
			description: 'Marketplace marketplace based on WordPress and WooCommerce featuring split payments and chained products.',
			excerpt: 'Markeplace based on WordPress and WooCommerce featuring split payments and chained products.',
			content: `
				<h4>Problem</h4>
				<h3>Design Marketplace.</h3>
				<p>
					Deezign wants to bring a new perspective to design marketplaces at Brazil. Featuring chained products 
					and split payments.
				</p>
				<p>
					Working with the big number of products is always a challenge since speed is essential to customer experience.
				</p>
				<p class="framed-img">
					<img src="/static/projects/deezign.png" alt="Design Marketplace" title="Design Marketplace">
				</p>
				<h3>The solution stack.</h3>
				<p>
					WordPress and WooCommerce were used. On top of that, the marketplace was built featuring chained products to ensure a 
					proper delivery rate calculation.
				</p>
				<p>
					Split payments are essential to ensure proper profit calculation and multi-order system were developed to ensure a better protection 
					against chargeback.
				</p>
			`,
		}
	],
}

module.exports = database;