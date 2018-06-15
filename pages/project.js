import React from "react";
import API from "../lib/api";
import ProjectLayout from "../components/project/project";

class Project extends React.Component {
	static async getInitialProps(props) {
		// Get params.
		const { query } = props;
		let { slug } = query;

		const project = await API.getProject(slug);

		return {
			title: project.title.rendered + " - Rafael Angeline",
			content: project.content.rendered,
			summary: {
				title: project.title.rendered,
				date: project.acf.date,
				stack: project.acf.stack,
				link: project.acf.link
			}
		};
	}

	render() {
		return (
			<ProjectLayout
				title={this.props.title}
				content={this.props.content}
				summary={this.props.summary}
			/>
		);
	}
}

export default Project;
