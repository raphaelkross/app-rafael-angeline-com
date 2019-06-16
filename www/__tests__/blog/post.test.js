/* eslint-env jest */

import renderer from "react-test-renderer";

import Post from "../../components/blog/post";

describe("Blog/Post", () => {
	it("Complete layout", () => {
		const props = {
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
				{ name: "WordPress", permalink: "#cat" },
				{ name: "Development", permalink: "#dev" }
			],
			excerpt: `WordPress thumbnails is a really used feature, learn how to
			customize the image sizes from WordPress before activating a
			new theme.<br><br>
			Using the default sizes instead custom image sizes avoid
			longer media upload times and a smooth experience to your
			users.`
		};

		const component = renderer.create(<Post {...props} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("Layout without thumbnail", () => {
		const props = {
			date: "May 9, 2019",
			title: "Personal website overhaul.",
			permalink: "#",
			author_name: "rafael angeline",
			author_permalink: "#author",
			categories: [
				{ name: "WordPress", permalink: "#cat" },
				{ name: "Development", permalink: "#dev" }
			],
			excerpt: `WordPress thumbnails is a really used feature, learn how to
			customize the image sizes from WordPress before activating a
			new theme.<br><br>
			Using the default sizes instead custom image sizes avoid
			longer media upload times and a smooth experience to your
			users.`
		};

		const component = renderer.create(<Post {...props} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
