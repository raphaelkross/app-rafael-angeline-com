/* eslint-env jest */

import renderer from "react-test-renderer";
import Blog from "../../pages/blog";

describe("Blog", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<Blog />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
