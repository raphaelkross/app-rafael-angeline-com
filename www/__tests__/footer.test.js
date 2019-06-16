/* eslint-env jest */

import renderer from "react-test-renderer";
import Footer from "../components/footer";

describe("Footer", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<Footer />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
