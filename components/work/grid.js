import React from "react";
import { Link } from "../../routes";

class Grid extends React.Component {
	render() {
		const { projects } = this.props;

		const items = projects.map((project, key) => {
			return (
				<Link route={"/project/" + project.slug} key={key}>
					<a className="project">
						<div
							className="project-image"
							style={{
								backgroundImage:
									"url(" +
									project._embedded["wp:featuredmedia"][0]
										.source_url +
									")"
							}}
						/>
						<div className="project-meta">
							<h1>{project.title.rendered}</h1>
							<div
								className="excerpt"
								dangerouslySetInnerHTML={{
									__html: project.excerpt.rendered
								}}
							/>
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
						grid-template-columns: 1fr 1fr;
						grid-template-rows: auto auto;
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
						font-size: 16px;
						font-weight: 600;
						letter-spacing: 0.3px;
					}

					.project p {
						margin: 3px 0 0;
						font-size: 14px;
						line-height: 24px;
						color: #999;
					}

					@media (max-width: 900px) {
						.projects {
							grid-template-columns: 1fr 1fr;
						}

						.project {
							margin-bottom: 15px;
						}
					}

					@media (max-width: 460px) {
						.projects {
							grid-template-columns: 1fr;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Grid;
