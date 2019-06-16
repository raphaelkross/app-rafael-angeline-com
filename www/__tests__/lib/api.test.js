/* eslint-env jest */

import API from "../../lib/api";

import fetch from "isomorphic-unfetch";
jest.mock("isomorphic-unfetch");

fetch.mockResolvedValue({
	ok: true,
	json: () => [],
	headers: {
		get: () => 10
	}
});

describe("getPosts", () => {
	it("should call fetch with proper params", async () => {
		expect.assertions(1);

		const args = {
			page: 1,
			per_page: 4
		};

		await API.getPosts(args);

		expect(fetch).toHaveBeenCalledWith(
			API.endpoint +
				"wp/v2/posts?page=" +
				args.page +
				"&per_page=" +
				args.per_page +
				"&_embed"
		);
	});

	it("should return empty if request can't be made", async () => {
		expect.assertions(1);

		// Mock fetch to return an not ok response.
		fetch.mockResolvedValueOnce({
			ok: false
		});

		const args = {
			page: 1,
			per_page: 4
		};

		const posts = await API.getPosts(args);

		expect(posts).toEqual({
			posts: [],
			pages: 0
		});
	});

	it("should return response JSON if request.ok is true", async () => {
		expect.assertions(2);

		const jsonMock = jest.fn().mockResolvedValue([{ id: 1 }]);

		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => {
				return jsonMock();
			},
			headers: {
				get: () => 10
			}
		});

		const args = {
			page: 1,
			per_page: 4
		};

		const posts = await API.getPosts(args);

		expect(jsonMock).toHaveBeenCalledTimes(1);

		expect(posts).toEqual({
			posts: [{ id: 1 }],
			pages: 10
		});
	});
});

describe("getProjects", () => {
	it("should call fetch with proper params", async () => {
		expect.assertions(1);

		await API.getProjects();

		expect(fetch).toHaveBeenCalledWith(
			API.endpoint + "wp/v2/project?per_page=100&_embed"
		);
	});

	it("should return empty array if request can't be made", async () => {
		expect.assertions(1);

		// Mock fetch to return an not ok response.
		fetch.mockResolvedValueOnce({
			ok: false
		});

		const projects = await API.getProjects();

		expect(projects).toEqual([]);
	});

	it("should return response JSON if request.ok is true", async () => {
		expect.assertions(2);

		const jsonMock = jest.fn().mockResolvedValue([{ id: 1 }]);

		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => {
				return jsonMock();
			},
			headers: {
				get: () => 10
			}
		});

		const projects = await API.getProjects();

		expect(jsonMock).toHaveBeenCalledTimes(1);

		expect(projects).toEqual([{ id: 1 }]);
	});
});

describe("getProject", () => {
	it("should call fetch with proper params", async () => {
		expect.assertions(1);

		const slug = "rafael-angeline";

		await API.getProject(slug);

		expect(fetch).toHaveBeenCalledWith(
			API.endpoint + "wp/v2/project?slug=" + slug + "&_embed"
		);
	});

	it("should return false if request can't be made", async () => {
		expect.assertions(1);

		// Mock fetch to return an not ok response.
		fetch.mockResolvedValueOnce({
			ok: false
		});

		const slug = "rafael-angeline";

		const project = await API.getProject(slug);

		expect(project).toEqual(false);
	});

	it("should return response JSON if request.ok is true", async () => {
		expect.assertions(2);

		const jsonMock = jest.fn().mockResolvedValue([{ id: 1 }]);

		fetch.mockResolvedValueOnce({
			ok: true,
			json: () => {
				return jsonMock();
			},
			headers: {
				get: () => 10
			}
		});

		const slug = "rafael-angeline";

		const project = await API.getProject(slug);

		expect(jsonMock).toHaveBeenCalledTimes(1);

		expect(project).toEqual({ id: 1 });
	});
});
