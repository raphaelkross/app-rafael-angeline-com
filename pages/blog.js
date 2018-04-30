import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Post from "../components/blog/post";
import Pagination from "../components/blog/pagination";

class Blog extends React.Component {
	render() {
		const postProps = {
			date: "May 9, 2019",
			thumbnail: {
				src:
					"https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c6e5e3aba713b17aa1fe71ab4f0ae5b&auto=format&fit=crop&w=800&q=60",
				title: "Image Title",
				alt: "Alt Text"
			},
			title: "Personal website overhaul.",
			permalink: "#",
			author_name: "rafael angeline",
			author_permalink: "#author",
			categories: [
				{ name: "wordpress", permalink: "#cat" },
				{ name: "development", permalink: "#dev" }
			],
			excerpt: `WordPress thumbnails is a really used feature, learn how to
			customize the image sizes from WordPress before activating a
			new theme.<br><br>
			Using the default sizes instead custom image sizes avoid
			longer media upload times and a smooth experience to your
			users.`
		};

		return (
			<React.Fragment>
				<Header />
				<main>
					<div className="content">
						<div className="grid">
							<Post {...postProps} />
							<Post {...postProps} />
							<Post {...postProps} />
							<Post {...postProps} />
							<Post {...postProps} />
						</div>
						<Pagination current={5} pages={10} />
					</div>
					<aside>[ Sidebar ]</aside>
				</main>
				<Footer />
				<style jsx>{`
					main {
						background: #eee;
						padding: 170px 0 90px 0;
						display: flex;
						justify-content: space-between;
					}

					.content {
						flex-basis: 70%;
					}

					aside {
						flex-basis: calc(30% - 45px);
					}

					.grid {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
					}

					.grid :global(.post) {
						margin-bottom: 45px;
					}

					@media (max-width: 700px) {
						main {
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
			</React.Fragment>
		);
	}
}

export default Blog;
