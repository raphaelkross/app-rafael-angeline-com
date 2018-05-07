export let PostMockComplete = {
	id: 29,
	date: "2016-05-09T20:28:55",
	date_gmt: "2016-05-09T20:28:55",
	guid: {
		rendered: "http://rafaelangeline.com/?p=29"
	},
	modified: "2016-05-09T20:32:21",
	modified_gmt: "2016-05-09T20:32:21",
	slug: "quickly-deploying-meteor-apps",
	status: "publish",
	type: "post",
	link: "https://rafaelangeline.com/quickly-deploying-meteor-apps/",
	title: {
		rendered: "Quickly Deploying Meteor Apps with Mupx"
	},
	content: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n<p>Running a Meteor app in a server requires a Node Server, a MongoDB instance, SSL support and a bunch of configuration/installation steps. Gladly, <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> created a tool that helps us to quickly deploy apps in any server instance.</p>\n<p>In the process, <a href=\"https://github.com/arunoda/meteor-up/tree/mupx\" target=\"_blank\">Meteor Up X</a> was the tool that actually worked properly and without creating trouble. It only requires the <em>mupx</em> NPM module installed globally, a <em>mup.json </em>configuring the deployment process, SSH server access and a couple commands in the line command.</p>\n<p>The instructions at <em>mupx </em>page are really clear, so there&#8217;s no need to rephrase the details again in this post. Just ensure to follow these tricks:</p>\n<h3>Use the Meteor Up X Branch</h3>\n<p>In the repository link I just placed above, ensure you install the <em>mupx </em>tool, not the <em>mup</em>, since isn&#8217;t the tool we&#8217;re covering here.</p>\n<p>I used the old tool and it didn&#8217;t work properly, so ensure to use the stable version.</p>\n<h3>The deployment is failing</h3>\n<p>If your server isn&#8217;t the strongest &#8211; in my case, I was using a really weak one &#8211; you should *really* increase the <em>deployCheckWaitTime</em> value in the <em>mup.json </em>file.</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id=\"crayon-5aef56d68f687544569948\" class=\"crayon-syntax crayon-theme-sublime-text crayon-font-monaco crayon-os-mac print-yes notranslate\" data-settings=\" minimize scroll-mouseover\" style=\" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;\">\r\n\t\t\r\n\t\t\t<div class=\"crayon-toolbar\" data-settings=\" mouseover overlay hide delay\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><span class=\"crayon-title\"></span>\r\n\t\t\t<div class=\"crayon-tools\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><div class=\"crayon-button crayon-nums-button\" title=\"Toggle Line Numbers\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-plain-button\" title=\"Toggle Plain Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-wrap-button\" title=\"Toggle Line Wrap\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-expand-button\" title=\"Expand Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-copy-button\" title=\"Copy\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-popup-button\" title=\"Open Code In New Window\"><div class=\"crayon-button-icon\"></div></div></div></div>\r\n\t\t\t<div class=\"crayon-info\" style=\"min-height: 16.8px !important; line-height: 16.8px !important;\"></div>\r\n\t\t\t<div class=\"crayon-plain-wrap\"><textarea wrap=\"soft\" class=\"crayon-plain print-no\" data-settings=\"dblclick\" readonly style=\"-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;\">\n\"deployCheckWaitTime\": 600,</textarea></div>\r\n\t\t\t<div class=\"crayon-main\" style=\"\">\r\n\t\t\t\t<table class=\"crayon-table\">\r\n\t\t\t\t\t<tr class=\"crayon-row\">\r\n\t\t\t\t<td class=\"crayon-nums \" data-settings=\"show\">\r\n\t\t\t\t\t<div class=\"crayon-nums-content\" style=\"font-size: 12px !important; line-height: 15px !important;\"><div class=\"crayon-num\" data-line=\"crayon-5aef56d68f687544569948-1\">1</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"crayon-code\"><div class=\"crayon-pre\" style=\"font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;\"><div class=\"crayon-line\" id=\"crayon-5aef56d68f687544569948-1\"><span class=\"crayon-s\">\"deployCheckWaitTime\"</span><span class=\"crayon-o\">:</span><span class=\"crayon-h\"> </span><span class=\"crayon-cn\">600</span><span class=\"crayon-sy\">,</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0003 seconds] -->\r\n<p>I used 600 to make things to work properly, else the deployment process end up failing in the last steps.</p>\n<h3>How about the &#8220;premium&#8221; options?</h3>\n<p>If you don&#8217;t want to struggle with slower servers and a bit more complicated commands, you can checkout the more expensive options and host your app in Meteor&#8217;s creators Hosting solution &#8211; <em><a href=\"https://www.meteor.com/hosting\" target=\"_blank\">Galaxy</a>.</em> Besides, you&#8217;ll need a place to host your MongoDB server, I would recommend <em><a href=\"https://mlab.com\" target=\"_blank\">MLab</a></em> to the job.</p>\n<p>An extra, would be to monitor the application performance and errors, our friends at <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> offers exactly that!</p>\n",
		protected: false
	},
	excerpt: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
		protected: false
	},
	author: 1,
	featured_media: 41,
	comment_status: "open",
	ping_status: "open",
	sticky: false,
	template: "",
	format: "standard",
	meta: [],
	categories: [5],
	tags: [],
	_links: {
		self: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts/29"
			}
		],
		collection: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts"
			}
		],
		about: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/types/post"
			}
		],
		author: [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/users/1"
			}
		],
		replies: [
			{
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/comments?post=29"
			}
		],
		"version-history": [
			{
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/posts/29/revisions"
			}
		],
		"wp:featuredmedia": [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/media/41"
			}
		],
		"wp:attachment": [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/media?parent=29"
			}
		],
		"wp:term": [
			{
				taxonomy: "category",
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/categories?post=29"
			},
			{
				taxonomy: "post_tag",
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/tags?post=29"
			}
		],
		curies: [
			{
				name: "wp",
				href: "https://api.w.org/{rel}",
				templated: true
			}
		]
	},
	_embedded: {
		author: [
			{
				id: 1,
				name: "Rafael Angeline",
				url: "http://rafaelangeline.com",
				description: "",
				link: "https://rafaelangeline.com/author/rafaelangeline/",
				slug: "rafaelangeline",
				avatar_urls: {
					"24":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=24&d=mm&r=g",
					"48":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=48&d=mm&r=g",
					"96":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=96&d=mm&r=g"
				},
				_links: {
					self: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users/1"
						}
					],
					collection: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users"
						}
					]
				}
			}
		],
		"wp:featuredmedia": [
			{
				id: 41,
				date: "2016-05-09T20:31:58",
				slug: "balloon_thumb",
				type: "attachment",
				link:
					"https://rafaelangeline.com/quickly-deploying-meteor-apps/balloon_thumb/",
				title: {
					rendered: "Quickly Deploy Meteor Apps with Mupx"
				},
				author: 1,
				caption: {
					rendered: ""
				},
				alt_text: "Alt Title",
				media_type: "image",
				mime_type: "image/jpeg",
				media_details: {
					width: 1160,
					height: 580,
					file: "2016/05/balloon_thumb.jpg",
					sizes: {
						thumbnail: {
							file: "balloon_thumb-150x150.jpg",
							width: 150,
							height: 150,
							mime_type: "image/jpeg",
							source_url:
								"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb-150x150.jpg"
						},
						medium: {
							file: "balloon_thumb-300x150.jpg",
							width: 300,
							height: 150,
							mime_type: "image/jpeg",
							source_url:
								"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb-300x150.jpg"
						},
						medium_large: {
							file: "balloon_thumb-768x384.jpg",
							width: 768,
							height: 384,
							mime_type: "image/jpeg",
							source_url:
								"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb-768x384.jpg"
						},
						large: {
							file: "balloon_thumb-1024x512.jpg",
							width: 1024,
							height: 512,
							mime_type: "image/jpeg",
							source_url:
								"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb-1024x512.jpg"
						},
						full: {
							file: "balloon_thumb.jpg",
							width: 1160,
							height: 580,
							mime_type: "image/jpeg",
							source_url:
								"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb.jpg"
						}
					},
					image_meta: {
						aperture: "0",
						credit: "",
						camera: "",
						caption: "",
						created_timestamp: "0",
						copyright: "",
						focal_length: "0",
						iso: "0",
						shutter_speed: "0",
						title: "",
						orientation: "0",
						keywords: []
					}
				},
				source_url:
					"https://rafaelangeline.com/wp-content/uploads/2016/05/balloon_thumb.jpg",
				_links: {
					self: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/media/41"
						}
					],
					collection: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/media"
						}
					],
					about: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/types/attachment"
						}
					],
					author: [
						{
							embeddable: true,
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users/1"
						}
					],
					replies: [
						{
							embeddable: true,
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/comments?post=41"
						}
					]
				}
			}
		],
		"wp:term": [
			[
				{
					id: 5,
					link: "https://rafaelangeline.com/category/meteor/",
					name: "Meteor",
					slug: "meteor",
					taxonomy: "category",
					_links: {
						self: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/categories/5"
							}
						],
						collection: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/categories"
							}
						],
						about: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/taxonomies/category"
							}
						],
						"wp:post_type": [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/posts?categories=5"
							}
						],
						curies: [
							{
								name: "wp",
								href: "https://api.w.org/{rel}",
								templated: true
							}
						]
					}
				}
			],
			[]
		]
	}
};

export let PostMockNoThumbs = {
	id: 29,
	date: "2016-05-09T20:28:55",
	date_gmt: "2016-05-09T20:28:55",
	guid: {
		rendered: "http://rafaelangeline.com/?p=29"
	},
	modified: "2016-05-09T20:32:21",
	modified_gmt: "2016-05-09T20:32:21",
	slug: "quickly-deploying-meteor-apps",
	status: "publish",
	type: "post",
	link: "https://rafaelangeline.com/quickly-deploying-meteor-apps/",
	title: {
		rendered: "Quickly Deploying Meteor Apps with Mupx"
	},
	content: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n<p>Running a Meteor app in a server requires a Node Server, a MongoDB instance, SSL support and a bunch of configuration/installation steps. Gladly, <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> created a tool that helps us to quickly deploy apps in any server instance.</p>\n<p>In the process, <a href=\"https://github.com/arunoda/meteor-up/tree/mupx\" target=\"_blank\">Meteor Up X</a> was the tool that actually worked properly and without creating trouble. It only requires the <em>mupx</em> NPM module installed globally, a <em>mup.json </em>configuring the deployment process, SSH server access and a couple commands in the line command.</p>\n<p>The instructions at <em>mupx </em>page are really clear, so there&#8217;s no need to rephrase the details again in this post. Just ensure to follow these tricks:</p>\n<h3>Use the Meteor Up X Branch</h3>\n<p>In the repository link I just placed above, ensure you install the <em>mupx </em>tool, not the <em>mup</em>, since isn&#8217;t the tool we&#8217;re covering here.</p>\n<p>I used the old tool and it didn&#8217;t work properly, so ensure to use the stable version.</p>\n<h3>The deployment is failing</h3>\n<p>If your server isn&#8217;t the strongest &#8211; in my case, I was using a really weak one &#8211; you should *really* increase the <em>deployCheckWaitTime</em> value in the <em>mup.json </em>file.</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id=\"crayon-5aef56d68f687544569948\" class=\"crayon-syntax crayon-theme-sublime-text crayon-font-monaco crayon-os-mac print-yes notranslate\" data-settings=\" minimize scroll-mouseover\" style=\" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;\">\r\n\t\t\r\n\t\t\t<div class=\"crayon-toolbar\" data-settings=\" mouseover overlay hide delay\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><span class=\"crayon-title\"></span>\r\n\t\t\t<div class=\"crayon-tools\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><div class=\"crayon-button crayon-nums-button\" title=\"Toggle Line Numbers\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-plain-button\" title=\"Toggle Plain Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-wrap-button\" title=\"Toggle Line Wrap\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-expand-button\" title=\"Expand Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-copy-button\" title=\"Copy\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-popup-button\" title=\"Open Code In New Window\"><div class=\"crayon-button-icon\"></div></div></div></div>\r\n\t\t\t<div class=\"crayon-info\" style=\"min-height: 16.8px !important; line-height: 16.8px !important;\"></div>\r\n\t\t\t<div class=\"crayon-plain-wrap\"><textarea wrap=\"soft\" class=\"crayon-plain print-no\" data-settings=\"dblclick\" readonly style=\"-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;\">\n\"deployCheckWaitTime\": 600,</textarea></div>\r\n\t\t\t<div class=\"crayon-main\" style=\"\">\r\n\t\t\t\t<table class=\"crayon-table\">\r\n\t\t\t\t\t<tr class=\"crayon-row\">\r\n\t\t\t\t<td class=\"crayon-nums \" data-settings=\"show\">\r\n\t\t\t\t\t<div class=\"crayon-nums-content\" style=\"font-size: 12px !important; line-height: 15px !important;\"><div class=\"crayon-num\" data-line=\"crayon-5aef56d68f687544569948-1\">1</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"crayon-code\"><div class=\"crayon-pre\" style=\"font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;\"><div class=\"crayon-line\" id=\"crayon-5aef56d68f687544569948-1\"><span class=\"crayon-s\">\"deployCheckWaitTime\"</span><span class=\"crayon-o\">:</span><span class=\"crayon-h\"> </span><span class=\"crayon-cn\">600</span><span class=\"crayon-sy\">,</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0003 seconds] -->\r\n<p>I used 600 to make things to work properly, else the deployment process end up failing in the last steps.</p>\n<h3>How about the &#8220;premium&#8221; options?</h3>\n<p>If you don&#8217;t want to struggle with slower servers and a bit more complicated commands, you can checkout the more expensive options and host your app in Meteor&#8217;s creators Hosting solution &#8211; <em><a href=\"https://www.meteor.com/hosting\" target=\"_blank\">Galaxy</a>.</em> Besides, you&#8217;ll need a place to host your MongoDB server, I would recommend <em><a href=\"https://mlab.com\" target=\"_blank\">MLab</a></em> to the job.</p>\n<p>An extra, would be to monitor the application performance and errors, our friends at <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> offers exactly that!</p>\n",
		protected: false
	},
	excerpt: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
		protected: false
	},
	author: 1,
	featured_media: 41,
	comment_status: "open",
	ping_status: "open",
	sticky: false,
	template: "",
	format: "standard",
	meta: [],
	categories: [5],
	tags: [],
	_links: {
		self: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts/29"
			}
		],
		collection: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts"
			}
		],
		about: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/types/post"
			}
		],
		author: [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/users/1"
			}
		],
		replies: [
			{
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/comments?post=29"
			}
		],
		"version-history": [
			{
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/posts/29/revisions"
			}
		],
		"wp:featuredmedia": [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/media/41"
			}
		],
		"wp:attachment": [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/media?parent=29"
			}
		],
		"wp:term": [
			{
				taxonomy: "category",
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/categories?post=29"
			},
			{
				taxonomy: "post_tag",
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/tags?post=29"
			}
		],
		curies: [
			{
				name: "wp",
				href: "https://api.w.org/{rel}",
				templated: true
			}
		]
	},
	_embedded: {
		author: [
			{
				id: 1,
				name: "Rafael Angeline",
				url: "http://rafaelangeline.com",
				description: "",
				link: "https://rafaelangeline.com/author/rafaelangeline/",
				slug: "rafaelangeline",
				avatar_urls: {
					"24":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=24&d=mm&r=g",
					"48":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=48&d=mm&r=g",
					"96":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=96&d=mm&r=g"
				},
				_links: {
					self: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users/1"
						}
					],
					collection: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users"
						}
					]
				}
			}
		],
		"wp:featuredmedia": [],
		"wp:term": [
			[
				{
					id: 5,
					link: "https://rafaelangeline.com/category/meteor/",
					name: "Meteor",
					slug: "meteor",
					taxonomy: "category",
					_links: {
						self: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/categories/5"
							}
						],
						collection: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/categories"
							}
						],
						about: [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/taxonomies/category"
							}
						],
						"wp:post_type": [
							{
								href:
									"https://rafaelangeline.com/wp-json/wp/v2/posts?categories=5"
							}
						],
						curies: [
							{
								name: "wp",
								href: "https://api.w.org/{rel}",
								templated: true
							}
						]
					}
				}
			],
			[]
		]
	}
};

export let PostMockNoCats = {
	id: 29,
	date: "2016-05-09T20:28:55",
	date_gmt: "2016-05-09T20:28:55",
	guid: {
		rendered: "http://rafaelangeline.com/?p=29"
	},
	modified: "2016-05-09T20:32:21",
	modified_gmt: "2016-05-09T20:32:21",
	slug: "quickly-deploying-meteor-apps",
	status: "publish",
	type: "post",
	link: "https://rafaelangeline.com/quickly-deploying-meteor-apps/",
	title: {
		rendered: "Quickly Deploying Meteor Apps with Mupx"
	},
	content: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n<p>Running a Meteor app in a server requires a Node Server, a MongoDB instance, SSL support and a bunch of configuration/installation steps. Gladly, <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> created a tool that helps us to quickly deploy apps in any server instance.</p>\n<p>In the process, <a href=\"https://github.com/arunoda/meteor-up/tree/mupx\" target=\"_blank\">Meteor Up X</a> was the tool that actually worked properly and without creating trouble. It only requires the <em>mupx</em> NPM module installed globally, a <em>mup.json </em>configuring the deployment process, SSH server access and a couple commands in the line command.</p>\n<p>The instructions at <em>mupx </em>page are really clear, so there&#8217;s no need to rephrase the details again in this post. Just ensure to follow these tricks:</p>\n<h3>Use the Meteor Up X Branch</h3>\n<p>In the repository link I just placed above, ensure you install the <em>mupx </em>tool, not the <em>mup</em>, since isn&#8217;t the tool we&#8217;re covering here.</p>\n<p>I used the old tool and it didn&#8217;t work properly, so ensure to use the stable version.</p>\n<h3>The deployment is failing</h3>\n<p>If your server isn&#8217;t the strongest &#8211; in my case, I was using a really weak one &#8211; you should *really* increase the <em>deployCheckWaitTime</em> value in the <em>mup.json </em>file.</p><!-- Crayon Syntax Highlighter v_2.7.2_beta -->\r\n\r\n\t\t<div id=\"crayon-5aef56d68f687544569948\" class=\"crayon-syntax crayon-theme-sublime-text crayon-font-monaco crayon-os-mac print-yes notranslate\" data-settings=\" minimize scroll-mouseover\" style=\" margin-top: 12px; margin-bottom: 12px; font-size: 12px !important; line-height: 15px !important;\">\r\n\t\t\r\n\t\t\t<div class=\"crayon-toolbar\" data-settings=\" mouseover overlay hide delay\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><span class=\"crayon-title\"></span>\r\n\t\t\t<div class=\"crayon-tools\" style=\"font-size: 12px !important;height: 18px !important; line-height: 18px !important;\"><div class=\"crayon-button crayon-nums-button\" title=\"Toggle Line Numbers\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-plain-button\" title=\"Toggle Plain Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-wrap-button\" title=\"Toggle Line Wrap\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-expand-button\" title=\"Expand Code\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-copy-button\" title=\"Copy\"><div class=\"crayon-button-icon\"></div></div><div class=\"crayon-button crayon-popup-button\" title=\"Open Code In New Window\"><div class=\"crayon-button-icon\"></div></div></div></div>\r\n\t\t\t<div class=\"crayon-info\" style=\"min-height: 16.8px !important; line-height: 16.8px !important;\"></div>\r\n\t\t\t<div class=\"crayon-plain-wrap\"><textarea wrap=\"soft\" class=\"crayon-plain print-no\" data-settings=\"dblclick\" readonly style=\"-moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4; font-size: 12px !important; line-height: 15px !important;\">\n\"deployCheckWaitTime\": 600,</textarea></div>\r\n\t\t\t<div class=\"crayon-main\" style=\"\">\r\n\t\t\t\t<table class=\"crayon-table\">\r\n\t\t\t\t\t<tr class=\"crayon-row\">\r\n\t\t\t\t<td class=\"crayon-nums \" data-settings=\"show\">\r\n\t\t\t\t\t<div class=\"crayon-nums-content\" style=\"font-size: 12px !important; line-height: 15px !important;\"><div class=\"crayon-num\" data-line=\"crayon-5aef56d68f687544569948-1\">1</div></div>\r\n\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"crayon-code\"><div class=\"crayon-pre\" style=\"font-size: 12px !important; line-height: 15px !important; -moz-tab-size:4; -o-tab-size:4; -webkit-tab-size:4; tab-size:4;\"><div class=\"crayon-line\" id=\"crayon-5aef56d68f687544569948-1\"><span class=\"crayon-s\">\"deployCheckWaitTime\"</span><span class=\"crayon-o\">:</span><span class=\"crayon-h\"> </span><span class=\"crayon-cn\">600</span><span class=\"crayon-sy\">,</span></div></div></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n<!-- [Format Time: 0.0003 seconds] -->\r\n<p>I used 600 to make things to work properly, else the deployment process end up failing in the last steps.</p>\n<h3>How about the &#8220;premium&#8221; options?</h3>\n<p>If you don&#8217;t want to struggle with slower servers and a bit more complicated commands, you can checkout the more expensive options and host your app in Meteor&#8217;s creators Hosting solution &#8211; <em><a href=\"https://www.meteor.com/hosting\" target=\"_blank\">Galaxy</a>.</em> Besides, you&#8217;ll need a place to host your MongoDB server, I would recommend <em><a href=\"https://mlab.com\" target=\"_blank\">MLab</a></em> to the job.</p>\n<p>An extra, would be to monitor the application performance and errors, our friends at <a href=\"https://kadira.io\" target=\"_blank\"><em>Kadira</em></a> offers exactly that!</p>\n",
		protected: false
	},
	excerpt: {
		rendered:
			"<p>Meteor has great options to deployment already available, Galaxy for example, is the solution provided by Meteor&#8217;s creator.</p>\n<p>Sometimes, we need a cheaper option and that was my case, I had a Digital Ocean&#8217;s small instance &#8211; that costs around $5/month &#8211; and an small scale application.</p>\n",
		protected: false
	},
	author: 1,
	featured_media: 41,
	comment_status: "open",
	ping_status: "open",
	sticky: false,
	template: "",
	format: "standard",
	meta: [],
	categories: [5],
	tags: [],
	_links: {
		self: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts/29"
			}
		],
		collection: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/posts"
			}
		],
		about: [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/types/post"
			}
		],
		author: [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/users/1"
			}
		],
		replies: [
			{
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/comments?post=29"
			}
		],
		"version-history": [
			{
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/posts/29/revisions"
			}
		],
		"wp:featuredmedia": [
			{
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/media/41"
			}
		],
		"wp:attachment": [
			{
				href: "https://rafaelangeline.com/wp-json/wp/v2/media?parent=29"
			}
		],
		"wp:term": [
			{
				taxonomy: "category",
				embeddable: true,
				href:
					"https://rafaelangeline.com/wp-json/wp/v2/categories?post=29"
			},
			{
				taxonomy: "post_tag",
				embeddable: true,
				href: "https://rafaelangeline.com/wp-json/wp/v2/tags?post=29"
			}
		],
		curies: [
			{
				name: "wp",
				href: "https://api.w.org/{rel}",
				templated: true
			}
		]
	},
	_embedded: {
		author: [
			{
				id: 1,
				name: "Rafael Angeline",
				url: "http://rafaelangeline.com",
				description: "",
				link: "https://rafaelangeline.com/author/rafaelangeline/",
				slug: "rafaelangeline",
				avatar_urls: {
					"24":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=24&d=mm&r=g",
					"48":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=48&d=mm&r=g",
					"96":
						"https://secure.gravatar.com/avatar/e46779f2f8f6d90e86ca2c508e1dbf8c?s=96&d=mm&r=g"
				},
				_links: {
					self: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users/1"
						}
					],
					collection: [
						{
							href:
								"https://rafaelangeline.com/wp-json/wp/v2/users"
						}
					]
				}
			}
		],
		"wp:featuredmedia": [],
		"wp:term": []
	}
};
