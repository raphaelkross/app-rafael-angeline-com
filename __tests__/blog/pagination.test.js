/* eslint-env jest */

import { shallow } from "enzyme";
import Pagination from "../../components/blog/pagination";

describe("Pagination", () => {
	it("should not render when there's no pages", () => {
		const props = {
			current: 0,
			pages: 0
		};

		const component = shallow(<Pagination {...props} />);

		expect(component.find("nav").exists()).toBeFalsy();
	});
});
