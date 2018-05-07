import React from "react";
import API from "../lib/api";
import PostModel from "../lib/model/post";
import BlogLayout from "../components/blog/blog";

class Blog extends React.Component {
	static async getInitialProps() {
		const args = {
			page: 1,
			per_page: 4
		};

		const getPosts = await API.getPosts(args);

		// Prepare posts to <Post /> format.
		const posts = getPosts.posts.map(post => {
			return PostModel.process(post);
		});

		return {
			title: "Blog - Rafael Angeline",
			posts: posts,
			categories: [],
			current: 1,
			pages: getPosts.pages
		};
	}

	render() {
		return (
			<BlogLayout
				title={this.props.title}
				posts={this.props.posts}
				categories={this.props.categories}
				current={parseInt(this.props.current)}
				pages={parseInt(this.props.pages)}
			/>
		);
	}
}

export default Blog;
