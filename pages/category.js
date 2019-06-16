import React from "react";
import API from "../lib/api";
import PostModel from "../lib/model/post";
import CategoryModel from "../lib/model/category";
import BlogLayout from "../components/blog/blog";

class Category extends React.Component {
	static async getInitialProps(props) {
		// Get params.
		const { query } = props;
		let { page, slug } = query;

		// Set page default when not in route.
		page = page !== undefined ? page : 1;

		// Get the category ID from Slug.
		const category = await API.getCategoryFromSlug(slug);

		const args = {
			page: page,
			per_page: 4,
			categories: category.id
		};

		const getPosts = await API.getPosts(args);

		// Prepare posts to <Post /> format.
		const posts = getPosts.posts.map(post => {
			return PostModel.process(post);
		});

		const getCategories = await API.getCategories({ per_page: 20 });

		// Prepare posts to <Post /> format.
		const categories = getCategories.categories.map(category => {
			return CategoryModel.process(category);
		});

		return {
			title: category.name + " - Rafael Angeline",
			slug: category.slug,
			posts: posts,
			categories: categories,
			current: page,
			pages: getPosts.pages
		};
	}

	render() {
		return (
			<BlogLayout
				base={"category/" + this.props.slug}
				title={this.props.title}
				posts={this.props.posts}
				categories={this.props.categories}
				current={parseInt(this.props.current)}
				pages={parseInt(this.props.pages)}
			/>
		);
	}
}

export default Category;
