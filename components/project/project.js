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
						background: #fff;
						padding: 170px 0 90px 0;
					}

					.container {
						display: grid;
						grid-template-columns: auto 290px;
						gap: 50px;
					}

					@media (max-width: 768px) {
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
	description: PropTypes.string,
	content: PropTypes.string.isRequired,
	summary: PropTypes.object.isRequired
};

export default Project;
