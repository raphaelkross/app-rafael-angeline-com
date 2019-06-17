import React from "react";
import API from "../lib/api";
import ProjectLayout from "../components/project/project";

class Project extends React.Component {
	static async getInitialProps(props) {
		// Get params.
		const { query } = props;
		let { slug } = query;

		const project = await API.getProject(slug);

		return project;
	}

	render() {
		return (
			<ProjectLayout
				title={this.props.title}
				description={this.props.description}
				content={this.props.content}
				summary={this.props.summary}
			/>
		);
	}
}

export default Project;
