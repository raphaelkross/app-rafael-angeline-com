/* eslint-env jest */

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Categories from "../../components/blog/categories";
import { Link } from "../../routes";

describe("Categories Widget", () => {
	it("should match complete layout snapshot", () => {
		const cats = [
			{ href: "#1", label: "Category 1" },
			{ href: "#2", label: "Category 2" },
			{ href: "#3", label: "Category 3" }
		];

		const component = renderer.create(<Categories items={cats} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should not render if items is empty or not passed", () => {
		const cats = [];
		let widget = shallow(<Categories items={cats} />);

		expect(widget.find(".widget").length).toEqual(0);

		widget = shallow(<Categories />);

		expect(widget.find(".widget").length).toEqual(0);
	});

	it("should render proper number of items as links", () => {
		const cats = [
			{ href: "#1", label: "Category 1" },
			{ href: "#2", label: "Category 2" },
			{ href: "#3", label: "Category 3" }
		];

		let widget = shallow(<Categories items={cats} />);

		const links = widget.find(Link);

		expect(links.length).toEqual(3);
	});

	it("should render links with proper href and label", () => {
		const cats = [{ href: "#1", label: "Category 1" }];

		let widget = shallow(<Categories items={cats} />);

		const link = widget.find(Link).at(0);

		expect(link.prop("route")).toEqual("/#1");
		expect(link.children("a").prop("children")).toEqual("Category 1");
	});
});
