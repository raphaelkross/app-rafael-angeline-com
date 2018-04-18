import React from "react";
import PropTypes from "prop-types";

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
							<a href={category.permalink}>{category.name}</a>
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
					<a href={this.props.permalink}>{this.props.title}</a>
				</h2>
				{this.props.thumbnail ? (
					<picture>
						<a href={this.props.permalink}>
							<img
								src={this.props.thumbnail.src}
								alt={this.props.thumbnail.alt}
								title={this.props.thumbnail.title}
							/>
						</a>
					</picture>
				) : null}
				<p
					className="excerpt"
					dangerouslySetInnerHTML={{ __html: this.props.excerpt }}
				/>
				<p className="post-details">
					Posted by{" "}
					<a href={this.props.author_permalink}>
						{this.props.author_name}
					</a>{" "}
					{this.categoriesList(this.props.categories)}
				</p>
				<style jsx>{`
					.post {
						background: #fff;
						padding: 45px;
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
					}

					.date {
						color: #ccc;
						margin: 0;
						padding: 0;
						font-size: 11px;
						letter-spacing: 0.3px;
					}

					.title {
						text-transform: uppercase;
						font-size: 12px;
						color: #555;
						line-height: 1.5;
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

					.excerpt {
						margin: 25px 0 0;
						font-size: 11px;
						line-height: 20px;
						letter-spacing: 0.3px;
						color: #777;
					}

					.post-details {
						color: #ccc;
						font-size: 11px;
						line-height: 20px;
						letter-spacing: 0.3px;
						margin: 25px 0 0;
					}

					.post-details a {
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
				`}</style>
			</div>
		);
	}
}

Post.propTypes = {
	date: PropTypes.string.isRequired,
	thumbnail: PropTypes.object,
	title: PropTypes.string.isRequired,
	permalink: PropTypes.string.isRequired,
	author_name: PropTypes.string.isRequired,
	author_permalink: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	excerpt: PropTypes.string.isRequired
};

export default Post;
