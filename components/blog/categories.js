import React from "react";
import Config from "../../lib/config";
import { Link } from "../../routes";

class Categories extends React.Component {
	render() {
		// If undefined or empty, do not render.
		if (this.props.items === undefined || this.props.items.length <= 0) {
			return null;
		}

		return (
			<div className="widget">
				<h3>Categories.</h3>
				<ul>
					{this.props.items.map((category, key) => (
						<li key={key}>
							<Link route={Config.home + category.href}>
								<a>{category.label}</a>
							</Link>
						</li>
					))}
				</ul>
				<style jsx>{`
					.widget {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						border-bottom: solid 1px #ddd;
						box-shadow: 0 1px 0 #fff;
						padding: 0 0 45px;
						margin: 45px 0;
					}

					.widget:first-child {
						margin-top: 0;
					}

					.widget:last-child {
						border-bottom: 0;
						box-shadow: none;
					}

					h3 {
						color: #777;
						font-size: 16px;
						font-weight: 600;
						margin: 0 0 30px 0;
						letter-spacing: 0.3px;
					}

					ul {
						list-style: none;
						padding: 0;
						margin: 0;
					}

					li {
						margin: 15px 0;
						font-size: 13px;
						line-height: 20px;
						letter-spacing: 0.3px;
						color: #777;
					}

					a {
						color: #777;
						text-decoration: none;
						padding: 2px 0 2px 0;
					}

					a:hover {
						background: #3fc;
						color: #333;
						text-decoration: none;
					}
				`}</style>
			</div>
		);
	}
}

export default Categories;
