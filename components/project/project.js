import React from "react";

import Layout from "../layout";
import ProjectDetails from "./project-details";
import ProjectSummary from "./project-summary";

import PropTypes from "prop-types";

class Project extends React.Component {
	render() {
		const { title, content, summary, description } = this.props;

		return (
			<Layout title={title} description={description}>
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

					@media (max-width: 900px) {
						.container {
							grid-template-columns: auto 190px;
						}
					}

					@media (max-width: 480px) {
						.container {
							grid-template-columns: auto;
							align-items: start;
							gap: 0;
						}

						.container > :global(aside) {
							grid-row-start: 1;
							padding: 0;
						}

						.container > :global(div) {
							grid-row-start: 2;
						}
					}
				`}</style>
			</Layout>
		);
	}
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	content: PropTypes.string.isRequired,
	summary: PropTypes.object.isRequired
};

export default Project;
