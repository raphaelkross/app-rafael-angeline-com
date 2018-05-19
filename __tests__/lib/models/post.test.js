/* eslint-env jest */

import PostModel from "../../../lib/model/post";
import {
	PostMockComplete,
	PostMockNoThumbs,
	PostMockNoCats
} from "../../../lib/mocks/post";

describe("Post Model", () => {
	it("should return full post when post is complete", () => {
		const input = PostMockComplete;

		const output = {
			date: "May 9, 2016",
			title: "Quickly Deploying Meteor Apps with Mupx",
			permalink: "quickly-deploying-meteor-apps",
			excerpt:
				"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
			thumbnail: {
				src:
					"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb.jpg",
				alt: "Alt Title",
				title: "Quickly Deploy Meteor Apps with Mupx"
			},
			author_name: "rafaelangeline",
			categories: [
				{
					name: "meteor",
					permalink: "category/meteor"
				}
			],
			content:
				"<p>Meteor has great options to deployment already available</p>"
		};

		const processedPost = PostModel.process(input);

		expect(processedPost).toEqual(output);
	});

	it("should return thumbs empty post when post has no thumbs", () => {
		const input = PostMockNoThumbs;

		const output = {
			date: "May 9, 2016",
			title: "Quickly Deploying Meteor Apps with Mupx",
			permalink: "quickly-deploying-meteor-apps",
			excerpt:
				"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
			thumbnail: false,
			author_name: "rafaelangeline",
			categories: [
				{
					name: "meteor",
					permalink: "category/meteor"
				}
			],
			content:
				"<p>Meteor has great options to deployment already available</p>"
		};

		const processedPost = PostModel.process(input);

		expect(processedPost).toEqual(output);
	});

	it("should return categories empty post when post has no categories", () => {
		const input = PostMockNoCats;

		const output = {
			date: "May 9, 2016",
			title: "Quickly Deploying Meteor Apps with Mupx",
			permalink: "quickly-deploying-meteor-apps",
			excerpt:
				"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
			thumbnail: false,
			author_name: "rafaelangeline",
			categories: false,
			content:
				"<p>Meteor has great options to deployment already available</p>"
		};

		const processedPost = PostModel.process(input);

		expect(processedPost).toEqual(output);
	});
});
