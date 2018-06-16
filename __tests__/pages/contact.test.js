/* eslint-env jest */

import renderer from "react-test-renderer";
import Contact from "../../pages/contact";

describe("Contact", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<Contact />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
