/* eslint-env jest */

import renderer from "react-test-renderer";
import Project from "../../../components/project/project";

describe("Project", () => {
	it("should render complete layout", () => {
		const content =
			"<h4>Above Title</h4><h3>main Title</h3><p>Main content</p>";

		const summary = {
			title: "Rafael Angeline",
			date: "June 26th, 2018",
			stack: "WP, React",
			link: "https://github.com"
		};

		const component = renderer.create(
			<Project
				title="Project Title Tag"
				content={content}
				summary={summary}
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
