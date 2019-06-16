/* eslint-env jest */

import renderer from "react-test-renderer";
import Project from "../../../components/project/project";
import ProjectMock from "../../../lib/mocks/project";

describe("Project", () => {
	it("should render complete layout", () => {
		const content = ProjectMock.content.rendered;

		const summary = {
			title: ProjectMock.title.rendered,
			date: ProjectMock.acf.date,
			stack: ProjectMock.acf.stack,
			link: ProjectMock.acf.link
		};

		const component = renderer.create(
			<Project
				title={ProjectMock.title.rendered + " - Rafael Angeline"}
				content={content}
				summary={summary}
			/>
		);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
