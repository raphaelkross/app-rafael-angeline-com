/* eslint-env jest */

import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Blog from "../../components/blog/blog";
import Post from "../../components/blog/post";
import Categories from "../../components/blog/categories";
import Pagination from "../../components/blog/pagination";

import PostsMock from "../../lib/mocks/posts";
import CategoriesMock from "../../lib/mocks/categories";

describe("Blog", () => {
	it("should render proper number of <Post />", () => {
		const blog = shallow(
			<Blog
				posts={PostsMock}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);

		expect(blog.find(Post).length).toEqual(4);
	});

	it("should render message when no post is rendered", () => {
		const blog = shallow(
			<Blog
				posts={[]}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);

		expect(blog.find(".no-results").length).toEqual(1);
	});

	it("should render <Categories /> widget", () => {
		const blog = shallow(
			<Blog
				posts={PostsMock}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);

		expect(blog.find(Categories).length).toEqual(1);
	});

	it("should be calling <pagination /> and with proper parameters", () => {
		const blog = shallow(
			<Blog
				posts={PostsMock}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);

		expect(blog.find(Pagination).length).toEqual(1);
		expect(blog.find(Pagination).prop("current")).toEqual(1);
		expect(blog.find(Pagination).prop("pages")).toEqual(5);
	});

	it("should match complete layout snapshot", () => {
		const component = renderer.create(
			<Blog
				posts={PostsMock}
				categories={CategoriesMock}
				current={1}
				pages={5}
				title="Blog Page"
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
