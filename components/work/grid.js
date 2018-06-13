import React from "react";
import Config from "../../lib/config";
import { Link } from "../../routes";

class Grid extends React.Component {
	render() {
		const { projects } = this.props;

		const items = projects.map((project, key) => {
			return (
				<Link route={Config.home + "project/" + project.slug} key={key}>
					<a className="project">
						<div
							className="project-image"
							style={{
								backgroundImage:
									"url(" + project.thumbnail + ")"
							}}
						/>
						<div className="project-meta">
							<h1>{project.title}</h1>
							<p>{project.description}</p>
						</div>
					</a>
				</Link>
			);
		});

		return (
			<div className="projects">
				{items}
				<style jsx global>{`
					.projects {
						display: grid;
						gap: 30px;
						grid-template-columns: 1fr 1fr 1fr 1fr;
						grid-template-rows: auto auto;
					}

					.project:nth-child(1) {
						grid-column-start: 1;
						grid-column-end: 4;
					}

					.project:nth-child(3) {
						grid-column-start: 1;
						grid-column-end: 3;
					}

					.project:nth-child(4) {
						grid-column-start: 3;
						grid-column-end: 5;
					}

					.project {
						display: grid;
						background: #fff;
						grid-template-columns: 1fr;
						grid-template-rows: 300px auto;
						padding: 10px;

						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";

						color: #777;
						text-decoration: none;
					}

					.project-image {
						background-color: #777;
						background-size: cover;
						background-repeat: no-repeat;
						background-position: center;
					}

					h1 {
						margin: 10px 0 0px;
						font-size: 13px;
						text-transform: uppercase;
						font-weight: 600;
						letter-spacing: 0.3px;
					}

					.project p {
						margin: 0;
						font-size: 11px;
						color: #999;
					}
				`}</style>
			</div>
		);
	}
}

export default Grid;
