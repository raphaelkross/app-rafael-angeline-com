import React from "react";

import Layout from "../layout";
import ProjectDetails from "./project-details";
import ProjectSummary from "./project-summary";

import PropTypes from "prop-types";

class Project extends React.Component {
	render() {
		const { title, content, summary } = this.props;

		return (
			<Layout title={title}>
				<main>
					<div className="container">
						<ProjectDetails content={content} />
						<ProjectSummary {...summary} />
					</div>
				</main>
				<style jsx>{`
					main {
						background: #eee;
						padding: 170px 0 90px 0;
					}

					.container {
						display: grid;
						grid-template-columns: auto 240px;
						gap: 40px;
					}

					@media (max-width: 700px) {
						main {
							padding: 120px 0 90px;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	summary: PropTypes.object.isRequired
};

export default Project;
