import fetch from "isomorphic-unfetch";

class API {
	static async getPosts(args) {
		let URL =
			API.endpoint +
			"wp/v2/posts?page=" +
			args.page +
			"&per_page=" +
			args.per_page +
			"&_embed";

		if (args.categories) {
			URL += "&categories=" + args.categories;
		}

		const res = await fetch(URL);

		if (res && res.ok) {
			const posts = await res.json();

			return {
				posts: posts,
				pages: res.headers.get("X-WP-TotalPages")
			};
		} else {
			return {
				posts: [],
				pages: 0
			};
		}
	}

	static async getPost(args) {
		let URL = API.endpoint + "wp/v2/posts?slug=" + args.slug + "&_embed";

		const res = await fetch(URL);

		if (res && res.ok) {
			const post = await res.json();

			if (post.length > 0) {
				return post[0];
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	static async getCategories(args) {
		const res = await fetch(
			API.endpoint + "wp/v2/categories?per_page=" + args.per_page
		);

		if (res && res.ok) {
			const categories = await res.json();

			return {
				categories: categories
			};
		} else {
			return {
				categories: []
			};
		}
	}

	static async getCategoryFromSlug(slug) {
		const res = await fetch(API.endpoint + "wp/v2/categories?slug=" + slug);

		if (res && res.ok) {
			const categories = await res.json();

			if (categories.length > 0) {
				// Get first item.
				const category = categories[0];

				return category;
			}

			// Return default 0, if no categories were returned.
			return 0;
		} else {
			return 0;
		}
	}

	static async getProjects() {
		let URL = API.endpoint + "projects";

		const res = await fetch(URL);

		if (res && res.ok) {
			const projects = await res.json();

			return projects;
		} else {
			return [];
		}
	}

	static async getProject(slug) {
		let URL = API.endpoint + "project/" + slug;

		const res = await fetch(URL);

		if (res && res.ok) {
			const project = await res.json();

			if ( project ) {
				return project;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
}

API.endpoint =
	// eslint-disable-next-line no-undef
	process.env.NOW_REGION == 'dev1' ? "http://localhost:3000/api/" : "https://rafaelangeline.com/api/";

export default API;
