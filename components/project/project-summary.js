import React from "react";

import PropTypes from "prop-types";

class ProjectSummary extends React.Component {
	render() {
		const { title, date, stack, link } = this.props;
		return (
			<aside className="project-summary">
				<div className="project-summary-inner">
					<label htmlFor="project-title">Project</label>
					<h1 id="project-title">{title}</h1>
					<dl>
						<dt>Date:</dt>
						<dd className="date">{date}</dd>
						<dt>Stack:</dt>
						<dd className="stack">{stack}</dd>
					</dl>
					<a href={link} target="_blank" className="btn">
						Check the Project
					</a>
				</div>
				<style jsx>{`
					aside {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						padding: 0 0 45px;
						margin: 45px 0;
					}

					@media (min-width: 780px) {
						aside {
							margin-top: 0;
						}
					}

					.project-summary-inner {
						padding: 28px 25px;
    					background: #f1f1f1;
					}

					label {
						font-size: 11px;
						text-transform: uppercase;
						color: #777;
						display: block;
						margin: 0 0 3px;
						letter-spacing: 1px;
					}

					h1 {
						color: #777;
						font-size: 22px;
						font-weight: 600;
						margin: 0 0 10px 0;
						letter-spacing: 0.8px;
					}

					dl {
						list-style: none;
						padding: 0;
						margin: 0 0 30px;
						display: grid;
						grid-template-columns: auto auto;
						align-items: stretch;
					}

					dt,
					dd {
						margin: 0;
						padding: 15px 0;
						font-size: 15px;
						line-height: 21px;
						letter-spacing: 0.3px;
						color: #777;
						border-bottom: solid 1px #ddd;
						box-shadow: 0 1px 0 #fff;
					}

					dt {
						font-weight: 600;
					}

					dd {
						padding-left: 10px;
						padding-right: 10px;
					}

					.btn {
						display: block;
						text-align: center;
						padding: 14px 5px;
						color: #777;
						text-transform: uppercase;
						font-weight: 600;
						font-size: 13px;
						border: 2px solid #aaa;
						text-decoration: none;
						letter-spacing: 0.5px;
						transition: all 400ms ease-in-out;
					}

					.btn:hover,
					.btn:focus {
						text-decoration: none;
						border-color: #3fc;
						background-color: #3fc;
						color: #333;
					}
				`}</style>
			</aside>
		);
	}
}

ProjectSummary.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	stack: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired
};

export default ProjectSummary;
