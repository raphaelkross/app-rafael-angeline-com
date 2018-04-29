import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@storybook/react/demo";

import Header from "../components/header";
import Post from "../components/blog/post";
import Pagination from "../components/blog/pagination";

storiesOf("Header").add("default", () => <Header />);

storiesOf("Blog/Post")
	.add("complete", () => {
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

		return <Post {...props} />;
	})
	.add("without thumbnail", () => {
		const props = {
			date: "May 9, 2019",
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

		return <Post {...props} />;
	});

storiesOf("Blog/Pagination")
	.addDecorator(story => (
		<div
			style={{
				background: "#e5e5e5",
				padding: "20px"
			}}
		>
			{story()}
		</div>
	))
	.add("default", () => {
		return <Pagination current={5} pages={10} />;
	});

storiesOf("Button")
	.add("with text", () => (
		<Button onClick={action("clicked")}>Hello Button</Button>
	))
	.add("with some emoji", () => (
		<Button onClick={action("clicked")}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));
