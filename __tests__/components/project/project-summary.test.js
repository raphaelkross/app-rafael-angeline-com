/* eslint-env jest */

import { shallow } from "enzyme";
import ProjectSummary from "../../../components/project/project-summary";

describe("Project Summary", () => {
	it("should display project summary", () => {
		const summary = {
			title: "Rafael Angeline",
			date: "June 26th, 2018",
			stack: "WP, React",
			link: "https://github.com"
		};

		const projectSummary = shallow(<ProjectSummary {...summary} />);

		expect(projectSummary.find("h1").text()).toBe(summary.title);
		expect(projectSummary.find(".date").text()).toBe(summary.date);
		expect(projectSummary.find(".stack").text()).toBe(summary.stack);
		expect(projectSummary.find(".btn").prop("href")).toBe(summary.link);
	});
});
