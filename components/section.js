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
						margin: 0 0 45px 0;
						text-transform: uppercase;
						font-size: 11px;
						color: #555;
						letter-spacing: 0.3px;
					}

					section :global(p) {
						font-size: 11px;
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
