import React from "react";

import Layout from "../layout";
import SinglePost from "./single-post";
import Categories from "../blog/categories";

import PropTypes from "prop-types";

class Single extends React.Component {
	render() {
		const { title, categories, post } = this.props;
		return (
			<Layout
				title={
					(post.seo_title ? post.seo_title : title) +
					" - Rafael Angeline"
				}
				description={post.seo_description}
			>
				<main>
					<div className="container">
						<div className="content">
							<SinglePost {...post} />
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

Single.propTypes = {
	title: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	post: PropTypes.object.isRequired
};

export default Single;
