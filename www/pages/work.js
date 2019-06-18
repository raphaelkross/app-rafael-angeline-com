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
			<Layout
				title={this.props.title}
				description="Checkout the work made by Rafael Angeline - including open-source projects, libraries and utilities. Besides, corporate projects are described in details."
			>
				<Section className="first" title="Showcase.">
					<Grid projects={this.props.projects} />
					<p>
						Most of the projects are protect against public divulgation, please send a message to<br /> know more about the enterprise projects, e.g.: Google, Uber and others.
					</p>
				</Section>
				<style jsx>{`
					p {
						text-align: center;
					}
				`}</style>
			</Layout>
		);
	}
}

export default Work;
