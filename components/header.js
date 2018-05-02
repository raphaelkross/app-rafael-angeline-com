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
				`}</style>
			</header>
		);
	}
}

export default Footer;
