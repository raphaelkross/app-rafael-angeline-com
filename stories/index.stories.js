import { storiesOf } from "@storybook/react";

// Layouts.
import Blog from "../components/blog/blog";
import Single from "../components/single/single";

// Components.
import Header from "../components/header";
import Footer from "../components/footer";
import Post from "../components/blog/post";
import Pagination from "../components/blog/pagination";
import Categories from "../components/blog/categories";
import SinglePost from "../components/single/single-post";
import Section from "../components/section";
import Grid from "../components/work/grid";
import Project from "../components/project/project";
import ProjectSummary from "../components/project/project-summary";
import ProjectDetails from "../components/project/project-details";

// Mocks.
import PostsMock from "../lib/mocks/posts";
import CategoriesMock from "../lib/mocks/categories";
import ProjectsList from "../lib/projects-list";

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

storiesOf("SinglePost").add("complete", () => {
	return (
		<Single
			post={PostsMock[0]}
			categories={CategoriesMock}
			title="Single Post"
		/>
	);
});

storiesOf("SinglePost/Post")
	.add("complete", () => {
		const props = PostsMock[0];

		return <SinglePost {...props} />;
	})
	.add("without thumbnail", () => {
		let props = Object.assign({}, PostsMock[0]);

		props.thumbnail = false;

		return <SinglePost {...props} />;
	});

storiesOf("Section")
	.add("with title", () => {
		return (
			<Section title="About Us Title">
				<p>Howdy, this is the section component.</p>
			</Section>
		);
	})
	.add("without title", () => {
		return (
			<Section>
				<p>Howdy, this is the section component.</p>
			</Section>
		);
	});

storiesOf("Work/Grid")
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
		return <Grid projects={ProjectsList} />;
	});

storiesOf("Project").add("complete", () => {
	const content =
		"<h4>Above Title</h4><h3>main Title</h3><p>Main content</p>";

	const summary = {
		title: "Rafael Angeline",
		date: "June 26th, 2018",
		stack: "WP, React",
		link: "https://github.com"
	};

	return (
		<Project
			title="Project Title Tag"
			content={content}
			summary={summary}
		/>
	);
});

storiesOf("Project/Summary").add("complete", () => {
	const summary = {
		title: "Rafael Angeline",
		date: "June 26th, 2018",
		stack: "WP, React",
		link: "https://github.com"
	};

	return <ProjectSummary {...summary} />;
});

storiesOf("Project/Details").add("complete", () => {
	const content =
		"<h4>Above Title</h4><h3>main Title</h3><p>Main content</p>";

	return <ProjectDetails content={content} />;
});
