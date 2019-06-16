import React from "react";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

import NProgress from "nprogress";
import Router from "next/router";

import Config from "../lib/config";

import ReactGA from "react-ga";

if (typeof window !== typeof undefined && Config.getAnalyticsKey()) {
	// Initialize GA.
	ReactGA.initialize(Config.getAnalyticsKey(), {
		testMode: typeof process.browser === typeof undefined
	});

	// Send first event.
	ReactGA.pageview(window.location.pathname + window.location.search);
}

// Add Loading when possible.
Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
	componentDidMount() {
		// Fire pageview event.
		if (typeof window !== typeof undefined && Config.getAnalyticsKey()) {
			window.setTimeout(() => {
				ReactGA.pageview(
					window.location.pathname + window.location.search
				);
			}, 500);
		}
	}
	render() {
		const menu = [
			{ href: "/", label: "Home." },
			{
				href: "/about",
				label: "About.",
				children: [
					{
						href: "https://twitter.com/RafaelAngeline",
						label: "Twitter.",
						external: true
					},
					{
						href: "https://github.com/raphaelkross",
						label: "Github.",
						external: true
					},
					{
						href: "https://profiles.wordpress.org/rafaelangeline",
						label: "WordPress.",
						external: true
					}
				]
			},
			{ href: "/work", label: "Work." },
			{ href: "/contact", label: "Contact." },
		];
		return (
			<React.Fragment>
				<Head>
					<title>{this.props.title}</title>
					{this.props.description ? (
						<meta
							name="description"
							content={this.props.description}
						/>
					) : null}
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link
						rel="shortcut icon"
						type="image/png"
						href="/static/favicon.png"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/nprogress.css"
					/>
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content="Rafael Angeline - Developer writing about WordPress, Javascript, React"
					/>
					<meta name="og:image" content={"/static/favicon.png"} />
					<meta
						property="og:description"
						content="See more about Rafael Angeline, a Senior Software Engineer that writes a lot about WordPress, React, Javascript and thoughts about development tools."
					/>
					<meta
						property="og:url"
						content="https://rafaelangeline.com/"
					/>
					<meta property="og:site_name" content="Rafael Angeline" />
					<meta name="twitter:card" content="summary" />
					<meta
						name="twitter:description"
						content="See more about Rafael Angeline, a Senior Software Engineer that writes a lot about WordPress, React, Javascript and thoughts about development tools."
					/>
					<meta
						name="twitter:title"
						content="Rafael Angeline - Developer writing about WordPress, Javascript, React"
					/>
					<meta
						name="twitter:image"
						content={"/static/favicon.png"}
					/>
					<meta name="twitter:creator" content="@RafaelAngeline" />
					<script type="application/ld+json">
						{
							"{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"#website\",\"url\":\"https://rafaelangeline.com/\",\"name\":\"Rafael Angeline\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://rafaelangeline.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}}"
						}
					</script>
					<script type="application/ld+json">
						{
							"{\"@context\":\"https://schema.org\",\"@type\":\"Person\",\"url\":\"https://rafaelangeline.com/\",\"sameAs\":[],\"@id\":\"#person\",\"name\":\"Rafael Angeline\"}"
						}
					</script>
				</Head>

				<Header items={menu} />

				{this.props.children}

				<Footer />

				<style jsx global>{`
					body {
						padding: 0;
						margin: 0;
					}

					.container {
						max-width: 1024px;
						margin: 0 auto;
						padding: 0 15px;
					}

					::selection {
						background: #3fc;
						color: #222;
					}
					::-moz-selection {
						background: #3fc;
						color: #222;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string
};

export default Layout;
