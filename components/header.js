import React from "react";

class Footer extends React.Component {
	returnUl(items) {
		return (
			<ul>
				{items.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.href}>
								<span>{item.label}</span>
							</a>
							{item.children
								? this.returnUl(item.children)
								: null}
						</li>
					);
				})}
			</ul>
		);
	}

	render() {
		return (
			<header>
				<div className="container">
					<nav>
						{this.props.items
							? this.returnUl(this.props.items)
							: null}
					</nav>
					<div className="responsive-trigger">
						<a className="responsive-trigger-link" href="#">
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
								className="feather feather-menu"
							>
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</a>
					</div>
				</div>

				<style jsx global>{`
					header {
						background: #222;
						font-family: -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Helvetica, Arial, sans-serif,
							"Apple Color Emoji", "Segoe UI Emoji",
							"Segoe UI Symbol";
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
					}

					header .container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					header nav {
						flex-grow: 1;
					}

					header .responsive-trigger {
						margin-left: 10px;
						flex-grow: 0;
						flex-shrink: 1;
						display: none;
					}

					header .responsive-trigger-link {
						padding: 20px 10px;
						margin: 0;
					}

					header ul {
						display: flex;
						padding: 12px 0;
						margin: 0;
						list-style: none;
					}

					header li {
						position: relative;
					}

					header li > ul {
						display: none;
						position: absolute;
						top: 100%;
						left: -10px;
						width: 120px;
						background: #222;
						padding: 10px 20px;
					}

					header li > ul a {
						padding: 10px 0;
						margin: 0;
						display: block;
					}

					header li:hover > ul {
						display: block;
					}

					header a {
						display: inline-block;
						padding: 20px 10px;
						margin-right: 25px;
						font-size: 14px;
						color: #999;
						text-decoration: none;
					}

					header a span {
						padding: 1px;
					}

					header a:hover span,
					header a:active span,
					header a:focus span {
						background: #3fc;
						color: #222;
					}

					header li:last-child a {
						margin-right: 0;
					}

					@media (max-width: 700px) {
						header .container {
							justify-content: flex-end;
						}

						header nav {
							display: none;
						}

						header .responsive-trigger {
							display: block;
						}
					}
				`}</style>
			</header>
		);
	}
}

export default Footer;
