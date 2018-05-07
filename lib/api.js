import fetch from "isomorphic-unfetch";

class API {
	static async getPosts(args) {
		const res = await fetch(
			API.endpoint +
				"wp/v2/posts?page=" +
				args.page +
				"&per_page=" +
				args.per_page +
				"&_embed"
		);

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
}

API.endpoint =
	// eslint-disable-next-line no-undef
	process.env.api_endpoint || "https://rafaelangeline.com/wp-json/";

export default API;
