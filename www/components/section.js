import React from "react";

class Section extends React.Component {
	render() {
		return (
			<section className={this.props.className}>
				<div className="container">
					{this.props.title ? (
						<h1 className="page-title">{this.props.title}</h1>
					) : null}

					{this.props.children}
				</div>

				<style jsx>{`
					section {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						padding: 60px 0 60px;
						background: #eee;
						color: #777;
					}

					section.first {
						padding-top: 160px;
						padding-bottom: 80px;
					}

					section.white {
						background: #fff;
					}

					:global(section.white + section.white) {
						border-top: 1px solid #eee;
					}

					.page-title {
						margin: 0 0 60px 0;
						color: #555;
						letter-spacing: -1px;
						font-size: 80px;
						font-weight: bold;
						line-height: 1;
					}

					@media (max-width: 900px) {
						.page-title {
							font-size: 60px;
						}
					}

					@media (max-width: 460px) {
						.page-title {
							font-size: 40px;
						}
					}

					@media (max-width: 320px) {
						.page-title {
							font-size: 24px;
						}
					}

					section :global(p) {
						font-size: 14px;
						line-height: 24px;
						letter-spacing: 0.3px;
						color: #777;
					}
				`}</style>
			</section>
		);
	}
}

export default Section;
