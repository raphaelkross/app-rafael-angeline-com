import React from "react";

class Post extends React.Component {
	render() {
		return (
			<div className="post">
				<p className="date">May 9, 2016</p>
				<h2 className="title">
					<a href="#">Personal website overhaul.</a>
				</h2>
				{this.props.thumbnail ? (
					<picture>
						<a href="#">
							<img
								src="https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c6e5e3aba713b17aa1fe71ab4f0ae5b&auto=format&fit=crop&w=800&q=60"
								alt="Alternative Image"
								title="post-title"
							/>
						</a>
					</picture>
				) : null}
				<p className="excerpt">
					WordPress thumbnails is a really used feature, learn how to
					customize the image sizes from WordPress before activating a
					new theme.<br />
					<br />
					Using the default sizes instead custom image sizes avoid
					longer media upload times and a smooth experience to your
					users.
				</p>
				<p className="post-details">
					Posted by <a href="author-link">Rafael Angeline</a> in{" "}
					<a href="#" rel="category tag">
						WordPress
					</a>.
				</p>
				<style jsx>{`
					.post {
						background: #fff;
						padding: 45px;
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						width: 300px;
						border: 50px solid #eee;
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

export default Post;
