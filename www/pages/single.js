import React from "react";
import API from "../lib/api";
import PostModel from "../lib/model/post";
import CategoryModel from "../lib/model/category";
import SingleLayout from "../components/single/single";

class Single extends React.Component {
	static async getInitialProps(props) {
		// Get params.
		const { query } = props;
		let { slug } = query;

		const args = {
			slug: slug
		};

		const getPost = await API.getPost(args);

		// Prepare posts to <Post /> format.
		const post = PostModel.process(getPost);

		const getCategories = await API.getCategories({ per_page: 20 });

		// Prepare posts to <Post /> format.
		const categories = getCategories.categories.map(category => {
			return CategoryModel.process(category);
		});

		return {
			title: post.title + " - Rafael Angeline",
			post: post,
			categories: categories
		};
	}

	render() {
		return (
			<SingleLayout
				title={this.props.title}
				post={this.props.post}
				categories={this.props.categories}
			/>
		);
	}
}

export default Single;
