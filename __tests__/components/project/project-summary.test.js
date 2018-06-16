/* eslint-env jest */

import { shallow } from "enzyme";
import ProjectSummary from "../../../components/project/project-summary";
import ProjectMock from "../../../lib/mocks/project";

describe("Project Summary", () => {
	it("should display project summary", () => {
		const summary = {
			title: ProjectMock.title.rendered,
			date: ProjectMock.acf.date,
			stack: ProjectMock.acf.stack,
			link: ProjectMock.acf.link
		};

		const projectSummary = shallow(<ProjectSummary {...summary} />);

		expect(projectSummary.find("h1").text()).toBe(summary.title);
		expect(projectSummary.find(".date").text()).toBe(summary.date);
		expect(projectSummary.find(".stack").text()).toBe(summary.stack);
		expect(projectSummary.find(".btn").prop("href")).toBe(summary.link);
	});
});
