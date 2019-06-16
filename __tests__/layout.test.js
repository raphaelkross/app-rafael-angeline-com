/* eslint-env jest */

import renderer from "react-test-renderer";
import Layout from "../components/layout";

describe("Layout", () => {
	it("should render complete layout", () => {
		const component = renderer.create(<Layout title="Rafael Angeline" />);

		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
