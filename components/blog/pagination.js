import React from "react";
import Link from "next/link";

import paginateLinks from "../../lib/paginate-links";

class Pagination extends React.Component {
	render() {
		const { current, pages } = this.props;

		const paginateArgs = {
			current: current,
			pages: pages,
			endSize: 1,
			midSize: 2
		};

		const links = paginateLinks(paginateArgs);

		// Do not render, when there's no pages to paginate.
		if (pages <= 0) {
			return null;
		}

		return (
			<nav>
				<div className="page-numbers">
					{links.map((item, index) => {
						const { link, label, page, current } = item;

						if (link) {
							return (
								<Link key={index} href={"/blog/" + page}>
									<a>{label}</a>
								</Link>
							);
						} else {
							return (
								<span
									key={index}
									className={current ? "current" : ""}
								>
									{label}
								</span>
							);
						}
					})}
				</div>
				<div className="page-arrows">
					{current > 1 ? (
						<Link href={"/blog/" + (current - 1)}>
							<a className="page-arrows-left">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-chevron-left"
								>
									<polyline points="15 18 9 12 15 6" />
								</svg>
							</a>
						</Link>
					) : null}
					{current < pages ? (
						<Link href={"/blog/" + (current + 1)}>
							<a className="page-arrows-right">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-chevron-right"
								>
									<polyline points="9 18 15 12 9 6" />
								</svg>
							</a>
						</Link>
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

					@media only screen and (max-width: 600px) {
						nav {
							flex-wrap: wrap;
						}

						.page-numbers {
							display: none;
						}

						.page-arrows {
							flex-basis: 100%;
							width: 100%;
							display: flex;
							justify-content: space-between;
						}
					}
				`}</style>
			</nav>
		);
	}
}

export default Pagination;
