/* eslint-env jest */

import renderer from "react-test-renderer";
import About from "../../pages/about";

describe("About", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<About />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
