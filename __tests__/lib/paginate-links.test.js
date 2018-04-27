/* eslint-env jest */

import paginateLinks from "../../lib/paginate-links";

describe("paginateLinks Fn", () => {
	it("should return empty array there's no pages", () => {
		const args = {
			current: 0,
			pages: 0,
			endSize: 1,
			midSize: 2
		};
		expect(paginateLinks(args)).toEqual([]);
	});

	it("should return pagination when current is page 1", () => {
		const args = {
			current: 1,
			pages: 10,
			endSize: 1,
			midSize: 2
		};

		const result = [
			{ link: false, label: 1, page: 1, current: true },
			{ link: true, label: 2, page: 2, current: false },
			{ link: true, label: 3, page: 3, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 10, page: 10, current: false }
		];

		expect(paginateLinks(args)).toEqual(result);
	});

	it("should return pagination when current is page 10", () => {
		const args = {
			current: 10,
			pages: 10,
			endSize: 1,
			midSize: 2
		};

		const result = [
			{ link: true, label: 1, page: 1, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 8, page: 8, current: false },
			{ link: true, label: 9, page: 9, current: false },
			{ link: false, label: 10, page: 10, current: true }
		];

		expect(paginateLinks(args)).toEqual(result);
	});

	it("should return pagination when current is page 5", () => {
		const args = {
			current: 5,
			pages: 10,
			endSize: 1,
			midSize: 2
		};

		const result = [
			{ link: true, label: 1, page: 1, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 3, page: 3, current: false },
			{ link: true, label: 4, page: 4, current: false },
			{ link: false, label: 5, page: 5, current: true },
			{ link: true, label: 6, page: 6, current: false },
			{ link: true, label: 7, page: 7, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 10, page: 10, current: false }
		];

		expect(paginateLinks(args)).toEqual(result);
	});

	it("should return pagination when current is page 8", () => {
		const args = {
			current: 8,
			pages: 10,
			endSize: 1,
			midSize: 2
		};

		const result = [
			{ link: true, label: 1, page: 1, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 6, page: 6, current: false },
			{ link: true, label: 7, page: 7, current: false },
			{ link: false, label: 8, page: 8, current: true },
			{ link: true, label: 9, page: 9, current: false },
			{ link: true, label: 10, page: 10, current: false }
		];

		expect(paginateLinks(args)).toEqual(result);
	});

	it("should return pagination when current is page 3", () => {
		const args = {
			current: 3,
			pages: 10,
			endSize: 1,
			midSize: 2
		};

		const result = [
			{ link: true, label: 1, page: 1, current: false },
			{ link: true, label: 2, page: 2, current: false },
			{ link: false, label: 3, page: 3, current: true },
			{ link: true, label: 4, page: 4, current: false },
			{ link: true, label: 5, page: 5, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 10, page: 10, current: false }
		];

		expect(paginateLinks(args)).toEqual(result);
	});

	it("should return pagination when endSize is bigger and midSize smaller", () => {
		const args = {
			current: 5,
			pages: 10,
			endSize: 2,
			midSize: 1
		};

		const result = [
			{ link: true, label: 1, page: 1, current: false },
			{ link: true, label: 2, page: 2, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 4, page: 4, current: false },
			{ link: false, label: 5, page: 5, current: true },
			{ link: true, label: 6, page: 6, current: false },
			{ link: false, label: "...", page: false, current: false },
			{ link: true, label: 9, page: 9, current: false },
			{ link: true, label: 10, page: 10, current: false }
		];

		expect(paginateLinks(args)).toEqual(result);
	});
});
