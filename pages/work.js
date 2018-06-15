import React from "react";
import API from "../lib/api";
import Layout from "../components/layout";
import Section from "../components/section";
import Grid from "../components/work/grid";

class Work extends React.Component {
	static async getInitialProps() {
		const projects = await API.getProjects();

		return {
			title: "Work - Rafael Angeline",
			projects: projects
		};
	}

	render() {
		return (
			<Layout title={this.props.title}>
				<Section className="first">
					<Grid projects={this.props.projects} />
				</Section>
			</Layout>
		);
	}
}

export default Work;
