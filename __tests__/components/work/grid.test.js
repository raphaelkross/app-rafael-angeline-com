/* eslint-env jest */

import { shallow } from "enzyme";
import Grid from "../../../components/work/grid";
import ProjectsList from "../../../lib/mocks/projects";
import { Link } from "../../../routes";

describe("Projects Grid", () => {
	it("should display the right number of projects", () => {
		const grid = shallow(<Grid projects={ProjectsList} />);

		expect(grid.find(".project").length).toBe(ProjectsList.length);
	});

	it("should display Link tag with project/slug", () => {
		const grid = shallow(<Grid projects={ProjectsList} />);

		const link = grid.find(Link).at(0);

		expect(grid.find(Link).length).toBe(ProjectsList.length);
		expect(link.prop("route")).toBe("/project/" + ProjectsList[0]["slug"]);
	});

	it("should display project title", () => {
		const project = ProjectsList[0];
		const grid = shallow(<Grid projects={[project]} />);

		const title = grid.find(".project h1");

		expect(title.length).toBe(1);
		expect(title.text()).toBe(" " + project.title.rendered + ".");
	});

	it("should display project description", () => {
		const project = ProjectsList[0];
		const grid = shallow(<Grid projects={[project]} />);

		const description = grid.find(".project .excerpt");

		expect(description.length).toBe(1);
		expect(description.first("p").html()).toBe(
			"<div class=\"excerpt\">" + project.excerpt.rendered + "</div>"
		);
	});
});
