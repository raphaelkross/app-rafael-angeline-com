import React from "react";

import Layout from "../layout";
import Post from "./post";
import Pagination from "./pagination";
import Categories from "./categories";

import PropTypes from "prop-types";

class Blog extends React.Component {
	render() {
		const { base, title, categories, posts, current, pages } = this.props;

		// Build posts elements.
		const thePosts =
			posts && posts.length > 0 ? (
				posts.map((post, key) => <Post key={key} {...post} />)
			) : (
				<p className="no-results">No posts were published yet...</p>
			);

		return (
			<Layout
				title={title}
				description="Read articles posted by Rafael Angeline about general development subjects, like WordPress, React, Javascript and general methodologies."
			>
				<main>
					<div className="container">
						<div className="content">
							<div className="grid">{thePosts}</div>
							<Pagination
								base={base}
								current={current}
								pages={pages}
							/>
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
						flex-basis: 80%;
						width: 80%;
					}

					aside {
						flex-basis: calc(20% - 45px);
						margin: 45px 0 0;
					}

					.grid {
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-gap: 45px 45px;
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

					@media (max-width: 900px) {
						.grid {
							grid-template-columns: 1fr;
						}
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
