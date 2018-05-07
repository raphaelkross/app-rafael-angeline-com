import { storiesOf } from "@storybook/react";

// Layouts.
import Blog from "../components/blog/blog";

// Components.
import Header from "../components/header";
import Footer from "../components/footer";
import Post from "../components/blog/post";
import Pagination from "../components/blog/pagination";
import Categories from "../components/blog/categories";

// Mocks.
import PostsMock from "../lib/mocks/posts";
import CategoriesMock from "../lib/mocks/categories";

storiesOf("Header").add("complete", () => {
	const menu = [
		{ href: "#1", label: "Home." },
		{
			href: "#2",
			label: "About.",
			children: [
				{ href: "#sub", label: "Facebook." },
				{ href: "#sub2", label: "Twitter." }
			]
		}
	];

	return <Header items={menu} />;
});

storiesOf("Footer").add("complete", () => <Footer />);

storiesOf("Blog")
	.add("complete", () => {
		return (
			<Blog
				posts={PostsMock}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);
	})
	.add("no-posts", () => {
		return (
			<Blog
				posts={[]}
				categories={CategoriesMock}
				current={1}
				pages={1}
				title="Blog Page"
			/>
		);
	});

storiesOf("Blog/Post")
	.add("complete", () => {
		const props = PostsMock[0];

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
	.add("complete", () => {
		return <Pagination current={5} pages={10} />;
	});

storiesOf("Blog/Categories").add("complete", () => {
	const cats = CategoriesMock;

	return <Categories items={cats} />;
});
