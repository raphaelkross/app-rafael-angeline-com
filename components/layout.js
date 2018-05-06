import React from "react";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";

class Layout extends React.Component {
	render() {
		const menu = [
			{ href: "#1", label: "Home." },
			{
				href: "#2",
				label: "About.",
				children: [
					{ href: "#sub", label: "Facebook." },
					{ href: "#sub2", label: "Twitter." }
				]
			}
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
				</Head>

				<Header items={menu} />

				{this.props.children}

				<Footer />

				<style jsx global>{`
					.container {
						max-width: 1280px;
						margin: 0 auto;
						padding: 0 15px;
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
