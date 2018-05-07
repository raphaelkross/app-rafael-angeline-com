class PostModel {
	static process(post) {
		let categories = [];

		if (post._embedded["wp:term"].length > 0) {
			post._embedded["wp:term"].map(terms => {
				terms.map(term => {
					categories.push({
						name: term.slug,
						permalink: "category/" + term.slug
					});
				});
			});
		}

		if (categories.length === 0) {
			categories = false;
		}

		const options = {
			year: "numeric",
			month: "long",
			day: "numeric"
		};

		let postDate = new Date(post.date);
		postDate = postDate.toLocaleDateString("en-US", options);

		let processedPost = {
			date: postDate,
			title: post.title.rendered,
			permalink: post.slug,
			excerpt: post.excerpt.rendered,
			author_name: post._embedded.author[0].slug,
			categories: categories
		};

		if (
			post._embedded["wp:featuredmedia"] &&
			post._embedded["wp:featuredmedia"].length > 0
		) {
			const thumbnail = post._embedded["wp:featuredmedia"][0];

			processedPost.thumbnail = {
				src: thumbnail.source_url,
				alt: thumbnail.alt_text,
				title: thumbnail.title.rendered
			};
		} else {
			processedPost.thumbnail = false;
		}

		return processedPost;
	}
}

export default PostModel;
