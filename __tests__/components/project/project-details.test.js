/* eslint-env jest */

import { shallow } from "enzyme";
import ProjectDetails from "../../../components/project/project-details";
import ProjectMock from "../../../lib/mocks/project";

describe("Project Details", () => {
	it("should display project content/details", () => {
		const content = ProjectMock.content.rendered;

		const contentWithWrapper =
			"<div class=\"jsx-1989274570 content project-details\">" +
			content +
			"</div>";
		const projectDetails = shallow(<ProjectDetails content={content} />);

		expect(projectDetails.find(".project-details").html()).toBe(
			contentWithWrapper
		);
	});
});
