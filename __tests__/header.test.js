/* eslint-env jest */

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "../components/header";

describe("Header", () => {
	it("should match complete layout snapshot", () => {
		const items = [
			{ href: "#1", label: "Home" },
			{
				href: "#2",
				label: "About",
				children: [
					{ href: "#sub", label: "Sub" },
					{ href: "#sub2", label: "Sub2" }
				]
			}
		];

		const component = renderer.create(<Header items={items} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should still render even without menu items", () => {
		const items = [];
		let header = shallow(<Header items={items} />);

		expect(header.find("header").length).toEqual(1);

		header = shallow(<Header />);

		expect(header.find("header").length).toEqual(1);
	});

	it("should render right amout of links", () => {
		const items = [
			{ href: "#1", label: "Home" },
			{
				href: "#2",
				label: "About",
				children: [
					{ href: "#sub", label: "Sub" },
					{ href: "#sub2", label: "Sub2" }
				]
			}
		];

		let header = shallow(<Header items={items} />);

		const menu = header.find("nav");

		// Render 4 links.
		expect(menu.find("a").length).toEqual(4);
	});

	it("should render first-level items properly", () => {
		const items = [
			{ href: "#1", label: "Home" },
			{
				href: "#2",
				label: "About",
				children: [
					{ href: "#sub", label: "Sub" },
					{ href: "#sub2", label: "Sub2" }
				]
			}
		];

		let header = shallow(<Header items={items} />);

		// First item should be a link without children.
		const itemOne = header.find("nav > ul > li").at(0);

		expect(itemOne.find("a").length).toEqual(1);

		const itemOneLink = itemOne.find("a").at(0);

		expect(itemOneLink.prop("href")).toEqual("#1");
		expect(itemOneLink.children("span").prop("children")).toEqual("Home");
	});

	it("should render items w/ children properly", () => {
		const items = [
			{ href: "#1", label: "Home" },
			{
				href: "#2",
				label: "About",
				children: [
					{ href: "#sub", label: "Sub" },
					{ href: "#sub2", label: "Sub2" }
				]
			}
		];

		let header = shallow(<Header items={items} />);

		// Check the amount of links being rendered.
		const itemTwo = header.find("nav > ul > li").at(1);

		expect(itemTwo.find("a").length).toEqual(3);

		// Must have sub-menu.
		expect(itemTwo.find("ul").length).toEqual(1);
		expect(itemTwo.find("ul > li").length).toEqual(2);

		// Rendering main link properly?
		const itemTwoLink = itemTwo.children("a").at(0);

		expect(itemTwoLink.prop("href")).toEqual("#2");
		expect(itemTwoLink.children("span").prop("children")).toEqual("About");

		// Rendering Submenu links properly.
		const ItemSubMenu = itemTwo.find("ul > li a").at(0);

		expect(ItemSubMenu.prop("href")).toEqual("#sub");
		expect(ItemSubMenu.children("span").prop("children")).toEqual("Sub");
	});
});
