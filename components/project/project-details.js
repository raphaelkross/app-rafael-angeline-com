import React from "react";

import PropTypes from "prop-types";

class ProjectDetails extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="content project-details"
					dangerouslySetInnerHTML={{ __html: this.props.content }}
				/>
				<style jsx global>{`
					.content {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						background: #fff;
						padding: 45px 40px;
						width: 100%;
						box-sizing: border-box;

						margin: 0;
						font-size: 14px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}

					.content a {
						color: #777;
						text-decoration: underline;
						padding: 2px 0 2px 0;
					}

					.content a:hover,
					.content a:active,
					.content a:focus {
						text-decoration: none;
						background: #3fc;
						color: #333;
					}

					.content p {
						margin: 0 0 20px;
					}

					.wp-caption {
						max-width: 100%;
					}

					.content img {
						max-width: 100%;
						height: auto;
					}

					.content p:last-child {
						margin: 0;
					}

					.content .alignleft {
						float: left;
						margin: 0 15px 20px 0;
					}

					.content .aligncenter {
						display: block;
						margin: 0 auto 20px auto;
					}

					.content .alignright {
						float: right;
						margin: 0 0 20px 15px;
					}

					.content .alignnone {
						float: none;
						display: block;
						margin: 0 0 20px 0;
					}

					.content .size-full {
						width: 100%;
						height: auto;
						margin: 0 0 20px 0;
					}

					.content p .alignleft {
						float: left;
						margin: 5px 15px 20px 0;
					}

					.content p .aligncenter {
						display: block;
						margin: 5px auto 20px auto;
					}

					.content p .alignright {
						float: right;
						margin: 5px 0 20px 15px;
					}

					.content p .alignnone {
						float: none;
						display: block;
						margin: 5px 0 20px 0;
					}

					.content p .size-full {
						width: 100%;
						height: auto;
						margin: 5px 0 20px 0;
					}

					.content .wp-caption-text {
						font-style: italic;
					}

					.content ol,
					.content ul {
						margin: 0 0 20px 0;
						padding: 0 0 0 15px;
					}

					.content ul {
						list-style: square;
					}

					.content blockquote {
						font-family: Georgia, "Times New Roman", serif;
						font-size: 16px;
						line-height: 1.6;
						font-style: italic;
						margin: 0 0 20px;
						padding: 10px 20px;
						border-left: 3px solid #eee;
						letter-spacing: 0.1px;
					}

					.content h1,
					.content h2,
					.content h3,
					.content h4,
					.content h5,
					.content h6 {
						margin: 0 0 20px;
						line-height: 1.2;
						font-weight: 600;
						letter-spacing: 1px;
					}

					.content h1 {
						font-size: 40px;
					}

					.content h2 {
						font-size: 36px;
					}

					.content h3 {
						font-size: 30px;
					}

					.content h4 {
						font-size: 11px;
						text-transform: uppercase;
						color: #777;
						display: block;
						margin: 0 0 3px;
						letter-spacing: 1px;
						font-weight: 400;
					}

					.content h5 {
						font-size: 16px;
					}

					.content h6 {
						font-size: 14px;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

ProjectDetails.propTypes = {
	content: PropTypes.string.isRequired
};

export default ProjectDetails;
