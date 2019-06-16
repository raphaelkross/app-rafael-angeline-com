/* eslint-env jest */

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Header from "../components/header";
import Link from "next/link";

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

		expect(itemOne.find(Link).length).toEqual(1);

		const itemOneLink = itemOne.find(Link).at(0);

		expect(itemOneLink.prop("href")).toEqual("#1");
		expect(itemOneLink.find("span").prop("children")).toEqual("Home");
	});

	it("should render external link without route", () => {
		const items = [
			{ href: "#1", label: "Home", external: true },
			{
				href: "#2",
				label: "About",
				children: [
					{ href: "#sub", label: "Sub", external: true },
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
		expect(itemOneLink.prop("rel")).toEqual("nofollow");
		expect(itemOneLink.prop("target")).toEqual("_blank");
		expect(itemOneLink.find("span").prop("children")).toEqual("Home");
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
		const itemTwoLink = itemTwo.children(Link).at(0);

		expect(itemTwoLink.prop("href")).toEqual("#2");
		expect(itemTwoLink.find("span").prop("children")).toEqual("About");

		// Rendering Submenu links properly.
		const ItemSubMenu = itemTwo
			.find("ul > li")
			.find(Link)
			.at(0);

		expect(ItemSubMenu.prop("href")).toEqual("#sub");
		expect(ItemSubMenu.find("span").prop("children")).toEqual("Sub");
	});
});

describe("Responsive Modal", () => {
	it("should be hidden at start", () => {
		const items = [{ href: "#1", label: "Home" }];

		let header = shallow(<Header items={items} />);

		const modal = header.find(".modal.visible");

		// No active modal.
		expect(modal.length).toEqual(0);

		// State set properly.
		expect(header.state("openModal")).toEqual(false);
	});

	it("should show modal when state.openModal is true", () => {
		const items = [{ href: "#1", label: "Home" }];

		let header = shallow(<Header items={items} />);

		// Set prop.
		header.setState({ openModal: true });

		const modal = header.find(".modal.visible");

		// Should have one active modal.
		expect(modal.length).toEqual(1);
	});

	it("should hide modal when state.openModal is false", () => {
		const items = [{ href: "#1", label: "Home" }];

		let header = shallow(<Header items={items} />);

		// Set prop.
		header.setState({ openModal: false });

		const modal = header.find(".modal.visible");

		// Should have one active modal.
		expect(modal.length).toEqual(0);
	});

	it("should set state.openModal to true when modal open is clicked", () => {
		const items = [{ href: "#1", label: "Home" }];

		let header = shallow(<Header items={items} />);

		header
			.find(".responsive-trigger-link")
			.simulate("click", { preventDefault: () => false });

		expect(header.state("openModal")).toEqual(true);
	});

	it("should set state.openModal to false when modal close is clicked", () => {
		const items = [{ href: "#1", label: "Home" }];

		let header = shallow(<Header items={items} />);

		header
			.find(".modal-close")
			.simulate("click", { preventDefault: () => false });

		expect(header.state("openModal")).toEqual(false);
	});
});
