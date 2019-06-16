import React from "react";
import Link from "next/link";

class Grid extends React.Component {
	render() {
		const { projects } = this.props;

		const items = projects.map((project, key) => {
			return (
				<Link href={"/project/" + project.slug} key={key}>
					<a className="project">
						<h1>
							<span /> {project.title.rendered}.
						</h1>
						<div
							className="excerpt"
							dangerouslySetInnerHTML={{
								__html: project.excerpt.rendered
							}}
						/>
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
						align-items: start;
						margin-bottom: 80px;
					}

					.project {
						display: grid;
						grid-template-columns: 1fr;
						grid-template-rows: auto;

						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";

						color: #555;
						text-decoration: none;
					}

					h1 {
						margin: 10px 0 5px;
						font-size: 32px;
						font-weight: 600;
						letter-spacing: 0.3px;
						display: flex;
						align-items: center;
					}

					h1 span {
						display: inline-block;
						background: #bbb;
						width: 30px;
						height: 30px;
						border-radius: 100%;
						margin-right: 15px;
						text-align: center;
						color: #333;
						justify-content: center;
						align-items: center;
						transition: background 200ms ease-in-out;
					}

					.project:hover h1 span {
						background: #3fc;
					}

					.excerpt {
						margin-left: 45px;
					}

					.project p {
						margin: 3px 0 0;
						font-size: 14px;
						line-height: 24px;
						color: #555;
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
