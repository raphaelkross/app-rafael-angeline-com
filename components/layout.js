import React from "react";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

import NProgress from "nprogress";
import Router from "next/router";

import Config from "../lib/config";

// Add Loading when possible.
Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
	render() {
		const menu = [
			{ href: Config.home, label: "Home." },
			{
				href: Config.home + "about",
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
			{ href: Config.home + "work", label: "Work." },
			{ href: Config.home + "contact", label: "Contact." },
			{ href: Config.home + "blog", label: "Blog." }
		];

		return (
			<React.Fragment>
				<Head>
					<title>{this.props.title}</title>
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
	title: PropTypes.string.isRequired
};

export default Layout;
