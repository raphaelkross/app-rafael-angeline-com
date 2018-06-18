import React from "react";
import PropTypes from "prop-types";
import { Link } from "../../routes";

class SinglePost extends React.Component {
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
							<Link route={"/" + category.permalink}>
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
				<h2 className="title">{this.props.title}</h2>
				{this.props.thumbnail ? (
					<picture>
						<img
							src={this.props.thumbnail.src}
							alt={this.props.thumbnail.alt}
							title={this.props.thumbnail.title}
						/>
					</picture>
				) : null}
				<div
					className="content"
					dangerouslySetInnerHTML={{ __html: this.props.content }}
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
						margin: 20px 0;
						font-size: 24px;
						color: #555;
						letter-spacing: 1px;
						line-height: 1.35;
						font-weight: 600;
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

					.content {
						margin: 0;
						font-size: 14px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}

					.post-details {
						color: #bbb;
						font-size: 14px;
						line-height: 24px;
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
				<style jsx global>{`
					.content a {
						color: #777;
						text-decoration: underline;
						padding: 2px 0 2px 0;
					}

					.content a:hover,
					.content a:active,
					.content a:focus {
						text-decoration: none;
						background: #3fc;
						color: #333;
					}

					.content p {
						margin: 0 0 20px;
					}

					.wp-caption {
						max-width: 100%;
					}

					.content img {
						max-width: 100%;
						height: auto;
					}

					.content p:last-child {
						margin: 0;
					}

					.content .alignleft {
						float: left;
						margin: 0 15px 20px 0;
					}

					.content .aligncenter {
						display: block;
						margin: 0 auto 20px auto;
					}

					.content .alignright {
						float: right;
						margin: 0 0 20px 15px;
					}

					.content .alignnone {
						float: none;
						display: block;
						margin: 0 0 20px 0;
					}

					.content .size-full {
						width: 100%;
						height: auto;
						margin: 0 0 20px 0;
					}

					.content p .alignleft {
						float: left;
						margin: 5px 15px 20px 0;
					}

					.content p .aligncenter {
						display: block;
						margin: 5px auto 20px auto;
					}

					.content p .alignright {
						float: right;
						margin: 5px 0 20px 15px;
					}

					.content p .alignnone {
						float: none;
						display: block;
						margin: 5px 0 20px 0;
					}

					.content p .size-full {
						width: 100%;
						height: auto;
						margin: 5px 0 20px 0;
					}

					.content .wp-caption-text {
						font-style: italic;
					}

					.content ol,
					.content ul {
						margin: 0 0 20px 0;
						padding: 0 0 0 15px;
					}

					.content ul {
						list-style: square;
					}

					.content blockquote {
						font-family: Georgia, "Times New Roman", serif;
						font-size: 16px;
						line-height: 1.6;
						font-style: italic;
						margin: 0 0 20px;
						padding: 10px 20px;
						border-left: 3px solid #eee;
						letter-spacing: 0.1px;
					}

					.content h1,
					.content h2,
					.content h3,
					.content h4,
					.content h5,
					.content h6 {
						margin: 0 0 20px;
						line-height: 1.2;
						font-weight: 600;
						letter-spacing: 1px;
					}

					.content h1 {
						font-size: 24px;
					}

					.content h2 {
						font-size: 22px;
					}

					.content h3 {
						font-size: 20px;
					}

					.content h4 {
						font-size: 18px;
					}

					.content h5 {
						font-size: 16px;
					}

					.content h6 {
						font-size: 14px;
					}
				`}</style>
			</div>
		);
	}
}

SinglePost.propTypes = {
	date: PropTypes.string.isRequired,
	thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	title: PropTypes.string.isRequired,
	permalink: PropTypes.string.isRequired,
	author_name: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	content: PropTypes.string.isRequired
};

export default SinglePost;
