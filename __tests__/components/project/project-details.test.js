/* eslint-env jest */

import { shallow } from "enzyme";
import ProjectDetails from "../../../components/project/project-details";

describe("Project Details", () => {
	it("should display project content/details", () => {
		const content =
			"<h4>Above Title</h4><h3>main Title</h3><p>Main content</p>";

		const contentWithWrapper =
			"<div class=\"jsx-2402135458 content project-details\">" +
			content +
			"</div>";
		const projectDetails = shallow(<ProjectDetails content={content} />);

		expect(projectDetails.find(".project-details").html()).toBe(
			contentWithWrapper
		);
	});
});
