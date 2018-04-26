import React from "react";

class Pagination extends React.Component {
	render() {
		const { current, pages } = this.props;

		// Do not render, when there's no pages to paginate.
		if (pages <= 0) {
			return null;
		}

		return (
			<nav>
				<div className="page-numbers">
					<span className="current">{current}</span>
					<a href="#">2</a>
					<a href="#">3</a>
					<span>...</span>
					<a href="#">8</a>
				</div>
				<div className="page-arrows">
					{current > 1 ? (
						<a href="#" className="page-arrows-left">
							Left
						</a>
					) : null}
					{current < pages ? (
						<a href="#" className="page-arrows-right">
							Right
						</a>
					) : null}
				</div>

				<style jsx>{`
					nav {
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						display: flex;
						justify-content: space-between;
						align-items: center;
						background: #ddd;
						padding: 20px;
					}

					span,
					a {
						margin-right: 10px;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						height: 30px;
						width: 30px;
						background: #fff;
						color: #999;
						font-size: 11px;
						text-decoration: none;
						border-radius: 2px;
					}

					.current,
					a:hover,
					a:active,
					a:focus {
						color: #333;
					}

					span:last-child,
					a:last-child {
						margin-right: 0;
					}
				`}</style>
			</nav>
		);
	}
}

export default Pagination;
