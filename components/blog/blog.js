import React from "react";

import Layout from "../layout";
import Post from "./post";
import Pagination from "./pagination";
import Categories from "./categories";

import PropTypes from "prop-types";

class Blog extends React.Component {
	render() {
		const { title, categories, posts, current, pages } = this.props;

		// Build posts elements.
		const thePosts =
			posts && posts.length > 0 ? (
				posts.map((post, key) => <Post key={key} {...post} />)
			) : (
				<p className="no-results">No posts were published yet...</p>
			);

		return (
			<Layout title={title}>
				<main>
					<div className="container">
						<div className="content">
							<div className="grid">{thePosts}</div>
							<Pagination current={current} pages={pages} />
						</div>
						<aside>
							<Categories items={categories} />
						</aside>
					</div>
				</main>
				<style jsx>{`
					main {
						background: #eee;
						padding: 170px 0 90px 0;
					}

					.container {
						display: flex;
						justify-content: space-between;
					}

					.content {
						flex-basis: 70%;
					}

					aside {
						flex-basis: calc(30% - 45px);
						margin: 45px 0 0;
					}

					.grid {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
					}

					.grid :global(.post) {
						margin-bottom: 45px;
					}

					.grid :global(.no-results) {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						margin: 0 0 60px;
						color: #777;
					}

					@media (max-width: 700px) {
						main {
							padding: 120px 0 90px;
						}

						.container {
							flex-wrap: wrap;
						}

						.content,
						aside {
							flex-basis: 100%;
						}

						aside {
							margin-top: 45px;
							padding-top: 45px;
							border-top: 2px solid #e2e2e2;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

Blog.propTypes = {
	title: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	posts: PropTypes.array.isRequired,
	current: PropTypes.number.isRequired,
	pages: PropTypes.number.isRequired
};

export default Blog;
