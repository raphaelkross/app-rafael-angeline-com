/* eslint-env jest */

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Pagination from "../../components/blog/pagination";

describe("Pagination", () => {
	it("should render complete layout", () => {
		const component = renderer.create(
			<Pagination current={5} pages={10} />
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should not render when there isn't pages", () => {
		const component = renderer.create(<Pagination current={1} pages={0} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it("should render next/prev when there's next/prev pages", () => {
		const nav = shallow(<Pagination current={5} pages={10} />);

		expect(nav.find(".page-arrows-right").length).toEqual(1);
		expect(nav.find(".page-arrows-left").length).toEqual(1);
	});

	it("should render next only when there's next pages only", () => {
		const nav = shallow(<Pagination current={1} pages={10} />);

		expect(nav.find(".page-arrows-right").length).toEqual(1);
		expect(nav.find(".page-arrows-left").length).toEqual(0);
	});

	it("should render prev only when there's prev pages only", () => {
		const nav = shallow(<Pagination current={10} pages={10} />);

		expect(nav.find(".page-arrows-right").length).toEqual(0);
		expect(nav.find(".page-arrows-left").length).toEqual(1);
	});
});
