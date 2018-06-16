import React from "react";
import PropTypes from "prop-types";
import Config from "../../lib/config";
import { Link } from "../../routes";

class Post extends React.Component {
	categoriesList(categories) {
		if (!categories) {
			return null;
		}

		return (
			<React.Fragment>
				{"in "}
				{categories.map((category, index) => {
					// If it's the last item, do not render the comma.
					const last = index == categories.length - 1;

					return (
						<React.Fragment key={index}>
							<Link route={Config.home + category.permalink}>
								<a>{category.name}</a>
							</Link>
							{last == false ? ", " : null}
						</React.Fragment>
					);
				})}
				<style jsx>{`
					a {
						color: #777;
						text-decoration: underline;
						padding: 2px 0 2px 0;
					}

					a:hover,
					a:active,
					a:focus {
						text-decoration: none;
						background: #3fc;
						color: #333;
					}
				`}</style>
			</React.Fragment>
		);
	}

	render() {
		return (
			<div className="post">
				<p className="date">{this.props.date}</p>
				<h2 className="title">
					<Link route={Config.home + this.props.permalink}>
						<a>{this.props.title}</a>
					</Link>
				</h2>
				{this.props.thumbnail ? (
					<picture>
						<Link route={Config.home + this.props.permalink}>
							<a>
								<img
									src={this.props.thumbnail.src}
									alt={this.props.thumbnail.alt}
									title={this.props.thumbnail.title}
								/>
							</a>
						</Link>
					</picture>
				) : null}
				<div
					className="excerpt"
					dangerouslySetInnerHTML={{ __html: this.props.excerpt }}
				/>
				<p className="post-details">
					Posted by <span>@{this.props.author_name}</span>{" "}
					{this.categoriesList(this.props.categories)}
				</p>
				<style jsx>{`
					.post {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						background: #fff;
						padding: 45px 40px;
						width: 100%;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
					}

					.date {
						color: #bbb;
						margin: 0;
						padding: 0;
						font-size: 14px;
						letter-spacing: 0.3px;
					}

					.title {
						font-size: 16px;
						color: #555;
						line-height: 1.35;
						font-weight: 600;
						margin: 20px 0;
					}

					a {
						text-decoration: none;
						color: #555;
					}

					a:hover,
					a:active,
					a:focus {
						text-decoration: underline;
					}

					picture a {
						display: block;
					}

					img {
						max-width: 100%;
						height: auto;
					}

					picture {
						margin: 0 0 20px;
					}

					.excerpt {
						margin: 0;
						font-size: 14px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}

					.excerpt p {
						margin: 0 0 15px;
					}

					.excerpt p:last-child {
						margin: 0;
					}

					.post-details {
						color: #bbb;
						font-size: 14px;
						line-height: 20px;
						letter-spacing: 0.3px;
						margin: auto 0 0;
						padding: 25px 0 0;
					}

					.post-details a,
					.post-details span {
						color: #777;
						text-decoration: underline;
						padding: 2px 0 2px 0;
					}

					.post-details a:hover,
					.post-details a:active,
					.post-details a:focus {
						text-decoration: none;
						background: #3fc;
						color: #333;
					}

					@media (max-width: 700px) {
						.post {
							padding: 25px;
						}
					}
				`}</style>
			</div>
		);
	}
}

Post.propTypes = {
	date: PropTypes.string.isRequired,
	thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	title: PropTypes.string.isRequired,
	permalink: PropTypes.string.isRequired,
	author_name: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	excerpt: PropTypes.string.isRequired
};

export default Post;
