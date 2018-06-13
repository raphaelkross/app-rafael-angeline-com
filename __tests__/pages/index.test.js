/* eslint-env jest */

import renderer from "react-test-renderer";
import Index from "../../pages/index";

describe("Index", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<Index />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
