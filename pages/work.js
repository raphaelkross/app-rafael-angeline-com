import React from "react";
import Layout from "../components/layout";
import Section from "../components/section";
import Grid from "../components/work/grid";
import ProjectsList from "../lib/projects-list";

class Work extends React.Component {
	render() {
		return (
			<Layout title="Work - Rafael Angeline">
				<Section className="first">
					<Grid projects={ProjectsList} />
				</Section>
			</Layout>
		);
	}
}

export default Work;
